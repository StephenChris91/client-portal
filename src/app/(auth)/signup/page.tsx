// app/signup/page.tsx

"use client";

import SignUpWrapper from "@/components/ui/multistepform/SignUpWrapper";
import { SignupProvider } from "@/hooks/use-signup-context";

export default function SignUpPage() {
  return (
    <SignupProvider>
      <SignUpWrapper />
    </SignupProvider>
  );
}
