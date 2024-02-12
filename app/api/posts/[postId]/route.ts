import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { postId: string } }
) {
  return NextResponse.json({
    message: `Requested Post with Id ${params.postId}`,
  });
}
