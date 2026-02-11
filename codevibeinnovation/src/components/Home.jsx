import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Slider from "react-slick";

// ✅ Move these two CSS imports to main.jsx (not here for Vite)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import "swiper/css/pagination";


import {
  GraduationCap,
  Monitor,
  BookOpen,
  Layers,
  Globe,
  Clock,
  FileText,
  Mic,
  Zap
} from 'lucide-react';

const Home1 = () => {
  const featuresOne = [
    "Innovative Learning",
    "Expert Mentors",
    "Flexible Timing",
    "Hands-On Projects",
    "Industry Insights",
    "Job Placement Help",
  ];

  const testimonials = [
    {
      name: "NENCY PATEL",
      course: "Python+Django",
      feedback:
       "A fantastic place to learn and grow! The team at code vibe innovation is incredibly helpful",
      stars: 5,
      image: "https://via.placeholder.com/60" // Replace with real image
    },
    {
      name: "PAROTOSH TRIPATHI",
      course: "Flutter",
      feedback:
        "One of the best IT companies for training and skill development. Great experience!",
      stars: 5,
      image: "https://via.placeholder.com/60"
    },
    {
      name: "ANITA SHARMA",
      course: "React JS",
      feedback:
        "Wonderful learning environment and supportive trainers. Highly recommended.",
      stars: 5,
      image: "https://via.placeholder.com/60"
    },
    {
      name: "RAHUL VERMA",
      course: "Node JS",
      feedback:
        "Completed my Node.js training successfully with hands-on experience and guidance.",
      stars: 5,
      image: "https://via.placeholder.com/60"
    },
    {
      name: "KAVYA JOSHI",
      course: "UI/UX",
      feedback:
        "The trainers here are very friendly and knowledgeable. My design skills improved greatly!",
      stars: 5,
      image: "https://via.placeholder.com/60"
    }
  ];

  const featuresTwo = [
    "Real-World Projects",
    "Live Mentorship",
    "Flexible Learning",
    "Lifetime Access",
  ];
  const services = [
    {
      title: "Personalized Coaching",
      description: "Individual sessions tailored to your learning pace and goals.",
      icon: GraduationCap,
    },
    {
      title: "Developer Training",
      description: "Hands-on programming courses to build real-world skills.",
      icon: Monitor,
    },
    {
      title: "Faculty Development",
      description: "Empowering educators with modern teaching techniques.",
      icon: BookOpen,
    },
    {
      title: "Corporate Programs",
      description: "Customized training for teams to boost productivity and skills.",
      icon: Layers,
    },
    {
      title: "Live Online Classes",
      description: "Engaging virtual sessions accessible from anywhere.",
      icon: Clock,
    },
    {
      title: "Weekend Batches",
      description: "Flexible schedules designed for working professionals.",
      icon: FileText,
    },
    {
      title: "Expert Seminars",
      description: "Insightful sessions with industry leaders and thought influencers.",
      icon: Mic,
    },
    {
      title: "Crash Courses",
      description: "Quick, intensive learning paths for high-impact skills.",
      icon: Zap,
    },
  ];
  const countries = [
    {
      country: "India",
      flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
      description:
        "Our programs are empowering students across India to shape successful careers in tech.",
    },
    {
      country: "USA",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      description:
        "Our students are making an impact in dynamic technology and innovation ecosystems in the USA.",
    },
    {
      country: "Canada",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
      description:
        "Learners are applying their skills in Canada’s forward-thinking tech and research sectors.",
    },
    {
      country: "Australia",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
      description:
        "Students are contributing to Australia’s growing demand for digital and tech talent.",
    },
  ];

  // Replace the previous `internships` array with logo URLs added
  const internships = [
    { name: "C Programming", path: "/courses/cjava", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++ Programming", path: "/courses/cjava", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", path: "/courses/cjava", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python Django", path: "/courses/pythonDjangoAPIwithRealWorldProject", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "React JS", path: "/courses/FrontendDevelopment", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Database Administrator", path: "/courses/DatabaseAdministratorcourse", logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { name: "Flutter", path: "/courses/Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "MERN Stack", path: "/courses/MernStack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    {
      name: "Advanced Excel with AI",
      path: "/courses/AdvancedExcelWithAI",
      logo: "https://cdn-icons-png.flaticon.com/512/732/732220.png"
    },

    { name: "FastAPI", path: "/courses/FastApi", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "AWS Cloud", path: "/courses/Aws", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "Data Science", path: "/courses/DataScience", logo: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png" },
    { name: "Figma", path: "/courses/FigmaPhotoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Cyber Security", path: "/courses/cyber-security", logo: "https://cdn-icons-png.flaticon.com/512/1010/1010914.png" },
  ];


  const heroRef = useRef(null);
  const empowerRef = useRef(null);
  const internRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const fullText = "From Learners To Leaders";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText((prev) => fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);




  const heroInView = useInView(heroRef, { once: true });
  const empowerInView = useInView(empowerRef, { once: true });
  const internInView = useInView(internRef, { once: true });


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  }
  return (
    <div className="w-full bg-white pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex items-center   sm:px-6 md:px-10 py-10 bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Image */}
          <motion.div whileHover={{ scale: 1.02 }} className="w-full">
            <motion.img
              src="https://5.imimg.com/data5/SELLER/Default/2023/10/353395945/MR/SM/PW/56220350/multimedia-graphics-design-1000x1000.png"
              alt="Innovation Illustration"
              className="w-full object-contain max-h-[400px] drop-shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 via-blue-500 to-yellow-500">
              CODE VIBE INNOVATION
            </h2>

            <h2
              className="text-xl sm:text-2xl font-bold italic text-purple-900"
              style={{
                textShadow: "0 0 20px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.2)",
              }}
            >
              "{typedText}"
              <span className="blinking-cursor text-pink-600">|</span>
            </h2>

            <p className="text-blue-900 text-lg sm:text-xl leading-relaxed bg-white/60 p-4 rounded-xl shadow-md">
              Code Vibe Innovation is where ideas come to life through code. We blend creativity,
              hands-on practice, and mentorship to shape future tech leaders. It’s not just learning—
              it’s launching your journey in tech with confidence. Build your vibe, one project at a time.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuresOne.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-blue-200 hover:border-blue-500 shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-pink-600"
                  >
                    <CheckCircle className="w-7 h-7" />
                  </motion.div>
                  <span className="text-blue-900 font-semibold text-base sm:text-lg">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        ref={empowerRef}
        className="relative flex items-center justify-center px-4 sm:px-6 md:px-10 py-24 bg-gradient-to-br from-blue-100 via-white to-pink-100 overflow-hidden"
      >
        {/* Background Animated Blobs */}
        <div className="absolute w-[250px] h-[250px] bg-blue-400 opacity-30 rounded-full blur-3xl animate-float1 left-[-100px] top-[-80px] z-0"></div>
        <div className="absolute w-[200px] h-[200px] bg-pink-300 opacity-20 rounded-full blur-2xl animate-float2 right-[-50px] bottom-[-80px] z-0"></div>
        <div className="absolute w-[180px] h-[180px] bg-yellow-200 opacity-30 rounded-full blur-2xl animate-float3 top-[50%] left-[60%] z-0"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={empowerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          {/* Text Section */}
          <div className="space-y-6 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-800 via-purple-600 to-pink-500 bg-clip-text animate-gradient"
            >
              Empower Your Future with
            </motion.h2>

            <motion.span
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-[#EB5347] text-4xl sm:text-5xl font-extrabold block drop-shadow-md"
            >
              Code Vibe Innovation
            </motion.span>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Elevate your coding journey with hands-on projects, mentorship, and a supportive
              community. We’re here to turn your passion into a powerful tech career.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {featuresTwo.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className={`flex items-center space-x-3 sm:space-x-4 p-3 sm:p-5 rounded-3xl shadow-lg cursor-pointer transition-transform
                ${i % 2 === 0
                      ? "bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-white"
                      : "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white"
                    }
                `}
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-30
                  ${i % 2 === 0 ? "text-pink-600" : "text-indigo-300"
                      } shadow-md`}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-semibold text-sm sm:text-lg drop-shadow-md">{feature}</span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Image Section */}
          <motion.div whileHover={{ scale: 1.03 }} className="w-full relative z-10">
            <motion.img
              src="https://www.myshortlister.com/app/uploads/2022/10/ezgif.com-gif-maker-2.gif"
              alt="Empowerment"
              className="w-full rounded-3xl object-cover max-h-[500px] shadow-xl shadow-blue-200 hover:shadow-indigo-300 transition"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Internship Section */}
      <section
        ref={internRef}
        className="px-4 sm:px-6 md:px-10 py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
      >
        {/* Background animated colorful blobs */}
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-pink-300 rounded-full opacity-40 filter blur-3xl animate-blob mix-blend-multiply"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400 rounded-full opacity-30 filter blur-2xl animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-purple-400 rounded-full opacity-30 filter blur-3xl animate-blob animation-delay-4000 mix-blend-multiply"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={internInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-screen-xl mx-auto relative z-10"
        >
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-900 to-indigo-700 mb-16 drop-shadow-xl underline decoration-blue-900 underline-offset-4 pb-2"
          >
            Start Your Learning Journey
          </h2>




          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {internships.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                whileHover={{
                  scale: 1.08,
                  rotateX: 6,
                  rotateY: 6,
                  boxShadow:
                    "0 20px 40px rgba(59,130,246,0.35), 0 0 30px rgba(251,191,36,0.5)",
                }}
                whileTap={{ scale: 0.96, rotate: -1 }}
                className="relative group bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-blue-200 hover:border-rose-400 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center overflow-hidden cursor-pointer"
              >
                {/* Multi-layer pulse ring behind logo */}
                <div className="absolute top-6 w-24 h-24 rounded-full bg-blue-300 opacity-20 animate-ping blur-lg z-0" />
                <div className="absolute top-6 w-24 h-24 rounded-full bg-pink-300 opacity-30 animate-pulse blur-xl z-0" />
                <div className="absolute top-6 w-24 h-24 rounded-full bg-yellow-300 opacity-10 animate-ping delay-1000 blur-2xl z-0" />

                {/* Soft gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-blue-100 opacity-0 group-hover:opacity-60 transition-opacity duration-700 z-0 rounded-3xl pointer-events-none" />

                {/* Floating logo with shadow and gentle animation */}
                <img
                  src={course.logo}
                  alt={course.name}
                  className="relative w-full h-32 object-contain mb-5 transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-110 z-10 drop-shadow-2xl animate-[float_3s_ease-in-out_infinite]"
                />

                {/* Enhanced shimmer title on hover */}
                <h3 className="text-lg font-semibold text-blue-900 group-hover:text-rose-600 transition-colors duration-300 z-10 relative">
                  <span className="relative z-10">{course.name}</span>
                  <span className="absolute left-0 top-1/2 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 animate-shimmer pointer-events-none" />
                </h3>

                {/* Invisible clickable layer */}
                <Link
                  to={course.path}
                  className="absolute inset-0 z-20"
                  aria-label={`Explore ${course.name}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 md:px-10 py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-white relative overflow-hidden">
        {/* Animated Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-300 via-sky-400 to-indigo-300 rounded-full opacity-25 blur-3xl animate-blob mix-blend-multiply -translate-x-20 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-sky-300 via-blue-400 to-indigo-500 rounded-full opacity-20 blur-3xl animate-blob animation-delay-3000 mix-blend-multiply translate-x-12 translate-y-8"></div>

        <div className="max-w-screen-xl mx-auto relative z-10">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-900 to-indigo-700 mb-16 drop-shadow-xl underline decoration-blue-900 underline-offset-4 pb-2"
          >
            Global Presence of Our Students
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {countries.map(({ country, flag, description }, idx) => (
              <div
                key={country}
                className="relative bg-gradient-to-br from-indigo-100 via-white to-sky-100 p-8 rounded-3xl shadow-xl border border-gray-200 hover:border-indigo-400 transition-transform duration-500 hover:scale-[1.05] hover:shadow-[0_25px_60px_rgba(99,102,241,0.3)] cursor-pointer overflow-hidden fade-in-up"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Soft glowing blobs behind flag */}
                <div className="absolute top-8 w-36 h-28 rounded-xl bg-sky-200 opacity-10 blur-2xl animate-pulse -z-10"></div>
                <div className="absolute top-10 w-32 h-24 rounded-lg bg-blue-200 opacity-10 blur-3xl animate-ping -z-20"></div>

                {/* Flag */}
                <div className="w-32 h-20 mb-6 rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img src={flag} alt={country} className="max-w-full max-h-full object-contain" />
                </div>

                {/* Country Name */}
                <h3 className="text-2xl font-bold mb-3 text-indigo-700 drop-shadow-sm">
                  {country}
                </h3>

                {/* Description */}
                <p className="text-blue-800 max-w-xs leading-relaxed hover:text-indigo-900 transition-colors duration-300">
                  {description}
                </p>

                {/* Hover overlay glow */}
                <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-100 via-blue-50 to-white opacity-0 hover:opacity-40 transition-opacity duration-700 blur-xl z-0"></span>
              </div>
            ))}
          </div>

        </div>

        <style>
          {`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .fade-in-up {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-name: fadeInUp;
          animation-duration: 0.6s;
          animation-timing-function: ease;
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }
      `}
        </style>
      </section>

      <section className="relative bg-gradient-to-br from-blue-50 via-sky-100 to-indigo-100 py-24 px-6 sm:px-10 lg:px-14 overflow-hidden">
        {/* Blurry floating shapes */}
        <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl animate-pulse-fast"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-indigo-300 rounded-full opacity-30 blur-2xl animate-pulse-slow"></div>

        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-900 to-indigo-700 mb-16 drop-shadow-xl underline decoration-blue-900 underline-offset-4 pb-2"
          >
            Skill Building Opportunities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-14">
            {services.map((service, index) => (
              <div
                key={index}
                className={`
            relative bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-blue-100 shadow-lg text-center
            animate-fadeIn delay-${index}00
            transform transition-all duration-500
            hover:shadow-[0_12px_40px_rgba(96,165,250,0.4)]
            hover:scale-105
            hover:-translate-y-2
            group overflow-hidden
          `}
                style={{ perspective: "1000px" }}
              >
                {/* Animated glowing border */}
                <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-full transition-all duration-500 group-hover:w-3/4 -translate-x-1/2"></span>

                {/* Icon with gradient background */}
                <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-blue-400 via-sky-500 to-indigo-600 text-white shadow-xl group-hover:animate-pulse-slow">
                  <service.icon size={44} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-blue-900 text-xl mb-3 tracking-wide leading-snug drop-shadow-md transition-colors duration-300 group-hover:text-sky-700">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-blue-900 text-base leading-relaxed transition-colors duration-300 group-hover:text-blue-900">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Animations and Utility Styles */}
        <style jsx>{`
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(25px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 0.7s ease-out forwards;
    }
    .delay-000 { animation-delay: 0s; }
    .delay-100 { animation-delay: 0.15s; }
    .delay-200 { animation-delay: 0.3s; }
    .delay-300 { animation-delay: 0.45s; }
    .delay-400 { animation-delay: 0.6s; }
    .delay-500 { animation-delay: 0.75s; }
    .delay-600 { animation-delay: 0.9s; }
    .delay-700 { animation-delay: 1.05s; }

    @keyframes pulse-slow {
      0%, 100% {
        transform: scale(1);
        opacity: 0.3;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.5;
      }
    }
    .animate-pulse-slow {
      animation: pulse-slow 3s ease-in-out infinite;
    }

    @keyframes pulse-fast {
      0%, 100% {
        transform: scale(1);
        opacity: 0.2;
      }
      50% {
        transform: scale(1.2);
        opacity: 0.4;
      }
    }
    .animate-pulse-fast {
      animation: pulse-fast 2s ease-in-out infinite;
    }
  `}</style>
      </section>
      <div className="w-full bg-gradient-to-br from-indigo-100 via-sky-100 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-sky-900 to-indigo-700 mb-16 drop-shadow-xl underline decoration-blue-900 underline-offset-4 pb-2">
          They Dreamed Big. We Empowered Them. They Reviewed Us.
        </h2>
    
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-2">
              <div className="w-full max-w-[850px] mx-auto bg-white border  bg-gradient-to-br from-white via-indigo-50 to-blue-100 border-blue-900 rounded-3xl shadow-xl py-8 px-6 sm:px-10 transition-all duration-300 hover:shadow-2xl hover:border-indigo-300">
                <div className="flex flex-col items-center text-center space-y-5 animate-fade-in-up">
                  
                  {/* Feedback */}
                  <p className="text-base sm:text-lg text-gray-700 italic leading-relaxed">
                    “{item.feedback}”
                  </p>
    
                  {/* Name and Position */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.position}</p>
                  </div>
    
                  {/* Stars */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < item.stars ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.284 3.946a1 1 0 00.95.69h4.147c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.284 3.946c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.785.57-1.84-.197-1.54-1.118l1.284-3.946a1 1 0 00-.364-1.118L2.83 9.373c-.783-.57-.38-1.81.588-1.81h4.147a1 1 0 00.95-.69l1.284-3.946z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
    
    












      <Helmet>
        <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Code Vibe Innovation",
      "url": "https://codevibeinnovation.com/"
    }
  `}</script>
      </Helmet>

    </div>

  );
};

export default Home1;
