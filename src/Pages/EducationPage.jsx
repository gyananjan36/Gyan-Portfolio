const educationRows = [
  {
    year: 'Apr – Dec 2025',
    title: 'Professional Certification — Product Management & Agentic AI',
    institution: 'Indian Institute of Technology (IIT), Patna',
  },
  {
    year: '2016 – 2020',
    title: 'Bachelor of Engineering — Electrical, Electronics & Communications Engineering',
    institution: 'Chandigarh University',
  },
]

const certifications = [
  ['IBM Delivery Central Platform', 'IBM'],
  ['IBM Watsonx Essentials', 'IBM'],
  ['AWS Cloud Practitioner', 'Amazon Web Services'],
  ['GenAI for Executives', 'Coursera'],
  ['Prompt Engineering for Everyone', 'IBM / Coursera'],
  ['AI Tools Mastery', 'be10X'],
]

function EducationPage() {
  return (
    <section className="page-content-section container" id="education-page">
      <div className="section-tag">Education & Certifications</div>
      <h2 className="section-title">Academic foundation</h2>

      <div className="edu-grid">
        {educationRows.map((item) => (
          <article key={item.title} className="edu-card">
            <div className="edu-year">{item.year}</div>
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
          </article>
        ))}
      </div>

      <div className="cert-grid">
        {certifications.map(([name, provider]) => (
          <div key={name} className="cert-pill">
            <strong>{name}</strong>
            {provider}
          </div>
        ))}
      </div>
    </section>
  )
}

export default EducationPage
