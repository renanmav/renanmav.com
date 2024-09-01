import Link from "next/link";
import { getBlogPosts } from "app/blog/utils";
import { formatDate } from "app/formatDate";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      <h2 className="mb-4 text-base font-medium">Posts</h2>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
              <p className="w-40 text-base text-neutral-400">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-base text-blue-500 no-underline hover:underline">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
