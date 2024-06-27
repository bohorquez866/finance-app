import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  path: string;
  label: string;
  isActive?: boolean;
}

export default function NavButton({ label, path, isActive }: Props) {
  return (
    <Button asChild variant={"outline"} className="">
      <Link
        className={cn(
          "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
          isActive ? "bg-white/10 text-white" : "bg-transparent"
        )}
        href={path}
      >
        {label}
      </Link>
    </Button>
  );
}
