"use client";

import useSWR from "swr";

import { BASE_URL } from "app/constants";

async function getPostViews(slug: string) {
  console.log(`getPostViews(${slug})`);
  const res = await fetch(`${BASE_URL}/blog/api/views/${slug}`, {
    method: "POST",
    cache: "no-store",
  });
  const data = await res.json();
  return data.views;
}

type Props = {
  slug: string;
};

export function PostViews({ slug }: Props) {
  const { data, isLoading } = useSWR(`${slug}-views`, () => getPostViews(slug));

  return (
    <div className="flex flex-row items-center gap-1 text-base text-neutral-400">
      <span>
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-4 w-10 rounded bg-neutral-200"></div>
          </div>
        ) : (
          data
        )}
      </span>
      <p>views</p>
    </div>
  );
}
