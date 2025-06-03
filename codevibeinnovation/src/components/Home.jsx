import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
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
      "My experience as a intern at Code Vibe Innovation has been amazing. The team is really supportive, and the mentors take the time to guide you through real-world projects",
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
  const fullText = "FROM LEARNERS TO LEADERS";

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

  return (
    <div className="w-full bg-white pt-16 overflow-x-hidden">
     {/* Hero Section */}
<section
ref={heroRef}
className="flex items-center  sm:px-6 md:px-10 py-10 bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100"
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
      className="text-xl sm:text-2xl font-bold uppercase text-purple-900"
      style={{
        textShadow: "0 0 20px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      {typedText}
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
                ${
                  i % 2 === 0
                    ? "bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 text-white"
                    : "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white"
                }
                `}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white bg-opacity-30
                  ${
                    i % 2 === 0 ? "text-pink-600" : "text-indigo-300"
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
        {/* Heading with slight zoom */}
        <motion.h2
          initial={{ scale: 0.95, opacity: 0 }}
          animate={internInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-700 via-blue-500 to-rose-500 text-transparent bg-clip-text drop-shadow-lg tracking-wide"
        >
          Explore Our Courses
        </motion.h2>
    
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
    

 
 

 


    <section className="px-4 sm:px-6 md:px-10 py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    {/* Background colorful blobs */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-pink-300 rounded-full opacity-15 filter blur-3xl animate-blob mix-blend-multiply -translate-x-20 -translate-y-12"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-rose-400 rounded-full opacity-10 filter blur-3xl animate-blob animation-delay-3000 mix-blend-multiply"></div>
  
    <div className="max-w-screen-xl mx-auto relative z-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-12 underline decoration-rose-500 decoration-4 underline-offset-8 tracking-wide drop-shadow-md">
        Global Presence of Our Students
      </h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {countries.map(({ country, flag, description }, idx) => (
          <div
            key={country}
            className="relative bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-transparent cursor-pointer flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_15px_40px_rgba(255,62,94,0.35)] hover:border-rose-400 overflow-hidden fade-in-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Glowing rings behind flag */}
            <div className="absolute top-8 w-32 h-24 rounded-xl bg-rose-300 opacity-15 filter blur-xl animate-pulse -z-10"></div>
            <div className="absolute top-10 w-28 h-20 rounded-lg bg-pink-300 opacity-10 filter blur-2xl animate-ping -z-20"></div>
  
            {/* Flag container */}
            <div className="w-32 h-20 mb-6 rounded-md overflow-hidden shadow-lg transition-transform duration-500 hover:scale-110 hover:animate-bounce flex items-center justify-center border border-gray-200 bg-white">
              <img
                src={flag}
                alt={country}
                className="max-w-full max-h-full object-contain"
              />
            </div>
  
            <h3 className="text-2xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 drop-shadow-md transition-colors duration-300 hover:from-pink-600 hover:to-rose-700">
              {country}
            </h3>
  
            <p className="text-gray-700 max-w-xs leading-relaxed transition-colors duration-300 hover:text-gray-900">
              {description}
            </p>
  
            <span className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-rose-100 via-pink-50 to-white opacity-0 hover:opacity-50 transition-opacity duration-700 blur-xl z-0"></span>
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
  
  




  <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 py-20 px-6 sm:px-10 lg:px-14">
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 bg-gradient-to-r from-purple-700 via-pink-600 to-yellow-500 bg-clip-text text-transparent underline decoration-yellow-400 decoration-4 underline-offset-8 tracking-wide drop-shadow-lg">
      We Provide
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
      {services.map((service, index) => (
        <div
          key={index}
          className={`
            relative bg-white p-8 rounded-3xl shadow-lg border border-transparent cursor-pointer text-center
            animate-fadeIn delay-${index}00
            transform transition-transform duration-500
            hover:shadow-[0_12px_40px_rgba(251,191,36,0.6)] /* warm yellow shadow */
            hover:border-yellow-400
            hover:scale-110
            hover:-translate-y-2
            hover:[transform-style:preserve-3d]
            group
            overflow-hidden
          `}
          style={{ perspective: "800px" }}
        >
          {/* Animated glowing bottom border */}
          <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-600 rounded-full transition-all duration-500 group-hover:w-3/4 -translate-x-1/2"></span>

          {/* Icon with pulse background */}
          <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-xl transition-all duration-700 group-hover:animate-pulse">
            <service.icon size={44} />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-purple-900 text-xl mb-3 tracking-wide leading-snug drop-shadow-md transition-colors duration-300 group-hover:text-yellow-500">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed transition-colors duration-300 group-hover:text-purple-800">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>

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
      animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    .delay-000 {
      animation-delay: 0s;
    }
    .delay-100 {
      animation-delay: 0.15s;
    }
    .delay-200 {
      animation-delay: 0.3s;
    }
    .delay-300 {
      animation-delay: 0.45s;
    }
    .delay-400 {
      animation-delay: 0.6s;
    }
    .delay-500 {
      animation-delay: 0.75s;
    }
    .delay-600 {
      animation-delay: 0.9s;
    }
    .delay-700 {
      animation-delay: 1.05s;
    }

    @keyframes pulse {
      0%, 100% {
        box-shadow: 0 0 10px 3px rgba(251, 191, 36, 0.6);
      }
      50% {
        box-shadow: 0 0 18px 7px rgba(251, 191, 36, 0.9);
      }
    }
    .animate-pulse {
      animation: pulse 2.5s infinite;
    }
  `}</style>
</section>








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
