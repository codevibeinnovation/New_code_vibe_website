import React from "react";
import { Link } from "react-router-dom";  // Import Link to navigate between pages
import BlogDetails from "./BlogDetails";
const blogs = [
  {
    id: 1,
    title: "Top 7 Benefits of Doing a Tech Internship in 2025",
    image: "https://www.accreteit.com/backyard/images/blog_big_image/blog_big_image8.png",
    summary:
      "Internships offer real-world experience, project exposure, and mentorship—essential for launching your tech career in today's competitive market.",
  },
  {
    id: 2,
    title: "Why Every Student Should Do a Web Development Internship",
    image: "https://www.digitalmogli.com/wp-content/uploads/2020/03/website-importance.png",
    summary:
      "A web development internship helps you build real websites, understand frameworks like React and Node, and become industry-ready.",
  },
  {
    id: 3,
    title: "How an Internship in Data Science Can Shape Your Career",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFC64-82lygyu-OeIA7CnjAY3Tv_nlY0e591T48Bp81habSVpkg&s=10&ec=72940545",
    summary:
      "Learn to handle datasets, apply machine learning models, and gain hands-on analytics experience through data science internships.",
  },
  {
    id: 4,
    title: "Top 5 Skills You’ll Gain from a UI/UX Design Internship",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQzTPj2nMgHbqtp6iI1lIR-z_FTYuki1JfE5pJT5ke3kjSrm7DqQ&s=10&ec=72940545",
    summary:
      "Interning in UI/UX design helps you master tools like Figma, conduct user research, and design intuitive digital experiences.",
  },
];


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 pt-24 px-4">
      {/* Header */}
      <div className="relative z-10 bg-white p-10 rounded-2xl shadow-md text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
          We Write <span className="text-blue-900">Code Vibe Innovation</span>{" "}
          Blogs
        </h1>
        <p className="text-lg text-blue-900 leading-relaxed">
          Navigate the software renaissance. Smart insights on software,
          strategy, and innovation—helping tech leaders make informed decisions.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-1 transition duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
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
    </div>
  );
}
