import { z } from "zod";

// Step 1: User Details
export const signupStep1Schema = z.object({
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
export type SignupStep1Data = z.infer<typeof signupStep1Schema>;

// Step 2: OTP Verification
export const signupStep2Schema = z.object({
    otp: z.string().length(6, "OTP must be 6 characters"),
});
export type SignupStep2Data = z.infer<typeof signupStep2Schema>;

// Step 3: Workspace creation
export const signupStep3Schema = z.object({
    workspace: z.string().min(1, "Workspace name is required"),
});
export type SignupStep3Data = z.infer<typeof signupStep3Schema>;


