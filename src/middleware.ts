import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const { nextUrl } = req;
        const token = req.nextauth.token;
        const userRole = token?.role;

        // Public routes that don't need authentication are handled by withAuth

        // If logged in and accessing login page, redirect to dashboard
        if (token && nextUrl.pathname === "/login") {
            return NextResponse.redirect(new URL("/dashboard", nextUrl));
        }

        // Role-based route protection
        if (token) {
            // Freelancer-only routes
            if (nextUrl.pathname.startsWith("/freelancer") && userRole !== "FREELANCER") {
                return NextResponse.redirect(new URL("/unauthorized", nextUrl));
            }

            // Client-only routes
            if (nextUrl.pathname.startsWith("/client") && userRole !== "CLIENT") {
                return NextResponse.redirect(new URL("/unauthorized", nextUrl));
            }
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                const { pathname } = req.nextUrl;

                // Public routes
                const publicRoutes = ["/", "/login", "/register"];
                if (publicRoutes.includes(pathname)) {
                    return true;
                }

                // Protected routes require authentication
                return !!token;
            },
        },
    }
);

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/projects/:path*",
        "/freelancer/:path*",
        "/client/:path*",
        "/login",
    ],
};