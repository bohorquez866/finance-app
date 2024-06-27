import AuthClerkSection from "@/components/Auth/AuthClerkSection";
import AuthWrapper from "@/components/Auth/AuthWrapper";
import LoginSideSection from "@/components/Auth/LoginSideSection";
import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <AuthWrapper>
      <AuthClerkSection
        title="Welcome Back!"
        description="Login or create an account"
        ClerkModule={() => <SignUp path="/sign-up" />}
      />

      <LoginSideSection />
    </AuthWrapper>
  );
}
