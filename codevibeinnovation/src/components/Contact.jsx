import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full min-h-screen px-4 sm:px-8 lg:px-24 py-16">
      {/* Header */}
      <div>
        <h2 className="text-3xl text-center sm:text-4xl text-blue-900 font-bold pt-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
            Have Some Questions?
          </span>
        </h2>
        <div className="w-24 h-1 bg-blue-900 mx-auto mb-8 mt-2"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="ps-2">
          <h2 className="text-3xl sm:text-4xl text-blue-900 font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
              How Can We Help You?
            </span>
          </h2>
          <p className="text-blue-900 text-lg mt-2">
            Submit the details and we will contact you
          </p>

          <p className="italic text-lg text-blue-900 mt-6 mb-4">
            Other ways to connect with us
          </p>

          <div className="space-y-4">
            {/* Facebook */}
            <div className="flex items-start space-x-4">
              <FaFacebook className="text-blue-900 text-3xl" />
              <div>
                <p className="text-blue-900 font-semibold">Follow us on Facebook</p>
                <p className="text-blue-800 text-sm">
                  Follow on Facebook to get latest updates of Code Vibe Innovation
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start space-x-4">
              <FaInstagram className="text-blue-900 text-3xl" />
              <div>
                <p className="text-blue-900 font-semibold">Follow us on Instagram</p>
                <p className="text-blue-800 text-sm">
                  Follow on Instagram to get latest updates of Code Vibe Innovation
                </p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start space-x-4">
              <FaLinkedin className="text-blue-900 text-3xl" />
              <div>
                <p className="text-blue-900 font-semibold">Follow us on LinkedIn</p>
                <p className="text-blue-800 text-sm">
                  Follow on LinkedIn to get latest updates of Code Vibe Innovation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <form className="p-6 bg-blue-200 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded w-full"
              />
            </div>

            <input
              type="text"
              placeholder="Mobile Number"
              className="border p-2 rounded w-full mt-4"
            />

            <textarea
              placeholder="Describe your requirement briefly"
              className="border p-2 rounded w-full h-24 mt-4"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-[#127DC8] to-[#0E5A9E] hover:from-[#0E5A9E] hover:to-[#127DC8] text-white py-3 px-6 rounded-2xl font-semibold transition duration-300 shadow-md shadow-blue-400/50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full flex justify-center mt-10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.394983856598!2d179.997425075181!3d28.647889732197502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85005332e7c5%3A0x6df9822b4d6def45!2s!5e0!3m2!1sen!2sin!4v1746420393421!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-0 shadow-lg rounded-md"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
