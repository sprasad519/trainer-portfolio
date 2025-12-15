import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Reusable Button Component
const Button = ({
  asChild,
  href,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  children,
}) => {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800"
      : variant === "secondary"
      ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
      : "bg-transparent text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50";

  const cls = `${base} ${styles} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;
  if (asChild && href)
    return (
      <a
        href={href}
        className={cls}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </a>
    );
  return (
    <button onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
};

// Section wrapper with fade-in animation
const Section = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.section>
);

// Skill Group with clean tags
const SkillGroup = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="space-y-3"
  >
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
          className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium cursor-default transition-all"
        >
          {item}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

// Project Card
const ProjectCard = ({ title, description, tags, link }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition-all cursor-default"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="flex-1">
        <h4 className="text-base font-semibold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
      {link && (
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-900 transition-colors flex-shrink-0"
          aria-label="Open project"
          whileHover={{ x: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      )}
    </div>
  </motion.div>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visitorLocation, setVisitorLocation] = useState(null);

  // Fetch visitor country on component mount (lightweight, optional)
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          setVisitorLocation(data.country_name || null);
        }
      } catch (error) {
        // Silently fail - this is optional analytics
      }
    };

    fetchLocation();
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="min-h-screen bg-white text-gray-900"
      style={{
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo - Brand */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center group hover:opacity-80 transition-opacity duration-300"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-gray-900 tracking-tight">
                SIVAPRASAD G
              </span>
              <span className="text-xs font-semibold text-gray-600 tracking-widest uppercase">
                Technical Trainer
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Button
              asChild
              href="mailto:sprasadg519@gmail.com"
              variant="primary"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div
              className="md:hidden bg-black/5 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                height: "100vh",
                position: "absolute",
                top: "64px",
                left: 0,
                right: 0,
              }}
              aria-hidden="true"
            ></div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200/70 bg-white/95 backdrop-blur shadow-lg overflow-hidden relative z-50"
              id="mobile-menu"
            >
              <nav
                className="px-4 py-4 space-y-3 max-w-6xl mx-auto"
                aria-label="Mobile Primary"
              >
                {navLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block py-3.5 px-4 text-sm text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={label}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </header>

      {/* HERO SECTION */}
      <Section id="about" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Left: Profile Picture with Premium Background */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:col-span-4 flex justify-center md:justify-start"
            >
              <div className="relative group">
                {/* AI-inspired soft field */}
                <div className="absolute inset-0 rounded-2xl shadow-xl bg-[radial-gradient(circle_at_25%_25%,rgba(17,24,39,0.08),transparent_45%),radial-gradient(circle_at_75%_65%,rgba(75,85,99,0.08),transparent_40%)]"></div>

                {/* Premium frame effect (thin outline) */}
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl border border-gray-200/80 bg-white/95">
                  {/* Background pattern - subtle teaching/knowledge theme */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <pattern
                          id="nodes"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="10" cy="10" r="1" fill="currentColor" />
                          <line
                            x1="10"
                            y1="0"
                            x2="10"
                            y2="20"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                          <line
                            x1="0"
                            y1="10"
                            x2="20"
                            y2="10"
                            stroke="currentColor"
                            strokeWidth="0.5"
                          />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#nodes)" />
                    </svg>
                  </div>

                  {/* Profile Photo */}
                  <img
                    src="/profile-photo.png"
                    alt="Sivaprasad G"
                    className="relative z-20 w-56 h-56 sm:w-64 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />

                  {/* Fallback: Minimal initials */}
                  <div
                    style={{ display: "none" }}
                    className="relative z-20 w-56 h-56 sm:w-64 sm:h-64 bg-gray-900 flex items-center justify-center text-white text-8xl font-bold"
                  >
                    SG
                  </div>
                </div>

                {/* MCT badge (kept above photo) */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute -bottom-2 -right-2 z-30 drop-shadow-2xl"
                >
                  <img
                    src="/mct-logo.png"
                    alt="MCT"
                    className="h-28 w-28 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div
                    style={{ display: "none" }}
                    className="h-28 w-28 rounded-lg bg-gray-900 text-white text-lg font-bold grid place-items-center drop-shadow-2xl"
                  >
                    MCT
                  </div>
                </motion.div>

                {/* Interactive hover indicator - subtle */}
                <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="md:col-span-8"
            >
              {/* MCT Credential Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-6 hover:bg-gray-100 transition-colors"
              >
                <span className="inline-block w-2 h-2 bg-black rounded-full"></span>
                <span className="text-xs font-semibold text-gray-700">
                  Microsoft Certified Trainer · Active Since May 2020
                </span>
              </motion.div>

              {/* Main Headline - Premium Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-6xl sm:text-7xl font-bold tracking-tight leading-none mb-4 text-gray-900"
                style={{
                  letterSpacing: "-0.02em",
                  lineHeight: "1.05",
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                SIVAPRASAD G
              </motion.h1>

              {/* Role Subheading - Apple Style */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6 leading-snug"
                style={{
                  letterSpacing: "-0.01em",
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Microsoft Certified Trainer (MCT) · Azure AI · Python · Frontend
                Technologies
              </motion.p>

              {/* Supporting text - Premium Positioning */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl font-light"
                style={{
                  letterSpacing: "-0.005em",
                  lineHeight: "1.65",
                  fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Delivering structured, professional training in{" "}
                <span className="font-semibold text-gray-900">Azure AI</span>,
                cloud fundamentals,{" "}
                <span className="font-semibold text-gray-900">Python</span>, and
                modern{" "}
                <span className="font-semibold text-gray-900">
                  frontend technologies
                </span>{" "}
                through hands-on, real-world examples.
              </motion.p>

              {/* CTA Buttons with Interactive Animation */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button asChild href="#certs" variant="primary">
                    View Certifications
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    href="mailto:sprasadg519@gmail.com"
                    variant="secondary"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>

              {/* Location indicator (optional) */}
              {visitorLocation && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-gray-500 mt-8"
                >
                  Based in Kozhikode, India • Visitor from {visitorLocation}
                </motion.p>
              )}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* EXPERTISE SECTION */}
      <Section id="expertise" className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900"
              style={{
                letterSpacing: "-0.015em",
                lineHeight: "1.2",
              }}
            >
              Expertise & Training Focus
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-light"
              style={{
                letterSpacing: "-0.005em",
                lineHeight: "1.7",
              }}
            >
              <span className="font-semibold text-gray-900">
                Microsoft Certified Trainer
              </span>{" "}
              with expertise in{" "}
              <span className="font-semibold text-gray-900">Azure</span> and{" "}
              <span className="font-semibold text-gray-900">Azure AI</span>. I
              deliver professional training in Python and modern frontend
              technologies through clear explanations, real-world examples, and
              structured, hands-on learning pathways.
            </motion.p>
          </div>

          {/* Technology Focus */}
          <div className="grid sm:grid-cols-3 gap-16 mb-20">
            {/* Cloud & AI */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl font-semibold text-gray-900 mb-8"
                style={{ letterSpacing: "-0.01em" }}
              >
                Cloud & AI
              </h3>
              <div className="space-y-5">
                <SkillGroup
                  title="Microsoft Azure"
                  items={[
                    "Azure Fundamentals",
                    "Azure AI Services",
                    "Azure AI Fundamentals",
                  ]}
                />
              </div>
            </motion.div>

            {/* Programming */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl font-semibold text-gray-900 mb-8"
                style={{ letterSpacing: "-0.01em" }}
              >
                Programming
              </h3>
              <div className="space-y-5">
                <SkillGroup
                  title="Enterprise Development"
                  items={["C#", ".NET", "Python", "JavaScript", "TypeScript"]}
                />
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-2xl font-semibold text-gray-900 mb-8"
                style={{ letterSpacing: "-0.01em" }}
              >
                Frontend Technologies
              </h3>
              <div className="space-y-5">
                <SkillGroup
                  title="Web Fundamentals"
                  items={["React", "HTML5", "CSS3", "Accessibility (WCAG)"]}
                />
              </div>
            </motion.div>
          </div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-semibold text-gray-900 mb-8"
              style={{ letterSpacing: "-0.01em" }}
            >
              Core Specializations
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-4">
                <span className="text-gray-300 mt-1 font-light text-lg">→</span>
                <span className="text-base leading-relaxed font-light">
                  Azure cloud architecture, AI services, and enterprise solution
                  design
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-300 mt-1 font-light text-lg">→</span>
                <span className="text-base leading-relaxed font-light">
                  Modern React development with accessibility and performance
                  focus
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-300 mt-1 font-light text-lg">→</span>
                <span className="text-base leading-relaxed font-light">
                  Professional training delivery and technical curriculum design
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-300 mt-1 font-light text-lg">→</span>
                <span className="text-base leading-relaxed font-light">
                  Building accessible, maintainable, and scalable web
                  applications
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects" className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900"
              style={{
                letterSpacing: "-0.015em",
                lineHeight: "1.2",
              }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-light"
              style={{
                letterSpacing: "-0.005em",
                lineHeight: "1.7",
              }}
            >
              React development showcasing clean code, professional design
              patterns, and exceptional user experience. Each project reflects
              best practices in accessibility, performance, and maintainability.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Trainer Portfolio"
              description="Modern, responsive portfolio website built with React and Tailwind CSS. Features clean design, smooth animations, and full accessibility support."
              tags={["React", "Tailwind CSS", "Framer Motion", "Responsive"]}
              link="https://github.com/sivaprasadg/trainer-portfolio"
            />
            <ProjectCard
              title="React Component Library"
              description="Reusable component system designed for modern web applications. Includes Button, Modal, Input, and layout components with comprehensive documentation."
              tags={["React", "Storybook", "Component Design"]}
              link="#"
            />
          </div>
        </div>
      </Section>

      {/* CERTIFICATIONS SECTION */}
      <Section id="certs" className="px-4 sm:px-6 lg:px-8 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900"
              style={{
                letterSpacing: "-0.015em",
                lineHeight: "1.2",
              }}
            >
              Professional Certifications
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed font-light"
              style={{
                letterSpacing: "-0.005em",
                lineHeight: "1.7",
              }}
            >
              <span className="font-semibold text-gray-900">
                Microsoft-recognized
              </span>{" "}
              credentials demonstrating active expertise in cloud architecture,
              AI services, and modern software development practices. Committed
              to continuous professional growth and staying current with
              industry innovations.
            </motion.p>
          </div>

          {/* Featured MCT - Compact */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-6 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 p-6 mb-16"
          >
            <div className="flex-shrink-0">
              <div
                data-iframe-width="80"
                data-iframe-height="140"
                data-share-badge-id="9bed2e33-814f-478b-be95-4ac2ed2e701a"
                data-share-badge-host="https://www.credly.com"
                className="flex justify-center"
              ></div>
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-900 mb-1">
                Microsoft Certified Trainer
              </p>
              <p className="text-sm text-gray-600">
                Official Microsoft training partner. Active since May 14, 2020.
              </p>
            </div>
          </motion.div>

          {/* Azure Certifications */}
          <div className="mb-16">
            <h3
              className="text-2xl font-semibold mb-8 text-gray-900"
              style={{ letterSpacing: "-0.01em" }}
            >
              Azure Certifications
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  name: "Azure AI Engineer Associate",
                  badge: "Azure AI Engineer Associate.png",
                },
                { name: "Azure Fundamentals", badge: "Azure Fundamentals.png" },
                {
                  name: "Azure AI Fundamentals",
                  badge: "Azure AI Fundamentals.png",
                },
              ].map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 p-5 text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4 h-24">
                    <img
                      src={`/badges/${cert.badge}`}
                      alt={cert.name}
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-900">
                    {cert.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Additional Certifications */}
          <div>
            <h3
              className="text-2xl font-semibold mb-8 text-gray-900"
              style={{ letterSpacing: "-0.01em" }}
            >
              Additional Certifications
            </h3>
            <div className="grid sm:grid-cols-4 gap-5">
              {[
                { name: "MCSD: App Builder", badge: "MCSD App Builder.png" },
                {
                  name: "MCSA: Web Applications",
                  badge: "MCSA Web Applications.png",
                },
                {
                  name: "HTML5 with JavaScript & CSS3",
                  badge: "Programming in HTML5 with JavaScript and CSS3.png",
                },
                {
                  name: "MTA Python",
                  badge: "MTA  Introduction to Programming Using Python.png",
                },
              ].map((cert) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-sm transition-shadow"
                >
                  <div className="flex justify-center mb-3 h-16">
                    <img
                      src={`/badges/${cert.badge}`}
                      alt={cert.name}
                      className="h-full w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-900">
                    {cert.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" className="px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900"
              style={{
                letterSpacing: "-0.015em",
                lineHeight: "1.2",
              }}
            >
              Let's Collaborate
            </h2>
            <p
              className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto"
              style={{
                letterSpacing: "-0.005em",
                lineHeight: "1.7",
              }}
            >
              Open to{" "}
              <span className="font-semibold text-gray-900">
                Microsoft technology training
              </span>
              , full-time{" "}
              <span className="font-semibold text-gray-900">
                freelance engagements
              </span>
              , and professional{" "}
              <span className="font-semibold text-gray-900">
                web development
              </span>{" "}
              projects. If you're looking to upskill teams in Azure, AI, Python,
              or modern frontend, let's connect and build something impactful
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Button
                asChild
                href="mailto:sprasadg519@gmail.com"
                variant="primary"
              >
                Email Me
              </Button>
              <Button
                asChild
                href="https://www.linkedin.com/in/sivaprasadg"
                variant="secondary"
              >
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              © {new Date().getFullYear()} Sivaprasad G. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Load Credly Badge Script */}
      <script
        src="//cdn.credly.com/assets/utilities/embed.js"
        async
        type="text/javascript"
      ></script>
    </div>
  );
}
