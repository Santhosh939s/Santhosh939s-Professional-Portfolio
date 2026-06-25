export default function Overlay() {
  const scrollToId = (e, id) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('scrollToSection', { detail: id }));
  };

  return (
    <div className="overlay-container">
      <nav className="nav">
        <div className="nav-logo">Maddila Santhosh Kumar</div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="https://github.com/Santhosh939s" target="_blank" rel="noreferrer" style={{ color: '#bbbbbb', textDecoration: 'none', fontFamily: 'DM Mono', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/santhosh939s/" target="_blank" rel="noreferrer" style={{ color: '#bbbbbb', textDecoration: 'none', fontFamily: 'DM Mono', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>LinkedIn</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section hero-section" style={{ marginTop: '10vh' }}>
        <div className="hero-tag"><span></span>AI Product Developer • Full Stack Developer • Cybersecurity Enthusiast</div>
        <h1 className="hero-name">Maddila<br /><em>Santhosh Kumar</em></h1>
        <p className="hero-summary">Computer Science student passionate about web development and software engineering. Experienced in building full-stack applications with AI/ML integrations, and crafting secure, responsive platforms.</p>
        <div className="btn-group">
          <a href="#projects" onClick={(e) => scrollToId(e, 'projects')} className="btn btn-primary">View Projects</a>
          <a href="#contact" onClick={(e) => scrollToId(e, 'contact')} className="btn btn-outline">Get In Touch</a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects" style={{ marginTop: '15vh' }}>
        <h2 className="section-title">Selected <em>Projects</em></h2>
        <div className="grid">

          <div className="glass-card" style={{ gridColumn: '1 / -1' }}>
            <h3 className="project-name" style={{ fontSize: '2rem' }}>MSK Code Arena <span style={{ fontSize: '1rem', color: '#ff8c00' }}>★ Featured</span></h3>
            <p className="project-desc" style={{ maxWidth: '800px' }}>An intelligent platform that automatically transforms raw text problem statements from any source into a structured LeetCode-style coding workspace. Features a custom code execution engine, Monaco Editor integration, hidden test-case evaluation, and AI-powered parsing for frictionless DSA practice.</p>
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="tag tag-gold">Gemini API</span>
              <span className="tag">React</span>
              <span className="tag">Monaco Editor</span>
              <span className="tag">Full Stack</span>
              <span className="tag">DSA</span>
            </div>
            <a href="https://msk-code-arena.vercel.app/" target="_blank" rel="noreferrer" className="project-arrow">View Live Platform →</a>
          </div>

          <div className="glass-card">
            <h3 className="project-name">Rapid Crisis Response</h3>
            <p className="project-desc">A full-stack real-time emergency response platform connecting guests, field staff, and commanders during crisis situations.</p>
            <div>
              <span className="tag tag-gold">Next.js</span>
              <span className="tag">Firebase</span>
              <span className="tag">Leaflet</span>
            </div>
            <br />
            <a href="https://github.com/Santhosh939s/Rapid-Crisis-Response" target="_blank" rel="noreferrer" className="project-arrow">View GitHub Repo →</a>
          </div>

          <div className="glass-card">
            <h3 className="project-name">Skill Swap Web App</h3>
            <p className="project-desc">Developed during Edunet Foundation Internship. A platform with authentication, skill matching, and recommendation features for users to exchange expertise.</p>
            <div>
              <span className="tag tag-gold">Full Stack</span>
              <span className="tag">Node.js</span>
              <span className="tag">HTML/CSS/JS</span>
            </div>
            <br />
            <a href="https://skill-swap-psi-inky.vercel.app/" target="_blank" rel="noreferrer" className="project-arrow">View Live →</a>
          </div>

          <div className="glass-card">
            <h3 className="project-name">Encrypted Data Exfiltration Detection</h3>
            <p className="project-desc">A network-based detection system to identify encrypted data exfiltration using TLS metadata and traffic flow analysis to detect anomalies.</p>
            <div>
              <span className="tag tag-gold">Cybersecurity</span>
              <span className="tag">Wireshark</span>
              <span className="tag">Traffic Analysis</span>
            </div>
            <br />
            <a href="https://github.com/Santhosh939s/CryptoFlow-IDS" target="_blank" rel="noreferrer" className="project-arrow">View GitHub →</a>
          </div>

          <div className="glass-card">
            <h3 className="project-name">Chess with AI</h3>
            <p className="project-desc">An interactive desktop chess application in Python. Features an AI opponent utilizing the Minimax algorithm with Alpha-Beta pruning for intelligent gameplay decisions.</p>
            <div>
              <span className="tag tag-gold">Python</span>
              <span className="tag">AI/Algorithms</span>
              <span className="tag">Game Dev</span>
            </div>
            <br />
            <a href="https://github.com/Santhosh939s/python-project-chess-with-AI-" target="_blank" rel="noreferrer" className="project-arrow">View GitHub →</a>
          </div>

          <div className="glass-card">
            <h3 className="project-name">CareSync-Hospital Appointment System</h3>
            <p className="project-desc">A full-stack hospital management system with role-based dashboards. Built with Node.js and Express.js, featuring appointment scheduling, consultation workflows, and resource management.</p>
            <div>
              <span className="tag tag-gold">Full Stack</span>
              <span className="tag">Node.js</span>
              <span className="tag">Express</span>
              <span className="tag">REST API</span>
            </div>
            <br />
            <a href="https://github.com/Santhosh939s/CareSync--Hospital-Appointment-Resource-Management-System" target="_blank" rel="noreferrer" className="project-arrow">View GitHub →</a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" style={{ marginTop: '15vh' }}>
        <h2 className="section-title">Technical <em>Skills</em></h2>
        <div className="grid">
          <div className="glass-card">
            <h3 style={{ marginBottom: '1rem', color: '#ff8c00' }}>Frontend</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6' }}>HTML5 · CSS · JavaScript<br />Next.js · React</p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '1rem', color: '#ff8c00' }}>Backend & DB</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6' }}>Node.js · Express.js · PHP<br />MySQL · MongoDB · Firebase</p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '1rem', color: '#ff8c00' }}>Languages</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6' }}>Java · Python<br />C · C++</p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '1rem', color: '#ff8c00' }}>Tools</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6' }}>Git · GitHub · VS Code<br />Postman · Wireshark</p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '1rem', color: '#ff8c00' }}>Core Subjects</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6' }}>DBMS · Operating Systems<br />Computer Networks · OOPs</p>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '1rem', color: '#ff8c00' }}>AI / ML Concepts</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6' }}>Minimax Algorithm<br />Alpha-Beta Pruning<br />Traffic Analysis Models</p>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="section" style={{ marginTop: '15vh' }}>
        <h2 className="section-title">Educational <em>Background</em></h2>
        <div className="grid">
          <div className="glass-card">
            <h3 style={{ marginBottom: '0.5rem', color: '#ff8c00' }}>SRM University AP</h3>
            <p style={{ marginBottom: '1rem', color: '#bbb' }}>B.Tech in Computer Science and Engineering</p>
            <div className="tag">Amaravati</div>
            <div className="tag">2023 – 2027</div>
            <div className="tag tag-gold">CGPA: 8.40/10 (Till 6th sem)</div>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '0.5rem', color: '#ff8c00' }}>MGM Junior College</h3>
            <p style={{ marginBottom: '1rem', color: '#bbb' }}>Intermediate (MPC) - Class XII</p>
            <div className="tag">Tirupati</div>
            <div className="tag">2021 – 2023</div>
            <div className="tag tag-gold">Grade: 94.8%</div>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '0.5rem', color: '#ff8c00' }}>MGM EM High School</h3>
            <p style={{ marginBottom: '1rem', color: '#bbb' }}>Secondary Education - Class X</p>
            <div className="tag">Tirupati</div>
            <div className="tag">2020 – 2021</div>
            <div className="tag tag-gold">Grade: 99.8%</div>
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: '15vh' }}>Global <em>Certifications</em></h2>
        <div className="grid">
          <div className="glass-card">
            <h3 style={{ marginBottom: '0.5rem', color: '#ff8c00' }}>Oracle Java SE 17 Developer</h3>
            <p style={{ marginBottom: '1rem', color: '#bbb' }}>Oracle (1Z0-829)</p>
            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=8769B1A027E8E4706E07E51DD15F7DB45402081AF337C4BDFE8AF3E2BEB6BD51" target="_blank" rel="noreferrer" className="project-arrow">View Certificate →</a>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '0.5rem', color: '#ff8c00' }}>SAP Generative AI Developer</h3>
            <p style={{ marginBottom: '1rem', color: '#bbb' }}>SAP Certified</p>
            <a href="https://drive.google.com/file/d/1bKvi9haLrB8BtUodWOXlZtU4eO7zOeUI/view?usp=sharing" target="_blank" rel="noreferrer" className="project-arrow">View Certificate →</a>
          </div>
          <div className="glass-card">
            <h3 style={{ marginBottom: '0.5rem', color: '#ff8c00' }}>Quantum Valley Hackathon 2025</h3>
            <p style={{ marginBottom: '1rem', color: '#bbb' }}>Hackathon Event</p>
            <a href="https://drive.google.com/file/d/1X1EQSnwGytrIxBtmSEVcOU93KRPeLh1E/view" target="_blank" rel="noreferrer" className="project-arrow">View Document →</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ minHeight: '80vh', marginTop: '10vh' }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Let's build<br /><em>something</em><br />together.</h2>
        <p style={{ color: '#bbb', maxWidth: '500px', lineHeight: '1.6', marginBottom: '2rem' }}>Open to internships, collaborations, and interesting projects. Drop a message — I'd love to connect and create.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:ms9390034298@gmail.com" className="glass-card" style={{ textDecoration: 'none', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#bbb', marginBottom: '0.3rem' }}>Email</div>
                  <div style={{ color: '#e0e0e0', fontSize: '1rem' }}>ms9390034298@gmail.com</div>
                </div>
                <div style={{ color: '#ff8c00' }}>↗</div>
              </a>
              <a href="tel:+919391220057" className="glass-card" style={{ textDecoration: 'none', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#bbb', marginBottom: '0.3rem' }}>Phone</div>
                  <div style={{ color: '#e0e0e0', fontSize: '1rem' }}>+91-9391220057</div>
                </div>
                <div style={{ color: '#ff8c00' }}>↗</div>
              </a>
              <a href="https://www.linkedin.com/in/santhosh939s/" target="_blank" rel="noreferrer" className="glass-card" style={{ textDecoration: 'none', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#bbb', marginBottom: '0.3rem' }}>LinkedIn</div>
                  <div style={{ color: '#e0e0e0', fontSize: '1rem' }}>santhosh939s</div>
                </div>
                <div style={{ color: '#ff8c00' }}>↗</div>
              </a>
              <a href="https://github.com/Santhosh939s" target="_blank" rel="noreferrer" className="glass-card" style={{ textDecoration: 'none', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#bbb', marginBottom: '0.3rem' }}>GitHub</div>
                  <div style={{ color: '#e0e0e0', fontSize: '1rem' }}>Santhosh939s</div>
                </div>
                <div style={{ color: '#ff8c00' }}>↗</div>
              </a>
            </div>
          </div>
          
          <div className="glass-card" style={{ flex: '1', minWidth: '300px', maxWidth: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', border: '1px solid rgba(255,140,0,0.2)', background: 'linear-gradient(145deg, rgba(25,25,30,0.6) 0%, rgba(255,140,0,0.05) 100%)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 140, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,140,0,0.3)', boxShadow: '0 0 30px rgba(255,140,0,0.2)' }}>
              <span style={{ fontSize: '2.5rem' }}>🚀</span>
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#e0e0e0' }}>Status: Available</h3>
              <p style={{ fontSize: '0.9rem', color: '#aaa', lineHeight: '1.5' }}>Currently seeking SDE intern roles and freelance web development opportunities.</p>
            </div>
            <a href="mailto:ms9390034298@gmail.com" className="btn btn-primary" style={{ width: '100%', padding: '0.8rem' }}>Say Hello</a>
          </div>
        </div>

        <div style={{ marginTop: '5rem', textAlign: 'center', color: '#bbb', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
          © 2025 · Crafted with code & creativity
        </div>
      </section>
    </div>
  );
}
