import { getPayloadClient } from "@/lib/payload";
import UtilityBar from "@/components/UtilityBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - RamSoft",
  description:
    "Insights, guides, and news about radiology, PACS, RIS, and AI-powered medical imaging solutions.",
};

export default async function BlogListingPage() {
  const payload = await getPayloadClient();

  const blogs = await payload.find({
    collection: "blogs",
    sort: "-releaseDate",
    limit: 50,
    depth: 1,
  });

  return (
    <>
      <UtilityBar />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-zircon py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="font-[family-name:var(--font-manrope)] text-dodger font-bold text-[11px] uppercase tracking-[2px] mb-3">
              Resources
            </p>
            <h1 className="font-[family-name:var(--font-hanken)] font-extrabold text-[32px] lg:text-[48px] text-navy-mid leading-tight">
              Blog
            </h1>
            <p className="font-[family-name:var(--font-manrope)] text-waikawa text-base lg:text-lg mt-3 max-w-2xl">
              Insights, guides, and news about radiology, PACS, RIS, and
              AI-powered medical imaging solutions.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-6">
            {blogs.docs.length === 0 ? (
              <p className="text-waikawa text-center py-20 font-[family-name:var(--font-manrope)]">
                No blog posts yet. Check back soon!
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.docs.map((blog: any) => {
                  const thumbnail =
                    typeof blog.thumbnailImage === "object"
                      ? blog.thumbnailImage
                      : typeof blog.mainImage === "object"
                        ? blog.mainImage
                        : null;

                  const categories = Array.isArray(blog.categories)
                    ? blog.categories
                        .map((cat: any) =>
                          typeof cat === "object" ? cat.name : null
                        )
                        .filter(Boolean)
                    : [];

                  const date = blog.releaseDate
                    ? new Date(blog.releaseDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : null;

                  return (
                    <Link
                      key={blog.id}
                      href={`/blog/${blog.slug}`}
                      className="group bg-white border border-lilac rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* Thumbnail */}
                      {thumbnail?.url ? (
                        <div className="aspect-[16/10] overflow-hidden bg-zircon">
                          <img
                            src={thumbnail.url}
                            alt={thumbnail.alt || blog.name}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="aspect-[16/10] bg-zircon flex items-center justify-center">
                          <span className="text-bali text-sm font-[family-name:var(--font-manrope)]">
                            No image
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-5 lg:p-6">
                        {/* Categories */}
                        {categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
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

                        <h2 className="font-[family-name:var(--font-hanken)] font-bold text-lg text-navy-mid leading-snug group-hover:text-dodger transition-colors line-clamp-2">
                          {blog.name}
                        </h2>

                        {blog.metaDescription && (
                          <p className="font-[family-name:var(--font-manrope)] text-waikawa text-sm mt-2 leading-relaxed line-clamp-2">
                            {blog.metaDescription}
                          </p>
                        )}

                        {/* Meta */}
                        <div className="flex items-center gap-3 mt-4 text-bali text-xs font-[family-name:var(--font-manrope)]">
                          {date && <span>{date}</span>}
                          {date && blog.readingTime && (
                            <span className="w-1 h-1 rounded-full bg-bali" />
                          )}
                          {blog.readingTime && (
                            <span>{blog.readingTime} min read</span>
                          )}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
