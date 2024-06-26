import AuthClerkSection from "@/components/AuthClerkSection";
import LoginSideSection from "@/components/LoginSideSection";
import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <AuthClerkSection
        title="Welcome Back!"
        description="Login or create an account"
        ClerkModule={() => <SignUp path="/sign-up" />}
      />

      <LoginSideSection />
    </main>
  );
}
