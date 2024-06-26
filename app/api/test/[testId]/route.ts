import { NextRequest, NextResponse } from "next/server";

interface Test {
  params: {
    testId: string;
  };
}

export const GET = (request: NextRequest, { params }: Test) => {
  return NextResponse.json({ message: "Hello, World!", testId: params.testId });
};
