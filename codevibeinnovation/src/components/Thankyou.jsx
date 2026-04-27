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
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
          >
            📲 Chat on WhatsApp
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