import React from 'react';
import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Mail,
  FileText,
  Award,
  Terminal,
  Database,
  Sun,
  Moon
} from 'lucide-react';
import { SiHackerrank, SiGeeksforgeeks, SiCplusplus, SiJavascript, SiC, SiExpress, SiTailwindcss, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si';
import { FaJava, FaPhp, FaPython, FaNodeJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import './App.css';
import Background3D from './components/Background3D';
import Hero3D from './components/Hero3D';
import Typewriter from './components/Typewriter';
import ContactModal from './components/ContactModal';
import DynamicAboutImage from './components/DynamicAboutImage';

export default function App() {
  const [theme, setTheme] = React.useState('dark');
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [showResumeOptions, setShowResumeOptions] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const skillsData = {
    Languages: [
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "C", icon: <SiC /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Python", icon: <FaPython /> }
    ],
    Frameworks: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> }
    ],
    "Tools/Platforms": [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> }
    ],
    "Soft Skills": [
      { name: "Logical reasoning" },
      { name: "Clear communication" },
      { name: "Task planning" },
      { name: "Learning agility" }
    ]
  };

  const projects = [
    {
      title: "SkillSphere",
      description: "Full-stack community and event management platform. Features include group creation, event management, real-time and anonymous chats, plus a comprehensive admin panel for moderation and security.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
      link: "https://priyanshu-fronthub.vercel.app/",
      github: "https://github.com/Priyanshukumar23/Skillsphere"
    },
    {
      title: "PrepHub",
      description: "Interview preparation platform featuring an advanced resume builder. Successfully reduced resume creation time by 45% and supported over 500 document exports.",
      tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
      link: "#",
      github: "https://github.com/Priyanshukumar23/PrepHub"
    },
    {
      title: "Kumar Brothers",
      description: "Custom e-commerce website developed to handle online retail. Optimized database queries and improved the entire checkout performance for a seamless user experience.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      link: "https://kbrothers.fwh.is/",
      github: "https://github.com/Priyanshukumar23/website2"
    }
  ];

  const trainings = [
    {
      title: "Java with OOP Concepts",
      org: "Cipher Schools",
      date: "Jun 2025 – Jul 2025",
      descArray: [
        "Finished a structured program covering Java fundamentals, object-oriented design, debugging strategies, and extensive hands-on exercises.",
        "Extended the Mental Health Simulator by integrating additional API-based logic and reorganising backend processes.",
        "Improved the visual elements of the application using HTML, CSS, and JavaScript, delivering smoother layout transitions."
      ],
      skills: "Skills Gained: Core Java | OOP Logic | API Handling | UI & Front-End Structuring",
      link: "https://www.cipherschools.com/certificate/preview?id=687f1c027efd6d5090704596"
    }
  ];

  const certifications = [
    {
      title: "AI Foundations Associate",
      org: "Oracle",
      date: "Sep 2025",
      desc: "Deepened understanding of Artificial Intelligence concepts and their real-world applications.",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4ABF4322C76F259F116DD4FD2C2E735953EE11938B00E3235A32C9E7C8DDF0AB"
    },
    {
      title: "Master Generative AI",
      org: "Infosys",
      date: "Aug 2025",
      desc: "Explored generative algorithms, large language models, and AI-driven creative solutions.",
      link: "https://verify.onwingspan.com/"
    },
    {
      title: "Cloud Computing",
      org: "NPTEL",
      date: "Apr 2025",
      desc: "Gained core knowledge regarding cloud architectures, delivery models, and scalable systems.",
      link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S143730196104236363.pdf"
    }
  ];

  const achievementsData = [
    {
      title: "Top Position in CODEXTREME 2.0 – NEOCODETHON",
      org: "NEOCODETHON Event",
      date: "Apr 2025",
      desc: "Demonstrated strong logical reasoning, structured problem-solving, and efficient coding skills under competitive constraints.",
      link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2B%2FdEtZXBmrw6h5DQhaG1e87ysbqiCWDqU%3D"
    }
  ];

  const extracurricular = [
    {
      title: "Volunteer Work",
      org: "Sukanya NGO",
      desc: "Worked for the upliftment of poor girls by providing them support in their marriage, education, and basic needs.",
      link: null
    }
  ];

  const educationData = [
    {
      title: "Bachelor of Technology (Computer Science and Engineering)",
      org: "Lovely Professional University",
      date: "Aug 2023 – Present",
      desc: "Phagwara, Punjab",
      skills: "CGPA: 7.14"
    },
    {
      title: "Intermediate (Class XII)",
      org: "Gyan Bharti Residential Complex",
      desc: "Gaya, Bihar"
    },
    {
      title: "Matriculation (Class X)",
      org: "Dav Public School",
      desc: "Gaya, Bihar"
    }
  ];

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const TimelineSection = ({ data, title, id }) => (
    <div id={id} style={{ marginBottom: '4rem' }}>
      <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem', color: 'var(--accent-color)', fontSize: '1.8rem', textAlign: 'center' }}>
        {title}
      </h3>
      <div className="timeline">
        {data.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-org">
                {item.org} {item.date && <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>| {item.date}</span>}
              </div>
              {item.descArray ? (
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>
                  {item.descArray.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>
              ) : (
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{item.desc}</p>
              )}
              {item.skills && (
                <p style={{ color: 'var(--accent-purple)', marginBottom: '1rem', fontFamily: 'Fira Code', fontSize: '0.85rem' }}>{item.skills}</p>
              )}
              {item.link && (
                <a href={item.link} className="project-link" style={{ display: 'inline-flex', marginTop: '0.5rem' }} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> <span style={{ marginLeft: '5px' }}>View Certificate</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="app-container">
      <Background3D theme={theme} />
      <header>
        <nav>
          <div className="logo">Portfolio</div>
          <div className="nav-links" style={{ alignItems: 'center' }}>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
            <a href="#training" onClick={(e) => handleScroll(e, 'training')}>Training</a>
            <a href="#certifications" onClick={(e) => handleScroll(e, 'certifications')}>Certifications</a>
            <a href="#achievements" onClick={(e) => handleScroll(e, 'achievements')}>Achievements</a>
            <a href="#education" onClick={(e) => handleScroll(e, 'education')}>Education</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
            <button onClick={toggleTheme} className="theme-toggle" style={{ background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--text-primary)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginLeft: '10px' }} title="Toggle Theme">
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <span className="greeting" style={{ minHeight: '1.5rem', display: 'inline-block' }}>
              <Typewriter
                text="Welcome to Portfolio website"
                speed={75}
                onComplete={() => {
                  setTimeout(() => {
                    const aboutSection = document.getElementById('about');
                    if (aboutSection) {
                      aboutSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 2500);
                }}
              />
            </span>
            <h1 className="hero-title">Priyanshu Kumar</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-desc">
              Hii! I am currently pursuing my B.Tech in Computer Science and Engineering.
              I am a passionate Full Stack Developer with a strong interest in problem-solving and Data Structures & Algorithms.
            </p>
            <div className="btn-group">
              <button className="btn-primary" onClick={(e) => { e.preventDefault(); setIsContactModalOpen(true); }} style={{ border: '1px solid var(--accent-color)' }}>
                <Mail size={18} /> Let's Talk
              </button>
            </div>
          </div>
          <div className="hero-image-container">
            <Hero3D />
            <div className="hero-image-wrapper">
              <img src="/myimg.jpeg" alt="My Profile" className="hero-image" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2 className="section-title"><span className="section-title-text">About Me & Skills</span></h2>
          <div className="about-grid">
            <div className="about-text-content">
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Technically, I have hands-on experience in multiple languages including Java, C++, JavaScript, C, PHP, and Python.
                I specialize in the MERN stack — Node.js, Express.js, React.js, and MongoDB — building scalable, high-performance web applications. I also have solid experience with SQL databases, version control systems like Git, and implementing modern UI/UX principles.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                My background involves designing RESTful APIs, optimizing database queries, and integrating secure third-party services. I enjoy turning complex problems into simple, beautiful, and intuitive designs while ensuring robust backend architectures.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Beyond coding, I focus on logical reasoning, structured problem-solving, clear communication, and continuous learning.
                I am eager to contribute to a growth-oriented organization where I can apply both my full-stack development expertise and problem-solving skills while learning from experienced professionals.
              </p>
              <div className="skills-container" style={{ textAlign: 'left', marginTop: '2rem' }}>
                {Object.entries(skillsData).map(([category, skills]) => (
                  <div key={category} style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.8rem', fontSize: '1.2rem' }}>{category}</h3>
                    <div className="tech-stack" style={{ justifyContent: 'flex-start', marginTop: '0' }}>
                      {skills.map((skill, index) => (
                        <span key={index} className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          {skill.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{skill.icon}</span>}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-image-content">
              <DynamicAboutImage />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-title"><span className="section-title-text">Featured Projects</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                    <ExternalLink size={18} /> View Project
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="achievements-section">
          <h2 className="section-title"><span className="section-title-text">Training & Extracurriculars</span></h2>
          <TimelineSection id="training" data={trainings} title="Training" />
          <TimelineSection id="certifications" data={certifications} title="Certifications" />
          <TimelineSection id="achievements" data={achievementsData} title="Achievements" />
          <TimelineSection id="extracurricular" data={extracurricular} title="Extracurricular Activity" />
          <TimelineSection id="education" data={educationData} title="Education" />
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section" style={{ margin: '0 auto' }}>
          <h2 className="section-title"><span className="section-title-text">Let's Connect</span></h2>
          <p className="contact-text">
            I'm currently seeking new opportunities where I can apply my skills and grow.
            Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/priyanshu-kumar1/" className="social-link" title="LinkedIn" target="_blank" rel="noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Priyanshukumar23" className="social-link" title="GitHub" target="_blank" rel="noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.geeksforgeeks.org/profile/k7607nvik" className="social-link" title="GeeksforGeeks" target="_blank" rel="noreferrer">
              <SiGeeksforgeeks size={24} />
            </a>
            <a href="https://www.hackerrank.com/profile/harshit22445" className="social-link" title="HackerRank" target="_blank" rel="noreferrer">
              <SiHackerrank size={24} />
            </a>
            <div className="resume-dropdown-container"
              onMouseEnter={() => setShowResumeOptions(true)}
              onMouseLeave={() => setShowResumeOptions(false)}>
              <div className="social-link resume-btn" title="Resume" onClick={() => setShowResumeOptions(!showResumeOptions)}>
                <FileText size={24} />
              </div>

              {showResumeOptions && (
                <div className="resume-dropdown-menu">
                  <a href="/Priyanshu_eXP_cv.pdf" target="_blank" rel="noreferrer" className="resume-dropdown-item">View CV</a>
                  <a href="/Priyanshu_eXP_cv.pdf" download="Priyanshu_eXP_cv.pdf" className="resume-dropdown-item">Download CV</a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>Built with React & Vanilla CSS by Priyanshu Kumar &copy; {new Date().getFullYear()}</p>
      </footer>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
