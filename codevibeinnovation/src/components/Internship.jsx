// import React, { useState } from "react";
// import { XCircle } from "lucide-react"; // not X, but XCircle for a proper nice icon
// const internships = [
//   {
//     id: 1,
//     title: "Frontend Developer Intern",
//     description: "Work on exciting front-end projects to sharpen your UI/UX skills.",
//     duration: "3 months",
//     image: "https://img.icons8.com/color/96/react-native.png",
//   },
//   {
//     id: 2,
//     title: "Backend Developer Intern",
//     description: "Assist in building robust backend systems and APIs.",
//     duration: "6 months",
//     image: "https://img.icons8.com/color/96/nodejs.png",
//   },
//   {
//     id: 3,
//     title: "Full Stack Developer Intern",
//     description: "Get hands-on experience with both front-end and back-end development.",
//     duration: "4 months",
//     image: "https://img.icons8.com/color/96/source-code.png",
//   },
//   {
//     id: 4,
//     title: "Mobile App Developer Intern",
//     description: "Develop cross-platform mobile applications and enhance user engagement.",
//     duration: "5 months",
//     image: "https://img.icons8.com/color/96/flutter.png",
//   },
//   {
//     id: 5,
//     title: "Data Science Intern",
//     description: "Explore data analytics, machine learning, and AI techniques.",
//     duration: "6 months",
//     image: "https://img.icons8.com/color/96/artificial-intelligence.png",
//   },
//   {
//     id: 6,
//     title: "Python Django Intern",
//     description: "Learn about continuous integration, deployment, and cloud infrastructure management.",
//     duration: "4 months",
//     image: "https://img.icons8.com/color/96/django.png",
//   },
//   {
//     id: 7,
//     title: "MERN Stack Intern",
//     description: "Learn about continuous integration, deployment, and cloud infrastructure management.",
//     duration: "5 months",
//     image: "https://img.icons8.com/color/96/mongodb.png",
//   },
// ];

// const InternshipPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedInternship, setSelectedInternship] = useState(null);
//   const [successMessage, setSuccessMessage] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     resume: null,  // Change to store the file
//   });

//   const handleApplyClick = (internship) => {
//     setSelectedInternship(internship);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setFormData({ name: "", technology: "", phone: "" });
//   };
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: files[0],  // Store the selected file
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const data = new FormData();
//     data.append('internshipTitle', selectedInternship.title); // Dynamic
//     data.append('name', formData.name);
//     data.append('email', formData.email);
//     data.append('phone', formData.phone);
//     data.append('resume', formData.resume); // Selected file
  
//     try {
//       const response = await fetch('http://localhost:5000/api/internship-apply', {
//         method: 'POST',
//         body: data,
//       });
  
//       const result = await response.json();
//       console.log('Success:', result);
  
//       // Set the success message
//       setSuccessMessage("Application submitted successfully!");
  
//       // Optionally, close the modal and clear form
//       setIsModalOpen(false);
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         resume: null,
//       });
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  


//   return (
//     <div className="min-h-screen pt-12 px-4 pb-20 sm:px-6 lg:px-12 bg-white"> 
//       <div className="max-w-9xl pt-20 mx-auto">
//         {/* Title */}
//         <h1
//         className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center animate__animated animate__fadeInDown text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]"
//       >
//         Internship Opportunities
//       </h1>
//        {/* Success Message */}
//   {successMessage && (
//     <div className="text-green-600 text-center font-semibold mb-4">
//       {successMessage}
//     </div>
//   )}
      

//         {/* Internship Cards */}
//         <div className="flex flex-col gap-10">
//         {internships.map((internship) => (
//           <div key={internship.id} className="flex justify-center">
//           <div className="flex border border-blue-900 flex-col md:flex-row items-center md:items-start rounded-2xl shadow-md transform hover:scale-105 hover:shadow-[#127DC8] hover:shadow-lg duration-500 p-8 w-full max-w-4xl">
//               {/* Image */}
//               <div className="w-28 h-28 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
//                 <img
//                   src={internship.image}
//                   alt={internship.title}
//                   className="w-full h-full object-contain rounded-xl"
//                 />
//               </div>
      
//               {/* Text Content */}
//               <div className="flex flex-col justify-between flex-grow text-center md:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2">
//                   {internship.title}
//                 </h2>
//                 <p className="text-blue-900 mb-3 text-base sm:text-lg">
//                   {internship.description}
//                 </p>
//                 <p className="text-blue-900 font-semibold text-base sm:text-lg mb-4 md:mb-0">
//                   Duration: {internship.duration}
//                 </p>
//               </div>
      
//               {/* Button */}
//               <div className="mt-4 md:mt-0 md:ml-6">
//                 <button
//                   className="mt-auto w-full bg-gradient-to-r from-[#127DC8] to-[#0E5A9E] hover:from-[#0E5A9E] hover:to-[#127DC8] text-white py-3 px-6 rounded-2xl font-semibold transition duration-300 shadow-md shadow-blue-400/50"
//                   onClick={() => handleApplyClick(internship)}
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
      
      
//       </div>

//       {/* Modal for Application Form */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
//             {/* Close Icon */}
//             <button
//             className="absolute top-4 right-4 text-blue-900 transition"
//             onClick={closeModal}
//           >
//             <XCircle size={32} />
//           </button>
//             <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
//               Apply for {selectedInternship.title}
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-sm font-medium text-blue-900">Full Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-sm font-medium text-blue-900 ">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="phone" className="block text-sm font-medium text-blue-900">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="resume" className="block text-sm font-medium text-blue-900">Resume (Upload File)</label>
//                 <input
//                   type="file"
//                   id="resume"
//                   name="resume"
//                   onChange={handleFileChange}
//                   required
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="flex justify-end gap-4">
//                 <button
//                   type="submit"
//                   className="mt-auto w-full bg-[#127DC8] hover:bg-[#127DC9] text-white py-2 rounded-xl font-semibold transition duration-300 shadow-md shadow-blue-300/40"
//                 >
//                   Submit Application
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
      
//     </div>
//   );
// };

// export default InternshipPage;
import React, { useState } from "react";
import { XCircle } from "lucide-react";
const internships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      description: "Work on exciting front-end projects to sharpen your UI/UX skills.",
      duration: "3 months",
      image: "https://img.icons8.com/color/96/react-native.png",
    },
    {
      id: 2,
      title: "Backend Developer Intern",
      description: "Assist in building robust backend systems and APIs.",
      duration: "6 months",
      image: "https://img.icons8.com/color/96/nodejs.png",
    },
    {
      id: 3,
      title: "Full Stack Developer Intern",
      description: "Get experience with both front-end and back-end development.",
      duration: "4 months",
      image: "https://img.icons8.com/color/96/source-code.png",
    },
    {
      id: 4,
      title: "Mobile App Developer Intern",
      description: "Develop cross-platform mobile applications and user engagement.",
      duration: "5 months",
      image: "https://img.icons8.com/color/96/flutter.png",
    },
    {
      id: 5,
      title: "Data Science Intern",
      description: "Explore data analytics, machine learning, and AI techniques.",
      duration: "6 months",
      image: "https://img.icons8.com/color/96/artificial-intelligence.png",
    },
    {
      id: 6,
      title: "Python Django Intern",
      description: "Learn about deployment, and cloud infrastructure management.",
      duration: "4 months",
      image: "https://img.icons8.com/color/96/django.png",
    },
    {
      id: 7,
      title: "MERN Stack Intern",
      description: "Learn about continuous integration and cloud infrastructure.",
      duration: "5 months",
      image: "https://img.icons8.com/color/96/mongodb.png",
    },
  ];
  

const InternshipPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null, // Change to store the file
  });

  const handleApplyClick = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0], // Store the selected file
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const data = new FormData();
  //   data.append('internshipTitle', selectedInternship.title); // Dynamic
  //   data.append('name', formData.name);
  //   data.append('email', formData.email);
  //   data.append('phone', formData.phone);
  //   data.append('resume', formData.resume); // Selected file

  //   // try {
  //   //   const response = await fetch('http://localhost:5000/api/internship-apply', {
  //   //     method: 'POST',
  //   //     body: data,
  //   //   });

  //   //   const result = await response.json();
  //   //   console.log('Success:', result);

  //   //   // Show success message
  //   //   setSuccessMessage("Application submitted successfully!");

  //   //   // Hide the success message after 3 seconds
  //   //   setTimeout(() => {
  //   //     setSuccessMessage(""); // Clear the success message
  //   //   }, 3000);

  //   //   // Optionally, close the modal and clear form
  //   //   setIsModalOpen(false);
  //   //   setFormData({
  //   //     name: "",
  //   //     email: "",
  //   //     phone: "",
  //   //     resume: null,
  //   //   });
  //   // } catch (error) {
  //   //   console.error('Error:', error);
  //   // }
  // };

  return (
    <div className="min-h-screen pt-12 px-4 pb-20 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-9xl pt-20 mx-auto">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center animate__animated animate__fadeInDown text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
          Internship Opportunities
        </h1>

        {/* Success Message */}
        {successMessage && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-blue-900 text-white font-semibold p-4 rounded-lg">
              {successMessage}
            </div>
          </div>
        )}

        {/* Internship Cards */}
        <div className="flex flex-col gap-10">
          {internships.map((internship) => (
            <div key={internship.id} className="flex justify-center">
              <div className="flex border border-blue-900 flex-col md:flex-row items-center md:items-start rounded-2xl shadow-md transform hover:scale-105 hover:shadow-[#127DC8] hover:shadow-lg duration-500 p-8 w-full max-w-4xl">
                {/* Image */}
                <div className="w-28 h-28 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  <img
                    src={internship.image}
                    alt={internship.title}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-between flex-grow text-center md:text-left">
                  <h2 className="text-xl sm:text-xl font-bold text-blue-900 mb-2">
                    {internship.title}
                  </h2>
                  <p className="text-blue-900 mb-3 text-base sm:text-lg">
                    {internship.description}
                  </p>
                  <p className="text-blue-900 font-semibold text-base sm:text-lg mb-4 md:mb-0">
                    Duration: {internship.duration}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button
                    className="mt-auto w-full bg-gradient-to-r from-[#127DC8] to-[#0E5A9E] hover:from-[#0E5A9E] hover:to-[#127DC8] text-white py-3 px-6 rounded-2xl font-semibold transition duration-300 shadow-md shadow-blue-400/50"
                 
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default InternshipPage;
