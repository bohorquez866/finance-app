import AuthClerkSection from "@/components/AuthClerkSection";
import AuthWrapper from "@/components/AuthWrapper";
import LoginSideSection from "@/components/LoginSideSection";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SignInPage() {
  return (
    <AuthWrapper>
      <AuthClerkSection
        title="Welcome Back!"
        description="Login or create an account"
        ClerkModule={() => <SignIn path="/sign-in" />}
      />

      <LoginSideSection />
    </AuthWrapper>
  );
}
