"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupStep1Schema, SignupStep1Data } from "@/lib/validations/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignup } from "@/hooks/use-signup-context";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
// import { cn } from "@/lib/utils";
import { UserRound, Mail, Users, Rocket } from "lucide-react";

export default function Step1() {
  const { onNext } = useSignup();

  const form = useForm<SignupStep1Data>({
    resolver: zodResolver(signupStep1Schema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupStep1Data) => {
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
                  <p className="font-bold text-black">Your Details</p>
                  <p className="text-xs text-gray-500">
                    Provide name, email and password
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <p className="font-normal text-gray-700">Verify email</p>
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
                Begin the Journey to your Portal!
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Best tool for business management
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full mb-4 flex items-center justify-center gap-2 border border-gray-300"
            >
              <FcGoogle size={20} />
              Sign up with Google
            </Button>

            <div className="flex items-center justify-center mb-4">
              <span className="h-px w-full bg-gray-300" />
              <span className="px-4 text-sm text-muted-foreground">OR</span>
              <span className="h-px w-full bg-gray-300" />
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <label className="text-sm font-medium">Full Name</label>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label className="text-sm font-medium">Email</label>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <label className="text-sm font-medium">Password</label>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <label className="text-sm font-medium">
                        Confirm Password
                      </label>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Confirm password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#009ea1] hover:bg-[#007f82] text-white"
                >
                  Continue
                </Button>
              </form>
            </Form>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By clicking on sign up, you agree to Portal{" "}
              <span className="underline cursor-pointer">Terms of Service</span>{" "}
              and{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>
            </p>

            {/* Progress bar */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <div className="w-12 h-1 rounded-full bg-[#009ea1]" />
              <div className="w-12 h-1 rounded-full bg-gray-300" />
              <div className="w-12 h-1 rounded-full bg-gray-300" />
              <div className="w-12 h-1 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
