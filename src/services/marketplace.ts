import type { VerificationDecision } from '../domain';
import { ServiceError } from './contracts';
import { createHttpClient } from './http';

interface MarketplaceVerification {
  decision: VerificationDecision | null;
}

export interface MarketplaceService {
  getSellerContext(signal?: AbortSignal): Promise<MarketplaceSellerContext | null>;
  verifyBeforePublish(image: File, signal?: AbortSignal): Promise<MarketplaceVerification>;
}

export interface MarketplaceSellerContext {
  productTitle?: string;
}

function decodeSellerContext(body: unknown): MarketplaceSellerContext | null {
  if (typeof body !== 'object' || body === null || !('authenticated' in body) || typeof body.authenticated !== 'boolean') {
    throw new ServiceError('unavailable');
  }
  if (!body.authenticated) return null;
  if ('productTitle' in body && typeof body.productTitle === 'string') return { productTitle: body.productTitle };
  return {};
}

function decodeResult(body: unknown): MarketplaceVerification {
  if (typeof body !== 'object' || body === null || !('decision' in body)) throw new ServiceError('unavailable');
  const { decision } = body;
  if (decision === 'allow' || decision === 'review' || decision === 'hold_for_review' || decision === null) return { decision };
  throw new ServiceError('unavailable');
}

export function createMarketplaceHttpService(endpoint: URL, contextEndpoint?: URL): MarketplaceService {
  const request = createHttpClient(endpoint);
  return {
    async getSellerContext(signal) {
      if (!contextEndpoint) {
        // Embedded marketplaces can establish the session before navigation.
        // The analysis endpoint must still verify the session on every upload.
        return {};
      }
      try {
        return await request(contextEndpoint.href, decodeSellerContext, { signal });
      } catch (error) {
        if (error instanceof ServiceError && error.kind === 'expired') return null;
        throw error;
      }
    },
    verifyBeforePublish(image, signal) {
      const body = new FormData();
      body.append('image', image);
      // The marketplace gateway resolves seller identity from its authenticated session.
      return request(endpoint.href, decodeResult, { method: 'POST', body, signal });
    },
  };
}

export function createMarketplaceMockService(loadDecision: () => Promise<MarketplaceVerification>): MarketplaceService {
  return { async getSellerContext() { return {}; }, verifyBeforePublish: loadDecision };
}
