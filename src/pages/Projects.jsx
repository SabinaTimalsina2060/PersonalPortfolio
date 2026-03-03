import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Exhaust Heat Recovery System",
    category: "Thermal",
    tag: "Featured",
    year: "2025",
    description:
      "Designed a thermoelectric heat recovery system for motorcycle exhaust pipes, converting waste heat into usable electrical energy. Achieved 12% efficiency improvement over baseline.",
    tools: ["SolidWorks", "ANSYS", "MATLAB"],
    metrics: [
      { label: "Efficiency Gain", value: "12%" },
      { label: "Temp Range", value: "300°C" },
      { label: "Power Output", value: "8W" },
    ],
    icon: "🔥",
    color: "#8B5CF6",
    accent: "#ede9fe",
    gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
  },
  {
    id: 2,
    title: "Automated Seed Sowing Machine",
    category: "Mechanism",
    tag: "Capstone",
    year: "2024",
    description:
      "Developed a low-cost mechanized seed sowing device for small-scale Nepali farmers. Reduces sowing time by 60% and seed wastage by 40% compared to manual methods.",
    tools: ["AutoCAD", "Fusion 360", "Prototyping"],
    metrics: [
      { label: "Time Saved", value: "60%" },
      { label: "Seed Waste↓", value: "40%" },
      { label: "Cost", value: "NPR 4k" },
    ],
    icon: "🌾",
    color: "#7C3AED",
    accent: "#f5f3ff",
    gradient: "linear-gradient(135deg, #7C3AED, #5B21B6)",
  },
  {
    id: 3,
    title: "Stress Analysis of Bike Frame",
    category: "Analysis",
    tag: "FEA",
    year: "2024",
    description:
      "Conducted finite element analysis on a mountain bike frame under dynamic loading conditions. Identified critical stress zones and proposed design modifications reducing peak stress by 22%.",
    tools: ["ANSYS", "SolidWorks", "Python"],
    metrics: [
      { label: "Stress Reduced", value: "22%" },
      { label: "Load Cases", value: "8" },
      { label: "Safety Factor", value: "2.4" },
    ],
    icon: "🚲",
    color: "#6D28D9",
    accent: "#ede9fe",
    gradient: "linear-gradient(135deg, #6D28D9, #4C1D95)",
  },
  {
    id: 4,
    title: "Mini Wind Turbine Design",
    category: "Energy",
    tag: "Renewable",
    year: "2023",
    description:
      "Designed and tested a small-scale horizontal axis wind turbine blade profile optimized for low wind speeds in hilly terrains of Nepal. Blade designed using NACA airfoil data.",
    tools: ["MATLAB", "AutoCAD", "CFD"],
    metrics: [
      { label: "Cut-in Speed", value: "2.5 m/s" },
      { label: "Rated Power", value: "50W" },
      { label: "Cp", value: "0.38" },
    ],
    icon: "💨",
    color: "#5B21B6",
    accent: "#f5f3ff",
    gradient: "linear-gradient(135deg, #5B21B6, #3B0764)",
  },
  {
    id: 5,
    title: "Hydraulic Jack Optimization",
    category: "Mechanism",
    tag: "Workshop",
    year: "2023",
    description:
      "Reverse-engineered and optimized a 2-ton hydraulic bottle jack. Reduced weight by 15% through topology optimization while maintaining structural integrity and safety standards.",
    tools: ["SolidWorks", "FEA", "GD&T"],
    metrics: [
      { label: "Weight Saved", value: "15%" },
      { label: "Capacity", value: "2 Ton" },
      { label: "Factor of Safety", value: "3.1" },
    ],
    icon: "🔧",
    color: "#7C3AED",
    accent: "#ede9fe",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)",
  },
  {
    id: 6,
    title: "Water Pump Cavitation Study",
    category: "Thermal",
    tag: "Research",
    year: "2022",
    description:
      "Investigated cavitation phenomena in centrifugal pump impellers using CFD simulations. Documented bubble formation patterns and proposed inlet geometry modifications.",
    tools: ["Fluent", "ANSYS", "Report"],
    metrics: [
      { label: "Pressure Rise", value: "18%" },
      { label: "Flow Rate", value: "12 L/s" },
      { label: "Efficiency", value: "76%" },
    ],
    icon: "💧",
    color: "#8B5CF6",
    accent: "#f5f3ff",
    gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
  },
];

const categories = ["All", "Thermal", "Mechanism", "Analysis", "Energy"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-container">
      <div className="proj-blob pb-1" />
      <div className="proj-blob pb-2" />

      {/* Header */}
      <header className="projects-header">
        <div className="projects-eyebrow">
          <span className="eyebrow-dot" />
          My Work
        </div>
        <h1 className="projects-title">
          Engineering <span className="projects-highlight">Projects</span>
        </h1>
        <p className="projects-subtitle">
          A collection of academic, personal, and research projects spanning
          mechanical design, analysis, and sustainable engineering.
        </p>
      </header>

      {/* Filter pills */}
      <div className="projects-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={"filter-pill" + (activeFilter === cat ? " filter-pill-active" : "")}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
            {cat !== "All" && (
              <span className="filter-count">
                {projects.filter((p) => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="projects-grid">
        {filtered.map((proj, i) => (
          <article
            key={proj.id}
            className={
              "proj-card" +
              (hovered === proj.id ? " proj-card-hovered" : "") +
              (expanded === proj.id ? " proj-card-expanded" : "")
            }
            style={{
              "--proj-color": proj.color,
              "--proj-accent": proj.accent,
              "--proj-gradient": proj.gradient,
              animationDelay: i * 0.08 + "s",
            }}
            onMouseEnter={() => setHovered(proj.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
          >
            {/* Top row */}
            <div className="proj-top">
              <div className="proj-icon-wrap">
                <span className="proj-icon">{proj.icon}</span>
              </div>
              <div className="proj-meta-top">
                <span className="proj-tag">{proj.tag}</span>
                <span className="proj-year">{proj.year}</span>
              </div>
            </div>

            <h3 className="proj-title">{proj.title}</h3>
            <span className="proj-category-label">{proj.category}</span>

            <p className="proj-description">{proj.description}</p>

            {/* Metrics */}
            <div className="proj-metrics">
              {proj.metrics.map((m) => (
                <div key={m.label} className="proj-metric">
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="proj-tools">
              {proj.tools.map((t) => (
                <span key={t} className="proj-tool">{t}</span>
              ))}
            </div>

            <div className="proj-expand-hint">
              {expanded === proj.id ? "Click to collapse ↑" : "Click for details ↓"}
            </div>

            <div className="proj-glow" />
            <div className="proj-bar" />
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="projects-cta">
        <p>Interested in collaborating on a project?</p>
        <a href="/Contact" className="proj-cta-btn">
          Get in Touch
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}