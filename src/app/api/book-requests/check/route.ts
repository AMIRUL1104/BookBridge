import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");
    const sellerId = searchParams.get("sellerId");
    const requesterId = searchParams.get("requesterId");

    if (!postId || !sellerId || !requesterId) {
      return NextResponse.json(
        { success: false, canRequest: false, reason: "already_requested" },
        { status: 400 },
      );
    }

    if (sellerId === requesterId) {
      return NextResponse.json(
        { success: true, canRequest: false, reason: "own_post" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      { success: true, canRequest: true, reason: undefined },
      { status: 200 },
    );
  } catch (error) {
    console.error("Book request check error:", error);
    return NextResponse.json(
      { success: false, canRequest: false, reason: "already_requested" },
      { status: 500 },
    );
  }
}
