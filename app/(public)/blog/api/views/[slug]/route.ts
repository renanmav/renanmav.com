import { NextRequest } from "next/server";
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

const ViewCount = mongoose.model("ViewCount", viewCountSchema);

type DynamicParams = { params: { slug: string } };

export async function GET(_: NextRequest, { params }: DynamicParams) {
  const slug = params.slug;

  const viewCount = await ViewCount.findOne({ slug });
  const views = viewCount ? viewCount.views : 0;

  return new Response(JSON.stringify({ views }), {
    status: 200,
  });
}

export async function POST(_: NextRequest, { params }: DynamicParams) {
  const slug = params.slug;

  const viewCount = await ViewCount.findOneAndUpdate(
    { slug },
    { $inc: { views: 1 } },
    { new: true, upsert: true },
  );

  return new Response(JSON.stringify({ views: viewCount.views }), {
    status: 200,
  });
}
