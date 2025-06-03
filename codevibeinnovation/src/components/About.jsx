import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'animate.css';

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
    }, { threshold: 0.25 });

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
    }, { threshold: 0.1 });

    coreValues.forEach(value => valueObserver.observe(value));
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
    }
  ];

  const stats = [
    { value: 98, suffix: '%', label: 'Students Satisfaction' },
    { value: 500, suffix: '+', label: 'Projects Completed' },
    { value: 15, suffix: '+', label: 'Years of Experience' },
    { value: 98, suffix: '%', label: 'Placement Success Rate' },
  ];

  const featureData = [
    {
      title: 'Industry Relevant Curriculum',
      desc: 'Our curriculum is designed keeping the industry’s needs in mind, ensuring that our students are prepared for the latest trends.',
      img: industryImage,
    },
    {
      title: 'Expert Mentorship',
      desc: 'Receive guidance from seasoned mentors who are experts in their respective fields.',
      img: mentorImage,
    },
    {
      title: 'Career Opportunities',
      desc: 'We connect students with real-world opportunities, ensuring a strong career foundation after course completion.',
      img: careerImage,
    },
  ];

  return (
    <section id="why-choose-us" className="relative pt-24 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-black py-20 px-4 overflow-x-hidden">
      <Helmet>
        <title>About | Code Vibe Innovation</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 animate__animated animate__fadeInDown">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-pink-600 to-orange-500">
            Why Choose CODE VIBE INNOVATION
          </h2>
          <div className="w-24 h-1 bg-indigo-700 mx-auto my-4 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-lg text-blue-900">We deliver exceptional results through innovation, expertise, and a deep understanding of your business needs.</p>
        </div>

        {/* Core Values */}
        <div className="grid gap-8 sm:grid-cols-2 mb-20">
          {coreValues.map((item, i) => (
            <div key={i} className="core-value bg-white/60 backdrop-blur-md border-l-4 border-blue-600 shadow-xl rounded-xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="h-14 w-14 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-indigo-800">{item.title}</h3>
              <p className="text-md text-blue-800 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card text-center bg-white shadow-2xl rounded-2xl p-6 hover:bg-gradient-to-br hover:from-blue-200 hover:to-purple-100 transition-all duration-300">
              <div className="text-4xl font-bold text-indigo-800 mb-2">
                <span className="counter" data-target={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-blue-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <h2 className="text-3xl text-center md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-blue-600 to-purple-500 mb-10">
          Core Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featureData.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white shadow-xl border-t-4 border-indigo-500 p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl font-bold text-indigo-800 mb-2">{item.title}</h3>
              <p className="text-blue-700 text-sm mb-4">{item.desc}</p>
              <img src={item.img} alt={`feature-${i}`} className="rounded-xl w-full h-40 object-cover shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
