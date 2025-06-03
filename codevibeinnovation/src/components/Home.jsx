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
  { name: "Cyber Security", path: "/internship", logo: "https://cdn-icons-png.flaticon.com/512/1010/1010914.png" },
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
    <div className="w-full bg-white pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex items-center px-4 sm:px-6 md:px-10 py-6 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="w-full">
            <motion.img
              src="https://5.imimg.com/data5/SELLER/Default/2023/10/353395945/MR/SM/PW/56220350/multimedia-graphics-design-1000x1000.png"
              alt="Innovation Illustration"
              className="w-full object-contain max-h-[400px]"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
              CODE VIBE INNOVATION
            </h2>
            <h2
              className="text-blue-900 text-xl sm:text-2xl font-bold uppercase"
              style={{
                textShadow:
                  "0 0 22px rgba(0, 0, 0, 0.3), 0 0 7px rgba(0, 0, 0, 0.2)",
              }}
            >
              {typedText}
              <span className="blinking-cursor">|</span>
            </h2>
            <p className="text-[#293D8C] text-lg sm:text-xl leading-relaxed">
            Code Vibe Innovation is where ideas come to life through code.
We blend creativity, hands-on practice, and mentorship to shape future tech leaders.
It’s not just learning—it’s launching your journey in tech with confidence.
Build your vibe, one project at a time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {featuresOne.map((feature, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-white via-blue-50 to-white border border-blue-100 hover:border-blue-400 transition-all duration-300"
    >
      <motion.div
        whileHover={{ rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-blue-700"
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

      {/* Empower Section */}
      <section
  ref={empowerRef}
  className="flex items-center px-4 sm:px-6 md:px-10 py-16 bg-white"
>
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={empowerInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.7 }}
    className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
  >
    {/* Text Section */}
    <div className="space-y-6 text-center md:text-left">
      <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">
        Empower Your Future with
      </h2>
      <span className="text-[#EB5347] text-4xl sm:text-5xl font-extrabold block">
        Code Vibe Innovation
      </span>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md">
        Elevate your coding journey with hands-on projects, mentorship, and a supportive
        community. We’re here to turn your passion into a powerful tech career.
      </p>

      {/* Feature Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        {featuresTwo.map((feature, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 bg-white shadow-md p-4 rounded-2xl border border-gray-200 transition"
          >
            <CheckCircle className="text-[#EB5347] w-5 h-5" />
            <span className="text-gray-800 font-medium">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Image Section */}
    <motion.div whileHover={{ scale: 1.02 }} className="w-full">
      <motion.img
        src="https://www.myshortlister.com/app/uploads/2022/10/ezgif.com-gif-maker-2.gif"
        alt="Empowerment"
        className="w-full rounded-3xl object-cover max-h-[500px] "
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
   {/* Internship Section with Cards */}
   <section
  ref={internRef}
  className="px-4 sm:px-6 md:px-10 py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
>
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={internInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8 }}
    className="max-w-screen-xl mx-auto"
  >
    {/* Heading with slight zoom */}
    <motion.h2
      initial={{ scale: 0.95, opacity: 0 }}
      animate={internInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-3xl sm:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-blue-700 via-blue-500 to-rose-500 text-transparent bg-clip-text drop-shadow-md tracking-wide"
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
            scale: 1.07,
            rotate: 1,
            boxShadow: "0px 15px 35px rgba(59,130,246,0.3)",
          }}
          whileTap={{ scale: 0.97, rotate: -1 }}
          className="relative group bg-white p-6 rounded-3xl border border-blue-100 hover:border-rose-400 shadow-lg transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
        >
          {/* Pulse ring behind logo */}
          <div className="absolute top-6 w-24 h-24 rounded-full bg-blue-300 blur-2xl opacity-20 animate-ping z-0" />

          {/* Soft gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 opacity-0 group-hover:opacity-50 transition-opacity duration-700 z-0 rounded-3xl"></div>

          {/* Floating logo */}
          <img
            src={course.logo}
            alt={course.name}
            className="relative w-full h-32 object-contain mb-5 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 z-10 drop-shadow-xl animate-[float_3s_ease-in-out_infinite]"
          />

          {/* Shimmer title on hover */}
          <h3 className="text-lg font-semibold text-blue-800 group-hover:text-rose-600 transition-colors duration-300 z-10 relative">
            <span className="relative z-10">{course.name}</span>
            <span className="absolute left-0 top-1/2 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 animate-shimmer pointer-events-none" />
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

 
 

 


<section className="px-4 sm:px-6 md:px-10 py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-screen-xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-12 underline decoration-rose-500 decoration-4 underline-offset-8 tracking-wide drop-shadow-md">
      Global Presence of Our Students
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {countries.map(({ country, flag, description }, idx) => (
       <div
  key={country}
  className="relative bg-white p-8 rounded-3xl shadow-lg border border-transparent cursor-pointer flex flex-col items-center text-center transition-all duration-500 hover:shadow-[0_15px_40px_rgba(255,62,94,0.35)] hover:border-rose-400 overflow-hidden fade-in-up"
  style={{ animationDelay: `${idx * 150}ms` }}
>

          <div className="w-28 h-20 mb-6 rounded-md overflow-hidden shadow-lg transition-transform duration-500 hover:scale-110">
            <img
              src={flag}
              alt={country}
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
          <h3 className="text-2xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 drop-shadow-md">
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
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fade-in-up {
        opacity: 0;
        animation-fill-mode: forwards;
        animation-name: fadeInUp;
        animation-duration: 0.6s;
        animation-timing-function: ease;
      }
    `}
  </style>
</section>




  <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6 sm:px-10 lg:px-14">
  <div className="max-w-screen-xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent underline decoration-indigo-400 decoration-4 underline-offset-8 tracking-wide drop-shadow-md">
      We Provide
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative bg-white p-8 rounded-3xl shadow-sm border border-blue-100 cursor-pointer text-center
            animate-fadeIn delay-${index}00
            transform transition-transform duration-500
            hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]  /* blue shadow */
            hover:border-[#3B82F6]  /* blue-500 */
            hover:scale-105
            hover:-translate-y-1
            hover:[transform-style:preserve-3d]
            group
            overflow-hidden
          `}
        >
          {/* Bottom border highlight */}
          <span className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full transition-all duration-500 group-hover:w-2/3 -translate-x-1/2"></span>

          {/* Icon */}
          <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] text-white shadow-lg transition-all duration-500 group-hover:animate-bounce">
            <service.icon size={40} />
          </div>

          {/* Title */}
          <h3 className="font-semibold text-blue-900 text-xl mb-3 tracking-wide leading-snug drop-shadow-sm transition-colors duration-300 group-hover:text-[#3B82F6]">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
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
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
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
