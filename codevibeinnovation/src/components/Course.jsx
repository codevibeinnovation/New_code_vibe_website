
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const courses = [
    {
      id: 1,
      title: "Interview Cracker",
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
      title: "PPT Making + Documentation + Word",
      badge: "Basics",
      points: [
        "Presentation skills",
        "PPT formatting",
        "Project reports",
        "MS Word usage",
      ],
      logos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMApr6tW5NhBmqDmOxygX25UWvgbH5SZBw2c0LchzHw&s&ec=72940545",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrido6Usyed_owgiqFsZmdNvxR_dQEVhFE8H0iAW3C66TWLc_KQ&s=10&ec=72940545",
      ],
    },
    
    {
      id: 10,
      title: "Fast API",
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
  id: 13,
  title: "Figma & Photoshop",
  badge: "Basic to advanced",
  points: [
    "Introduction ",
    "Designing Prototypes",
    "Photo Retouching and Manipulation",
    "Collaborative Design Techniques",
    "Layer Masking and Blending",
    "Design Systems and Components",

  ],
  logos: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1947WuYOc-RqCo-7M25ZaxQjfDzXfe6wR6rZNQTUjbPFMGOB4vg&s=10&ec=72940545",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UQs-3-OesYgajT-EoA9gib7Om2Pavo-RDgpv2OdN-Q&s&ec=72940545",
  ],
}


    
  ];
  

const CourseCard = () => {
  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/courses/${id}`);
  };


 



  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 py-10 overflow-hidden">
    <div className="absolute inset-0 opacity-70 z-0 animate-background"></div>
  
    <div className="flex justify-center items-center h-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316] text-center">
        Explore Our Courses
      </h2>
    </div>
  
    <div className="relative z-10 pt-10 w-full mx-auto grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fadeIn">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border-2 border-blue-700 rounded-2xl shadow-[#127DC8] transition duration-500 ease-in-out p-5 sm:p-6 flex flex-col justify-between hover:scale-105 hover:shadow-[#127DC8] hover:shadow-lg"
        >
          <div className="flex flex-wrap gap-2 items-center mb-4">
            {course.logos.map((logo, idx) =>
              logo.startsWith("http") ? (
                <div key={idx} className="p-1 sm:p-2 rounded-lg border border-blue-800">
             <img src={logo} alt="logo" className="h-6 w-6 sm:h-8 sm:w-8 object-contain" />
                </div>
              ) : (
                <span key={idx} className="text-sm sm:text-base px-2 py-1 rounded-lg">{logo}</span>
              )
            )}
          </div>
  
          <span className="text-xs font-semibold text-black bg-yellow-400 px-3 py-1 rounded-full w-fit mb-2">
            {course.badge}
          </span>
  
          <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">{course.title}</h2>
  
          <ul className="list-disc pl-5 text-sm sm:text-base text-blue-900 space-y-1 mb-6">
            {course.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
  
          <button
            onClick={() => handleLearnMore(course.id)}
            className="mt-auto w-full bg-[#127DC8] hover:bg-[#127DC9] text-white py-2 rounded-xl font-semibold transition duration-300 shadow-md shadow-blue-300/40 text-sm sm:text-base"
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default CourseCard;
