import React from "react";

const services = [
  {
    imgSrc: "https://cdn.dribbble.com/userupload/41932818/file/original-e278cd051f54ad3262d79da1f0e8c7b3.gif",
    title: "Web Design & Development",
    description: "We specialize in modern, responsive, and performance-optimized websites to help your business grow online.",
  },
  {
    imgSrc: "https://cdn.dribbble.com/userupload/24343475/file/original-93eccd85db71370c542e86f05641dcea.gif",
    title: "Mobile App Development",
    description: "Tailored mobile app solutions for iOS and Android to bring your business to customers' fingertips.",
  },
  {
    imgSrc: "https://i.pinimg.com/originals/08/45/c9/0845c915b34499cfeb147945a99d7be6.gif",
    title: "Logo & Graphic Design",
    description: "From branding to visuals, we blend creativity with strategic design to elevate your brand identity.",
  },
  {
    imgSrc: "https://media2.giphy.com/media/WzmzomJrpmygenBsiU/200w.gif",
    title: "Support & Maintenance",
    description: "We proactively monitor, update, and optimize your platforms to ensure smooth operations 24/7.",
  },
  
  {
    imgSrc: "https://miro.medium.com/v2/resize:fit:800/0*rOIc88HfNzBtAhru.gif",
    title: "AI/ML Solutions",
    description: "Leverage cutting-edge artificial intelligence and machine learning for automation and insights.",
  },
  
  {
    imgSrc: "https://media.giphy.com/media/WoWm8YzFQJg5i/giphy.gif",
    title: "UI/UX Design",
    description: "Human-centered design principles for intuitive, aesthetically pleasing digital interfaces.",
  },
  {
    imgSrc: "https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif",
    title: "Custom ERP Solutions",
    description: "Streamline and automate your internal workflows with tailored ERP systems designed for your organization.",
  },
  ,
  {
    imgSrc: "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",
    title: "Chatbot & Automation",
    description: "We develop smart AI-driven chatbots that enhance customer support and automate routine processes.",
  },
  {
    imgSrc: "https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif",
    title: "Video Editing & Motion Graphics",
    description: "High-quality video production and motion graphics to help you market your brand more effectively.",
  },
];

const technologies = [
  "https://cdn-icons-png.flaticon.com/512/174/174854.png", // HTML
  "https://cdn-icons-png.flaticon.com/512/732/732190.png", // CSS
  "https://cdn-icons-png.flaticon.com/512/919/919828.png", // JS
  "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", // React
  "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", // Node
  "https://cdn-icons-png.flaticon.com/512/919/919836.png", // MongoDB
  "https://cdn-icons-png.flaticon.com/512/919/919825.png", // AWS
  "https://cdn-icons-png.flaticon.com/512/5968/5968705.png", // Figma
  "https://cdn-icons-png.flaticon.com/512/919/919831.png", // Python
  "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", // Django
  "https://cdn-icons-png.flaticon.com/512/528/528101.png", // PostgreSQL
  "https://cdn-icons-png.flaticon.com/512/732/732212.png", // MySQL
  "https://cdn-icons-png.flaticon.com/512/873/873120.png", // Git
  "https://cdn-icons-png.flaticon.com/512/5968/5968672.png", // Firebase
  "https://cdn-icons-png.flaticon.com/512/732/732026.png", // WordPress
  "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", // Photoshop
  "https://cdn-icons-png.flaticon.com/512/2111/2111628.png", // Tailwind CSS
];

const testimonials = [
  {
    name: "Amit Sharma",
    company: "NextGen Solutions",
    feedback:
      "Code Vibe Innovation transformed our online presence. Their design and development process was smooth, professional, and results-driven.",
  },
  {
    name: "Priya Mehta",
    company: "HealthNest",
    feedback:
      "Their team built a robust health tracking mobile app that exceeded our expectations. Highly recommended!",
  },
  {
    name: "Ravi Kapoor",
    company: "GreenHarvest",
    feedback:
      "We partnered with Code Vibe Innovation for a complete digital revamp. The results were spectacular — better UX, improved traffic, and high client retention.",
  },
  {
    name: "Sanya Khurana",
    company: "TechWit",
    feedback:
      "They crafted a complex ERP system tailored to our unique business processes. Smooth execution and flawless post-launch support!",
  },
  {
    name: "Rahul Deshmukh",
    company: "EduLink",
    feedback:
      "Their team built an LMS platform with stunning design and seamless functionality. The best dev team we've worked with so far.",
  },
  {
    name: "Anjali Nair",
    company: "FitNyou",
    feedback:
      "Our fitness app now has over 50K users — thanks to their scalable mobile development and intuitive UI/UX design.",
  },
];

const Services = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 py-12">

        {/* Section: Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 animate-gradient">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Section: Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-xl border-t-4 border-blue-500 hover:border-purple-500 hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="h-32 w-full object-contain mb-4 transition-transform group-hover:scale-105"
              />
              <h3 className="text-xl font-bold text-blue-800 group-hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Section: Why Choose Us */}
        <div className="bg-gradient-to-r from-white via-blue-50 to-purple-100 p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
              Why Choose Code Vibe Innovation
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-purple-600 mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid pt-10 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                  <span className="text-green-500">🚀</span> Design Thinking
                </h3>
                <p className="text-blue-800 mt-1 text-sm">
                  We approach challenges with innovative and user-centric strategies that bring impactful solutions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                  <span className="text-pink-500">🤝</span> Client Experience
                </h3>
                <p className="text-blue-800 mt-1 text-sm">
                  Our collaborative approach has resulted in successful engagements and measurable ROI for our clients.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                  <span className="text-yellow-500">⚡</span> Agile Development
                </h3>
                <p className="text-blue-800 mt-1 text-sm">
                  We deliver fast, iterative development cycles to adapt quickly to changing needs and priorities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                  <span className="text-purple-500">🌐</span> Technology Expertise
                </h3>
                <p className="text-blue-800 mt-1 text-sm">
                  Skilled in a wide range of modern technologies, enabling best-fit solutions for diverse industries.
                </p>
              </div>
            </div>
          </div>
        </div>

     
       

      </div>
    </div>
  );
};

export default Services;
