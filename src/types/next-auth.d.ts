// types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string;
            email: string;
            role: 'FREELANCER' | 'CLIENT';
        };
    }

    interface User {
        id: string;
        name: string;
        email: string;
        role: 'FREELANCER' | 'CLIENT';
        passwordHash?: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        id: string;
        role: 'FREELANCER' | 'CLIENT';
    }
}
declare module 'next-auth/adapters' {
    import { PrismaAdapter } from '@next-auth/prisma-adapter';
    import { PrismaClient } from '@prisma/client';

    export const prisma: PrismaClient;
    export const adapter: PrismaAdapter;
}