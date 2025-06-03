import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
// Import your courses array or pass it as a prop
const courses = [
  {
    id: 1,
    title: "Interview Cracker",
     path:"interviewcracker",
    badge: "Advanced",
    points: [
      "Mock interviews",
      "Resume building",
      "HR + Tech round prep",
      "Confidence boosting techniques",
    ],
    logos: ["🧠", "💼", "📝", "🎤"],
  },
  {
    id: 2,
    title: "Core Programming Languages (C, C++, Java)",
    badge: "Basics",
     path:"cjava",
    points: [
      "Programming fundamentals",
      "OOP concepts",
      "Competitive coding basics",
      "Syntax mastery",
    ],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    ],
  },
  {
    id: 3,
    title: "Core Python",
     path:"CorePyhton",
    badge: "Beginner",
    points: [
      "Data types and variables",
      "Loops and conditions",
      "Functions and modules",
      "File handling",
    ],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    ],
  },
  {
    id: 4,
    title: "Python + Django + Project",
    badge: "Intermediate",
    path:"pythonDjangoAPIwithRealWorldProject",
    points: [
      "Django setup & models",
      "CRUD operations",
      "Template rendering",
      "Mini project deployment",
    ],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6T3-7FPwCrY-NLApLrFezXyTiQGkoOcvnz8dMp_xkdaR759RWFg&s=10&ec=72940545",
    ],
  },
  {
    id: 5,
    title: "Frontend (HTML, CSS, JavaScript) + Project",
    badge: "Basics",
    path:"HtmlCssJavascriptWithRealWorldProject",
    points: [
      "HTML semantics",
      "CSS layout & styling",
      "JavaScript basics",
      "Mini website project",
    ],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ],
  },
  {
    id: 6,
    title: "Database Administrator course",
    badge: "Intermediate",
    path:"DatabaseAdministratorcourse",
    points: [
      "Database concepts",
      "SQL queries",
      "NoSQL with MongoDB",
      "Data modeling",
    ],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
     
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    ],
  },
  {
    id: 7,
    path:"FrontendDevelopment",
    title: "HTML, CSS, JavaScript, React JS + Project",
    badge: "Beginner to Advanced",
    points: [
      "Modern web development",
      "JSX & components",
      "Props and state",
      "React hooks",
    ],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    ],
  },
  {
    id: 8,
    title: "MERN Stack + Project",
    badge: "Advanced",
      path:"MernStack",
    points: [
      "MongoDB for data",
      "Express APIs",
      "React frontend",
      "Node backend integration",
    ],
    logos: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    ],
  },
  {
    id: 9,
    title: "Advanced Excel with AI",
    badge: "Basics to Advanced",
     path:"AdvancedExcelWithAI",
    points: [
      "Advanced Excel Fundamentals",
      "Automation with Macros and VBA",
      "AI-powered Data Analysis Techniques",
      "Custom AI Solutions & Automation",
    ],
    logos: [
       
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
     
    ]
  },
  
  {
    id: 10,
    title: "Fast API",
    path:"FastApi",
    badge: "advanced",
    points: [
      "Introduction & Setup ",
      "FastAPI Core Concepts",
      "Database Integration",
      "Real-World Projects",
    ],
    logos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvM4s5HXrhQ7D8oQr36KBHqWlFmeg4ES7zzFqbzTco3qL5ZfKgBA&s=10&ec=72940545",
      
    ],
  },
  {
    id: 11,
    title: "AWS Cloud",
    badge: "advanced",
      path:"Aws",
    points: [
      "Cloud Computing Fundamentals",
      "AWS Core Services (EC2, S3, RDS)",
      "IAM & Security Best Practices",
      "Deploying Scalable Applications",
    ],
    logos: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhuF_-yCODbjwM__RJ6e2kUGMvhxWfBMiYsgIBqz-wi9gQPQdFw&s&ec=72940545",
    ],
  },
  {
id: 12,
title: "Flutter Development",
badge: "advanced",
 path:"Flutter",
points: [
  "Introduction to Flutter Framework",
  "Building UI with Widgets",
  "State Management (Provider, Riverpod)",
  "Flutter for Web and Mobile",
  "Integrating APIs and Firebase",
],
logos: [
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
],
},

{
  id: 14,
  title: "DataScience",
  badge: "Advanced",
  path: "DataScience",
  points: [
    "Python Programming Basics to Advanced",
    "Machine Learning Algorithms and Techniques",

    "Statistics and Time Series Analysis"
  ],
  logos: [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://www.trustedtechteam.com/cdn/shop/products/Excel_grande.png?v=1676068154",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdD07Wmb_onuF5t2hwRKrBH7HYc7fCE0A0A&s",
   
    
  ],
},
{
  id: 15,
  title: "Cyber Security",
  badge: "Advanced",
  path: "cyber-security",
  points: [
    "Fundamentals of Cyber Security and Network Security",
    "Ethical Hacking Techniques and Tools",
    "Risk Management, Firewalls & Cryptography"
  ],
  logos: [
    "https://cdn-icons-png.flaticon.com/512/3986/3986483.png", // Cyber Shield
    "https://cdn-icons-png.flaticon.com/512/595/595067.png",    // Ethical Hacking
    "https://cdn-icons-png.flaticon.com/512/2721/2721290.png"   // General Security
  ]
},
{
  id: 13,
  title: "Figma & Photoshop",
  badge: "Basic to advanced",
  path:"FigmaPhotoshop",
  points: [
    "Introduction ",
    "Designing Prototypes",
    "Photo Retouching and Manipulation",
    "Collaborative Design Techniques"
  
  ],
  logos: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1947WuYOc-RqCo-7M25ZaxQjfDzXfe6wR6rZNQTUjbPFMGOB4vg&s=10&ec=72940545",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UQs-3-OesYgajT-EoA9gib7Om2Pavo-RDgpv2OdN-Q&s&ec=72940545",
  ],
  }





  
];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const CoursesSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = (path) => {
    navigate(`/courses/${encodeURIComponent(path)}`);
  };
  
  return (
    <div>
    <div className="relative w-full min-h-screen px-4 sm:px-6 py-10 pt-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
    {/* Background Glow */}
    <div className="absolute inset-0 z-0 animate-pulse bg-gradient-to-r from-blue-100 via-pink-100 to-orange-100 opacity-20" />

    {/* Heading */}
    <div className="text-center z-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-800 via-pink-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
        Explore Our Courses
      </h2>
      <p className="mt-4 text-sm sm:text-base text-blue-900">
        Unlock your future with hands-on practical learning.
      </p>
    </div>

    {/* Course Cards */}
    <div className="relative z-10 pt-16 grid gap-10 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((course, i) => (
        <motion.div
          key={course.id}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          className="group relative p-6 bg-white/30 backdrop-blur-xl border border-blue-300 rounded-3xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transform transition-all duration-500 cursor-pointer"
        >
          {/* Gradient Glow Border */}
          <div className="absolute -inset-1 z-0 bg-gradient-to-r from-blue-400 via-pink-400 to-orange-400 blur-md opacity-30 group-hover:opacity-50 rounded-3xl" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Logos */}
            <div className="flex flex-wrap gap-2 items-center mb-4">
              {course.logos.map((logo, idx) =>
                logo.startsWith("http") ? (
                  <div key={idx} className="p-1 rounded-lg border border-blue-600 bg-white">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                    />
                  </div>
                ) : (
                  <span
                    key={idx}
                    className="text-xs sm:text-sm px-2 py-1 rounded-md bg-blue-100 text-blue-800 font-medium"
                  >
                    {logo}
                  </span>
                )
              )}
            </div>

            {/* Badge */}
            <span className="text-xs bg-yellow-400 text-white font-bold px-3 py-1 rounded-full w-fit mb-2">
              {course.badge}
            </span>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">{course.title}</h3>

            {/* Points */}
            <ul className="list-disc pl-4 text-sm sm:text-base text-blue-900 space-y-1 mb-6">
              {course.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => handleLearnMore(course.path)}
              className="mt-auto w-full bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white py-2 rounded-xl font-semibold transition-all duration-300 shadow-md"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  
    
    </div>
  );
};

export default CoursesSection;
