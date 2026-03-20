/// <reference types="../worker-configuration.d.ts" />

declare global {
	namespace App {
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties;
		}

		interface Locals {
			user?: {
				id: string;
				name: string;
				email: string;
				emailVerified: boolean;
				image?: string | null;
				role?: string | null;
				createdAt: Date;
				updatedAt: Date;
			};
			session?: {
				id: string;
				userId: string;
				token: string;
				expiresAt: Date;
				createdAt: Date;
				updatedAt: Date;
			};
		}
	}
}

export {};
