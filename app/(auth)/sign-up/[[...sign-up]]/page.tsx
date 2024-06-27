import AuthClerkSection from "@/components/AuthClerkSection";
import AuthWrapper from "@/components/AuthWrapper";
import LoginSideSection from "@/components/LoginSideSection";
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
