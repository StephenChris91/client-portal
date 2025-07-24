"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/dashboard" });
    setLoading(false);
  };

  const handleCredentialsSignIn = async () => {
    setLoading(true);
    await signIn("credentials", {
      email: "test@example.com",
      password: "your-password",
      callbackUrl: "/dashboard",
    });
    setLoading(false);
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xs shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Sign In
        </h1>

        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in with Google"}
          </Button>

          <Button
            className="w-full"
            onClick={handleCredentialsSignIn}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in with Credentials"}
          </Button>
        </div>
      </div>
    </main>
  );
}
