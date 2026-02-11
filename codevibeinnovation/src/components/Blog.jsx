import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const blogs = [
  {
    id: 1,
    title: "Top 7 Benefits of Doing a Tech Internship in 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    summary:
      "Internships offer real-world experience, project exposure, and mentorship—essential for launching your tech career.",
  },
  {
    id: 2,
    title: "Why Every Student Should Do a Web Development Internship",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    summary:
      "A web development internship helps you build real websites, understand frameworks like React and Node, and become industry-ready.",
  },
  {
    id: 3,
    title: "The Power of GitHub: Building Your Developer Portfolio",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    summary:
      "GitHub is your living resume. Learn how to use it to showcase projects, collaborate, and contribute to open source.",
  },
  {
    id: 4,
    title: "Crack the Coding Interview: Must-Have Course for Developers",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    summary:
      "A complete coding interview prep course covering DSA, algorithms, system design, and mock interviews.",
  },
  {
    id: 5,
    title: "How Artificial Intelligence Will Transform Jobs by 2030",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    summary:
      "AI is reshaping industries. Understand how automation and smart systems will change future jobs.",
  },
  {
    id: 6,
    title: "Machine Learning Roadmap for Beginners",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    summary:
      "A beginner-friendly ML roadmap covering Python, algorithms, projects, and GitHub portfolio building.",
  },
  {
    id: 7,
    title: "Why Data Science Is the Hottest Career of 2025",
    image: "https://static.vecteezy.com/system/resources/thumbnails/005/442/693/small_2x/data-science-analytics-internet-and-technology-concept-concept-photo.jpg",
    summary:
      "Data Science offers high salaries and global opportunities. Learn why it’s the top tech career.",
  },
  {
    id: 8,
    title: "Top 10 Python Projects Every Student Must Build",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    summary:
      "Boost your GitHub with AI, automation, web apps, and dashboard-based Python projects.",
  },
  {
    id: 9,
    title: "DevOps for Beginners: Why Every Developer Needs It",
    image: "https://t4.ftcdn.net/jpg/03/96/98/33/360_F_396983381_AcuGFHQbNn7D9eercXFpOecN7d7B5F66.jpg",
    summary:
      "DevOps includes Git, Docker, Kubernetes, CI/CD pipelines—essential for modern developers.",
  },
  {
    id: 10,
    title: "Cloud Computing Explained: AWS, Azure, GCP Compared",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    summary:
      "Simple breakdown of the top cloud platforms and how students can enter the cloud industry.",
  },
  {
    id: 11,
    title: "How to Build Your First AI Model Using Python",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    summary:
      "Learn to create an AI model using Python, Pandas, Scikit-learn, and Jupyter Notebook.",
  },
  {
    id: 12,
    title: "Top 7 Tech Skills Recruiters Want in 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    summary:
      "AI, Data, Cloud, DevOps, and Full-Stack development are in high demand.",
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 py-10 pt-28 px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-pink-500 to-orange-500 drop-shadow-lg">
          Our Latest Blogs
        </h1>
        <p className="text-lg md:text-2xl text-blue-800 mt-4 max-w-2xl mx-auto">
          Explore insights, tips, and resources to boost your tech career!
        </p>
        <div className="mt-4 flex justify-center">
          <span className="h-1 w-24 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full"></span>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100"
          >
            <Link to={`/blog/${blog.id}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
            </Link>

            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4">{blog.summary}</p>

              <Link
                to={`/blog/${blog.id}`}
                className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* SEO Schema */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Code Vibe Blog",
            url: "https://codevibeinnovation.com/blog",
            blogPost: blogs.map((blog) => ({
              "@type": "BlogPosting",
              headline: blog.title,
              image: [blog.image],
              url: `https://codevibeinnovation.com/blog/${blog.id}`,
              datePublished: "2025-05-23",
              author: {
                "@type": "Organization",
                name: "Code Vibe Innovation",
              },
              publisher: {
                "@type": "Organization",
                name: "Code Vibe Innovation",
                logo: {
                  "@type": "ImageObject",
                  url: "https://codevibeinnovation.com/logo.png",
                },
              },
              description: blog.summary,
            })),
          })}
        </script>
      </Helmet>
    </div>
  );
}
