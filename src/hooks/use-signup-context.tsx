// use-signup-context.tsx
import { createContext, useContext, useState } from "react";

export type SignupData = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  otp?: string;
  workspace?: string;
};

type SignupContextType = {
  step: number;
  setStep: (step: number) => void;
  email?: string;
  data: SignupData;
  updateData: (values: Partial<SignupData>) => void;
  onNext: (values: Partial<SignupData>) => void;
};

const SignupContext = createContext<SignupContextType | undefined>(undefined);

export const SignupProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<SignupData>({});

  const updateData = (values: Partial<SignupData>) => {
    setData((prev) => ({ ...prev, ...values }));
  };

  const onNext = (values: Partial<SignupData>) => {
    updateData(values);
    setStep((prev) => prev + 1); // ✅ Advance to the next step
  };

  return (
    <SignupContext.Provider value={{ step, setStep, data, updateData, onNext }}>
      {children}
    </SignupContext.Provider>
  );
};

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (!context) {
    throw new Error("useSignup must be used within a SignupProvider");
  }
  return context;
};
