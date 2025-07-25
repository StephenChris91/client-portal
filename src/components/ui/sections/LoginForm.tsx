"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // For Google's actual logo

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Call credentials login flow
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard", // Or wherever you want to redirect
    });
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="space-y-6">
      {/* Google Sign-In */}
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2 cursor-pointer"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className="w-5 h-5" />
        Sign in with Google
      </Button>

      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-1/4 bg-muted" />
        <span className="text-xs text-muted-foreground">OR</span>
        <div className="h-px w-1/4 bg-muted" />
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
          <LogIn className="w-4 h-4 mr-2" />
          Login
        </Button>
      </form>
    </div>
  );
}
