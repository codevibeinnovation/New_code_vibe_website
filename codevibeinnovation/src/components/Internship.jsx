import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Laptop2,LocateFixed } from "lucide-react";

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    description: "Work on exciting front-end projects to sharpen your UI/UX skills.",
    duration: "3 months",
    image: "https://img.icons8.com/color/96/react-native.png",
    mode: ["online", "offline"],
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    description: "Assist in building robust backend systems and APIs.",
    duration: "6 months",
    image: "https://img.icons8.com/color/96/nodejs.png",
    mode: ["online", "offline"],
  },
  {
    id: 3,
    title: "Full Stack Developer Intern",
    description: "Get experience with both front-end and back-end development.",
    duration: "4 months",
    image: "https://img.icons8.com/color/96/source-code.png",
    mode: ["online", "offline"],
  },
  {
    id: 4,
    title: "Mobile App Developer Intern",
    description: "Develop cross-platform mobile applications and user engagement.",
    duration: "5 months",
    image: "https://img.icons8.com/color/96/flutter.png",
    mode: ["online", "offline"],
  },
  {
    id: 5,
    title: "Data Science Intern",
    description: "Explore data analytics, machine learning, and AI techniques.",
    duration: "6 months",
    image: "https://img.icons8.com/color/96/artificial-intelligence.png",
    mode: ["online", "offline"],
  },
  {
    id: 6,
    title: "Python Django Intern",
    description: "Learn about deployment and cloud infrastructure management.",
    duration: "4 months",
    image: "https://img.icons8.com/color/96/django.png",
    mode: ["online", "offline"],
  },
  {
    id: 7,
    title: "MERN Stack Intern",
    description: "Learn about continuous integration and cloud infrastructure.",
    duration: "5 months",
    image: "https://img.icons8.com/color/96/mongodb.png",
    mode: ["online", "offline"],
  },
  {
    id: 8,
    title: "Cyber Security Intern",
    description: "Learn about penetration testing, ethical hacking, and securing networks.",
    duration: "3 months",
    image: "https://assets.bizclikmedia.net/900/8dc2872cdb3d622f052fee37f0a9b7de:15ca417f19db17b12c677342137eccca/gettyimages-1310426274-0-jpg.webp",
    mode: ["online", "offline"],
  },
  {
    id: 9,
    title: "AI & Machine Learning Intern",
    description: "Build AI models, work on deep learning and automation projects.",
    duration: "6 months",
    image: "https://img.icons8.com/color/96/robot-2.png",
    mode: ["online", "offline"],
  },
  {
    id: 10,
    title: "Advanced Excel Intern",
    description: "Master formulas, PivotTables, dashboards, and Excel automation.",
    duration: "2 months",
    image: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png",
    mode: ["online", "offline"],
  },
  {
    id: 11,
    title: "AWS Cloud Intern",
    description: "Learn cloud computing, EC2, S3, IAM, and scalable deployment.",
    duration: "3 months",
    image: "https://img.icons8.com/color/96/amazon-web-services.png",
    mode: ["online", "offline"],
  }
];


const InternshipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null, // store file
  });

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleApplyClick = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call logic here

    setIsModalOpen(false);
    setSuccessMessage(`Application for "${selectedInternship.title}" submitted successfully!`);
  };

  return (
    <div className="min-h-screen pt-20 pb-32 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-[#f0f9ff] via-[#e0f2fe] to-[#fef9ff] relative overflow-hidden font-inter select-none">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-150px] left-[-200px] w-[550px] h-[550px] bg-gradient-to-tr from-indigo-300 via-pink-200 to-orange-200 opacity-30 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-[-150px] right-[-200px] w-[500px] h-[500px] bg-gradient-to-bl from-orange-200 via-blue-100 to-pink-300 opacity-25 rounded-full blur-[140px] animate-pulse" />

      {/* Floating Particles */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-30 blur-md animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-24 left-16 w-12 h-12 bg-orange-400 rounded-full opacity-25 blur-md animate-[float_7s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-blue-500 rounded-full opacity-20 blur-md animate-[float_10s_ease-in-out_infinite]" />

      {/* Header */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-pink-600 to-orange-500 drop-shadow-xl tracking-tight animate__animated animate__fadeInDown">
          🚀 Discover <span className="underline ">Internship Opportunities</span>
        </h1>

        {/* Success Message */}
        {successMessage && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-semibold px-10 py-5 rounded-3xl shadow-2xl animate-bounce text-lg select-text">
              {successMessage}
            </div>
          </div>
        )}

        {/* Internship Cards */}
        <div className="grid grid-cols-1 gap-14">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div
                className="relative flex flex-col md:flex-row items-center md:items-start
                  bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300
                  border border-slate-200 rounded-3xl shadow-[0_15px_60px_rgba(59,130,246,0.3)]
                  hover:shadow-indigo-400/50 hover:scale-[1.04] transition-all duration-500 w-full max-w-4xl p-8 overflow-hidden group cursor-pointer select-none"
              >
                {/* Glowing Gradient Border on Hover */}
                <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-indigo-400 via-pink-400 to-orange-300 opacity-0 group-hover:opacity-40 blur-3xl z-0 transition-opacity duration-700" />

                {/* Internship Logo */}
                <div className="relative w-28 h-28 mb-6 md:mb-0 md:mr-6 flex-shrink-0 z-10">
                  <img
                    src={internship.image}
                    alt={internship.title}
                    className="w-full h-full object-contain rounded-xl border border-blue-200 shadow-lg"
                    draggable={false}
                  />
                </div>

                {/* Details */}
                <div className="relative z-10 flex flex-col text-center md:text-left flex-grow">
                  <h2 className="text-2xl font-extrabold text-blue-900 mb-2">{internship.title}</h2>
                  <p className="text-blue-800 text-base sm:text-lg mb-3 leading-relaxed">
                    {internship.description}
                  </p>

                  <p className="text-blue-900 font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-700" />
                    <span className="text-blue-700">{internship.duration}</span>
                  </p>

                  {/* Badge */}
                  <div className="flex items-center gap-4 text-blue-800 font-medium">
                  {internship.mode?.includes("online") && (
                    <div className="flex items-center gap-1">
                      <Laptop2 className="w-4 h-4" />
                      Online
                    </div>
                  )}
                  {internship.mode?.includes("offline") && (
                    <div className="flex items-center gap-1">
                      <LocateFixed className="w-4 h-4" />
                      Offline
                    </div>
                  )}
                </div>
                
                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyClick(internship)}
                    className="mt-6 rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition-colors shadow-lg active:scale-[0.98]"
                    aria-label={`Apply for ${internship.title} internship`}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full relative">
            <h3 id="modal-title" className="text-2xl font-bold mb-6 text-center text-blue-900">
              Apply for {selectedInternship?.title}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="border border-blue-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end gap-4 mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-md border border-blue-700 text-blue-700 hover:bg-blue-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InternshipPage;
