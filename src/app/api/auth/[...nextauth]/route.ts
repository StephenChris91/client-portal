// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // or wherever you keep it

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
