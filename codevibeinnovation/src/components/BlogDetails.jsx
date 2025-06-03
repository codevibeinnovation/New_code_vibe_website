import { useParams, Link } from "react-router-dom";
import { blogs } from "../components/Blogs";
import { Helmet } from "react-helmet";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog)
    return (
      <div className="pt-28 text-center text-xl text-red-600 font-semibold">
        Blog not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-blue-50 px-4 pt-28 pb-16">
      <Helmet>
        <title>{blog.title} | Code Vibe Innovation</title>
        <meta name="description" content={blog.summary} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blog.title,
            "image": [blog.image],
            "datePublished": "2025-05-23",
            "author": {
              "@type": "Organization",
              "name": "Code Vibe Innovation",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Code Vibe Innovation",
              "logo": {
                "@type": "ImageObject",
                "url": "https://codevibeinnovation.com/logo.png",
              },
            },
            "description": blog.summary,
            "url": `https://codevibeinnovation.com/blog/${blog.id}`,
          })}
        </script>
      </Helmet>

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl px-6 sm:px-10 py-10 text-blue-900">
        {/* Blog Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-900 via-pink-600 to-orange-500 text-transparent bg-clip-text drop-shadow-sm mb-4">
            {blog.title}
          </h1>
          <p className="text-lg text-blue-800 italic">{blog.summary}</p>
        </div>

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full max-h-[400px] object-cover rounded-xl shadow-lg mb-10"
        />

        {/* Blog Content */}
        <div className="prose lg:prose-lg max-w-none text-blue-900 prose-p:mb-4 prose-headings:text-blue-900 prose-h2:mt-8 prose-h2:mb-3 prose-img:rounded-md prose-img:shadow-md prose-blockquote:text-blue-700 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:border-blue-400">
          <p className="whitespace-pre-line first-letter:text-5xl first-letter:font-bold first-letter:text-blue-900 first-letter:float-left first-letter:mr-2 first-letter:leading-none">
            {blog.content}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block bg-gradient-to-r from-blue-700 via-blue-500 to-purple-500 text-white font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition-transform"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
