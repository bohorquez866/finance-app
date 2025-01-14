import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { request } from "http";
import { NextRequest, NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/"]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();

  return NextResponse.next();
});
