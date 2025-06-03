import React from "react";
import { Link } from "react-router-dom";  // Import Link to navigate between pages
import BlogDetails from "./BlogDetails";
import { Helmet } from 'react-helmet';
const blogs = [
  {
    id: 1,
    title: "Top 7 Benefits of Doing a Tech Internship in 2025",
    image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/29/full/1727598515-5448.jpg?im=FeatureCrop,size=(826,465)",
    summary:
      "Internships offer real-world experience, project exposure, and mentorship—essential for launching your tech career in today's competitive market.",
  },
  {
    id: 2,
    title: "Why Every Student Should Do a Web Development Internship",
    image: "https://www.universityliving.com/blog/wp-content/uploads/2024/06/Internship_-Blog-Banner.webp",
    summary:
      "A web development internship helps you build real websites, understand frameworks like React and Node, and become industry-ready.",
  },
  {
    id: 3,
    title: "The Power of GitHub: Building Your Developer Portfolio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bX5JsVjGQIrSdTWPLCuGe8ANSlJBYny37GOHHEAXcQHyE0pvjw&s=10&ec=72940545",
    summary:
      "GitHub is more than just a code hosting platform. It's your living resume. Learn how to use it to showcase projects, collaborate with others, and contribute to open source.",
  },
  {
    id: 4,
    title: "Crack the Coding Interview: Must-Have Course for Developers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTXwNbFt3QZqvkDYYTf1XpGeeTmtoQ7HVdj1UYyUAZsn-XlgKi5w&s=10&ec=72940545",
    summary:
      "Struggling with coding interviews? This course covers data structures, algorithms, system design, and mock interviews to help you land your dream job.",
  },
];



export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 py-10 pt-24 px-4">
    {/* Page Heading */}
    <div className="text-center mb-16">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-pink-500 to-orange-500 drop-shadow-lg">
        Our Latest Blogs
      </h1>
      <p className="text-lg md:text-2xl text-blue-800 mt-4 max-w-2xl mx-auto">
        Explore insights, tips, and resources to boost your tech career and stay industry-ready!
      </p>
      <div className="mt-4 flex justify-center">
        <span className="h-1 w-24 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-full animate-pulse"></span>
      </div>
    </div>
  
    {/* Blog Cards */}
    <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-blue-100"
        >
          <Link to={`/blog/${blog.id}`}>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
          <div className="p-6">
            <h2 className="text-xl font-bold text-blue-800 mb-2 hover:text-purple-600 transition-colors">
              {blog.title}
            </h2>
            <p className="text-gray-700 text-sm mb-4">{blog.summary}</p>
            <Link
              to={`/blog/${blog.id}`}
              className="inline-block bg-gradient-to-r from-purple-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>
  
    {/* Schema.org SEO */}
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Code Vibe Blog",
          "url": "https://codevibeinnovation.com/blog",
          "blogPost": blogs.map(blog => ({
            "@type": "BlogPosting",
            "headline": blog.title,
            "image": [blog.image],
            "url": `https://codevibeinnovation.com/blog/${blog.id}`,
            "datePublished": "2025-05-23",
            "author": {
              "@type": "Organization",
              "name": "Code Vibe Innovation"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Code Vibe Innovation",
              "logo": {
                "@type": "ImageObject",
                "url": "https://codevibeinnovation.com/logo.png"
              }
            },
            "description": blog.summary
          }))
        })}
      </script>
    </Helmet>
  </div>
  
  );
}
