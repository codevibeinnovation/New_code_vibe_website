// import React from "react";

// const courses = [
//   {
//     id: 1,
//     title: "Interview Cracker",
//     badge: "Advanced",
//     points: [
//       "Mock interviews",
//       "Resume building",
//       "HR + Tech round prep",
//       "Confidence boosting techniques",
//     ],
//     logos: ["🧠", "💼", "📝", "🎤"],
//   },
//   {
//     id: 2,
//     title: "C, C++, Java",
//     badge: "Basics",
//     points: [
//       "Programming fundamentals",
//       "OOP concepts",
//       "Competitive coding basics",
//       "Syntax mastery",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//     ],
//   },
//   {
//     id: 3,
//     title: "Core Python",
//     badge: "Beginner",
//     points: [
//       "Data types and variables",
//       "Loops and conditions",
//       "Functions and modules",
//       "File handling",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//     ],
//   },
//   {
//     id: 4,
//     title: "Python + Django + Project",
//     badge: "Intermediate",
//     points: [
//       "Django setup & models",
//       "CRUD operations",
//       "Template rendering",
//       "Mini project deployment",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
//     ],
//   },
//   {
//     id: 5,
//     title: "Frontend (HTML, CSS, JavaScript) + Project",
//     badge: "Basics",
//     points: [
//       "HTML semantics",
//       "CSS layout & styling",
//       "JavaScript basics",
//       "Mini website project",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     ],
//   },
//   {
//     id: 6,
//     title: "SQL, Oracle, PostgreSQL, MongoDB",
//     badge: "Intermediate",
//     points: [
//       "Database concepts",
//       "SQL queries",
//       "NoSQL with MongoDB",
//       "Data modeling",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//       "https://upload.wikimedia.org/wikipedia/commons/6/68/Oracle_logo.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     ],
//   },
//   {
//     id: 7,
//     title: "HTML, CSS, JavaScript, React JS + Project",
//     badge: "Beginner to Advanced",
//     points: [
//       "Modern web development",
//       "JSX & components",
//       "Props and state",
//       "React hooks",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     ],
//   },
//   {
//     id: 8,
//     title: "MERN Stack + Project",
//     badge: "Advanced",
//     points: [
//       "MongoDB for data",
//       "Express APIs",
//       "React frontend",
//       "Node backend integration",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     ],
//   },
//   {
//     id: 9,
//     title: "PPT Making + Documentation + Word",
//     badge: "Basics",
//     points: [
//       "Presentation skills",
//       "PPT formatting",
//       "Project reports",
//       "MS Word usage",
//     ],
//     logos: [
//       "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282018–present%29.svg",
//       "https://upload.wikimedia.org/wikipedia/commons/3/3b/Microsoft_Office_Word_%282018–present%29.svg",
//     ],
//   },
//   {
//     id: 10,
//     title: "Combo Course (Java, Python, C, C++, Excel Free)",
//     badge: "Combo Pack",
//     points: [
//       "Multi-language basics",
//       "Logic building",
//       "Syntax differences",
//       "Excel essentials",
//     ],
//     logos: [
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//       "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
//       "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
//     ],
//   },
//   {
//     id: 11,
//     title: "Coursera Certified: Excel, Word, PowerPoint",
//     badge: "Certified",
//     points: [
//       "Professional documentation",
//       "Data analysis with Excel",
//       "Charts & formulas",
//       "Presentation delivery",
//     ],
//     logos: [
//       "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
//       "https://upload.wikimedia.org/wikipedia/commons/3/3b/Microsoft_Office_Word_%282018–present%29.svg",
//       "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282018–present%29.svg",
//     ],
//   },
// ];

// const CourseCard = () => {
//   return (
//     <div className="relative w-full min-h-screen px-4 sm:px-6 pt-28 pb-12 mt-18 overflow-hidden">

//       {/* Background Overlay */}
//       <div className="absolute inset-0  opacity-70 z-0 animate-background"></div>

//       <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 border-bottom-12 text-center mb-12 drop-shadow-[0_0_10px_rgba(255,215,0,0.6)] animate-headingGlow">
//         Explore Our Courses
//       </h1>

      

//       <div className="relative z-10 pt-10 w-full max-w-[100%] mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fadeIn">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="border border-blue-700 rounded-2xl shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition duration-500 ease-in-out p-6 flex flex-col justify-between transform hover:scale-105"
//           >
//             <div className="flex flex-wrap gap-2 text-black items-center mb-4">
//               {course.logos.map((logo, idx) =>
//                 logo.startsWith("http") ? (
//                   <div
//                     key={idx}
//                     className="bg-blue-200 p-2 rounded-lg border border-gray-700"
//                   >
//                     <img
//                       src={logo}
//                       alt="logo"
//                       className="h-8 w-8 object-contain"
//                     />
//                   </div>
//                 ) : (
//                   <span
//                     key={idx}
//                     className="text-xl   px-2 py-1 rounded-lg"
//                   >
//                     {logo}
//                   </span>
//                 )
//               )}
//             </div>

//             <span className="text-xs font-semibold text-black bg-yellow-400 px-3 py-1 rounded-full w-fit mb-2">
//               {course.badge}
//             </span>

//             <h2 className="text-xl font-bold text-black mb-3">
//               {course.title}
//             </h2>

//             <ul className="list-disc pl-5 text-sm text-black space-y-1 mb-6">
//               {course.points.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>

//             <button className="mt-auto w-full bg-blue-700 hover:bg-blue-600 text-white py-2 rounded-xl font-semibold transition duration-300 shadow-md shadow-yellow-300/40">
//               Learn More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
import React, { useState } from "react";
import { XCircle } from "lucide-react"; // not X, but XCircle for a proper nice icon
// Install lucide-react if not already: npm install lucide-react

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
      title: "C, C++, Java",
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
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdYnLPE7_r_4OhlQaey6Ku4v1e9Lo94PA7SmiNK5ar9YF33LcuQ&s=10&ec=72940545",
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
      title: "Combo Course (Java, Python, C, C++, Excel Free)",
      badge: "Combo Pack",
      points: [
        "Multi-language basics",
        "Logic building",
        "Syntax differences",
        "Excel essentials",
      ],
      logos: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
      ],
    },
    {
      id: 11,
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
      id: 12,
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
    }
    
  ];
  

const CourseCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    technology: "",
    phone: "",
  });

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", technology: "", phone: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const payload = {
    courseName: selectedCourse.title,
    name: formData.name,
    interestedTech: formData.technology,
    phoneNumber: formData.phone,
  };

  fetch("http://localhost:5000/api/course-interest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Server response:", data);
      alert("Form submitted successfully!");
      closeModal();
    })
    .catch((err) => {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    });
};


  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 pt-20 pb-12 mt-18 overflow-hidden">
      <div className="absolute inset-0 opacity-70 z-0 animate-background"></div>

      <div className="flex justify-center items-center h-full">
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316] text-center">
        Explore Our Courses
      </h2>
    </div>
    

      <div className="relative z-10 pt-10 w-full max-w-[100%] mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fadeIn">
        {courses.map((course) => (
          <div
          key={course.id}
          className="border-[2px]  bg-[] border-blue-700 rounded-2xl shadow-[#127DC8] transition duration-500 ease-in-out p-6 flex flex-col justify-between transform hover:scale-105 hover:shadow-[#127DC8] hover:shadow-lg"
        >
        

            <div className="flex flex-wrap gap-2 text-black items-center mb-4">
              {course.logos.map((logo, idx) =>
                logo.startsWith("http") ? (
                  <div key={idx} className=" p-2 rounded-lg border border-blue-800">
                    <img src={logo} alt="logo" className="h-8 w-8 object-contain" />
                  </div>
                ) : (
                  <span key={idx} className="text-xl px-2 py-1 rounded-lg">{logo}</span>
                )
              )}
            </div>

            <span className="text-xs font-semibold text-black bg-yellow-400 px-3 py-1 rounded-full w-fit mb-2">
              {course.badge}
            </span>

            <h2 className="text-xl font-bold text-blue-900 mb-3">{course.title}</h2>

            <ul className="list-disc pl-5 text-sm text-blue-900 space-y-1 mb-6">
              {course.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <button
              className="mt-auto w-full bg-[#127DC8] hover:bg-[#127DC9] text-white py-2 rounded-xl font-semibold transition duration-300 shadow-md shadow-blue-300/40"
              onClick={() => handleLearnMore(course)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white p-6 rounded-lg w-96">
        <button
  className="absolute top-4 right-4 text-blue-900 transition"
  onClick={closeModal}
>
  <XCircle size={32} />
</button>

      

            <h3 className="text-xl font-bold  text-blue-900 mb-4">{selectedCourse.title}</h3>
            <p className="mb-4">{selectedCourse.description}</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm text-blue-900 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-blue-900 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm  text-blue-900 font-semibold mb-2">Interested Technology</label>
                <input
                  type="text"
                  name="technology"
                  value={formData.technology}
                  onChange={handleChange}
                  className="w-full p-2 border border-blue-900 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm  text-blue-900 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-blue-900 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="mt-auto w-full bg-[#127DC8] hover:bg-[#127DC9] text-white py-2 rounded-xl font-semibold transition duration-300 shadow-md shadow-blue-300/40"
              >
                Submit
              </button>
            </form>
        
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
