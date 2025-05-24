import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import InternshipPage from './components/Internship';
import Course from './components/Course';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Blog from './components/Blog';
import CourseDetail from './components/CourseDetail';


import BlogDetails from './components/BlogDetails';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Ensure Home page is the default route */}
          <Route path="/" element={<Home />} />
          <Route path="/internship" element={<InternshipPage />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/courses/:path" element={<CourseDetail />} />

   
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}; 

export default App;
