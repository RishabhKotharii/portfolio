import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiCss3,
  SiTailwindcss,
  SiDocker,
  SiAmazonaws,
  SiGithub,
  SiLinkedin,
} from 'react-icons/si'
import { MdEmail, MdPhone } from 'react-icons/md'
import './App.css'

const API_BASE = import.meta.env.VITE_API_BASE_URL || ''
const CONTACT_API = 'http://localhost:5000/api/contact'

const contactItems = [
  {
    label: 'Email',
    value: 'kothari.rishabh17@gmail.com',
    href: 'mailto:kothari.rishabh17@gmail.com',
    icon: MdEmail,
  },
  {
    label: 'Phone',
    value: '+91 93217 29644',
    href: 'tel:+919321729644',
    icon: MdPhone,
  },
  {
    label: 'GitHub',
    value: 'RishabhKotharii',
    href: 'https://github.com/RishabhKotharii',
    icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    value: 'Rishabhh',
    href: 'https://www.linkedin.com/in/rishabh-kothari-9a3376209/',
    icon: SiLinkedin,
  },
]

const skills = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Next.js', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Backend & Data',
    items: ['Node.js', 'Express', 'MongoDB', 'Docker', 'AWS'],
  },
]

const experience = [
  {
    role: 'Project Contributor',
    company: 'Rowing Federation of India Tournament Management System',
    period: 'Oct. 2025 – Present',
    location: 'India',
    bullets: [
      'Developed a full-stack tournament management application to replace legacy Excel-based workflows.',
      'Designed and implemented backend logic for race progression (Heats → Repechage → Quarter-finals → Semi-finals → Finals).',
      'Contributed to end-to-end system flow, from tournament creation to final result processing.',
      'Performed testing and debugging to ensure accuracy in race scheduling and result handling.',
    ],
  },
]

const projects = [
  {
    title: 'Fluxora',
    subtitle: 'Workflow-Based Task Management System',
    bullets: [
      'Developed a Jira-inspired workflow management system with stage-based task transitions (Backlog → Ready → In Progress → Done).',
      'Implemented priority-based task scheduling, filtering, and productivity analytics dashboard.',
      'Built a responsive UI using React, TypeScript, and Tailwind CSS with localStorage-based persistence.',
      'Designed modular and reusable components with a focus on clean UI/UX and performance.',
    ],
  },
  {
    title: 'Rowing Federation of India Tournament Management System',
    subtitle: '',
    bullets: [
      'Built a comprehensive tournament management application to digitize and replace existing Excel-based workflows used in rowing competitions.',
      'Designed the complete end-to-end workflow, enabling organizers to create tournaments, configure events, and manage participating associations and teams.',
      'Implemented structured race progression including seeding, start list generation, and multi-stage transitions (Heats → Repechage → Semi-finals → Finals).',
      'Developed logic to handle team entries, lane assignments, and result processing across different competition stages.',
      'Contributed to frontend UI and performed extensive testing to ensure accurate scheduling, smooth transitions, and reliable tournament execution.',
    ],
  },
  {
    title: 'Tiffin Service Management System',
    subtitle: 'Java, MySQL, HTML, CSS',
    bullets: [
      'Developed a web-based application to manage online tiffin service orders, customer details, and delivery tracking.',
      'Designed and implemented a relational database using MySQL for managing users, menu items, and transactions.',
      'Built the backend logic in Java, ensuring efficient CRUD operations and real-time updates.',
      'Styled the frontend with HTML/CSS for a clean and responsive user interface.',
      'Improved service efficiency by automating manual order management processes.',
    ],
  },
]

const education = {
  institution: 'MIT World Peace University, Pune',
  degree: 'B.Tech Computer Science',
  cgpa: '8.38',
}

const techStack = [
  { label: 'React', icon: SiReact },
  { label: 'JavaScript', icon: SiJavascript },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'CSS', icon: SiCss3 },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Docker', icon: SiDocker },
  { label: 'AWS', icon: SiAmazonaws },
]

function App() {
  const techRef = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!techRef.current) return

    const items = techRef.current.querySelectorAll('.logo-card')

    gsap.to(items, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.2,
    })
  }, [])

  useEffect(() => {
    if (!status) return

    const timer = setTimeout(() => {
      setStatus(null)
    }, 3000)

    return () => clearTimeout(timer)
  }, [status])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)
    setLoading(true)

    try {
      const response = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const text = await response.text()
      const data = text ? JSON.parse(text) : {}

      if (!response.ok) {
        throw new Error(data.error || `Unable to send message (${response.status})`)
      }

      setStatus({ type: 'success', text: data.message || 'Message sent! I will get back to you soon.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="portfolio">
      <header className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow-with-image">
            <img src="/profilephoto.jpeg" alt="Rishabh Kothari" className="profile-image" />
            <p className="eyebrow">Rishabh Kothari</p>
          </div>
          <h1>Full-stack MERN developer focused on React, TypeScript, and modern product workflows.</h1>
          <p className="hero-text">
            Building polished portfolio experiences and scalable web systems that replace manual workflows with clean, reliable digital tools.
          </p>
        </div>

        <aside className="hero-card">
          <h2>Contact</h2>
          <ul className="contact-list">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <span><Icon /> {item.label}</span>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.value}
                  </a>
                </li>
              )
            })}
          </ul>
        </aside>
      </header>

      <main>
        <section className="section skills-section">
          <h2>Skills</h2>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section experience-section">
          <h2>Experience</h2>
          {experience.map((item) => (
            <article className="experience-card" key={item.role}>
              <div className="experience-header">
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                </div>
                <div className="experience-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="section projects-section">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section techstack-section">
          <div className="section-heading-row">
            <h2>Tech stack</h2>
          </div>
          <div className="logo-grid" ref={techRef}>
            {techStack.map((tech) => {
              const Icon = tech.icon
              return (
                <div className="logo-card" key={tech.label}>
                  <div className="logo-icon">
                    <Icon />
                  </div>
                  <span>{tech.label}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className="section education-section">
          <h2>Education</h2>
          <div className="education-card">
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <p>CGPA: {education.cgpa}</p>
          </div>
        </section>

        <section className="section contact-section">
          <div className="contact-header-row">
            <div>
              <h2>Connect with me</h2>
              <p>Send your query here and feel free to connect....</p>
            </div>
          </div>

          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field-row">
                <label>
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Why are you reaching out?"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Write your message here..."
                />
              </label>
              <button className="submit-button" type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>

          </div>
        </section>
      </main>

      {status && (
        <div className={`toast toast-${status.type}`}>
          {status.text}
        </div>
      )}
    </div>
  )
}

export default App
