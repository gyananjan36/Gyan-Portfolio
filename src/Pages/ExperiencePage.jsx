const experienceEntries = [
  {
    date: 'May 2025',
    company: 'Vedic Growth Consultants LLP',
    location: 'Bengaluru, India',
    role: 'Product Manager Intern • TrackD2C',
    details: [
      'Spearheaded 20+ user discovery interviews with D2C founders, surfacing 5 critical bottlenecks that shaped MVP scope and reduced time-to-insight by 40%.',
      'Prioritized features via JTBD and MoSCoW, consolidating orders, inventory, and ad-spend into a unified platform targeting 10% operational overhead reduction for 10,000+ D2C brands.',
      'Architected a phased AI roadmap from operational sync to anomaly detection and automated ad optimization, projecting measurable conversion uplift and a 10× growth trajectory.',
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
      'Awarded Manager\'s Choice Award in 2022, 2023, and 2025 for sustained engineering excellence and cross-functional impact.',
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

function ExperiencePage() {
  return (
    <section className="page-content-section container" id="experience-page">
      <div className="section-tag">Experience</div>
      <h2 className="section-title">Career journey</h2>
      <p className="section-subtitle">
        From enterprise data engineering to AI product thinking, each role built a stronger blend of technical depth and product intuition.
      </p>

      <div className="timeline-list">
        {experienceEntries.map((entry) => (
          <article key={entry.role} className="timeline-card">
            <div className="timeline-meta">
              <span className="timeline-date">{entry.date}</span>
              <span className="timeline-company">{entry.company}</span>
              <span className="timeline-location">{entry.location}</span>
            </div>

            <div className="timeline-body">
              <h3>{entry.role}</h3>
              <ul>
                {entry.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <span className="timeline-tag">{entry.tag}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage
