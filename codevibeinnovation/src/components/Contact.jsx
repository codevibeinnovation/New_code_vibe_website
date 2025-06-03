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
    <div className="w-full pt-24 min-h-screen px-4 sm:px-8 lg:px-24 py-16 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 relative overflow-hidden">
      <Toaster />

      {/* Floating SVG Background */}
      <svg className="absolute -z-10 top-0 left-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 800 600">
        <circle cx="300" cy="200" r="200" fill="#a78bfa" />
        <circle cx="700" cy="500" r="150" fill="#f472b6" />
      </svg>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 animate-pulse">
          <Typewriter
            words={['Let’s Connect!', 'Have Questions?', 'Reach Out Now!']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-lg mt-3 text-blue-900">
          We’d love to hear from you—whether you’re curious about features, pricing, or anything else.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 mx-auto my-4 rounded animate-pulse shadow-lg"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Social & Info */}
        <div>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-blue-700 mb-4">
            Get in Touch
          </h3>
          <p className="text-blue-800 text-lg mb-6">
            We respond within 24 hours. Let us know how we can help!
          </p>

          <div className="space-y-6">
            <a href="#" className="flex items-center gap-4 hover:scale-105 transition-transform bg-white rounded-xl shadow-lg p-4">
              <FaFacebook className="text-[#1877F2] text-3xl" />
              <div>
                <p className="text-blue-900 font-semibold">Facebook</p>
                <p className="text-blue-700 text-sm">Get our latest updates & announcements.</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 hover:scale-105 transition-transform bg-white rounded-xl shadow-lg p-4">
              <FaInstagram className="text-[#E1306C] text-3xl" />
              <div>
                <p className="text-blue-900 font-semibold">Instagram</p>
                <p className="text-blue-700 text-sm">Follow our reels and stories.</p>
              </div>
            </a>

            <a href="#" className="flex items-center gap-4 hover:scale-105 transition-transform bg-white rounded-xl shadow-lg p-4">
              <FaLinkedin className="text-[#0A66C2] text-3xl" />
              <div>
                <p className="text-blue-900 font-semibold">LinkedIn</p>
                <p className="text-blue-700 text-sm">Career updates and internship news.</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/80 border border-white/40 p-6 rounded-3xl shadow-2xl space-y-4" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-purple-400 text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-3 rounded-xl w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-purple-400 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-3 rounded-xl w-full"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mobile" className="block mb-1 text-purple-400 text-sm font-medium">
              Mobile Number
            </label>
            <input
              id="mobile"
              type="tel"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-3 rounded-xl w-full"
              maxLength={15}
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-purple-400 text-sm font-medium">
              Describe your requirement
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="border border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 p-3 rounded-xl w-full h-20"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-600 text-white py-3 px-6 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            Submit Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="w-full flex justify-center mt-20 rounded-xl overflow-hidden shadow-xl">
        <iframe
          title="Google Map"
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
