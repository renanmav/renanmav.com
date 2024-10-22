import BlogPosts from "app/components/Posts";

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
