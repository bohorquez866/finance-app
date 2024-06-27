"use client";

import NavButton from "./NavButton";
import { useMedia } from "react-use";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const routes = [
  { label: "Dashboard", path: "/" },
  { label: "Transactions", path: "/transactions" },
  { label: "Accounts", path: "/accounts" },
  { label: "Categories", path: "/categories" },
  { label: "Settings", path: "/settings" },
];

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>

        <SheetContent side={"left"} className="bg-white">
          <nav className="flex flex-col gap-y-2">
            {routes.map((route) => (
              <Button
                key={route.path}
                variant={"destructive"}
                className="w-full justify-start"
                onClick={() => onClick(route.path)}
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.path}
          path={route.path}
          label={route.label}
          isActive={pathname === route.path}
        />
      ))}
    </nav>
  );
}
