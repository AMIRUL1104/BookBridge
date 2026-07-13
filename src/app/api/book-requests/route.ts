import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await request.json();

    if (!body?.postId || !body?.sellerId || !body?.requesterId) {
      return NextResponse.json(
        { success: false, message: "Missing required request fields" },
        { status: 400 },
      );
    }

    const payload = {
      ...body,
      _id: new ObjectId(),
      status: body.status || "pending",
      requestDate: new Date(),
      updatedAt: new Date(),
    };

    return NextResponse.json({
      success: true,
      message: "Book request created successfully",
      data: payload,
    });
  } catch (error) {
    console.error("Book request creation error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong while creating the request" },
      { status: 500 },
    );
  }
}
