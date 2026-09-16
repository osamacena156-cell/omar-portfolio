
import {
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaHtml5,
  FaGitAlt,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import { SiGithub, SiVite } from "react-icons/si";

import "./App.css";

import profileImage from "./assets/profile.jpg";
import expressImage from "./assets/express.jpg";
import expressImagee from "./assets/argn.jpg";
import expressImageee from "./assets/react.jpg";
import expressImageeee from "./assets/iphone.jpg";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="container nav-container">

          <a href="#home" className="logo">
            Omar<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Contact Me
          </a>

        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-background"></div>

        <div className="container hero-container">

          <div className="hero-content">

            <p className="hero-small-title">
              Hello, I'm
            </p>

            <h1>
              Omar Ahmed
            </h1>

            <h2>
              Front-End <span>Developer</span>
            </h2>

            <p className="hero-description">
              I build modern, responsive and user-friendly websites
              using HTML, CSS, JavaScript, React.js and WordPress.
            </p>

            <div className="hero-buttons">

              <a href="#projects" className="primary-button">
                View My Projects
                <FaArrowRight />
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>

            </div>


            {/* Social Icons */}

            <div className="social-icons">

              <a
                href="https://github.com/osamacena156-cell"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/omar-ahmed-web"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:omarahmedraslan787@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>


          {/* ================= PROFILE IMAGE ================= */}

          <div className="hero-image-container">

            <div className="image-glow"></div>

            <div className="image-circle">

              <img
                src={profileImage}
                alt="Omar Ahmed"
              />

            </div>


            {/* Code Badge */}

           <div className="floating-icons">

  <div className="floating-icon html-icon">
    <FaHtml5 />
  </div>

  <div className="floating-icon css-icon">
    <FaCss3Alt />
  </div>

  <div className="floating-icon js-icon">
    <FaJs />
  </div>

  <div className="floating-icon react-icon">
    <FaReact />
  </div>

  <div className="floating-icon wp-icon">
    <FaWordpress />
  </div>

</div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="section about-section" id="about">

        <div className="container">

          <div className="section-title">

            <p>GET TO KNOW ME</p>

            <h2>
              About <span>Me</span>
            </h2>

            <div className="title-line"></div>

          </div>


          <div className="about-content">

            <div className="about-text">

              <h3>
                I'm a passionate Front-End Developer.
              </h3>

              <p>
                I enjoy creating modern and responsive websites
                with clean and organized code.
              </p>

              <p>
                I have completed learning HTML, CSS, JavaScript,
                React.js, Git and GitHub. I also have practical
                experience designing websites using WordPress.
              </p>

              <p>
                I'm currently looking for a Front-End Development
                internship where I can work on real projects and
                continue improving my skills.
              </p>

            </div>


            <div className="about-cards">

              <div className="about-card">

                <div className="about-icon">
                  <FaCode />
                </div>

                <h3>Clean Code</h3>

                <p>
                  Writing clean and organized code.
                </p>

              </div>


              <div className="about-card">

                <div className="about-icon">
                  <FaLaptopCode />
                </div>

                <h3>Web Development</h3>

                <p>
                  Building modern websites and applications.
                </p>

              </div>


              <div className="about-card">

                <div className="about-icon">
                  <FaMobileAlt />
                </div>

                <h3>Responsive Design</h3>

                <p>
                  Websites that work perfectly on all devices.
                </p>

              </div>


              <div className="about-card">

                <div className="about-icon">
                  <FaWordpress />
                </div>

                <h3>WordPress</h3>

                <p>
                  Designing professional WordPress websites.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section className="section skills-section" id="skills">

        <div className="container">

          <div className="section-title">

            <p>MY TECHNOLOGIES</p>

            <h2>
              My <span>Skills</span>
            </h2>

            <div className="title-line"></div>

          </div>


          <div className="skills-grid">


            <div className="skill-card">

              <FaHtml5 />

              <h3>HTML5</h3>

              <p>Semantic & Structured</p>

            </div>


            <div className="skill-card">

              <FaCss3Alt />

              <h3>CSS3</h3>

              <p>Responsive Design</p>

            </div>


            <div className="skill-card">

              <FaJs />

              <h3>JavaScript</h3>

              <p>Modern JavaScript</p>

            </div>


            <div className="skill-card">

              <FaReact />

              <h3>React.js</h3>

              <p>React Applications</p>

            </div>


            <div className="skill-card">

              <FaGitAlt />

              <h3>Git</h3>

              <p>Version Control</p>

            </div>


            <div className="skill-card">

              <SiGithub />

              <h3>GitHub</h3>

              <p>Repositories & Projects</p>

            </div>


            <div className="skill-card">

              <FaWordpress />

              <h3>WordPress</h3>

              <p>Website Development</p>

            </div>


            <div className="skill-card">

              <SiVite />

              <h3>Vite</h3>

              <p>React Development</p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="section projects-section" id="projects">

        <div className="container">

          <div className="section-title">

            <p>MY RECENT WORK</p>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <div className="title-line"></div>

          </div>


          <div className="projects-grid">

            {/* Project 1 */}

            <div className="project-card">

              <div className="project-image wordpress-project">

                <img
                    src={expressImageee}
                    alt="React Website"
                />

              </div>

              <div className="project-info">

                <span className="project-type">
                  React.js
                </span>

                <h3>
                  React Web 
                </h3>

                <p>
                  A professional and responsive React website
                  built with modern JavaScript and CSS.
                </p>

                <div className="project-tech">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>

                </div>

                <div className="project-links">

                  <a href="https://omar-portfolio-wine-psi.vercel.app/" target="_blank" rel="noreferrer">
                    View Project
                    <FaArrowRight />
                  </a>

                </div>

              </div>

            </div>

            


            {/* Project 2 */}

            <div className="project-card">

              <div className="project-image wordpress-project">

                <img
                    src={expressImage}
                    alt="ExpressPrepaid Website"
                />

              </div>

              <div className="project-info">

                <span className="project-type">
                  WordPress
                </span>

                <h3>
                  ExpressOmar Website
                </h3>

                <p>
                  A professional and responsive WordPress website
                  designed using Elementor.
                </p>

                <div className="project-tech">

                  <span>WordPress</span>
                  <span>Elementor</span>
                  <span>Responsive Design</span>

                </div>

                <div className="project-links">

                  <a href="https://omar-portfolio-wine-psi.vercel.app/" target="_blank" rel="noreferrer">
                    View Project
                    <FaArrowRight />
                  </a>

                </div>

              </div>

            </div>

            {/* Project 3 */}

            <div className="project-card">

              <div className="project-image wordpress-project">

                <img
                    src={expressImagee}
                    alt="ExpressPrepaid Website"
                />

              </div>

              <div className="project-info">

                <span className="project-type">
                  WordPress
                </span>

                <h3>
                  omarrestaurant Website
                </h3>

                <p>
                  A professional and responsive WordPress website
                  designed using Elementor.
                </p>

                <div className="project-tech">

                  <span>WordPress</span>
                  <span>Elementor</span>
                  <span>Responsive Design</span>

                </div>

                <div className="project-links">

                  <a href="https://omarrestaurant.fwh.is/" target="_blank" rel="noreferrer">
                    View Project
                    <FaArrowRight />
                  </a>

                </div>

              </div>

            </div>


            {/* Project 3 */}

            <div className="project-card">

              <div className="project-image js-project">
                    <div className="project-image wordpress-project">

                <img
                    src={expressImageeee}
                    alt="Omarrestaurant Website"
                />

              </div>


              </div>

              <div className="project-info">

                <span className="project-type">
                  JavaScript
                </span>

                <h3>
                  JavaScript Project
                </h3>

                <p>
                  Interactive JavaScript project using DOM,
                  events, localStorage and modern JavaScript.
                </p>

                <div className="project-tech">

                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>

                </div>

                <div className="project-links">

                  <a href="https://github.com/osamacena156-cell" target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </a>

                  <a href="https://github.com/osamacena156-cell" target="_blank" rel="noreferrer">
                    Live Demo
                    <FaArrowRight />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="section contact-section" id="contact">

        <div className="container">

          <div className="contact-box">

            <div className="section-title">

              <p>LET'S WORK TOGETHER</p>

              <h2>
                Get In <span>Touch</span>
              </h2>

              <div className="title-line"></div>

            </div>

            <p className="contact-description">
              I'm currently looking for a Front-End internship
              and new opportunities. Feel free to contact me.
            </p>


            <div className="contact-items">


              <a
                href="mailto:omarahmedraslan787@gmail.com"
                className="contact-item"
              >

                <div className="contact-icon">
                  <FaEnvelope />
                </div>

                <div>
                  <span>Email</span>
                  <strong>omarahmedraslan787@gmail.com</strong>
                </div>

              </a>

              <a
                href="https://www.facebook.com/share/1M2GXDUCFw/"
                className="contact-item"
              >

                <div className="contact-icon">
                  <FaFacebook />
                </div>

                <div>
                  <span>Facebook</span>
                  <strong>your-facebook-profile</strong>
                </div>

              </a>


              <a
                href="https://github.com/osamacena156-cell"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  <FaGithub />
                </div>

                <div>
                  <span>GitHub</span>
                  <strong>github.com/OmarAhmed</strong>
                </div>

              </a>


              <a
                href="https://www.linkedin.com/in/omar-ahmed-web"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  <FaLinkedin />
                </div>

                <div>
                  <span>LinkedIn</span>
                  <strong>linkedin.com/in/omar-ahmed-web</strong>
                </div>

              </a>


              <a
                href="https://wa.me/201014214030"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  <FaWhatsapp />
                </div>

                <div>
                  <span>WhatsApp</span>
                  <strong>+20 1014214030</strong>
                </div>

              </a>

            </div>


            <a href="#" className="cv-button">

              <FaDownload />

              Download CV

            </a>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <div className="container footer-container">

          <div className="footer-logo">
            Omar<span>.</span>
          </div>

          <p>
            © 2026 Omar Ahmed. All Rights Reserved.
          </p>

          <div className="footer-social">

            <a href="https://github.com/osamacena156-cell" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/omar-ahmed-web" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/1M2GXDUCFw/" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;