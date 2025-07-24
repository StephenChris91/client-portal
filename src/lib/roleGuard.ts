import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function requireRole(role: "FREELANCER" | "CLIENT") {
    const session = await auth();

    if (!session?.user) redirect("/login");

    if (session.user.role !== role) redirect("/unauthorized");

    return session.user;
}
