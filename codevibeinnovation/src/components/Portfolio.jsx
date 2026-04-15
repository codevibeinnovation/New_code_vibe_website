import React from "react";

const portfolioData = [
   {
    id: 1,
    image: "/images/asghms.png",
    link: "https://asghms.in/"
  },
  {
    id: 10,
    image: "/images/kaleshgajjar.png",
    link: "https://kbgajjarcivil.in/"
  },
  {
    id: 2,
    image: "/images/ramsu.png",
    link: "https://ramsu.in/"
  },
  {
    id: 3,
    image: "/images/asg.png",
    link: "https://aadhyashaktigroup.in/"
  },
  {
    id: 4,
    image: "/images/community.png",
    link: "https://www.communitypass.net/"
  },
  {
    id: 5,
    image: "/images/genus.png",
    link: "https://www.genusplc.com/"
  },
  {
    id: 6,
    image: "/images/jobsforme.png",
    link: "https://www.jobsyme.com/"
  },
  {
    id: 7,
    image: "/images/lavella.png",
    link: "https://louellabelle.co.uk/"
  },
  {
    id: 8,
    image: "/images/parlour.png",
    link: "https://redcarpetmanicure.com/"
  }
 


];

const Portfolio = () => {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Our Portfolio
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Some of our amazing projects and student work
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">

        {portfolioData.map((project) => (
          <div
            key={project.id}
            className="relative group rounded-2xl overflow-hidden shadow-lg h-56 md:h-64 w-full transform transition duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-300/40"
          >

            {/* Image */}
            <img
              src={project.image}
              alt="portfolio"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:blur-sm"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 px-7 py-3 rounded-full font-semibold transform scale-75 group-hover:scale-100 transition duration-500 hover:bg-blue-600 hover:text-white"
              >
                Visit
              </a>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Portfolio;