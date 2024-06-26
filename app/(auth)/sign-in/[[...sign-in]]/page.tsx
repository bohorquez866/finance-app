import AuthClerkSection from "@/components/AuthClerkSection";
import LoginSideSection from "@/components/LoginSideSection";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function SignInPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <AuthClerkSection
        title="Welcome Back!"
        description="Login or create an account"
        ClerkModule={() => <SignIn path="/sign-in" />}
      />

      <LoginSideSection />
    </main>
  );
}
