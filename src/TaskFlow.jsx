import React, { useState } from "react";
import "./TaskFlow.css";

// Asset URLs from Figma
const imgTaskFlowDashboardMockup = "https://www.figma.com/api/mcp/asset/ec1294a7-da39-427f-9909-fd8fd46bb3da";
const imgSarahJ = "https://www.figma.com/api/mcp/asset/83914c09-a222-43b1-a95f-659077078415";
const imgMarcusT = "https://www.figma.com/api/mcp/asset/4ebf19e0-ee1d-4add-b552-591ef8d083f4";
const imgElenaR = "https://www.figma.com/api/mcp/asset/f7d9bb7a-7331-43a9-8f7b-152c1f1d46b3";
const imgTaskFlowLogo = "https://www.figma.com/api/mcp/asset/9b491a73-1387-42ab-ada7-ac5f04a3a970";
const imgPlayIcon = "https://www.figma.com/api/mcp/asset/d6fa0ad0-ece8-4654-8710-5e4cd98e9ade";
const imgLogo1 = "https://www.figma.com/api/mcp/asset/006bd537-9961-4c00-aa33-0970dc6125a3";
const imgLogo2 = "https://www.figma.com/api/mcp/asset/158074f1-3027-41fd-9f9a-4524e6577f01";
const imgLogo3 = "https://www.figma.com/api/mcp/asset/ff4090e0-ea29-4865-b01e-f727aa2c1cfb";
const imgLogo4 = "https://www.figma.com/api/mcp/asset/6dc80121-d15d-4153-8358-b1234db6eed5";
const imgLogo5 = "https://www.figma.com/api/mcp/asset/578ca94c-970d-4a7a-baa4-bcf7fc752ad3";
const imgFeatTask = "https://www.figma.com/api/mcp/asset/7ca62fac-6e76-4f41-9c1b-8924b690801a";
const imgFeatPriority = "https://www.figma.com/api/mcp/asset/4a9be20c-34ea-4d49-83c9-783ae96e7f3a";
const imgFeatProgress = "https://www.figma.com/api/mcp/asset/da47e6b1-3f72-4cfd-9d1d-789c3614b437";
const imgFeatDue = "https://www.figma.com/api/mcp/asset/2b3b1997-9391-4656-a242-ce19a85d6775";
const imgFeatAnalytics = "https://www.figma.com/api/mcp/asset/59791ec6-2841-40f8-a2fe-bc021f8dc79a";
const imgFeatTeam = "https://www.figma.com/api/mcp/asset/b49eeb45-378f-4703-8902-d67bcd356589";
const imgCheckIcon = "https://www.figma.com/api/mcp/asset/477b5c50-e5b8-4f53-946c-d9b5c06ab15d";
const imgStarIcon = "https://www.figma.com/api/mcp/asset/15631c96-a79d-4058-be15-dcaff29a1834";
const imgCheckBlue = "https://www.figma.com/api/mcp/asset/4e713c7e-ebd6-48df-af41-368ece5f2aa2";
const imgArrowDown = "https://www.figma.com/api/mcp/asset/f352a38a-e109-4946-ab79-b4df9bebc181";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <img src={imgTaskFlowLogo} alt="TaskFlow Logo" className="brand-logo" />
          <span className="brand-name">TaskFlow</span>
        </div>
        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </div>
        <div className="navbar-actions">
          <button className="btn-ghost">Login</button>
          <button className="btn-primary btn-sm">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-radial-bg" />
      <div className="hero-container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Now with AI-Powered Scheduling</span>
        </div>
        <h1 className="hero-heading">
          Manage Tasks Smarter. Achieve More<br />Every Day.
        </h1>
        <p className="hero-subtext">
          TaskFlow helps individuals and teams organize work, track progress, meet deadlines, and
          boost productivity from one centralized platform.
        </p>
        <div className="hero-cta">
          <button className="btn-primary btn-lg">Get Started Free</button>
          <button className="btn-outline btn-lg">
            <img src={imgPlayIcon} alt="" className="btn-icon" />
            Watch Demo
          </button>
        </div>
        <div className="hero-dashboard-wrapper">
          <div className="hero-glow hero-glow-left" />
          <div className="hero-glow hero-glow-right" />
          <div className="hero-dashboard-frame">
            <img src={imgTaskFlowDashboardMockup} alt="TaskFlow Dashboard" className="hero-dashboard-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trusted By ───────────────────────────────────────────────────────────────
function TrustedBy() {
  const logos = [
    { src: imgLogo1, name: "TechFlow" },
    { src: imgLogo2, name: "Peak" },
    { src: imgLogo3, name: "Orbit" },
    { src: imgLogo4, name: "Nexus" },
    { src: imgLogo5, name: "Volt" },
  ];
  return (
    <section className="trusted-section">
      <p className="trusted-label">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
      <div className="trusted-logos">
        {logos.map((l) => (
          <div key={l.name} className="trusted-logo-item">
            <img src={l.src} alt={l.name} className="trusted-logo-img" />
            <span className="trusted-logo-name">{l.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  { icon: imgFeatTask, title: "Task Creation", desc: "Quickly capture and organize tasks as they come. Add descriptions, tags, and files in seconds." },
  { icon: imgFeatPriority, title: "Priority Planning", desc: "Focus on what matters most with intelligent priority tagging and automated sorting algorithms." },
  { icon: imgFeatProgress, title: "Progress Tracking", desc: "Visual progress bars and stage transitions keep you updated on exactly where every project stands." },
  { icon: imgFeatDue, title: "Due Date Reminders", desc: "Never miss a deadline again with customizable notifications and proactive smart alerts." },
  { icon: imgFeatAnalytics, title: "Real-Time Analytics", desc: "Gain deep insights into your team's velocity and productivity with live dashboard metrics." },
  { icon: imgFeatTeam, title: "Team Collaboration", desc: "Tag members, leave comments, and share documents in real-time within individual task cards." },
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading">Everything you need to work efficiently</h2>
          <p className="section-subtext">
            Powerful tools designed to simplify your workflow and keep your team aligned on common goals.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon-wrap">
                <img src={f.icon} alt={f.title} className="feature-icon" />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Dashboard Showcase ───────────────────────────────────────────────────────
function DashboardShowcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <div className="showcase-text">
          <h2 className="section-heading">
            Master your workflow with our advanced<br />dashboard
          </h2>
          <p className="section-subtext left-aligned">
            Experience total clarity with TaskFlow's analytics engine. Visualize workload
            distribution, identify bottlenecks, and optimize your team's performance with a few clicks.
          </p>
          <ul className="showcase-list">
            <li>
              <img src={imgCheckIcon} alt="check" />
              Interactive Kanban boards for drag-and-drop management
            </li>
            <li>
              <img src={imgCheckIcon} alt="check" />
              Real-time charts and productivity heatmaps
            </li>
            <li>
              <img src={imgCheckIcon} alt="check" />
              Centralized activity feeds to stay updated
            </li>
          </ul>
        </div>
        <div className="showcase-image-wrap">
          <div className="showcase-glow" />
          <div className="showcase-image-frame">
            <img src={imgTaskFlowDashboardMockup} alt="Dashboard detail" className="showcase-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
  { num: "1", title: "Create Tasks", desc: "Capture every idea and requirement instantly." },
  { num: "2", title: "Organize", desc: "Group tasks by projects and set priorities." },
  { num: "3", title: "Track", desc: "Monitor progress via real-time dashboards." },
  { num: "4", title: "Complete", desc: "Celebrate wins and analyze results for growth." },
];

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading">How TaskFlow transforms your day</h2>
          <p className="section-subtext">From chaos to clarity in four simple steps.</p>
        </div>
        <div className="steps-wrapper">
          <div className="steps-divider" />
          <div className="steps-grid">
            {steps.map((s) => (
              <div key={s.num} className="step-item">
                <div className="step-circle">{s.num}</div>
                <h4 className="step-title">{s.title}</h4>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Statistics ───────────────────────────────────────────────────────────────
const stats = [
  { value: "10k+", label: "TASKS MANAGED" },
  { value: "5,000+", label: "ACTIVE USERS" },
  { value: "98%", label: "SATISFACTION" },
  { value: "40%", label: "PRODUCTIVITY INCREASE" },
];

function Statistics() {
  return (
    <section className="stats-section">
      <div className="stats-glow" />
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: `"TaskFlow completely changed how my remote team operates. The visual boards keep us synced better than any meetings could."`,
    name: "Sarah Jenkins",
    role: "Director, Peak Design",
    avatar: imgSarahJ,
  },
  {
    quote: `"The analytics features are elite. I can finally see exactly where our time is going and optimize our sprint velocity effectively."`,
    name: "Marcus Thorne",
    role: "CTO, Nexus Corp",
    avatar: imgMarcusT,
  },
  {
    quote: `"Simple enough for my side projects but powerful enough for our entire agency. TaskFlow is the workspace we've been looking for."`,
    name: "Elena Rodriguez",
    role: "Founder, Volt Agency",
    avatar: imgElenaR,
  },
];

function Stars() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <img key={i} src={imgStarIcon} alt="star" className="star-icon" />
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <h2 className="section-heading centered">Trusted by professionals</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <Stars />
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function PricingCard({ plan, price, desc, features, cta, highlight }) {
  return (
    <div className={`pricing-card ${highlight ? "pricing-card-highlight" : ""}`}>
      {highlight && <div className="pricing-badge">MOST POPULAR</div>}
      <h3 className="pricing-plan">{plan}</h3>
      <p className="pricing-desc">{desc}</p>
      <div className="pricing-price">
        {price === "Custom" ? (
          <span className="price-amount">Custom</span>
        ) : (
          <>
            <span className="price-amount">{price}</span>
            <span className="price-period">/mo</span>
          </>
        )}
      </div>
      <ul className="pricing-features">
        {features.map((f) => (
          <li key={f}>
            <img src={imgCheckBlue} alt="check" className="pricing-check" />
            {f}
          </li>
        ))}
      </ul>
      <button className={`pricing-cta ${highlight ? "pricing-cta-primary" : "pricing-cta-outline"}`}>
        {cta}
      </button>
    </div>
  );
}

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-heading">Simple, transparent pricing</h2>
          <p className="section-subtext">Choose the plan that's right for you and your team.</p>
        </div>
        <div className="pricing-grid">
          <PricingCard
            plan="Free"
            price="$0"
            desc="For individuals and tiny teams."
            features={["Up to 3 projects", "Basic Kanban boards", "Core task features", "5GB storage"]}
            cta="Start Free"
          />
          <PricingCard
            plan="Pro"
            price="$12"
            desc="Best for growing teams and agencies."
            features={["Unlimited projects", "Advanced analytics", "AI scheduling tools", "Priority support", "50GB storage"]}
            cta="Get Pro"
            highlight
          />
          <PricingCard
            plan="Enterprise"
            price="Custom"
            desc="Custom features for large organizations."
            features={["Everything in Pro", "SSO & Advanced security", "Custom integrations", "Dedicated account manager"]}
            cta="Contact Sales"
          />
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  "How does TaskFlow compare to other tools?",
  "Can I migrate my data from Trello or Jira?",
  "Is my data secure with TaskFlow?",
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="section-heading centered">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((q, i) => (
            <div key={i} className="faq-item" onClick={() => setOpen(open === i ? null : i)}>
              <div className="faq-question">
                <span>{q}</span>
                <img src={imgArrowDown} alt="" className={`faq-arrow ${open === i ? "faq-arrow-open" : ""}`} />
              </div>
              {open === i && (
                <div className="faq-answer">
                  TaskFlow is designed to be intuitive and powerful. Our team is happy to help you get started.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="cta-section">
      <div className="cta-box">
        <div className="cta-glow cta-glow-left" />
        <div className="cta-glow cta-glow-right" />
        <h2 className="cta-heading">Start Managing Work the Smart Way</h2>
        <p className="cta-subtext">
          Join over 5,000+ high-growth teams who use TaskFlow to turn chaos into clarity. No credit card required.
        </p>
        <div className="cta-buttons">
          <button className="btn-white">Start Free</button>
          <button className="btn-indigo">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={imgTaskFlowLogo} alt="TaskFlow" className="footer-logo-img" />
            <span className="footer-logo-name">TaskFlow</span>
          </div>
          <p className="footer-tagline">
            Elevating team productivity through sophisticated design and intelligent workflow management. Built for high-growth professionals.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 TaskFlow Inc. All rights reserved.</span>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function TaskFlowApp() {
  return (
    <div className="taskflow-app">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <DashboardShowcase />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
