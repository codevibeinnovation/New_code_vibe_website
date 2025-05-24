import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Home1 = () => {
  const featuresOne = [
    "Innovative Learning",
    "Expert Mentors",
    "Flexible Timing",
    "Hands-On Projects",
    "Industry Insights",
    "Job Placement Help",
  ];

  const featuresTwo = [
    "Real-World Projects",
    "Live Mentorship",
    "Flexible Learning",
    "Lifetime Access",
  ];

  const internships = [
    { name: "Python Django", path: "/internship" },
    { name: "Java", path: "/internship" },
    { name: "React JS", path: "/internship" },
    { name: "Mern stack", path: "/internship" },
    { name: "Machine Learning & Data Science", path: "/internship" },
    { name: "PHP Web Development", path: "/internship" },
    { name: "Software Testing", path: "/internship" },
    { name: "Flutter", path: "/internship" },
    { name: "AWS Solution Architect", path: "/internship" },
    { name: "Data Analytics", path: "/internship" },
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
              At Code Vibe Innovation, we offer a creative approach to coding
              education. A space for aspiring developers to build, innovate, and
              grow—at their own pace.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresOne.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 rounded-xl shadow-sm bg-white hover:shadow-lg"
                >
                  <CheckCircle className="text-blue-800 w-6 h-6" />
                  <span className="text-blue-800 text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Empower Section */}
      <section
        ref={empowerRef}
        className="flex items-center px-4 sm:px-6 md:px-10 py-6 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={empowerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800">
              Empower Your Future with
            </h2>
            <span className="text-[#EB5347] text-4xl sm:text-5xl">
              Code Vibe Innovation
            </span>
            <p className="text-blue-900 text-base sm:text-lg leading-relaxed">
              We combine innovation and expertise to help you build your skills,
              gain confidence, and succeed in today’s digital world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresTwo.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 p-3 rounded-xl bg-gray-100"
                >
                  <CheckCircle className="text-blue-900 w-5 h-5" />
                  <span className="text-[#EB5347] font-semibold text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.02 }} className="w-full">
            <motion.img
              src="https://www.myshortlister.com/app/uploads/2022/10/ezgif.com-gif-maker-2.gif"
              alt="Empowerment"
              className="w-full rounded-3xl object-cover max-h-[500px]"
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
        className="flex items-center px-4 sm:px-6 md:px-10 py-6 bg-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={internInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} className="w-full">
            <motion.img
              src="https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8412.jpg"
              alt="Internships"
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

          <div className="space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold underline text-blue-800">
              Our Internship Offerings
            </h2>
            <ul className="list-none space-y-2 text-blue-900 text-xl sm:text-2xl">
              {internships.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02, color: "#ED455E" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                >
                  <ArrowRight className="w-6 h-6" />
                  <Link to={item.path}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
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
