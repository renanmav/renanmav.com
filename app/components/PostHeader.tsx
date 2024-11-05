import { formatDate } from "app/formatDate";

import PostViews from "./PostViews";

type Props = {
  slug: string;
  title: string;
  publishedAt: string;
  readingTimeInMinutes?: string;
};

export default function PostHeader({
  slug,
  title,
  publishedAt,
  readingTimeInMinutes: readingTime,
}: Props) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <h1 className="title text-base font-medium">{title}</h1>
        <p className="text-base text-neutral-400">
          {formatDate(publishedAt)}
          {readingTime && <span> • {readingTime} min read</span>}
        </p>
      </div>
      <div className="mx-4 grow border-b border-neutral-200 dark:border-neutral-800" />
      <PostViews slug={slug} />
    </div>
  );
}
