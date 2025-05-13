// src/components/BlogDetails.jsx
import { useParams } from "react-router-dom";
import { blogs } from "../components/Blogs";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="p-4 text-red-600">Blog not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="w-full rounded mb-4" />
      <p className="text-gray-700 whitespace-pre-line">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
