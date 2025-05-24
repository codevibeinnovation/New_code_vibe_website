// src/components/BlogDetails.jsx
import { useParams } from "react-router-dom";
import { blogs } from "../components/Blogs";
import { Helmet } from 'react-helmet';
const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="p-4 text-red-600">Blog not found.</div>;

  return (
    <div className="max-w-4xl pt-24 mx-auto p-4">

      <img src={blog.image} alt={blog.title} className="w-full rounded mb-4" />
      <p className="text-blue-900 whitespace-pre-line">{blog.content}</p>
      <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
        
          "author": {
            "@type": "Organization",
            "name": "Code Vibe Innovation"
          }
        }
      `}</script>
    </Helmet>
    
    </div>
    
  );
};

export default BlogDetails;
