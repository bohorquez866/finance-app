import { UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" showName />
    </>
  );
}
