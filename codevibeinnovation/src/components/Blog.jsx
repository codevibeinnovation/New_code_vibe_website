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
    <div className="min-h-screen bg-white py-10 pt-24 px-4">
      {/* Header */}
  {/* Page Heading */}
<div className="text-center mb-16">
<h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-900 drop-shadow-md">
  Our Latest Blogs
</h1>
<p className="text-lg md:text-2xl text-blue-900 mt-4 max-w-2xl mx-auto">
Explore insights, tips, and resources to boost your tech career and stay industry-ready!
</p>
<div className="mt-4 flex justify-center">
  <span className="h-1 w-24 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full animate-pulse"></span>
</div>
</div>


      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition duration-300"
          > <Link
          to={`/blog/${blog.id}`}  >
          <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover hover:cursor-pointer"
        />
        
            </Link>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-2 hover:text-blue-900 transition">
                {blog.title}
              </h2>
              <p className="text-blue-900 text-sm mb-4">{blog.summary}</p>
              <Link
                to={`/blog/${blog.id}`}  
                className="text-sm font-medium text-blue-900 hover:text-blue-900"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
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
        "datePublished": "2025-05-23",  // use actual dates if available
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
