import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.post.findMany({});

    return NextResponse.json({ message: "Post Fetched Succesfully!", posts });
  } catch (error) {
    console.log("Error in Feed Route", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
