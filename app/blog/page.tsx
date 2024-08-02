import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function BlogPostsPage() {
  return (
    <section>
      <BlogPosts />
    </section>
  );
}
