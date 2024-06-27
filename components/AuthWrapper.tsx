import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: Props) {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
      {children}
    </main>
  );
}
