import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

/* ── Font Loader ── */
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:wght@700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);
  return null;
};

/* ── Data ── */
const whyJoinUs = [
  { icon: '📚', title: 'Industry Based Syllabus', description: 'Curriculum designed based on current industry standards and requirements' },
  { icon: '🤝', title: '1 On 1 Mentorship', description: 'Personalised one-on-one guidance from expert mentors throughout your journey' },
  { icon: '⏰', title: 'Flexible Timings', description: 'Weekend and weekday batches available at your convenience' },
  { icon: '🏆', title: 'Course Certification', description: 'Globally recognised certificates upon successful course completion' },
  { icon: '💼', title: 'Internship Opportunity', description: 'Get hands-on internship experience with real companies and projects' },
  { icon: '👥', title: 'Minimal Batch Strength', description: 'Small batch sizes ensure personalised attention and better learning' },
  { icon: '🎯', title: 'Placement Assistance', description: 'Direct placement support and job opportunities after course completion' },
  { icon: '🚀', title: 'Live Project Work', description: 'Work on real-world live projects to build practical experience' },
];

const trendingCourses = [
  { id: 1, name: 'MERN Stack', duration: '12 weeks', price: '₹25,000', level: 'Beginner → Advanced', tag: 'HOT', accent: '#1e40af', light: '#dbeafe', logo: '⚛️' },
  { id: 2, name: 'Full Stack Development', duration: '16 weeks', price: '₹35,000', level: 'Intermediate → Advanced', tag: 'POPULAR', accent: '#7c3aed', light: '#ede9fe', logo: '🔗' },
  { id: 3, name: 'AI & Machine Learning', duration: '14 weeks', price: '₹32,000', level: 'Intermediate → Advanced', tag: 'TRENDING', accent: '#ea580c', light: '#ffedd5', logo: '🤖' },
  { id: 4, name: 'Data Science', duration: '16 weeks', price: '₹30,000', level: 'Beginner → Advanced', tag: 'IN DEMAND', accent: '#059669', light: '#d1fae5', logo: '📊' },
  { id: 5, name: 'Python Programming', duration: '10 weeks', price: '₹18,000', level: 'Beginner → Intermediate', tag: 'STARTER', accent: '#ca8a04', light: '#fef9c3', logo: '🐍' },
  { id: 6, name: 'Excel & Business Analytics', duration: '8 weeks', price: '₹12,000', level: 'Beginner → Intermediate', tag: 'NEW', accent: '#db2777', light: '#fce7f3', logo: '📈' },
];

const companyDetails = {
  name: 'Code Vibe Innovation',
  tagline: 'Empowering the next generation of tech professionals',
  address: 'A-803, Samudra Complex, CG Road, Navrangpura, Ahmedabad-380009',
  phone: '+91-97247 16637',
  email: 'codevibeinnovation@gmail.com',
  website: 'www.codevibeinnovation.com',
  students: '5,000+',
  courses: '20+',
};

const display = { fontFamily: '"Montserrat", sans-serif' };
const body = { fontFamily: '"Inter", system-ui, sans-serif' };

/* ── Hero ── */
const Hero = () => (
  <section style={{
    ...body, position: 'relative', background: '#fff',
    padding: '96px 24px 80px', textAlign: 'center', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(#1e40af18 1.5px, transparent 1.5px)',
      backgroundSize: '28px 28px', pointerEvents: 'none',
    }} />
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative' }}>
      <span style={{
        display: 'inline-block', background: '#dbeafe', color: '#1e40af',
        borderRadius: 999, padding: '6px 18px', fontSize: 12, fontWeight: 600,
        letterSpacing: 2, textTransform: 'uppercase', marginBottom: 24,
      }}>🚀 Transform Your Career Today</span>
      <h1 style={{
        ...display, fontSize: 'clamp(36px,7vw,78px)', fontWeight: 900,
        lineHeight: 1.02, margin: '0 0 22px', color: 'rgb(30 58 138)',
      }}>
        Professional{' '}
        <span style={{ color: '#f54f2eff' }}>Internship</span>
        <br />Programs
      </h1>
      <p style={{ ...body, fontSize: 18, color: '#64748b', maxWidth: 500, margin: '0 auto 36px', lineHeight: 1.75 }}>
        Upskill with industry-relevant courses and launch your dream tech career.
      </p>
    </motion.div>
  </section>
);

/* ── Stats Bar ── */
const StatsBar = () => {
  const stats = [
    { value: '5,000+', label: 'Students Trained', icon: '🎓' },
    { value: '20+', label: 'Courses Offered', icon: '📘' },
    { value: '95%', label: 'Placement Rate', icon: '🎯' },
    { value: '50+', label: 'Hiring Partners', icon: '🤝' },
  ];
  return (
    <div style={{ background: '#0f172a', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {stats.map((s, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          style={{ flex: '1 1 160px', padding: '28px 20px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
          <div style={{ fontSize: 26, marginBottom: 6 }}>{s.icon}</div>
          <div style={{ ...display, fontSize: 30, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{s.value}</div>
          <div style={{ ...body, fontSize: 12, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 5 }}>{s.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Why Join Us ── */
const WhyJoinUs = () => (
  <section style={{ background: '#f8fafc', padding: '90px 24px' }}>
    <div style={{ maxWidth: 1160, margin: '0 auto' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p style={{ ...body, color: '#1e40af', textTransform: 'uppercase', letterSpacing: 3, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Why choose us</p>
          <h2 style={{ ...display, fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
            Built for Real-World <em style={{ color: '#1e40af' }}>Success</em>
          </h2>
          <p style={{ ...body, color: '#64748b', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Thousands of students trust Code Vibe Innovation for their tech career transformation.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(255px, 1fr))', gap: 20 }}>
          {whyJoinUs.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(30,64,175,0.12)', transition: { duration: 0.2 } }}
              style={{
                background: '#fff', borderRadius: 18, padding: '28px 24px',
                border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', cursor: 'default',
                position: 'relative', overflow: 'hidden',
              }}>
              <div style={{
                position: 'absolute', top: 0, right: 0, width: 60, height: 60,
                background: 'linear-gradient(135deg, #dbeafe 0%, transparent 60%)', borderBottomLeftRadius: 60,
              }} />
              <div style={{ fontSize: 34, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ ...display, fontSize: 18, fontWeight: 700, color: '#0f172a', margin: '0 0 8px' }}>{item.title}</h3>
              <p style={{ ...body, fontSize: 14, color: '#64748b', lineHeight: 1.65, margin: 0 }}>{item.description}</p>
              <div style={{ marginTop: 18, width: 32, height: 3, background: '#1e40af', borderRadius: 2 }} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ── Logo Carousel ── */
const courseLogos = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', link: 'https://react.dev' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', link: 'https://nodejs.org' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', link: 'https://www.mongodb.com' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', link: 'https://www.python.org' },
  { name: 'TensorFlow', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', link: 'https://www.tensorflow.org' },
  { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'MySQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', link: 'https://www.mysql.com' },
  { name: 'Jupyter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg', link: 'https://jupyter.org' },
  { name: 'NumPy', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', link: 'https://numpy.org' },
  { name: 'Pandas', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', link: 'https://pandas.pydata.org' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', link: 'https://www.docker.com' },
  { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', link: 'https://git-scm.com' },
  { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', link: 'https://expressjs.com' },
  { name: 'VS Code', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', link: 'https://code.visualstudio.com' },
];

if (typeof document !== 'undefined' && !document.getElementById('marquee-style')) {
  const s = document.createElement('style');
  s.id = 'marquee-style';
  s.textContent = `
    @keyframes marquee-ltr { from { transform: translateX(0) } to { transform: translateX(-50%) } }
    @keyframes marquee-rtl { from { transform: translateX(-50%) } to { transform: translateX(0) } }
    .track-ltr { animation: marquee-ltr 28s linear infinite; }
    .track-rtl { animation: marquee-rtl 22s linear infinite; }
    .track-ltr:hover, .track-rtl:hover { animation-play-state: paused; }
    .logo-pill:hover { transform: scale(1.12); box-shadow: 0 8px 28px rgba(30,64,175,0.15) !important; background: #fff !important; }
  `;
  document.head.appendChild(s);
}

const LogoTrack = ({ items, className }) => {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div className={className} style={{ display: 'flex', gap: 18, width: 'max-content' }}>
        {doubled.map((item, i) => (
          <a key={i} href={item.link} target="_blank" rel="noreferrer"
            className="logo-pill"
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: 10, padding: '18px 24px', borderRadius: 20,
              background: '#f8fafc', border: '1.5px solid #e2e8f0',
              textDecoration: 'none', flexShrink: 0, width: 110,
              transition: 'all 0.25s', cursor: 'pointer',
            }}>
            <img src={item.url} alt={item.name}
              style={{ width: 48, height: 48, objectFit: 'contain', display: 'block' }}
              onError={e => { e.target.style.display = 'none'; }} />
            <span style={{ ...body, fontSize: 12, fontWeight: 600, color: '#475569', textAlign: 'center', lineHeight: 1.2 }}>
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

const TrendingCourses = () => {
  const row1 = courseLogos.slice(0, 8);
  const row2 = courseLogos.slice(8);
  return (
    <section style={{ background: '#fff', padding: '90px 0', borderTop: '1px solid #f1f5f9', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', paddingBottom: 0 }}>
        <div style={{ textAlign: 'center', marginBottom: 56, padding: '0 24px' }}>
          <p style={{ ...body, color: '#ea580c', textTransform: 'uppercase', letterSpacing: 3, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Technologies we teach</p>
          <h2 style={{ ...display, fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: 'rgb(30 58 138)', margin: 0 }}>
            Trending <em style={{ color: 'rgb(30 58 138)' }}>Courses</em>
          </h2>
        </div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <LogoTrack items={row1} className="track-ltr" />
      </div>
      <LogoTrack items={row2} className="track-rtl" />
    </section>
  );
};

/* ── Company Info + Contact Form (Formspree) ── */
const CompanyAndForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', message: '' });
  const [sending, setSending] = useState(false);

  const validate = () => {
    const { name, email, mobile, message } = formData;
    if (!name.trim() || name.trim().length < 2) {
      toast.error("Please enter your full name (at least 2 characters).");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    const mobileDigits = mobile.replace(/\D/g, '');
    if (mobileDigits.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return false;
    }
    if (!message.trim() || message.trim().length < 10) {
      toast.error("Please enter a message (at least 10 characters).");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    try {
      const res = await fetch("https://formspree.io/f/mldneabp", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
    if (res.ok) {
  toast.success("Message sent successfully!");

  // 🎯 TRACK EVENT HERE
  ReactPixel.track("Lead"); // OR "CompleteRegistration"

  setFormData({ name: '', email: '', mobile: '', message: '' });
} else {
        toast.error("Failed to send. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Try again later.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const infoItems = [
    { icon: '📍', label: 'Address', value: companyDetails.address },
    { icon: '📞', label: 'Phone', value: companyDetails.phone },
    { icon: '✉️', label: 'Email', value: companyDetails.email },
    { icon: '🌐', label: 'Website', value: companyDetails.website },
  ];

  const socials = [
    { icon: <FaFacebook style={{ fontSize: 26, color: '#1877F2' }} />, name: 'Facebook', desc: 'Get updates & announcements', link: '#' },
    { icon: <FaInstagram style={{ fontSize: 26, color: '#E1306C' }} />, name: 'Instagram', desc: 'Watch our reels & moments', link: 'https://www.instagram.com/codevibeinnovation/' },
    { icon: <FaLinkedin style={{ fontSize: 26, color: '#0A66C2' }} />, name: 'LinkedIn', desc: 'Career & internship insights', link: 'https://www.linkedin.com/in/codevibe-innovation-57a770363/' },
  ];

  const inp = (name) => ({
    width: '100%', boxSizing: 'border-box',
    padding: '12px 16px', borderRadius: 12,
    border: '1.5px solid #ddd1ff', outline: 'none',
    fontSize: 14, color: '#0f172a', background: '#fff',
    fontFamily: '"Inter", system-ui, sans-serif',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  const lbl = {
    display: 'block', fontSize: 12, fontWeight: 600,
    color: '#7c3aed', marginBottom: 6,
    textTransform: 'uppercase', letterSpacing: 1,
  };

  return (
    <section style={{ background: '#f8fafc', padding: '90px 24px', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ ...body, color: 'rgb(30 58 138)', textTransform: 'uppercase', letterSpacing: 3, fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Get in touch</p>
          <h2 style={{ ...display, fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: 'rgb(30 58 138)', margin: 0 }}>
            About Us & <em style={{ color: 'rgb(30 58 138)' }}>Contact Us</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>

          {/* ── Left: Company Info + Socials ── */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
            style={{ flex: '1 1 340px' }}>
            <div style={{ background: '#fff', borderRadius: 24, padding: 36, height: '100%', boxSizing: 'border-box', border: '1px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>

              <p style={{ ...body, color: '#64748b', fontSize: 15, lineHeight: 1.75, margin: '0 0 24px' }}>
                {companyDetails.tagline}. We've trained{' '}
                <strong style={{ color: '#1e40af' }}>{companyDetails.students} students</strong> across{' '}
                <strong style={{ color: '#1e40af' }}>{companyDetails.courses} courses</strong>.
              </p>

              {/* Info items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                {infoItems.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ ...body, fontSize: 11, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2 }}>{item.label}</div>
                      <div style={{ ...body, fontSize: 14, color: '#334155', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {socials.map((item, i) => (
                  <motion.a key={i} href={item.link} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }} transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 14,
                      background: 'linear-gradient(90deg,#fff,#f5f3ff,#fff)',
                      borderRadius: 14, padding: '13px 18px',
                      boxShadow: '0 3px 14px rgba(124,58,237,0.08)',
                      textDecoration: 'none', border: '1px solid rgba(196,181,253,0.4)',
                    }}>
                    {item.icon}
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, color: '#1e3a8a', fontSize: 14 }}>{item.name}</p>
                      <p style={{ margin: 0, color: '#3b82f6', fontSize: 12 }}>{item.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Stats mini grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, background: '#f8fafc', borderRadius: 16, padding: 16, border: '1px solid #e2e8f0' }}>
                {[['🏅', '95%', 'Placement'], ['⭐', '5.0', 'Rating'], ['🎓', '5k+', 'Alumni']].map(([icon, val, lbl], i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 22 }}>{icon}</div>
                    <div style={{ ...display, fontSize: 20, fontWeight: 800, color: '#0f172a' }}>{val}</div>
                    <div style={{ ...body, fontSize: 11, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Formspree Contact Form ── */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}
            style={{ flex: '1 1 340px' }}>
            <div style={{
              background: 'rgba(255,255,255,0.95)', borderRadius: 24, padding: 36,
              height: '100%', boxSizing: 'border-box',
              border: '1px solid rgba(196,181,253,0.35)',
              boxShadow: '0 8px 40px rgba(124,58,237,0.10)',
            }}>
              <div style={{ height: 4, background: 'linear-gradient(90deg,#1e40af,#7c3aed,#ec4899)', borderRadius: 99, marginBottom: 28 }} />
              <h3 style={{ ...display, fontSize: 24, fontWeight: 800, margin: '0 0 6px', color: 'rgb(30 58 138)' }}>Send Us a Message 💬</h3>
              <p style={{ ...body, fontSize: 14, color: '#94a3b8', margin: '0 0 26px' }}>We typically respond within 24 hours.</p>

              <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div>
                    <label style={lbl} htmlFor="c-name">Full Name</label>
                    <input id="c-name" type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your full name" style={inp('name')}
                      onFocus={e => { e.target.style.borderColor = '#7c3aed'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = '#ddd1ff'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                  <div>
                    <label style={lbl} htmlFor="c-email">Email Address</label>
                    <input id="c-email" type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="you@example.com" style={inp('email')}
                      onFocus={e => { e.target.style.borderColor = '#7c3aed'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = '#ddd1ff'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                </div>

                <div>
                  <label style={lbl} htmlFor="c-mobile">Phone Number</label>
                  <input id="c-mobile" type="tel" name="mobile" value={formData.mobile} onChange={handleChange}
                    placeholder="+91 98765 43210" style={inp('mobile')}
                    onFocus={e => { e.target.style.borderColor = '#7c3aed'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                    onBlur={e => { e.target.style.borderColor = '#ddd1ff'; e.target.style.boxShadow = 'none'; }} />
                </div>

                <div>
                  <label style={lbl} htmlFor="c-message">Your Message</label>
                  <textarea id="c-message" name="message" value={formData.message} onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    style={{ ...inp('message'), height: 130, resize: 'vertical' }}
                    onFocus={e => { e.target.style.borderColor = '#7c3aed'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                    onBlur={e => { e.target.style.borderColor = '#ddd1ff'; e.target.style.boxShadow = 'none'; }} />
                </div>

                <motion.button type="submit" disabled={sending}
                  whileHover={{ scale: sending ? 1 : 1.02 }} whileTap={{ scale: sending ? 1 : 0.97 }}
                  style={{
                    background: 'linear-gradient(135deg,#1e40af,#7c3aed,#db2777)',
                    color: '#fff', border: 'none', borderRadius: 12,
                    padding: '14px 24px', fontSize: 15, fontWeight: 700,
                    cursor: sending ? 'not-allowed' : 'pointer',
                    opacity: sending ? 0.7 : 1, letterSpacing: 0.3,
                    fontFamily: '"Inter", system-ui, sans-serif',
                    transition: 'opacity 0.2s',
                  }}>
                  {sending ? '⏳ Sending...' : '🚀 Send Your Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>


      </div>

      <Helmet>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - Code Vibe Innovation",
            "url": "https://codevibeinnovation.com/contact-us"
          }
        `}</script>
      </Helmet>
    </section>
  );
};

/* ── Main Export ── */
const Training = () => (
  <div style={{ minHeight: '100vh', background: '#fff', fontFamily: '"Outfit", sans-serif' }}>
    <Toaster position="top-right" />
    <FontLoader />
    <Hero />
    <StatsBar />
    <WhyJoinUs />
    <TrendingCourses />
    <CompanyAndForm />
  </div>
);

export default Training;
