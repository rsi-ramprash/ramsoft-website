import { getPayloadClient } from "@/lib/payload";
import { notFound } from "next/navigation";
import UtilityBar from "@/components/UtilityBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogRichText from "@/components/BlogRichText";
import BlogTableOfContents from "@/components/BlogTableOfContents";
import Link from "next/link";
import { extractH2Headings } from "@/lib/lexical-utils";
import { FiArrowLeft, FiClock, FiCalendar } from "react-icons/fi";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();
  const blogs = await payload.find({
    collection: "blogs",
    limit: 100,
    depth: 0,
  });

  return blogs.docs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "blogs",
    where: { slug: { equals: slug } },
    limit: 1,
  });

  const blog = result.docs[0];
  if (!blog) return { title: "Blog Not Found - RamSoft" };

  return {
    title: blog.seoTitle || `${blog.name} - RamSoft Blog`,
    description: blog.metaDescription || undefined,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: "blogs",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });

  const blog = result.docs[0] as any;
  if (!blog) notFound();

  const mainImage =
    typeof blog.mainImage === "object" ? blog.mainImage : null;

  const categories = Array.isArray(blog.categories)
    ? blog.categories
        .map((cat: any) => (typeof cat === "object" ? cat.name : null))
        .filter(Boolean)
    : [];

  const releaseDate = blog.releaseDate
    ? new Date(blog.releaseDate).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  // Build TOC from H2 headings in the post body
  const tocItems = extractH2Headings(blog.postBody);

  return (
    <>
      <UtilityBar />
      <Nav />
      <main className="bg-white">
        {/* Hero Banner */}
        <section className="bg-dodger py-10 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-manrope)] font-semibold text-spring hover:text-white transition-colors mb-8"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Radiology Blog
            </Link>
            <h1 className="font-[family-name:var(--font-hanken)] font-extrabold text-[32px] lg:text-[48px] text-white leading-tight max-w-4xl">
              {blog.name}
            </h1>
          </div>
        </section>

        {/* Hero Image */}
        {mainImage?.url && (
          <div className="mx-auto max-w-[1200px] px-6 -mt-1">
            <div className="rounded-2xl overflow-hidden aspect-[21/9] bg-zircon">
              <img
                src={mainImage.url}
                alt={
                  blog.altTextForFeaturedImage || mainImage.alt || blog.name
                }
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="mx-auto max-w-[1200px] px-6 py-10 lg:py-14">
          <div className="lg:flex lg:gap-10">
            {/* Sidebar - Table of Contents */}
            <aside className="hidden lg:block lg:w-[260px] shrink-0">
              <div className="sticky top-[88px]">
                <BlogTableOfContents items={tocItems} />
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-6 border-b border-lilac">
                {releaseDate && (
                  <span className="flex items-center gap-1.5 text-waikawa text-sm font-[family-name:var(--font-manrope)]">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {releaseDate}
                  </span>
                )}
                {blog.readingTime && (
                  <span className="flex items-center gap-1.5 text-waikawa text-sm font-[family-name:var(--font-manrope)]">
                    <FiClock className="w-3.5 h-3.5" />
                    {blog.readingTime} min read
                  </span>
                )}
                {categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat: string) => (
                      <span
                        key={cat}
                        className="px-2.5 py-0.5 rounded-md bg-dodger/10 text-dodger text-[11px] font-bold font-[family-name:var(--font-manrope)] uppercase tracking-wide"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Post Introduction */}
              {blog.postIntroduction && (
                <section id="introduction" className="mt-8">
                  <BlogRichText
                    data={blog.postIntroduction}
                    className="blog-prose"
                  />
                </section>
              )}

              {/* Key Takeaways */}
              {blog.postKeyTakeaways && (
                <section
                  id="key-takeaways"
                  className="mt-10 bg-zircon border border-lilac rounded-2xl p-6 lg:p-8"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="text-xl">💡</span>
                    <h2 className="font-[family-name:var(--font-hanken)] font-bold text-lg text-navy-mid">
                      Key Takeaways
                    </h2>
                  </div>
                  <BlogRichText
                    data={blog.postKeyTakeaways}
                    className="blog-prose"
                  />
                </section>
              )}

              {/* Post Body */}
              {blog.postBody && (
                <section id="post-body" className="mt-10">
                  <BlogRichText
                    data={blog.postBody}
                    className="blog-prose"
                  />
                </section>
              )}

              {/* CTA Banner */}
              <section className="mt-14 bg-[linear-gradient(135deg,rgb(17,28,60)_0%,rgb(11,23,51)_100%)] rounded-2xl p-8 lg:p-12 text-center">
                <h2 className="font-[family-name:var(--font-hanken)] font-extrabold text-2xl lg:text-3xl text-white leading-tight">
                  Activate AI-Powered Workflow
                </h2>
                <p className="font-[family-name:var(--font-manrope)] text-white/60 text-sm lg:text-base mt-3 max-w-lg mx-auto">
                  Discover how RamSoft&apos;s cloud RIS/PACS solutions can
                  transform your imaging workflow.
                </p>
                <a
                  href="#demo"
                  className="inline-block mt-6 px-8 py-3.5 bg-spring rounded-xl text-navy font-extrabold text-sm font-[family-name:var(--font-manrope)] hover:bg-spring-dark transition-colors"
                >
                  Book a Demo
                </a>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
