import React from 'react';
import logo from '../assets/logo.svg';
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Smartphone,
  Building2,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-blue-50 via-white to-blue-100 text-blue-900 py-8 px-8 border-t border-blue-200 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mb-10">

        {/* About */}
        <div>
          <h5 className="text-3xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
            CODE VIBE INNOVATION
          </h5>
          <p className="text-sm text-blue-800 mb-4 mt-3 leading-relaxed max-w-xs">
            Delivering creative tech solutions with passion and integrity. From innovative web apps to mentoring — committed to digital excellence.
          </p>
          <img src={logo} alt="Code Vibe Innovation Logo" className="h-16 w-auto mt-2" />
          <p className="mt-2 text-xs text-blue-900 italic">"FROM LEARNERS TO LEADERS"</p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-5 border-b border-blue-300 pb-2 w-max">
            QUICK LINKS
          </h2>
          <ul className="space-y-3 text-sm text-blue-900">
            {["Home", "Courses", "Internship", "About Us", "Contact Us", "Blog"].map((item, i) => (
              <li key={i}>
                <a
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-blue-700 hover:underline transition-all duration-300 font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-xl font-bold mb-5 border-b border-blue-300 pb-2 w-max">
            COURSES
          </h2>
          <ul className="space-y-3 text-sm text-blue-900">
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
                  className="hover:text-blue-700 hover:underline transition-all duration-300 font-medium"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info & Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-5 border-b border-blue-300 pb-2 w-max">
            GET IN TOUCH
          </h2>
          <div className="space-y-4 text-sm text-blue-900 max-w-xs">
            <p className="flex items-center gap-3 font-medium">
              <Send className="w-5 h-5 text-blue-600" />
              <a href="mailto:codevibeinnovation@gmail.com" className="hover:text-blue-700 underline">
                codevibeinnovation@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3 font-medium">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <a href="tel:+919574626933" className="hover:text-blue-700 underline">
                95746 26933
              </a>
            </p>
            <p className="flex items-start gap-3 font-medium">
              <Building2 className="w-12 h-6 mt-1 text-blue-600" />
              <span>
                A-803, Samudra Complex, above Saffron Restaurant, Near Girish Cold Drinks,
                CG Road, Navrangpura - 380009
              </span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">
            {[
              { Icon: Instagram, url: "https://www.instagram.com/codevibeinnovation/", label: "Instagram" },
              { Icon: Linkedin, url: "https://www.linkedin.com/in/codevibe-innovation-57a770363/", label: "LinkedIn" },
              { Icon: Facebook, url: "https://facebook.com", label: "Facebook" }
            ].map(({ Icon, url, label }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 bg-blue-100 rounded-full shadow-md hover:bg-blue-700 hover:text-white transform hover:scale-110 transition-transform duration-300 ease-in-out"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-300 pt-6 text-center text-sm text-blue-700 font-semibold tracking-wide select-none">
        &copy; {new Date().getFullYear()} CODE VIBE INNOVATION. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
