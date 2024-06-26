import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { title } from "process";
import { FunctionComponent, ReactElement } from "react";

interface Props {
  ClerkModule: React.ElementType;
  title: string;
  description: string;
}

export default function AuthClerkSection({
  title,
  description,
  ClerkModule,
}: Props) {
  return (
    <section className="text-center  flex flex-col justify-center items-center ">
      <div className="mb-4 w-fit">
        <h1 className="text-center font-bold text-3xl text-[#2e2a47] grid-template">
          {title}
        </h1>

        <p className="text-base text-[#7E8CA0]">{description}</p>
      </div>

      <ClerkLoaded>
        <ClerkModule />
      </ClerkLoaded>

      <ClerkLoading>
        <Loader2 className="animate-spin" />
      </ClerkLoading>
    </section>
  );
}
