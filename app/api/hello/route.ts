import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request: Request) {
  const data = await request.json();
  const { action } = data;
  return NextResponse.json({
    message: `Action received: ${action}`,
    data: { ...data, timestamp: new Date().toISOString() },
  });
}
