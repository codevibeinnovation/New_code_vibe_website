import { useParams } from "react-router-dom";
import { courses } from "./Courses";

import React, { useState } from 'react';

import { FaChevronDown} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa"; // Right arrow icon
import { FaChevronRight } from "react-icons/fa"; // Replace with your preferred one
const CourseDetail = () => {
  const { path } = useParams();
const course = courses.find((c) => c.path === path);



  if (!course)
    return (
      <div className="text-center mt-10 pt-24 text-lg font-semibold text-gray-600">
        Course not found
      </div>
    );

  return (
    <div className="pt-20">
    {/* Hero Image with Breadcrumb */}
    <div className="relative w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[60vh] overflow-hidden">
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-full object-cover"
    />
  
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
  
    {/* Breadcrumb */}
    <div className="absolute bottom-6 left-4 sm:left-6 text-white text-lg sm:text-xl md:text-2xl font-medium transition-transform duration-300 transform hover:scale-105">
      <span>Home</span>
      <span className="mx-2">/</span>
      <span>Course</span>
      <span className="mx-2">/</span>
      <span>{course.title}</span>
    </div>
  </div>
  

    {/* Main Content */}
    <div className="max-w-5xl mx-auto p-6 sm:p-8 pt-20 pb-12 rounded-xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6">
        {course.title}
      </h1>

      {/* Logos */}
      <div className="flex flex-wrap gap-6 mb-8">
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
      <p className="text-lg text-blue-900 mb-10 leading-relaxed hover:text-blue-800 transition-colors duration-300">
        {course.description}
      </p>

      {/* Overview */}
      <div className="space-y-8 mb-12">
  {/* What You Can Do */}
  <div>
  <h3 className="text-2xl font-semibold text-blue-800 mb-2">What You Can Do:</h3>
  <ul className="pl-0 text-blue-900 space-y-2">
    {course.overview.whatYouCanDo.map((item, idx) => (
      <li key={idx} className="flex items-start text-lg hover:text-blue-800">
        <FaArrowRight className="text-dark-blue mr-2 mt-1 w-4 h-4" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>


  {/* Who Should Attend */}
  <div>
    <h3 className="text-2xl font-semibold text-blue-800 mb-2">Who Should Attend:</h3>
    <ul className="pl-0 text-blue-900 space-y-2">
      {course.overview.prerequisites.map((item, idx) => (
        <li key={idx} className="flex items-start text-lg hover:text-blue-800">
          <FaArrowRight className="text-dark-blue mr-2 mt-1" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>


      {/* Divider */}
      <hr className="border-gray-300 my-10" />

      {/* Course Content */}
   <div className="space-y-6 px-4 sm:px-6 lg:px-12">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-900 hover:scale-105 transition-transform duration-300">
    Course Content
  </h2>

  {Object.entries(course.content.moduleContent).map(([moduleTitle, topics], index) => {
    const [open, setOpen] = useState(false);

    return (
      <div
        key={index}
        className="bg-blue-50 rounded-xl shadow-md transition-all duration-300"
      >
        {/* Module Header */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center p-4 sm:p-6 lg:p-8 text-left group hover:bg-blue-100 transition-all duration-300"
        >
          <h3 className="text-sm sm:text-sm lg:text-xl font-semibold text-blue-900 group-hover:text-blue-800">
            {moduleTitle}
          </h3>
          <span className="text-blue-700 transition-transform duration-300">
            {open ? <FaChevronDown className="w-5 h-5" /> : <FaChevronRight className="w-5 h-5" />}
          </span>
        </button>

        {/* Module Topics */}
        {open && (
          <ul className="px-6 pb-6 text-blue-900 space-y-2">
            {topics.map((topic, topicIdx) => (
              <li
                key={topicIdx}
                className="flex items-start text-sm sm:text-base md:text-lg hover:text-blue-800"
              >
                <FaChevronRight className="mr-2 sm:mr-3 text-dark-blue w-4 h-4 sm:w-5 sm:h-5 mt-1" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  })}
</div>

      {/* Offerings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
        {/* We Offer */}
        <div className="p-6 bg-blue-50 rounded-xl shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">We Offer:</h3>
          <ul className="list-disc pl-6 text-blue-900 space-y-2">
            {course.overview.weOffer.map((item, idx) => (
              <li key={idx} className="flex items-center text-lg hover:text-blue-800">
                <FaArrowRight className="mr-3 text-dark-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Training Includes */}
        <div className="p-6 bg-blue-50 rounded-xl shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Training Includes:</h3>
          <ul className="list-disc pl-6 text-blue-900 space-y-2">
            {course.overview.trainingIncludes.map((item, idx) => (
              <li key={idx} className="flex items-center text-lg hover:text-blue-800">
                <FaArrowRight className="mr-3 text-dark-blue" />
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
