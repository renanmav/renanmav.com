import { formatDate } from "app/formatDate";

import PostViews from "./PostViews";

type Props = {
  title: string;
  publishedAt: string;
  slug: string;
};

export default function PostHeader({ title, publishedAt, slug }: Props) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col">
        <h1 className="title text-base font-medium">{title}</h1>
        <p className="text-base text-neutral-400">{formatDate(publishedAt)}</p>
      </div>
      <div className="mx-4 grow border-b border-neutral-200 dark:border-neutral-800" />
      <PostViews slug={slug} />
    </div>
  );
}
