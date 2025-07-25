"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupStep2Schema, SignupStep2Data } from "@/lib/validations/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSignup } from "@/hooks/use-signup-context";
import Link from "next/link";
import { UserRound, Mail, Users, Rocket } from "lucide-react";

export default function Step2() {
  const { onNext, email } = useSignup();

  const form = useForm<SignupStep2Data>({
    resolver: zodResolver(signupStep2Schema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (data: SignupStep2Data) => {
    onNext(data);
  };

  return (
    <section className="min-h-screen w-full bg-muted flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-sm">
        {/* Left Progress Section */}
        <div className="hidden md:flex flex-col justify-between px-8 py-10 bg-[#f7f7f7] border-r border-dashed border-gray-300">
          <div>
            <h1 className="text-lg font-bold text-[#009ea1]">Portal</h1>

            <div className="mt-10 space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <UserRound className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-normal text-gray-700">Your Details</p>
                  <p className="text-xs text-gray-500">
                    Provide name, email and password
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-bold text-black">Verify email</p>
                  <p className="text-xs text-gray-500">
                    Enter your verification code
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-normal text-gray-700">Your workspace</p>
                  <p className="text-xs text-gray-500">
                    Create your workspace today
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Rocket className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-normal text-gray-700">
                    Welcome to NovaCRM
                  </p>
                  <p className="text-xs text-gray-500">
                    Get up and running in 2 minutes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground flex justify-between w-full pt-10">
            <Link href="/" className="hover:underline">
              Back to Home
            </Link>
            <Link href="/signin" className="hover:underline">
              Signin
            </Link>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center items-center px-6 py-10 md:px-12">
          <div className="w-full max-w-md mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                Verify Your Email
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                We sent a code to <span className="font-medium">{email}</span>
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          className="text-center tracking-[0.3em] text-lg font-medium border-2 border-[#009ea1] w-full py-3"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="text-sm text-muted-foreground text-center">
                  Didnt get code?{" "}
                  <span className="text-[#009ea1] font-medium cursor-pointer">
                    Click to resend
                  </span>
                </p>

                <Button
                  type="submit"
                  className="w-full bg-[#009ea1] hover:bg-[#007f82] text-white"
                >
                  Continue
                </Button>
              </form>
            </Form>

            {/* Progress bar */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-12 h-1 rounded-full bg-[#009ea1]" />
              <div className="w-12 h-1 rounded-full bg-[#009ea1]" />
              <div className="w-12 h-1 rounded-full bg-gray-300" />
              <div className="w-12 h-1 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
