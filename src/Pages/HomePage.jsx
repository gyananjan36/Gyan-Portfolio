const stats = [
  { value: '5+', label: 'Years in enterprise engineering' },
  { value: '3×', label: 'IBM Manager\'s Choice award' },
  { value: '1st', label: 'Place — AgenticX Hackathon' },
  { value: '20+', label: 'User discovery interviews' },
]

const aboutBadges = [
  'LLMs',
  'Agentic Systems',
  'RAG Pipelines',
  'Prompt Engineering',
  'n8n · Zapier',
  'IBM Watsonx',
  'Agile · Scrum',
  'RICE · MoSCoW',
]

const experienceItems = [
  {
    date: 'May 2025',
    company: 'Vedic Growth Consultants LLP',
    location: 'Bengaluru, India',
    role: 'Product Manager Intern • TrackD2C',
    details: [
      'Spearheaded 20+ user discovery interviews with D2C founders, surfacing 5 critical bottlenecks that shaped MVP scope and reduced time-to-insight by 40%.',
      'Prioritized features via JTBD and MoSCoW, consolidating orders, inventory, and ad-spend into a unified platform targeting 10% operational overhead reduction for 10,000+ D2C brands.',
      'Architected a phased AI roadmap — from operational sync to anomaly detection and automated ad optimization — projecting measurable conversion uplift and a 10× growth trajectory.',
    ],
    tag: 'E-commerce Ops · MVP · AI Roadmap',
  },
  {
    date: 'Dec 2020 – Present',
    company: 'IBM',
    location: 'Bengaluru, India',
    role: 'Senior Data Engineer → Associate System Engineer',
    details: [
      'Engineered ETL pipelines (Ab Initio, Unix, SQL) for enterprise data integration, lifting throughput by 20% with 99.9% accuracy across multi-system workflows.',
      'Accelerated deployment cycles by 30% via CI/CD DevOps practices; promoted from Associate SE to Data Engineer within 15 months for exceptional performance.',
      'Awarded Manager\'s Choice Award (IBM FSS Recognition) in 2022, 2023, and 2025 for sustained engineering excellence and cross-functional impact.',
    ],
    tag: 'ETL · CI/CD · Enterprise · Ab Initio',
  },
  {
    date: 'Jan 2018 – Feb 2020',
    company: 'Niteowlz Hospitality',
    location: 'Mohali, India',
    role: 'Co-Founder',
    details: [
      'Launched a cloud kitchen for the late-night student segment; onboarded Swiggy and Zomato to reach 5+ high-density student hubs across Mohali.',
      'Defined GTM strategy and optimized delivery logistics, achieving sub-30-min SLAs at peak demand to drive repeat-order growth.',
      'Secured incubation at CU-TBI (Chandigarh University Technology Business Incubator) for institutional mentorship and operational scaling resources.',
    ],
    tag: 'GTM · Ops · CU-TBI Incubated',
  },
]

const projects = [
  {
    icon: '🤖',
    award: 'IIT Patna Capstone · 2025',
    name: 'Recruit-AI',
    context: 'Agentic Recruitment Solution',
    description:
      'End-to-end recruitment platform using Gemini 2.0 Flash and n8n that automates candidate screening and interview scheduling. Targets 60–70% reduction in time-to-screen through semantic resume matching and automated email drafting, eliminating manual shortlisting for high-volume hiring.',
    stack: ['Gemini 2.0 Flash', 'n8n', 'React', 'Lovable', 'Agentic AI'],
  },
  {
    icon: '📚',
    award: '1st Place · AgenticX Jan 2026',
    name: 'StudyBuddy AI',
    context: 'Autonomous Learning Agent',
    description:
      'Identified “Information Fragmentation” as the core pain point for learners; led a team of 4 to architect an autonomous AI agent around Minimal Planning, Maximum Learning using context-aware RAG on n8n and Supabase. Won 1st Place at AgenticX Hackathon for high-fidelity MVP with superior AI strategy and UX.',
    stack: ['n8n', 'Supabase', 'RAG', 'Lovable', 'Vercel', 'Figma'],
  },
]

const skills = {
  'Product Management': [
    'Product Roadmap',
    'PRD / FRD',
    'GTM Strategy',
    'A/B Testing',
    'User Persona Mapping',
    'RICE · MoSCoW · Kano',
    'Backlog Management',
    'OKRs & KPIs',
    'Agile / Scrum',
    'UI / UX',
  ],
  'AI / Technology': [
    'LLMs',
    'Prompt Engineering',
    'RAG Pipelines',
    'Model Evaluation',
    'Multi-Agent Systems',
    'AI Guardrails',
    'n8n · Zapier',
    'Lovable · Base44 · Replit',
    'Python',
    'SQL',
  ],
  'Tools & Platforms': [
    'JIRA',
    'Miro',
    'Figma',
    'Mixpanel',
    'Ab Initio',
    'Informatica',
    'IBM Watsonx',
    'AWS',
    'Unix / DevOps',
  ],
  'Leadership & Soft': [
    'Stakeholder Management',
    'Cross-functional Leadership',
    'Critical Thinking',
    'Customer Empathy',
    'JTBD Framework',
    'MVP Scoping',
    'Entrepreneurship',
  ],
}

function HomePage() {
  return (
    <div className="home-page" id="home">
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>

        <div className="hero-content container">
          <div className="hero-tag">AI Product Manager</div>
          <h1>
            Gyananjan
            <br />
            <em>Bhattacharjee</em>
          </h1>
          <p className="hero-desc">
            Building intelligent products at the frontier of LLMs, agentic systems, and RAG pipelines —
            with 5+ years of enterprise data engineering and a customer-first approach to responsible AI.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get in Touch →
            </a>
            <a href="/Gyananjan-Bhattacharjee-Resume.pdf" className="btn-ghost" download>
              Download Resume
            </a>
            <a href="#projects" className="btn-ghost">
              View Projects
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="content-section">
        <div className="section-inner container">
          <div className="section-tag">About me</div>
          <h2 className="section-title">Where strategy meets engineering</h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m a <strong>Strategic AI Product Manager</strong> candidate who bridges the gap between deep
                technical execution and customer-centric product thinking. My background at IBM gave me
                fluency in enterprise data infrastructure — ETL pipelines, CI/CD, multi-system workflows —
                while my recent work in AI has focused on LLMs, agentic orchestration, and RAG.
              </p>
              <p>
                I&apos;ve delivered across the full PM lifecycle: from 20+ user discovery interviews with D2C founders
                to defining MVP scope, writing PRDs, and shipping agentic AI products with measurable outcomes.
                I&apos;m Watsonx-certified and backed by an IIT Patna certification in Product Management &amp; Agentic AI.
              </p>
              <p>
                Earlier I co-founded <strong>Niteowlz Hospitality</strong> — a late-night cloud kitchen that
                launched on Swiggy and Zomato and secured incubation at CU-TBI. That entrepreneurial chapter
                shaped how I think about GTM, logistics, and building for real customer pain.
              </p>

              <div className="about-badges">
                {aboutBadges.map((badge) => (
                  <span key={badge} className="badge">{badge}</span>
                ))}
              </div>
            </div>

            <div className="about-awards">
              <div className="award-card">
                <div className="award-title">🏆 1st Place — Masai AgenticX Hackathon (Jan 2026)</div>
                <div className="award-sub">StudyBuddy AI — autonomous learning agent with context-aware RAG</div>
              </div>
              <div className="award-card">
                <div className="award-title">🏅 IBM Manager&apos;s Choice Award — 2022, 2023 &amp; 2025</div>
                <div className="award-sub">IBM FSS Recognition for engineering excellence and cross-functional impact</div>
              </div>
              <div className="award-card">
                <div className="award-title">🚀 IIT Patna Capstone — AI PM Cohort 2025</div>
                <div className="award-sub">Recruit-AI: end-to-end agentic recruitment platform with Gemini 2.0</div>
              </div>
              <div className="award-card">
                <div className="award-title">🌱 CU-TBI Incubation — Niteowlz Hospitality</div>
                <div className="award-sub">Chandigarh University Technology Business Incubator, 2018–2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-inner container">
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Career journey</h2>
          <p className="section-subtitle">
            From co-founder to enterprise data engineer to AI product leader — a path built on shipping real things for real users.
          </p>

          <div className="exp-list">
            {experienceItems.map((item) => (
              <div key={item.role} className="exp-item">
                <div className="exp-meta">
                  <div className="exp-date">{item.date}</div>
                  <div className="exp-company">{item.company}</div>
                  <div className="exp-location">{item.location}</div>
                </div>

                <div>
                  <div className="exp-role">{item.role}</div>
                  <ul className="exp-bullets">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <span className="exp-tag">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="section-inner container">
          <div className="section-tag">Projects</div>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-subtitle">
            Agentic AI products shipped with real users, real constraints, and measurable outcomes.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.name} className="project-card">
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>
                  <span className="project-award">{project.award}</span>
                </div>
                <div className="project-name">{project.name}</div>
                <div className="project-context">{project.context}</div>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tag) => (
                    <span key={tag} className="stack-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-inner container">
          <div className="section-tag">Skills</div>
          <h2 className="section-title">Areas of expertise</h2>
          <p className="section-subtitle">
            A full-stack PM toolkit — from user research and roadmapping to hands-on AI engineering.
          </p>

          <div className="skills-grid">
            {Object.entries(skills).map(([title, items]) => (
              <div key={title} className="skill-group">
                <div className="skill-group-title">{title}</div>
                <div className="skill-items">
                  {items.map((item) => (
                    <span key={item} className="skill-item">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="content-section">
        <div className="section-inner container">
          <div className="section-tag">Education &amp; Certifications</div>
          <h2 className="section-title">Academic foundation</h2>

          <div className="edu-grid">
            <div className="edu-card">
              <div className="edu-year">Apr – Dec 2025</div>
              <div className="edu-degree">Professional Certification — Product Management &amp; Agentic AI</div>
              <div className="edu-inst">Indian Institute of Technology (IIT), Patna</div>
            </div>
            <div className="edu-card">
              <div className="edu-year">2016 – 2020</div>
              <div className="edu-degree">Bachelor of Engineering — Electrical, Electronics &amp; Communications Engineering</div>
              <div className="edu-inst">Chandigarh University</div>
            </div>
          </div>

          <div className="cert-grid">
            <div className="cert-pill"><strong>IBM Delivery Central Platform</strong>IBM</div>
            <div className="cert-pill"><strong>IBM Watsonx Essentials</strong>IBM</div>
            <div className="cert-pill"><strong>AWS Cloud Practitioner</strong>Amazon Web Services</div>
            <div className="cert-pill"><strong>GenAI for Executives</strong>Coursera</div>
            <div className="cert-pill"><strong>Prompt Engineering for Everyone</strong>IBM / Coursera</div>
            <div className="cert-pill"><strong>AI Tools Mastery</strong>be10X</div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner container">
          <div>
            <div className="section-tag">Contact</div>
            <div className="contact-headline">
              Let&apos;s build something
              <em>remarkable</em>
              together.
            </div>
            <p className="contact-sub">
              Open to AI PM roles, collaborations, and conversations about the future of agentic AI products.
            </p>
            <a href="mailto:gyananjan36@gmail.com" className="btn-primary">
              Start a conversation →
            </a>
            <a href="/Gyananjan-Bhattacharjee-Resume.pdf" className="btn-ghost" download>
              Download Resume
            </a>
          </div>

          <div className="contact-links">
            <a href="mailto:gyananjan36@gmail.com" className="contact-link">
              <div className="contact-link-icon">✉</div>
              <div className="contact-link-text">
                <strong>Email</strong>
                <span>gyananjan36@gmail.com</span>
              </div>
            </a>
            <a href="tel:+918136046564" className="contact-link">
              <div className="contact-link-icon">📱</div>
              <div className="contact-link-text">
                <strong>Phone</strong>
                <span>+91-81360 46564 · Bengaluru, India</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/gyananjan-bhattacharjee-779791141/" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">in</div>
              <div className="contact-link-text">
                <strong>LinkedIn</strong>
                <span>gyananjan-bhattacharjee</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
