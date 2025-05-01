import React from 'react';
// import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion} from "framer-motion";

const ContactUs = () => {
  return (
    <div className="w-screen min-h-screen   px-24 pt-20 py-16">
         {/* Header Section */}

         <div>
         <motion.h2
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.3 }}>
           <h2 className="text-3xl pt-20 text-center md:text-4xl text-blue-900 font-bold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
         Have Some Questions?
          </span>
           </h2>
           <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
         </motion.h2>



         {/* Grid Layout */}
         <div className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-10">
           {/* Left Side */}
           <motion.div
             className="ps-5"
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             viewport={{ once: false, amount: 0.3 }}>
             <div>
             <h2 className="text-3xl  md:text-4xl text-blue-900 font-bold">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
          How Can We Help You?  
            </span>
             </h2>
               <p className="text-blue-900 text-xl mb-4">
                 Submit the details we will contact you
               </p>
               <p className="italic text-xl text-blue-900 my-8">
                 Other ways to connect us
               </p>

               <div className="space-y-4">
                 <div className="flex items-center space-x-5">
                   <FaFacebook className="text-blue-900 text-2xl text-3xl me-3" />
                   <div className="text-lg">
                     <p className="text-blue-900 font-semibold leading-tight">
                       Follow us on Facebook
                     </p>
                     <p className="text-blue-800 text-sm -mt-1">
                       Follow on Facebook to get latest details of Maxgen
                     </p>
                   </div>
                 </div>

                 <div className="flex items-center  space-x-4">
                   <FaInstagram className="text-blue-900 text-3xl me-3" />
                   <div>
                     <p className="text-blue-900 text-lg font-semibold leading-tight">
                       Follow us on Instagram
                     </p>
                     <p className="text-blue-800 text-sm -mt-1">
                       Follow on Instagram to get latest details of Maxgen
                     </p>
                   </div>
                 </div>

                 <div className="flex items-center text-lg space-x-4">
                   <FaLinkedin className="text-blue-900 text-3xl me-3" />
                   <div>
                     <p className="text-blue-900 text-lg font-semibold leading-tight">
                       Follow us on LinkedIn
                     </p>
                     <p className="text-blue-800 text-sm -mt-1">
                       Follow on LinkedIn to get latest details of Maxgen
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </motion.div>

           <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             viewport={{ once: false, amount: 0.3 }}>

             {/* Right Side - Contact Form */}
             <div >
               <form className="p-6 bg-blue-200">
                 <div className="grid grid-cols-1  space-y-2 md:grid-cols-2 gap-4">

                   <input
                     type="text"
                     placeholder="Full Name"
                     className="border p-2 rounded w-full"
                   />
                   <input
                     type="email"
                     placeholder="Email"
                     className="border p-2 rounded w-full"
                   />
                 </div>

                 <input
                   type="text"
                   placeholder="Mobile Number"
                   className="border p-2 rounded w-full mt-4"
                 />

                

                 <textarea
                   placeholder="Describe your requirement briefly"
                   className="border p-2 rounded w-full h-24 mt-4"
                 ></textarea>

                 <button
                  className="mt-auto w-full bg-gradient-to-r from-[#127DC8] to-[#0E5A9E] hover:from-[#0E5A9E] hover:to-[#127DC8] text-white py-3 px-6 rounded-2xl font-semibold transition duration-300 shadow-md shadow-blue-400/50"
                 
                >
               Submit
                </button>
               </form>
             </div>
           </motion.div>
         </div><motion.div
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: false, amount: 0.3 }}>

           <div className="w-full flex justify-center mt-6">
         
             <iframe
               title="Google Map"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58747.95251506344!2d72.51751564959892!3d23.03305866632895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f2324c95ef%3A0x9bccbe758120f29f!2sSamudra%20Complex!5e0!3m2!1sen!2sin!4v1745757899860!5m2!1sen!2sin"
               width="100%"
               height="400"
               allowFullScreen=""
               loading="lazy"
               className="border-0 shadow-lg rounded-md">
             </iframe>
           </div>
         </motion.div>
       </div>
    </div>
  );
};

export default ContactUs;
