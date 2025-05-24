import React from 'react';
import logo from '../assets/logo.svg';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-10">
        
        {/* About */}
        <div>
        <h5 className="text-2xl sm:text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
        CODE VIBE INNOVATION
      </h5>
          <p className="text-sm text-blue-900 mb-4 leading-relaxed">
            We consistently deliver creative tech solutions with passion and integrity. From innovative web applications to real-world project mentoring, we're committed to excellence.
          </p>
          <img src={logo} alt="Code Vibe Innovation Logo" className="h-12 w-auto" />
        </div>

        {/* Quick Links */}
        <div>
        <h1 className="text-2xl font-bold mb-4 text-blue-900">QUICK LINKS</h1>
        <ul className="space-y-3">
          {["Home", "Courses", "Internship", "About Us", "Contact Us","Blog"].map((item, i) => (
            <li key={i}>
              <a
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-blue-900 hover:text-blue-900 hover:underline hover:font-bold transition duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      

        {/* Get In Touch */}
        <div>
          <h1 className="text-2xl font-bold mb-4 text-blue-900">GET IN TOUCH</h1>
          <div className="space-y-3 text-sm text-blue-900">
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-blue-900" /> codevibeinnovation@gmail.com 
</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-900" />  95746 26933  </p>
            <p className="flex items-start gap-2"><MapPin className="w-8 h-6 text-blue-900 " />A-803, Samudra Complex, above Saffron Restaurant, Near Girish Cold Drinks, CG Road, Navrangpura - 380009</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
  {[
    {
      Icon: Instagram,
      url: "https://www.instagram.com/codevibeinnovation/", // replace with actual link
    },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/codevibe-innovation-57a770363/", // replace with actual link
    },
  ].map(({ Icon, url }, i) => (
    <a
      key={i}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-blue-100 hover:bg-blue-900 hover:text-white transition rounded-full shadow-md"
    >
      <Icon className="w-5 h-5" />
    </a>
  ))}
</div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t pt-6 text-center text-sm text-blue-900">
        &copy; <span className="font-semibold text-blue-900">2023 CODE VIBE INNOVATION</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
