import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

mongoose.connect(process.env.MONGODB_URI, {
  dbName: "blog",
  autoCreate: true,
});

const viewCountSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  views: { type: Number, default: 0 },
});

let ViewCount: mongoose.Model<{ slug: string; views: number }> | undefined;
if (mongoose.models.ViewCount) {
  ViewCount = mongoose.models.ViewCount;
} else {
  ViewCount = mongoose.model("ViewCount", viewCountSchema);
}

type DynamicParams = { params: { slug: string } };

export async function GET(_: NextRequest, { params }: DynamicParams) {
  try {
    const slug = params.slug;
    console.log("GET /blog/api/views/[slug]", slug);

    const viewCount = await ViewCount?.findOne({ slug });
    const views = viewCount ? viewCount.views : 0;

    console.log(`GET /blog/api/views/${slug} - ${views} views`);

    return NextResponse.json({ views }, { status: 200 });
  } catch (error) {
    console.error("Error fetching views:", error);
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}

export async function POST(_: NextRequest, { params }: DynamicParams) {
  try {
    const slug = params.slug;

    const viewCount = await ViewCount?.findOneAndUpdate(
      { slug },
      { $inc: { views: 1 } },
      { new: true, upsert: true },
    );
    const views = viewCount?.views;

    console.log(`POST /blog/api/views/${slug} - ${views} views`);

    return NextResponse.json({ views }, { status: 200 });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });
  return response;
}
