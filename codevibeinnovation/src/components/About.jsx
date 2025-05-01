import React, { useEffect } from 'react';

const About = () => {
  const industryImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAvYk1PJfPN5Jpeag74pd2B6qupwJnKcOH2KvmKlWp4qc20QYAw&s=10&ec=72940545";
  const mentorImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyNZ1T73Rl4ne7R7ABL07JEHDj8TEkC0BzokMnxDfzINB2Oi7Ig&s=10&ec=72940545";
  const careerImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_oDsNJ8vVkaH0eUFBTwNBu2yTlzWKyz5QSPrGHLmsiQqheNvfw&s=10&ec=72940545";

  useEffect(() => {
    const statSection = document.querySelector('#why-choose-us');
    const counters = document.querySelectorAll('.counter');
    const statCards = document.querySelectorAll('.stat-card');

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        statCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('animate__animated', 'animate__fadeInUp');
          }, index * 200);
        });

        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 2000;
          const increment = target / (duration / 16);

          const updateCounter = () => {
            const currentValue = +counter.innerText;
            if (currentValue < target) {
              counter.innerText = Math.ceil(currentValue + increment);
              setTimeout(updateCounter, 16);
            } else {
              counter.innerText = target;
            }
          };

          updateCounter();
        });

        observer.unobserve(statSection);
      }
    }, {
      threshold: 0.25
    });

    observer.observe(statSection);

    const coreValues = document.querySelectorAll('#why-choose-us .core-value');
    const valueObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
          }, index * 200);
          valueObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    coreValues.forEach(value => {
      valueObserver.observe(value);
    });
  }, []);

  const coreValues = [
    {
      title: 'Innovation',
      desc: 'We stay at the forefront of technological advancements, continuously exploring new solutions.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
    },
    {
      title: 'Expert Team',
      desc: 'Our team brings years of industry experience and technical expertise to every project.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
    },
    {
      title: 'ISO Certified Training',
      desc: 'We ensure reliability through rigorous testing and certified processes.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0=" />
      ),
    },
  ];    

  const stats = [
    { value: 98, suffix: '%', label: 'Students Satisfaction' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Years of Experience' },
    { value: 98, suffix: '%', label: 'Placement Success Rate' },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative pt-20 overflow-x-hidden bg-white text-black py-16 px-4"
    >
      <div className="max-w-10xl pt-20 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-blue-900 font-bold">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
            CODE VIBE INNOVATION
          </span>
          
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto my-4"></div>
          <p className="max-w-8xl mx-auto text-base  text-blue-900 sm:text-lg ">
            We deliver exceptional results through innovation, expertise, and a deep understanding of your business needs.
          </p>
        </div>

    {/* Core Values */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
    {coreValues.map((item, i) => (
      <div
        key={i}
        className="core-value bg-white rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-blue-500/50 hover:shadow-xl border border-blue-700"
      >
        <div className="h-14 w-14 sm:h-16 sm:w-16 mb-6 text-blue-800 flex items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {item.icon}
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl text-blue-800 font-bold mb-3">{item.title}</h3>
        <p className="text-sm sm:text-base text-blue-800 ">{item.desc}</p>
      </div>
    ))}
  </div>
  

      

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card bg-white rounded-2xl p-6 sm:p-8 text-center border border-blue-900 shadow-lg">
              <div className="counter-container mb-3">
                <span className="text-3xl sm:text-4xl font-bold text-blue-800 counter" data-target={stat.value}>0</span>
                <span className="text-3xl sm:text-4xl font-bold text-blue-800">{stat.suffix}</span>
              </div>
              <p className="text-sm sm:text-lg text-blue-900">
              {stat.label}
            </p>
            
            </div>
          ))}
        </div>
      </div>

      <div className="min-h-screen pt-24 bg-white p-6">
        <h2 className="text-3xl text-center md:text-4xl text-blue-900 font-bold">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] via-[#F472B6] via-[#EF4444] to-[#F97316]">
      Core Values
      </span>
      </h2>
    
    

 

        <div className="max-w-10xl mx-auto pt-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Industry Relevant Curriculum Card */}
          <div
            className="bg-white border border-blue-700 rounded-2xl shadow-lg p-8"
            style={{ boxShadow: "0px 0px 20px rgba(37,99,235,0.3)" }}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-6">Industry Relevant Curriculum</h3>
            <p className="mb-6 text-sm text-blue-800">
              Our curriculum is designed keeping the industry’s needs in mind, ensuring that our students are prepared for the latest trends.
            </p>
            <img
              className="rounded-xl"
              src={industryImage}
              alt="Industry"
            />
          </div>

          {/* Expert Mentorship Card */}
          <div
            className="bg-white border border-blue-700 rounded-2xl shadow-lg p-8"
            style={{ boxShadow: "0px 0px 20px rgba(37,99,235,0.3)" }}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-6">Expert Mentorship</h3>
            <p className="mb-6 text-sm  text-blue-800">
              Receive guidance from seasoned mentors who are experts in their respective fields.
            </p>
            <img
              className="rounded-xl"
              src={mentorImage}
              alt="Mentorship"
            />
          </div>

          {/* Career Opportunities Card */}
          <div
            className="bg-white border border-blue-700 rounded-2xl shadow-lg p-8"
            style={{ boxShadow: "0px 0px 20px rgba(37,99,235,0.3)" }}
          >
            <h3 className="text-xl font-bold text-blue-900 mb-6">Career Opportunities</h3>
            <p className="mb-6 text-sm text-blue-800 ">
              We provide career assistance, internships, and job placements to help you build a successful career.
            </p>
            <img
              className="rounded-xl"
              src={careerImage}
              alt="Career"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
