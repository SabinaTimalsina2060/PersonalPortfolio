import React, { useState } from "react";
import "./About.css";
import profilePic from "../assets/profile-pic.png";

const skills = [
  { name: "SolidWorks", level: 90, category: "CAD" },
  { name: "AutoCAD", level: 85, category: "CAD" },
  { name: "ANSYS", level: 75, category: "Analysis" },
  { name: "MATLAB", level: 80, category: "Analysis" },
  { name: "Fusion 360", level: 70, category: "CAD" },
  { name: "Python", level: 65, category: "Programming" },
];

const timeline = [
  {
    year: "2022",
    title: "Started B.E. Mechanical Engineering",
    place: "Tribhuvan University, Nepal",
    desc: "Began undergraduate journey diving into engineering fundamentals, thermodynamics and mechanics.",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "CAD & Design Certification",
    place: "SolidWorks Associate (CSWA)",
    desc: "Earned certified associate status in SolidWorks, completing complex 3D modeling and assembly projects.",
    icon: "📐",
  },
  {
    year: "2024",
    title: "Engineering Internship",
    place: "Manufacturing Division",
    desc: "Hands-on experience with CNC machining, process planning, and production floor operations.",
    icon: "⚙️",
  },
  {
    year: "2025",
    title: "Senior Year Projects",
    place: "Tribhuvan University",
    desc: "Leading capstone project on sustainable energy systems and thermal optimization.",
    icon: "🚀",
  },
];

const values = [
  { icon: "⚡", label: "Precision", desc: "Every detail matters in engineering." },
  { icon: "🔬", label: "Curiosity", desc: "Always asking how and why things work." },
  { icon: "🤝", label: "Collaboration", desc: "Great designs come from great teamwork." },
  { icon: "🌱", label: "Growth", desc: "Constantly learning and evolving skills." },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="about-container">
      <div className="about-blob ab-1" />
      <div className="about-blob ab-2" />
      <div className="about-blob ab-3" />

      {/* HERO */}
      <section className="about-hero">
        <div className="about-img-wrap">
          <div className="about-img-ring ring-a" />
          <div className="about-img-ring ring-b" />
          <div className="about-img-circle" />
          <img src={profilePic} alt="Sabina Timalsina" className="about-profile-img" />
          <div className="about-img-tag tag-tl"><span>🇳🇵</span> Nepal</div>
          <div className="about-img-tag tag-br"><span>🎓</span> 3rd Year</div>
        </div>

        <div className="about-intro">
          <div className="about-eyebrow">
            <span className="eyebrow-dot" /> About Me
          </div>
          <h1 className="about-title">
            Crafting the Future<br />
            Through <span className="about-highlight">Engineering</span>
          </h1>
          <p className="about-bio">
            Hi! I&apos;m <strong>Sabina Timalsina</strong>, a third-year Mechanical
            Engineering student at Tribhuvan University, Nepal. I&apos;m passionate about
            translating real-world problems into precise, elegant mechanical solutions.
          </p>
          <p className="about-bio">
            From designing components in SolidWorks to running FEA simulations in ANSYS,
            I thrive at the intersection of creativity and technical rigor. Outside the
            lab, I love sketching concept designs, exploring sustainable engineering, and
            mentoring younger students.
          </p>

          <div className="about-values">
            {values.map((v) => (
              <div key={v.label} className="about-value-chip">
                <span className="value-icon">{v.icon}</span>
                <div>
                  <p className="value-label">{v.label}</p>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="/resume.pdf" download className="about-resume-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      {/* TABS */}
      <section className="about-tabs-section">
        <div className="about-tabs">
          {["skills", "journey"].map((tab) => (
            <button
              key={tab}
              className={"about-tab" + (activeTab === tab ? " about-tab-active" : "")}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "skills" ? "⚡ Skills" : "🗺️ Journey"}
            </button>
          ))}
        </div>

        {activeTab === "skills" && (
          <div className="skills-panel">
            {skills.map((s, i) => (
              <div key={s.name} className="skill-row" style={{ animationDelay: i * 0.08 + "s" }}>
                <div className="skill-meta">
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-badge">{s.category}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" style={{ width: s.level + "%", animationDelay: i * 0.1 + "s" }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "journey" && (
          <div className="journey-panel">
            {timeline.map((item, i) => (
              <div key={item.year} className="timeline-item" style={{ animationDelay: i * 0.1 + "s" }}>
                <div className="tl-left"><span className="tl-year">{item.year}</span></div>
                <div className="tl-connector">
                  <div className="tl-dot">{item.icon}</div>
                  {i < timeline.length - 1 && <div className="tl-line" />}
                </div>
                <div className="tl-right">
                  <h4 className="tl-title">{item.title}</h4>
                  <p className="tl-place">{item.place}</p>
                  <p className="tl-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* STATS */}
      <section className="about-stats">
        {[
          { num: "3+", label: "Years of Study" },
          { num: "10+", label: "Projects Completed" },
          { num: "5+", label: "Tools Mastered" },
          { num: "1", label: "Internship" },
        ].map((s) => (
          <div key={s.label} className="about-stat">
            <span className="about-stat-num">{s.num}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}