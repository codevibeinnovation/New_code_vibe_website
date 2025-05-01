import React from "react";

const services = [
  {
    imgSrc: "https://cdn.dribbble.com/userupload/41932818/file/original-e278cd051f54ad3262d79da1f0e8c7b3.gif", // web design
    title: "Web Design & Development",
    description:
      "We specialize in modern, responsive, and performance-optimized websites to help your business grow online.",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/24343475/file/original-93eccd85db71370c542e86f05641dcea.gif", // mobile app
    title: "Mobile App Development",
    description:
      "Tailored mobile app solutions for iOS and Android to bring your business to customers' fingertips.",
  },
  {
    imgSrc: "https://i.pinimg.com/originals/08/45/c9/0845c915b34499cfeb147945a99d7be6.gif", // graphic design
    title: "Logo & Graphic Design",
    description:
      "From branding to visuals, we blend creativity with strategic design to elevate your brand identity.",
  },
  {
    imgSrc: "https://media2.giphy.com/media/WzmzomJrpmygenBsiU/200w.gif?cid=6c09b952d5lbautx0913efy3yodwqm965ydtrfr2dd4rt5dh&ep=v1_gifs_search&rid=200w.gif&ct=g", // support
    title: "Support & Maintenance",
    description:
      "We proactively monitor, update, and optimize your platforms to ensure smooth operations 24/7.",
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-12">
        <h2 className="text-3xl pt-20 text-center md:text-4xl text-blue-900 font-bold">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
  Our Services
       </span>
        </h2>
          <div className="w-32 h-1 bg-blue-900 mx-auto mt-2"></div>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="h-32 w-full object-contain mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-6 md:p-12 rounded-xl shadow-md">
          <div className="text-center mb-10">
          <h2 className="text-3xl  text-center md:text-4xl text-blue-900 font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
        
          Why Choose Code Vibe Innovation
         </span>
          </h2>
      
          <div className="w-32 h-1 bg-blue-900 mx-auto mt-2"></div>
 
          </div>
          <div className="grid pt-12 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                | Design Thinking
              </h3>
              <p className="text-blue-800 mt-2 text-sm">
                We approach challenges with innovative and user-centric strategies that bring impactful solutions.
              </p>

              <h3 className="text-lg font-semibold text-blue-900   mt-6">
                | Client Experience
              </h3>
              <p className="text-blue-800 mt-2 text-sm">
                Our collaborative approach has resulted in successful engagements and measurable ROI for our clients.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900">
                | Domain Expertise
              </h3>
              <p className="text-blue-800 mt-2 text-sm">
                With deep knowledge of various industries, we craft domain-specific tech solutions tailored to your needs.
              </p>

              <h3 className="text-lg font-semibold text-blue-900 mt-6">
                | Reliable Partnership
              </h3>
              <p className="text-blue-800 mt-2 text-sm">
                We value transparency, accountability, and long-term collaboration with each client we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
