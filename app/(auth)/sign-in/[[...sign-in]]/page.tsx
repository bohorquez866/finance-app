import AuthClerkSection from "@/components/Auth/AuthClerkSection";
import AuthWrapper from "@/components/Auth/AuthWrapper";
import LoginSideSection from "@/components/Auth/LoginSideSection";
import { SignIn } from "@clerk/nextjs";

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
