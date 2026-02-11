
import React, { useState, useEffect, useRef } from "react";
import { Clock } from "lucide-react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    description: "Work on exciting front-end projects to sharpen your UI/UX skills.",
    duration: "3 months",
    image: "https://img.icons8.com/color/96/react-native.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    perks: ["Certificate", "Placement Assistance", "Flexible Timing"],
  },
  {
    id: 2,
    title: "Backend Developer Intern",
    description: "Assist in building robust backend systems and APIs.",
    duration: "6 months",
    image: "https://img.icons8.com/color/96/nodejs.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["Node.js", "Express.js", "MongoDB", "REST API", "Authentication"],
    perks: ["Certificate", "Placement Assistance", "Live Projects"],
  },
  {
    id: 3,
    title: "Full Stack Developer Intern",
    description: "Get experience with both front-end and back-end development.",
    duration: "4 months",
    image: "https://img.icons8.com/color/96/source-code.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    perks: ["Certificate", "Placement Support", "Career Mentorship"],
  },
  {
    id: 4,
    title: "Mobile App Developer Intern",
    description: "Develop cross-platform mobile applications and user engagement.",
    duration: "5 months",
    image: "https://img.icons8.com/color/96/flutter.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["Flutter", "Dart", "Firebase", "UI Design"],
    perks: ["Certificate", "Flexible Timing", "Live App Deployment"],
  },
  {
    id: 5,
    title: "Data Science Intern",
    description: "Explore data analytics, machine learning, and AI techniques.",
    duration: "6 months",
    image: "https://img.icons8.com/color/96/artificial-intelligence.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML Models"],
    perks: ["Certificate", "Placement Guidance", "Capstone Project"],
  },
  {
    id: 6,
    title: "Python Django Intern",
    description: "Learn about deployment and cloud infrastructure management.",
    duration: "4 months",
    image: "https://img.icons8.com/color/96/django.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["Python", "Django", "PostgreSQL", "REST API", "Heroku"],
    perks: ["Certificate", "Job Assistance", "Resume Building"],
  },
  {
    id: 7,
    title: "MERN Stack Intern",
    description: "Learn about continuous integration and cloud infrastructure.",
    duration: "5 months",
    image: "https://img.icons8.com/color/96/mongodb.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "GitHub"],
    perks: ["Certificate", "Career Support", "Team Collaboration"],
  },
  {
    id: 8,
    title: "Cyber Security Intern",
    description: "Learn about penetration testing, ethical hacking, and securing networks.",
    duration: "3 months",
    image: "https://assets.bizclikmedia.net/900/8dc2872cdb3d622f052fee37f0a9b7de:15ca417f19db17b12c677342137eccca/gettyimages-1310426274-0-jpg.webp",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["Ethical Hacking", "Linux", "Kali Tools", "Network Security"],
    perks: ["Certificate", "Placement Aid", "CTF Challenges"],
  },
  {
    id: 9,
    title: "AI & Machine Learning Intern",
    description: "Build AI models, work on deep learning and automation projects.",
    duration: "6 months",
    image: "https://img.icons8.com/color/96/robot-2.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["Python", "TensorFlow", "Deep Learning", "NLP", "ML Ops"],
    perks: ["Certificate", "Placement Preparation", "AI Projects"],
  },
  {
    id: 10,
    title: "Advanced Excel Intern",
    description: "Master formulas, PivotTables, dashboards, and Excel automation.",
    duration: "2 months",
    image: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["Excel", "VLOOKUP", "PivotTables", "Macros", "Dashboards"],
    perks: ["Certificate", "Interview Prep", "Excel Templates"],
  },
  {
    id: 11,
    title: "AWS Cloud Intern",
    description: "Learn cloud computing, EC2, S3, IAM, and scalable deployment.",
    duration: "3 months",
    image: "https://img.icons8.com/color/96/amazon-web-services.png",
    mode: ["online", "offline"],
    certification: true,
    placement: true,
    skills: ["AWS", "EC2", "S3", "IAM", "Deployment"],
    perks: ["Certificate", "Cloud Lab Access", "Placement Aid"],
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
    resume: null,
  });

  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 500,
        minWidth: 500,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x8b5cf6,
        backgroundColor: 0xfdfbfb,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 18.0,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const handleApplyClick = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
    setFormData({ name: "", email: "", phone: "", resume: null });
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setSuccessMessage(`Application for "${selectedInternship.title}" submitted successfully!`);
  };
  const commonFormLink ="https://docs.google.com/forms/d/e/1FAIpQLSctjw-7kOrGFW1RuasWoTR1mXo7WuIc2sRK9NpusOauIiho_g/viewform?usp=header"

  return (
    <div
    ref={vantaRef}
    className="min-h-screen pt-32 pb-32 px-4 sm:px-6 lg:px-16 font-inter relative overflow-hidden"
  >
    {/* Background animation */}
    <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-300 opacity-10 blur-[120px] animate-spin-slow z-0"></div>
    <div className="pointer-events-none absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-pink-200 opacity-20 blur-[100px] animate-bounce-slow z-0"></div>
    <div className="pointer-events-none absolute bottom-[-80px] left-[40%] w-[600px] h-[600px] bg-indigo-200 opacity-10 rounded-full blur-[150px] animate-pulse z-0"></div>

    <div className="relative z-10 flex flex-col gap-12 max-w-4xl mx-auto">
      {internships.map((internship, index) => {
        const gradients = [
          "from-pink-200 via-red-100 to-orange-50",
          "from-yellow-200 via-orange-100 to-pink-50",
          "from-purple-200 via-indigo-100 to-blue-50",
        ];
        const badgeColors = [
          "bg-pink-100 text-pink-800 border-pink-200",
          "bg-yellow-100 text-yellow-800 border-yellow-200",
          "bg-purple-100 text-purple-800 border-purple-200",
        ];
        const cardGradient = gradients[index % gradients.length];

        return (
          <div
            key={internship.id}
            className={`relative bg-gradient-to-br ${cardGradient} border border-purple-100 backdrop-blur-md shadow-xl rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:brightness-105 group`}
          >
            <div className="absolute top-4 right-4 flex items-center gap-2 text-xs font-medium bg-purple-100 text-purple-800 px-3 py-1 rounded-full shadow">
              <Clock className="w-4 h-4" />
              {internship.duration}
            </div>

            <div className="flex-shrink-0 bg-white p-2 rounded-2xl shadow-md">
              <img
                src={internship.image}
                alt={internship.title}
                className="h-24 w-24 object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-extrabold text-purple-900 mb-1">{internship.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{internship.description}</p>

              <div className="flex gap-2 flex-wrap mb-3">
                {internship.mode.includes("online") && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs shadow-sm">
                    💻 Online
                  </span>
                )}
                {internship.mode.includes("offline") && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs shadow-sm">
                    📍 Offline
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {internship.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs border rounded-full shadow-sm transition hover:scale-105 ${badgeColors[idx % badgeColors.length]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => window.open(commonFormLink, "_blank")}
                className="mt-2 w-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:scale-105 transition"
              >
                Apply Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default InternshipPage;
