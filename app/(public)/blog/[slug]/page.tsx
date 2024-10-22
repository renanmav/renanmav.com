import { notFound } from "next/navigation";

import { BASE_URL } from "app/constants";
import CustomMDX from "app/components/CustomMDX";
import PostHeader from "app/components/PostHeader";

import { getBlogPosts } from "../utils";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${BASE_URL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${BASE_URL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="scroll-fade-container">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${BASE_URL}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${BASE_URL}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.addEventListener('scroll', () => {
            if (window.scrollY > 64) {
              document.body.classList.add('scrolled');
            } else {
              document.body.classList.remove('scrolled');
            }
          });
        `,
        }}
      />
      <PostHeader
        title={post.metadata.title}
        publishedAt={post.metadata.publishedAt}
        slug={post.slug}
      />
      <article className="prose text-base">
        <CustomMDX
          source={post.content}
          showLateralIndex={post.metadata.showLateralIndex}
        />
      </article>
    </section>
  );
}
