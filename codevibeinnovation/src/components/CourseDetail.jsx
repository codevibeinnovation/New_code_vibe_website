import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { courses } from "./Courses";
import { FaChevronDown, FaChevronRight, FaArrowRight } from "react-icons/fa";

const CourseDetail = () => {
  const { path } = useParams();
  const course = courses.find((c) => c.path === path);

 

  const [openModules, setOpenModules] = useState({});
  useEffect(() => {
    if (course?.content?.moduleContent) {
      const allOpen = {};
      Object.keys(course.content.moduleContent).forEach((_, index) => {
        allOpen[index] = true;
      });
      setOpenModules(allOpen);
    }
  }, [course]);
  
  // Add this here 👇
  const toggleModule = (index) => {
    setOpenModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  
  

  return (
    <div className="pt-20">
    {/* Hero Section */}
    <div className="relative w-full h-[60vh] overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl sm:text-5xl font-bold drop-shadow-lg">{course.title}</h1>
        <div className="mt-4 flex items-center gap-2 text-sm sm:text-base text-yellow-300 bg-white/10 px-4 py-2 rounded-full shadow-md">
          <span className="hover:underline cursor-pointer">Home</span>
          <span className="text-yellow-200">/</span>
          <span className="hover:underline cursor-pointer">Courses</span>
          <span className="text-yellow-200">/</span>
          <span className="font-semibold">{course.title}</span>
        </div>
      </div>
    </div>
  
    {/* Course Detail Content */}
    <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-20">
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-blue-900 mb-6 border-l-4 border-yellow-400 pl-4">
        {course.title}
      </h2>
  
      {/* Logos */}
      <div className="flex flex-wrap gap-6 mb-10">
        {course.logos.map((logo, idx) =>
          logo.startsWith("http") ? (
            <img
              key={idx}
              src={logo}
              alt="logo"
              className="h-14 w-14 object-contain border border-gray-300 rounded-lg p-2 shadow-md hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <span
              key={idx}
              className="text-4xl text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {logo}
            </span>
          )
        )}
      </div>
  
      {/* Description */}
      <p className="text-lg text-gray-800 mb-10 leading-relaxed hover:text-blue-800 transition-colors duration-300">
        {course.description}
      </p>
  
      {/* Overview Sections */}
      <div className="grid sm:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">What You Can Do:</h3>
          <ul className="space-y-3">
            {course.overview.whatYouCanDo.map((item, idx) => (
              <li key={idx} className="text-lg text-blue-900 bg-blue-50 rounded-md px-4 py-2 shadow hover:bg-blue-100 transition">
                <span className="font-medium text-blue-700">✔</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Who Should Attend:</h3>
          <ul className="space-y-3">
            {course.overview.prerequisites.map((item, idx) => (
              <li key={idx} className="text-lg text-blue-900 bg-blue-50 rounded-md px-4 py-2 shadow hover:bg-blue-100 transition">
                <span className="font-medium text-blue-700">🎯</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
  
      {/* Divider */}
      <hr className="border-gray-300 my-10" />
  
      {/* Course Content */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold text-blue-900 mb-6">Course Content</h2>
  
        {Object.entries(course.content.moduleContent).map(([moduleTitle, topics], index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-blue-200 shadow-md"
          >
            <button
              onClick={() => toggleModule(index)}
              className="w-full flex justify-between items-center p-5 text-left  transition"
            >
              <h3 className="text-xl font-semibold text-blue-900">{moduleTitle}</h3>
              <span className="text-blue-700 text-2xl">
                {openModules[index] ? '-' : '+'}
              </span>
            </button>
            {openModules[index] && (
              <ul className="px-6 pb-6 space-y-2 text-blue-900">
                {topics.map((topic, idx) => (
                  <li key={idx} className="text-base bg-blue-50 px-4 py-2 rounded-md hover:bg-blue-100 transition">
                    📘 {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
  
      {/* Offerings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
        <div className="p-6 bg-white border border-blue-200 rounded-xl shadow hover:bg-blue-50 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">We Offer:</h3>
          <ul className="space-y-3">
            {course.overview.weOffer.map((item, idx) => (
              <li key={idx} className="text-lg bg-blue-50 px-4 py-2 rounded-md text-blue-900 hover:bg-blue-100 transition">
                💡 {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white border border-blue-200 rounded-xl shadow hover:bg-blue-50 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Training Includes:</h3>
          <ul className="space-y-3">
            {course.overview.trainingIncludes.map((item, idx) => (
              <li key={idx} className="text-lg bg-blue-50 px-4 py-2 rounded-md text-blue-900 hover:bg-blue-100 transition">
                 {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  
  );
};

export default CourseDetail;
