import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { Typewriter } from 'react-simple-typewriter';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const validate = () => {
    const { name, email, mobile, message } = formData;

    if (!name.trim() || name.trim().length < 2) {
      toast.error("Please enter your full name (at least 2 characters).");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    const mobileDigits = mobile.replace(/\D/g, '');
    if (mobileDigits.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return false;
    }

    if (!message.trim() || message.trim().length < 10) {
      toast.error("Please enter a message (at least 10 characters).");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const form = e.target;

    fetch("https://formspree.io/f/mldneabp", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Message sent successfully!");
          form.reset();
          setFormData({ name: '', email: '', mobile: '', message: '' });
        } else {
          toast.error("Failed to send. Please try again.");
        }
      })
      .catch(() => {
        toast.error("Something went wrong. Try again later.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full pt-32 min-h-screen px-4 sm:px-8 lg:px-24 py-16 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 relative overflow-hidden">
  <Toaster />

  {/* Floating Animated Stars */}
  <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
    <svg viewBox="0 0 800 600" className="absolute w-full h-full animate-pulse opacity-10">
      <circle cx="250" cy="150" r="100" fill="#a78bfa" />
      <circle cx="650" cy="400" r="120" fill="#f472b6" />
      <circle cx="150" cy="500" r="80" fill="#93c5fd" />
    </svg>
  </div>

  {/* Animated Header */}
  <div className="text-center mb-10">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-purple-600 to-pink-600 animate-text">
      <Typewriter
        words={['🚀 Let’s Connect!', '💬 Have Questions?', '📬 Reach Out Today!']}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={60}
        delaySpeed={1500}
      />
    </h2>
    <p className="text-lg mt-4 text-blue-900 max-w-2xl mx-auto">
      Whether you're looking to partner, learn, or just say hello — we’re just one message away.
    </p>
    <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 mx-auto my-5 rounded-full animate-pulse shadow-md"></div>
  </div>

  {/* Main Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left Side - Social Info */}
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-blue-700 mb-4">
        Connect With Us
      </h3>
      <p className="text-blue-800 text-md mb-6">
        Choose your favorite platform to start the conversation. Let’s build something great together!
      </p>

      {[
        { icon: <FaFacebook className="text-[#1877F2] text-3xl" />, name: "Facebook", desc: "Get updates & announcements", link: "#" },
        { icon: <FaInstagram className="text-[#E1306C] text-3xl" />, name: "Instagram", desc: "Watch our reels & moments", link: "https://www.instagram.com/codevibeinnovation/" },
        { icon: <FaLinkedin className="text-[#0A66C2] text-3xl" />, name: "LinkedIn", desc: "Career & internship insights", link: "https://www.linkedin.com/in/codevibe-innovation-57a770363/" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="flex items-center gap-4 transition-transform transform hover:scale-105 bg-gradient-to-r from-white via-purple-50 to-white rounded-xl shadow-xl p-4"
        >
          {item.icon}
          <div>
            <p className="text-blue-900 font-bold">{item.name}</p>
            <p className="text-blue-700 text-sm">{item.desc}</p>
          </div>
        </a>
      ))}
    </div>

    {/* Right Side - Contact Form */}
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-lg bg-white/90 border border-white/40 p-8 rounded-3xl shadow-2xl space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-purple-600 font-medium text-sm">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="p-3 mt-1 w-full rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-300 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-purple-600 font-medium text-sm">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="p-3 mt-1 w-full rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-300 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="mobile" className="text-purple-600 font-medium text-sm">Phone Number</label>
        <input
          id="mobile"
          type="tel"
          name="mobile"
          required
          value={formData.mobile}
          onChange={handleChange}
          className="p-3 mt-1 w-full rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-300 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-purple-600 font-medium text-sm">Your Message</label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-3 mt-1 w-full rounded-xl border border-purple-300 focus:ring-2 focus:ring-purple-300 focus:outline-none h-28"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition duration-300 shadow-lg"
      >
        🚀 Send Your Message
      </button>
    </form>
  </div>

  {/* Google Map Section */}
  <div className="w-full mt-20 overflow-hidden rounded-xl shadow-2xl border-4 border-white/50">
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.394983856598!2d179.997425075181!3d28.647889732197502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85005332e7c5%3A0x6df9822b4d6def45!2s!5e0!3m2!1sen!2sin!4v1746420393421!5m2!1sen!2sin"
      width="100%"
      height="400"
      allowFullScreen=""
      loading="lazy"
      className="border-0"
    ></iframe>
  </div>

  {/* SEO Structured Data */}
  <Helmet>
    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - Code Vibe Innovation",
        "url": "https://codevibeinnovation.com/contact-us"
      }
    `}</script>
  </Helmet>
</div>

  );
};

export default ContactUs;
