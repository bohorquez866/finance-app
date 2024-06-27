import Header from "@/components/navbar/Header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-4">{children}</main>
    </>
  );
}
