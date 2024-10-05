import { NextRequest } from "next/server";

let viewCounts: Record<string, number> = {}; // This should be replaced with a database

type DynamicParams = { params: { slug: string } };

export async function GET(_: NextRequest, { params }: DynamicParams) {
  const slug = params.slug;

  const views = viewCounts[slug] || 0;

  return new Response(JSON.stringify({ views }), {
    status: 200,
  });
}

export async function POST(_: NextRequest, { params }: DynamicParams) {
  const slug = params.slug;

  const views = (viewCounts[slug] || 0) + 1;
  viewCounts[slug] = views;

  return new Response(JSON.stringify({ views }), {
    status: 200,
  });
}
