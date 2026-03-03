import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    id: "01",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="38" height="38">
        <rect x="6" y="6" width="36" height="36" rx="4"/>
        <circle cx="24" cy="24" r="8"/>
        <line x1="24" y1="6" x2="24" y2="16"/>
        <line x1="24" y1="32" x2="24" y2="42"/>
        <line x1="6" y1="24" x2="16" y2="24"/>
        <line x1="32" y1="24" x2="42" y2="24"/>
      </svg>
    ),
    title: "CAD Modeling",
    short: "Precision 3D Design",
    description:
      "Creating detailed 3D models and technical drawings using SolidWorks and AutoCAD. From concept sketches to production-ready files with full tolerance specifications.",
    tags: ["SolidWorks", "AutoCAD", "GD&T"],
    color: "#8B5CF6",
    accent: "#c4b5fd",
  },
  {
    id: "02",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="38" height="38">
        <path d="M8 40 L24 8 L40 40 Z"/>
        <line x1="14" y1="28" x2="34" y2="28"/>
        <circle cx="24" cy="22" r="3"/>
      </svg>
    ),
    title: "Structural Analysis",
    short: "FEA & Stress Testing",
    description:
      "Finite Element Analysis to simulate real-world loading conditions. Identifying stress concentrations, failure points and optimizing designs for maximum performance.",
    tags: ["ANSYS", "FEA", "MATLAB"],
    color: "#7C3AED",
    accent: "#ddd6fe",
  },
  {
    id: "03",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="38" height="38">
        <path d="M10 38 C10 28 18 20 24 14 C30 20 38 28 38 38"/>
        <path d="M16 38 C16 30 20 24 24 20 C28 24 32 30 32 38"/>
        <line x1="10" y1="38" x2="38" y2="38"/>
      </svg>
    ),
    title: "Thermal Systems",
    short: "Heat Transfer & CFD",
    description:
      "Computational fluid dynamics and thermal analysis for HVAC, heat exchangers and engine cooling systems. Optimizing airflow and heat dissipation.",
    tags: ["CFD", "Fluent", "Heat Transfer"],
    color: "#6D28D9",
    accent: "#ede9fe",
  },
  {
    id: "04",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="38" height="38">
        <rect x="8" y="18" width="32" height="20" rx="3"/>
        <path d="M16 18 L16 12 C16 9 20 6 24 6 C28 6 32 9 32 12 L32 18"/>
        <circle cx="24" cy="28" r="4"/>
        <line x1="24" y1="32" x2="24" y2="36"/>
      </svg>
    ),
    title: "Product Design",
    short: "Concept to Prototype",
    description:
      "End-to-end product development from ideation and sketching through prototyping and design validation. Balancing aesthetics, functionality and manufacturability.",
    tags: ["Prototyping", "DFM", "Fusion 360"],
    color: "#5B21B6",
    accent: "#f5f3ff",
  },
  {
    id: "05",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="38" height="38">
        <circle cx="24" cy="24" r="16"/>
        <circle cx="24" cy="24" r="6"/>
        <line x1="24" y1="8" x2="24" y2="18"/>
        <line x1="24" y1="30" x2="24" y2="40"/>
        <line x1="8" y1="24" x2="18" y2="24"/>
        <line x1="30" y1="24" x2="40" y2="24"/>
        <line x1="12.7" y1="12.7" x2="19.8" y2="19.8"/>
        <line x1="28.2" y1="28.2" x2="35.3" y2="35.3"/>
      </svg>
    ),
    title: "Manufacturing",
    short: "Process & Planning",
    description:
      "Process planning, toolpath generation, and manufacturing optimization. CNC programming and lean manufacturing principles for efficient, high-quality production.",
    tags: ["CNC", "GCode", "Lean"],
    color: "#8B5CF6",
    accent: "#c4b5fd",
  },
  {
    id: "06",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" width="38" height="38">
        <path d="M6 36 L18 24 L28 30 L42 12"/>
        <circle cx="18" cy="24" r="3"/>
        <circle cx="28" cy="30" r="3"/>
        <line x1="6" y1="42" x2="42" y2="42"/>
        <line x1="6" y1="6" x2="6" y2="42"/>
      </svg>
    ),
    title: "Technical Reports",
    short: "Documentation & Analysis",
    description:
      "Comprehensive technical documentation, research papers and engineering reports. Clear, precise communication of complex mechanical concepts for diverse audiences.",
    tags: ["LaTeX", "Research", "ASME"],
    color: "#7C3AED",
    accent: "#ddd6fe",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  return (
    <div className="services-container">
      {/* Background decoration */}
      <div className="services-bg-blob sb-1" />
      <div className="services-bg-blob sb-2" />

      {/* Header */}
      <div className="services-header">
        <div className="services-eyebrow">
          <span className="eyebrow-dot" />
          What I Offer
        </div>
        <h2 className="services-title">
          My <span className="services-title-highlight">Services</span>
        </h2>
        <p className="services-subtitle">
          Combining engineering fundamentals with modern tools to deliver
          precise, innovative mechanical solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="services-grid">
        {services.map((s) => (
          <div
            key={s.id}
            className={"service-card" + (hovered === s.id ? " service-card-hovered" : "") + (active === s.id ? " service-card-active" : "")}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActive(active === s.id ? null : s.id)}
            style={{ "--card-color": s.color, "--card-accent": s.accent }}
          >
            {/* Card number */}
            <span className="card-number">{s.id}</span>

            {/* Icon */}
            <div className="card-icon" style={{ color: s.color }}>
              {s.icon}
            </div>

            {/* Content */}
            <div className="card-content">
              <p className="card-short">{s.short}</p>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-description">{s.description}</p>
            </div>

            {/* Tags */}
            <div className="card-tags">
              {s.tags.map((tag) => (
                <span key={tag} className="card-tag">{tag}</span>
              ))}
            </div>

            {/* Hover glow */}
            <div className="card-glow" />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="services-cta">
        <p>Have a project in mind?</p>
        <a href="/Contact" className="services-cta-btn">
          Let's Collaborate
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );
}