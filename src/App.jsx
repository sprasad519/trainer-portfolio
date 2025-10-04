import React, { useState, useEffect } from "react";

// Lightweight UI components with Apple design principles
const Button = ({
  asChild,
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
}) => {
  const base =
    "inline-flex items-center justify-center whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200 border";
  const styles =
    variant === "primary"
      ? "bg-black text-white border-black hover:opacity-90"
      : variant === "outline"
      ? "bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
      : "bg-transparent text-gray-700 border-transparent hover:bg-gray-100";

  const cls = `${base} ${styles} ${className}`;
  if (asChild && href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
};

const Badge = ({ children, tone = "muted" }) => (
  <span
    className={`inline-flex items-center rounded-2xl px-3 py-1 text-xs border ${
      tone === "solid"
        ? "bg-black text-white border-black"
        : "bg-white text-gray-800 border-gray-300"
    }`}
  >
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-3xl border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 pt-6">
    <h3 className="text-lg font-semibold tracking-tight">{children}</h3>
  </div>
);

const CardBody = ({ children }) => (
  <div className="px-6 pb-6 pt-3 text-sm text-gray-700">{children}</div>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load Credly badge script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            {/* Logo space - can add a logo here later */}
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:opacity-70">
              About
            </a>
            <a href="#certs" className="hover:opacity-70">
              Certifications
            </a>
            <a href="#skills" className="hover:opacity-70">
              Expertise
            </a>
            <a href="#contact" className="hover:opacity-70">
              Contact
            </a>
          </nav>
          <div className="md:hidden">
            <Button onClick={() => setMobileMenuOpen((v) => !v)}>Menu</Button>
          </div>
          <div className="hidden md:block">
            <Button asChild href="#contact">
              Contact
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur">
            <div className="px-4 py-3 flex flex-col text-sm">
              {[
                ["About", "#about"],
                ["Certifications", "#certs"],
                ["Expertise", "#skills"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  className="py-3 px-2 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-gray-200">
                <a
                  href="#contact"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            {/* Profile Picture - Desktop Left Column */}
            <div className="md:col-span-4 hidden md:flex justify-center">
              <div className="relative">
                <img
                  src="/profile-photo.png"
                  alt="Sivaprasad G"
                  className="w-48 h-48 rounded-full object-cover object-center shadow-2xl ring-4 ring-white/50"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-6xl font-bold shadow-2xl ring-4 ring-white/50"
                  style={{ display: "none" }}
                >
                  SG
                </div>
              </div>
            </div>

            <div className="md:col-span-8">
              {/* Profile Picture - Mobile */}
              <div className="flex justify-center md:hidden mb-8">
                <div className="relative">
                  <img
                    src="/profile-photo.png"
                    alt="Sivaprasad G"
                    className="w-24 h-24 rounded-full object-cover object-center shadow-lg ring-4 ring-white/50"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-white/50"
                    style={{ display: "none" }}
                  >
                    SG
                  </div>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-center md:text-left text-gray-900">
                Sivaprasad G
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-600 font-medium mt-2 text-center md:text-left">
                Microsoft Certified Trainer
              </h2>
              <div className="mt-4 text-center md:text-left">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                    Azure AI
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                    Cloud Solutions
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                    .NET
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                    ReactJS
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                    Microsoft 365
                  </span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full font-medium">
                    Power Platform
                  </span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-center md:text-justify leading-relaxed max-w-2xl">
                Microsoft Certified Trainer (MCT, active since 2020) with 8+
                years of experience delivering corporate and academic training
                in Azure, .NET, ReactJS, and modern web technologies. I
                specialize in simplifying complex concepts, designing
                interactive learning modules, and engaging diverse audiences.
                With a proven track record serving international clients, Indian
                corporates, and universities, I help organizations maximize
                their technology investments through hands-on, practical
                training experiences.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent">
                  Azure AI Engineer Associate
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Microsoft Certified Trainer
                </Badge>
                <Badge>Frontend Developer</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-gray-50" id="certs">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-2 text-gray-600">
            Industry-recognized credentials that validate expertise in
            enterprise-grade Microsoft technologies and corporate training
            methodologies.
          </p>

          {/* Featured MCT Badge */}
          <div className="mt-8 mb-12 flex justify-center">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Microsoft Certified Trainer (MCT)
                </h3>
                <p className="text-sm text-gray-600">
                  Official Microsoft certification for corporate training
                  delivery
                </p>
              </div>
              <div
                data-iframe-width="150"
                data-iframe-height="270"
                data-share-badge-id="9bed2e33-814f-478b-be95-4ac2ed2e701a"
                data-share-badge-host="https://www.credly.com"
                className="flex justify-center"
              ></div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              { name: "MCSD: App Builder", badge: "MCSD App Builder.png" },
              {
                name: "MCSA: Web Applications",
                badge: "MCSA Web Applications.png",
              },
              {
                name: "HTML5 with JavaScript & CSS3",
                badge: "Programming in HTML5 with JavaScript and CSS3.png",
              },
            ].map((cert) => (
              <Card key={cert.name}>
                <CardBody>
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-14 rounded-2xl border border-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={`/badges/${cert.badge}`}
                        alt={cert.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{cert.name}</div>
                      <div className="text-xs text-gray-500">
                        Microsoft Certified
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-16" id="skills">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Technical Training Expertise
          </h2>
          <p className="mt-2 text-gray-600 mb-12">
            Comprehensive technology stack with hands-on corporate training
            experience
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-xl font-bold">{"</>"}</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                Programming Languages
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    C#
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">
                    JavaScript
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                    Python
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
                    TypeScript
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                    HTML5
                  </span>
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full">
                    CSS3
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                    SQL
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full">
                    T-SQL
                  </span>
                </div>
              </div>
            </div>

            {/* Microsoft Azure & Cloud */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-xl font-bold">☁</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                Microsoft Azure & Cloud
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Azure Fundamentals & Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Azure AI Services & Machine Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Cloud Migration & DevOps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Security & Compliance</span>
                </div>
              </div>
            </div>

            {/* .NET Development */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-xl font-bold">.NET</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                .NET Development
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>C# Programming Fundamentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>ASP.NET Core Web Applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Entity Framework & SQL Server</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>RESTful API Development</span>
                </div>
              </div>
            </div>

            {/* Frontend Technologies */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-xl font-bold">⚛</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                Frontend Technologies
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>ReactJS Components & Hooks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>JavaScript ES6+ & TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>HTML5 & CSS3 Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span>Modern Development Tools</span>
                </div>
              </div>
            </div>

            {/* Version Control & DevOps */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-xl font-bold">Git</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                Version Control & DevOps
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>Git Version Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>GitHub & Azure DevOps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>CI/CD Pipelines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                  <span>Docker & Containerization</span>
                </div>
              </div>
            </div>

            {/* Microsoft Office 365 */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white text-xl font-bold">M365</span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-4">
                Microsoft Office 365
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>SharePoint & Teams Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Power Platform (Power BI, Power Apps)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Office Suite Advanced Features</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span>Productivity & Collaboration Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16" id="contact">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Let's Connect
              </h2>
              <p className="mt-3 text-gray-600">
                I'm passionate about sharing knowledge and helping teams grow
                through technology training. I'm available for consulting,
                training sessions, and collaborative projects involving Azure,
                .NET, React, Python, JavaScript, and Azure AI technologies.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild href="mailto:sprasadg519@gmail.com">
                  Email
                </Button>
                <Button
                  variant="outline"
                  asChild
                  href="https://www.linkedin.com/in/sivaprasadg"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="md:col-span-5">
              <Card>
                <CardHeader>About Me</CardHeader>
                <CardBody>
                  Microsoft Certified Trainer with expertise in cloud
                  technologies, full-stack development, and modern web
                  frameworks. I love building innovative solutions and sharing
                  knowledge through hands-on training and mentorship.
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-sm text-gray-500 flex flex-col md:flex-row gap-3 items-center justify-between">
          <p>
            © {new Date().getFullYear()} Sivaprasad G - Microsoft Certified
            Trainer
          </p>
          <p>Building the future through technology education</p>
        </div>
      </footer>
    </div>
  );
}
