import { NextResponse } from "next/server";

const posts: any[] = [];

export async function GET() {
  return NextResponse.json(posts);
}
