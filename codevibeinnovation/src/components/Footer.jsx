import React from 'react';
import logo from '../assets/logo.svg';
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Smartphone,
  Building2
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 border-t border-gray-200 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-6">

        {/* About */}
        <div>
          <h5 className="text-2xl sm:text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
            CODE VIBE INNOVATION
          </h5>
          <p className="text-sm text-blue-900 mb-4 mt-2 leading-relaxed">
            We deliver creative tech solutions with passion and integrity. From innovative web apps to project mentoring, we’re committed to digital excellence.
          </p>
          <img src={logo} alt="Code Vibe Innovation Logo" className="h-14 w-auto mt-3" />
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="text-xl font-bold mb-4 text-blue-900">QUICK LINKS</h1>
          <ul className="space-y-2 text-sm text-blue-900">
            {["Home", "Courses", "Internship", "About Us", "Contact Us", "Blog"].map((item, i) => (
              <li key={i}>
                <a
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-blue-600 hover:underline transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h1 className="text-xl font-bold mb-4 text-blue-900">COURSES</h1>
          <ul className="space-y-2 text-sm text-blue-900">
            {[
              { name: "MERN Stack", path: "/courses/MernStack" },
              { name: "Python + Django", path: "/courses/pythonDjangoAPIwithRealWorldProject" },
              { name: "Advanced Excel + AI", path: "/courses/AdvancedExcelWithAI" },
              { name: "AWS Cloud", path: "/courses/Aws" },
              { name: "Database Administrator", path: "/courses/DatabaseAdministratorcourse" },
              { name: "Data Science", path: "/courses/DataScience" },
              { name: "Cyber Security", path: "/courses/cyber-security" }
            ].map(({ name, path }, i) => (
              <li key={i}>
                <a
                  href={path}
                  className="hover:text-blue-600 hover:underline transition-all duration-300"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social Links */}
        <div>
          <h1 className="text-xl font-bold mb-4 text-blue-900">GET IN TOUCH</h1>
          <div className="space-y-3 text-sm text-blue-900">
            <p className="flex items-center gap-2">
              <Send className="w-4 h-4 text-blue-600" />
              codevibeinnovation@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-blue-600" />
              95746 26933
            </p>
            <p className="flex items-start gap-2">
              <Building2 className="w-6 h-6 text-blue-600 mt-1" />
              A-803, Samudra Complex, above Saffron Restaurant, Near Girish Cold Drinks, CG Road, Navrangpura - 380009
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { Icon: Instagram, url: "https://www.instagram.com/codevibeinnovation/" },
              { Icon: Linkedin, url: "https://www.linkedin.com/in/codevibe-innovation-57a770363/" },
              { Icon: Facebook, url: "https://facebook.com" }
            ].map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-100 hover:bg-blue-900 hover:text-white transition rounded-full shadow"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t pt-6 text-center text-sm text-blue-900">
        &copy; <span className="font-semibold">{new Date().getFullYear()} CODE VIBE INNOVATION</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
