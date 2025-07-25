"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import LoginForm from "../LoginForm"; // This will be created next
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between max-w-7xl mx-auto">
      {/* Logo */}
      <div className="text-xl font-bold text-black">
        <span className="text-teal-600">Portal</span>CRM
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium hover:text-teal-600">
          Features
        </a>
        <a href="#faq" className="text-sm font-medium hover:text-teal-600">
          FAQ
        </a>
      </nav>

      {/* Login Button */}
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="text-teal-600 border-teal-600 hover:bg-teal-50 cursor-pointer rounded-sm"
      >
        Login
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm w-full">
          <DialogHeader>
            <DialogTitle className="text-center text-lg">
              Login to Portal
            </DialogTitle>
          </DialogHeader>

          <LoginForm />

          <p className="text-sm text-center text-muted-foreground mt-4">
            Dont have an account?{" "}
            <Link href="/signup" className="text-teal-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </DialogContent>
      </Dialog>
    </header>
  );
}
