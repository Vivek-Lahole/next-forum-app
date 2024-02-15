import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/PrismaClient";
import { auth } from "@/auth";

export async function GET(req: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ message: "Unauthorised!" });
  }

  try {
    const posts = await prisma.post.findMany({});

    return NextResponse.json({ message: "Post Fetched Succesfully!", posts });
  } catch (error) {
    console.log("Error in Feed Route", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
