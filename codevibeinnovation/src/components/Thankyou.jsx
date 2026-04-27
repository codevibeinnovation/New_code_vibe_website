// ThankYou.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      
      <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 max-w-lg w-full text-center border border-gray-100">
        
        {/* 🎉 Icon */}
        <div className="text-6xl mb-4 animate-bounce">🎉</div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          Thank You!
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Your message has been submitted successfully.  
          Our team will contact you shortly.
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">

          {/* WhatsApp Button */}
       <a
  href="https://wa.me/919724716637"
  target="_blank"
  rel="noreferrer"
  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-xl transition duration-300 shadow-md"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M16 .4C7.5.4.7 7.2.7 15.7c0 2.8.7 5.5 2.1 7.9L.4 31.6l8.2-2.3c2.3 1.3 5 2 7.8 2 8.5 0 15.3-6.8 15.3-15.3C31.7 7.2 24.9.4 16 .4zm0 27.9c-2.5 0-4.9-.7-7-2l-.5-.3-4.9 1.4 1.3-4.8-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.3C2.5 8.3 8.3 2.5 15.5 2.5S28.5 8.3 28.5 15.5 22.7 28.3 16 28.3zm7.5-9.7c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2s-1.1 1.3-1.3 1.6c-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5-.1-.7-.1-.2-1-2.4-1.4-3.2-.4-.8-.7-.7-1-.7h-.9c-.3 0-.7.1-1 .5-.3.4-1.4 1.4-1.4 3.5s1.4 4 1.6 4.3c.2.3 2.7 4.2 6.6 5.9.9.4 1.6.6 2.2.8.9.3 1.7.3 2.3.2.7-.1 2.4-1 2.7-2 .3-1 .3-1.9.2-2.1-.1-.2-.3-.3-.7-.5z"/>
  </svg>

  <span>Chat on WhatsApp</span>
</a>

          {/* Go Home */}
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
          >
            ⬅ Back to Home
          </button>

        </div>

        {/* Extra Note */}
        <p className="text-xs text-gray-400 mt-6">
          Code Vibe Innovation • Ahmedabad
        </p>

      </div>
    </div>
  );
};

export default ThankYou;