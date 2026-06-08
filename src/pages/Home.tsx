import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Phone,
  Search,
  Target,
  Users,
  Zap,
  GraduationCap,
  Computer,
  ShoppingCart,
  HeartPulse,
  Truck,
  Plane,
  MonitorPlay,
  BriefcaseBusiness,
  UserCheck,
  UserCog,
  Wrench,
  Factory,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ─── Navigation ───────────────────────────────────────────────────────────────
const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Roles", href: "#roles" },
  { name: "Process", href: "#process" },
  { name: "Clients", href: "#clients" },
];

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${sw}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [mobileMenuOpen]);

  const menuPortal = createPortal(
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
        >
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(18,50,25,0.6)", backdropFilter: "blur(20px)" }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              margin: "88px 16px 0",
              borderRadius: "1.5rem",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.35)",
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(36px) saturate(180%)",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)" }} />
            <nav style={{ position: "relative", display: "flex", flexDirection: "column", padding: "28px 20px", gap: "2px" }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.07 + i * 0.05, duration: 0.28 }}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", borderRadius: "12px", color: "#fff", fontWeight: 700, fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <ArrowRight style={{ width: 15, height: 15, opacity: 0.5 }} />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.07 + navItems.length * 0.05 + 0.04, duration: 0.28 }}
                style={{ marginTop: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.12)" }}
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", padding: "16px", borderRadius: "12px", fontWeight: 800, color: "hsl(125 50% 25%)", fontSize: "16px", background: "hsl(47 100% 52%)", textDecoration: "none" }}
                >
                  Contact Us <ArrowRight style={{ width: 18, height: 18 }} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );

  return (
    <>
      <header
        className={`fixed top-0 w-full transition-all duration-400 ${
          isScrolled ? "bg-white/97 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
        style={{ zIndex: mobileMenuOpen ? 10000 : 50 }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="group flex items-center gap-2.5">
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-secondary/30 blur-xl opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110" />
              <img
                src="/logo.png"
                alt="HiredNest"
                className="relative h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
              />
            </span>
            <span className={`relative text-2xl font-bold font-serif tracking-tight leading-none transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}>
              HiredNest
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 group-hover:scale-x-100" />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled ? "text-slate-500 hover:text-primary" : "text-white/75 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-2">
              <a
                href="#contact"
                className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  isScrolled
                    ? "border-primary text-primary hover:bg-primary hover:text-white"
                    : "border-white/50 text-white hover:bg-white/15"
                }`}
              >
                I'm Hiring
              </a>
              <a
                href="#contact"
                className="text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full bg-secondary text-primary hover:brightness-110 transition-all duration-300 shadow-md"
              >
                Find Jobs
              </a>
            </div>
          </nav>

          <button
            className={`md:hidden flex items-center justify-center w-10 h-10 rounded-xl border backdrop-blur-md transition-all ${
              isScrolled ? "border-slate-200 bg-white text-primary" : "border-white/30 bg-white/15 text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div animate={mobileMenuOpen ? "open" : "closed"} className="flex flex-col items-center justify-center w-5 h-5 gap-[5px]">
              <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }} transition={{ duration: 0.25 }} className="block h-[2px] w-5 bg-current rounded-full origin-center" />
              <motion.span variants={{ closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } }} transition={{ duration: 0.2 }} className="block h-[2px] w-5 bg-current rounded-full" />
              <motion.span variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -7 } }} transition={{ duration: 0.25 }} className="block h-[2px] w-5 bg-current rounded-full origin-center" />
            </motion.div>
          </button>
        </div>
      </header>
      {menuPortal}
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
const PEOPLE = Array.from({ length: 12 }, (_, i) => `/people/p${i + 1}.png`);

const roleFloaters = [
  { photo: "/people/p3.png",  role: "Software Engineer", rating: 4.9, available: true,  side: "left"  as const, top: "24%" },
  { photo: "/people/p8.png",  role: "Sales Manager",     rating: 4.8, available: true,  side: "left"  as const, top: "62%" },
  { photo: "/people/p5.png",  role: "Finance Analyst",   rating: 4.7, available: false, side: "right" as const, top: "28%" },
  { photo: "/people/p11.png", role: "Operations Lead",   rating: 4.9, available: true,  side: "right" as const, top: "64%" },
];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            width: "100%",
            height: "100%",
          }}
        >
          {PEOPLE.map((src, i) => (
            <div key={i} style={{ overflow: "hidden", position: "relative" }}>
              <img
                src={src}
                alt=""
                aria-hidden="true"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  filter: "grayscale(100%) brightness(0.6)",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: "hsl(125 50% 20% / 0.80)" }} />
        <div className="absolute bottom-0 right-0 w-[60%] h-[60%] opacity-15" style={{ background: "radial-gradient(circle at 80% 80%, hsl(47 100% 52%) 0%, transparent 65%)" }} />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-28 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold tracking-widest uppercase mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0" />
            Full-Spectrum Recruitment Partner
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-serif leading-[1.05] tracking-tight text-white mb-8">
            Right Talent.
            <br />
            <motion.span
              className="text-secondary italic"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Right Time.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            India's premier B2B recruitment partner — connecting businesses with exceptional talent across all sectors, roles, and seniority levels.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-4 rounded-full text-base hover:brightness-110 transition-all duration-300 shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              I'm Hiring
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group flex items-center gap-2 border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm font-bold px-8 py-4 rounded-full text-base hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Our Services
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatItem({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    let startTime: number | null = null;
    const duration = 2000;
    const animate = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    const timeout = setTimeout(() => requestAnimationFrame(animate), delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-4 py-2"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary leading-none">
        {count.toLocaleString()}
        <span className="text-primary/70">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm font-bold mt-2 text-primary/55 uppercase tracking-widest">{label}</div>
    </motion.div>
  );
}

function Stats() {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, hsl(125 50% 25%) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-primary/15">
          <StatItem value={500} suffix="+" label="Roles Fulfilled" delay={0} />
          <StatItem value={50} suffix="+" label="Hiring Partners" delay={0.1} />
          <StatItem value={9} suffix="+" label="Industries Covered" delay={0.2} />
          <StatItem value={48} suffix="hr" label="Avg. Turnaround" delay={0.3} />
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif leading-tight">
              The HiredNest<br />Advantage
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We are a premier B2B recruitment and staffing partner based in India, operating at the intersection of advanced technology and profound human insight to deliver exceptional talent that fuels business growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Our Mission", desc: "Delivering exceptional talent to fuel business growth with unprecedented speed and precision.", bg: "bg-primary", iconColor: "text-secondary" },
                { icon: Globe, title: "Our Vision", desc: "To become the most trusted and reliable recruitment partner globally.", bg: "bg-secondary", iconColor: "text-primary" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="p-6 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 bg-white hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center ${item.iconColor} mb-5 shadow-sm`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="bg-primary p-8 md:p-12 rounded-3xl relative text-white shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-40" />
            {/* Candidate photo mosaic */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="flex -space-x-2.5">
                {["/people/p1.png", "/people/p4.png", "/people/p7.png", "/people/p10.png", "/people/p12.png"].map((src, k) => (
                  <img key={k} src={src} alt="" className="w-9 h-9 rounded-full object-cover object-top ring-2 ring-primary" style={{ zIndex: 5 - k }} />
                ))}
              </div>
              <div>
                <p className="text-white text-xs font-bold">Our Placed Candidates</p>
                <p className="text-white/50 text-[10px]">Across 200+ partner companies</p>
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-secondary/80 mb-3 relative z-10">Our Edge</p>
            <h3 className="text-3xl font-bold mb-10 font-serif relative z-10">Why Choose Us</h3>
            <ul className="space-y-7 relative z-10">
              {[
                { title: "Speed", desc: "Fast turnarounds with tech-enabled screening", icon: Zap },
                { title: "Accuracy", desc: "Precise matchmaking through AI + human intelligence", icon: Target },
                { title: "Reach", desc: "Pan-India hiring network & global sourcing", icon: MapPin },
                { title: "Experience", desc: "1000+ successful placements monthly across domains", icon: Users },
                { title: "Expertise", desc: "Specialized, dedicated teams for each industry", icon: BriefcaseBusiness },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 bg-white/10 p-3 rounded-xl text-secondary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-base mb-0.5">{item.title}</strong>
                    <span className="text-white/65 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Services (Tabbed) ───────────────────────────────────────────────────────
const servicesData = [
  {
    name: "Permanent Staffing",
    icon: Briefcase,
    tagline: "Build your core team with lasting talent.",
    desc: "End-to-end sourcing, screening, and placement of full-time employees who align with your culture and long-term vision.",
    features: ["Senior, mid & junior-level hiring", "Cultural fit & values alignment", "90-day free replacement guarantee", "Dedicated account manager"],
  },
  {
    name: "Contract Staffing",
    icon: UserCheck,
    tagline: "Flexible talent for fixed-duration projects.",
    desc: "Access skilled professionals for defined project timelines with the agility to scale up or down without long-term commitments.",
    features: ["3–12 month engagements", "Immediate deployment", "Full compliance & payroll managed", "Easy contract extension"],
  },
  {
    name: "Temporary Staffing",
    icon: Factory,
    tagline: "On-demand workforce when you need it most.",
    desc: "Rapidly deploy temporary workers for seasonal surges, project spikes, or short-term operational gaps.",
    features: ["Same-week deployment", "Volume scalability", "Industries: retail, logistics, events", "Weekly performance reviews"],
  },
  {
    name: "Executive Search",
    icon: Search,
    tagline: "C-Suite & leadership roles, done right.",
    desc: "A confidential, high-touch headhunting service for senior leadership hires using our deep industry network.",
    features: ["CXO / VP / Director level", "Confidential search mandates", "Market mapping & intelligence", "Executive assessment included"],
  },
  {
    name: "Bulk / Mass Hiring",
    icon: Users,
    tagline: "Scale fast with structured mass recruitment.",
    desc: "Hire hundreds of candidates quickly and efficiently with our dedicated mass recruitment cells.",
    features: ["100–5000+ hires per mandate", "Drive coordination & scheduling", "Bulk screening & shortlisting", "Dedicated ops team on-site"],
  },
  {
    name: "Remote / Freelance",
    icon: MonitorPlay,
    tagline: "Tap global talent with zero borders.",
    desc: "Source vetted remote talent and freelancers for tech, marketing, design, and more — pre-screened for remote readiness.",
    features: ["Global talent pool", "Pre-vetted for remote readiness", "Tech, design, content, finance", "Flexible engagement models"],
  },
  {
    name: "RPO",
    icon: UserCog,
    tagline: "Full recruitment process, outsourced to us.",
    desc: "Hand over your entire hiring function to HiredNest — we embed our team and become your full-time recruitment engine.",
    features: ["Embedded HR partnership", "ATS & employer branding setup", "Monthly hiring analytics", "Cost-per-hire optimisation"],
  },
  {
    name: "Campus Hiring",
    icon: GraduationCap,
    tagline: "Fresh talent from the best campuses.",
    desc: "Structured campus drives, internship programmes, and graduate trainee schemes from top colleges across India.",
    features: ["Tier 1, 2 & 3 college network", "Pre-placement talks & branding", "Internship-to-PPO conversions", "Graduate trainee programmes"],
  },
];

const SERVICES_INTERVAL = 3500;

function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const isPaused = useRef(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) {
        setActiveTab(prev => (prev + 1) % servicesData.length);
      }
    }, SERVICES_INTERVAL);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!tabsRef.current) return;
    const container = tabsRef.current;
    const btn = container.children[activeTab] as HTMLElement;
    if (!btn) return;
    const targetScroll = btn.offsetLeft - (container.clientWidth - btn.offsetWidth) / 2;
    container.scrollTo({ left: targetScroll, behavior: "smooth" });
  }, [activeTab]);

  const active = servicesData[activeTab];

  return (
    <section
      id="services"
      className="py-24 bg-[#f8f9fa] overflow-hidden"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-primary font-serif">Comprehensive Offerings</h2>
          <p className="text-lg text-muted-foreground">
            Tailored staffing solutions designed to meet your organisational demands — from short-term fixes to long-term leadership.
          </p>
        </motion.div>

        {/* Tab pills — auto-scrolling */}
        <div ref={tabsRef} className="flex gap-2.5 overflow-x-auto pb-4 mb-10" style={{ scrollbarWidth: "none" }}>
          {servicesData.map((s, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(i);
                isPaused.current = true;
                setTimeout(() => { isPaused.current = false; }, 8000);
              }}
              className={`relative overflow-hidden flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeTab === i
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-white text-slate-500 border-slate-200 hover:border-primary/40 hover:text-primary hover:bg-primary/5"
              }`}
            >
              <s.icon className="w-4 h-4 flex-shrink-0" />
              <span className="whitespace-nowrap">{s.name}</span>
              {activeTab === i && (
                <span
                  key={`prog-${activeTab}`}
                  className="absolute bottom-0 left-0 h-[3px] bg-white/40 rounded-full"
                  style={{ animation: `tabProgress ${SERVICES_INTERVAL}ms linear forwards` }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Active content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 items-start"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-secondary mb-7 shadow-lg">
                <active.icon className="w-8 h-8" />
              </div>
              <p className="text-secondary font-bold text-sm uppercase tracking-wider mb-3">{active.tagline}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary font-serif mb-5">{active.name}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{active.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all hover:gap-3"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-primary/50 mb-5 px-1">What's Included</p>
              {active.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.35 }}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-secondary/50 hover:shadow-md transition-all group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-slate-700">{feature}</span>
                </motion.div>
              ))}
              <div className="flex gap-1.5 pt-3 px-1">
                {servicesData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeTab === i ? "w-8 bg-primary" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <style>{`@keyframes tabProgress { from { width: 0% } to { width: 100% } }`}</style>
    </section>
  );
}

// ─── Industries ───────────────────────────────────────────────────────────────
const industries = [
  { name: "IT & Technology",        icon: Computer,      desc: "Software, cloud & AI",        fullDesc: "Engineers, architects, data scientists and product managers for India's tech-first companies.",  count: "1,200+ placed", color: "#3B82F6" },
  { name: "BFSI",                   icon: Building2,     desc: "Banking & finance",            fullDesc: "Relationship managers, risk analysts, compliance officers and fintech specialists.",               count: "680+ placed",   color: "#10B981" },
  { name: "Manufacturing",          icon: Wrench,        desc: "Industrial & engineering",     fullDesc: "Shop-floor operators, quality engineers and plant managers across auto and heavy industry.",       count: "950+ placed",   color: "#F97316" },
  { name: "Retail & E-commerce",    icon: ShoppingCart,  desc: "Consumer commerce",            fullDesc: "Category managers, supply chain specialists and digital commerce talent for leading brands.",      count: "740+ placed",   color: "#8B5CF6" },
  { name: "Healthcare & Pharma",    icon: HeartPulse,    desc: "Medical & life sciences",      fullDesc: "Nurses, lab technicians, pharma sales reps and clinical researchers for hospitals and labs.",      count: "560+ placed",   color: "#EF4444" },
  { name: "Telecom & Media",        icon: MonitorPlay,   desc: "Connectivity & content",       fullDesc: "Network engineers, content strategists and digital specialists for telcos and media giants.",       count: "420+ placed",   color: "#06B6D4" },
  { name: "Logistics",              icon: Truck,         desc: "Supply chain & delivery",      fullDesc: "Last-mile delivery executives, 3PL operations managers and fleet supervisors.",                    count: "880+ placed",   color: "#F59E0B" },
  { name: "Education & EdTech",     icon: GraduationCap, desc: "Learning & development",       fullDesc: "Academic faculty, instructional designers and edtech product specialists.",                         count: "320+ placed",   color: "#6366F1" },
  { name: "Hospitality & Aviation", icon: Plane,         desc: "Travel & guest services",      fullDesc: "Front-of-house staff, cabin crew, hotel management and aviation ground operations.",               count: "490+ placed",   color: "#14B8A6" },
];

function Industries() {
  return (
    <section id="industries" className="py-24 bg-primary relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-secondary/80 mb-4">Sectors</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 font-serif text-white">Industries We Serve</h2>
          <p className="text-lg text-white/55">Deep domain expertise ensures we understand your specific technical and cultural requirements.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.05] hover:bg-white hover:border-transparent hover:shadow-2xl hover:scale-[1.04] hover:z-10 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Top accent bar sweeps in on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: `linear-gradient(90deg, ${ind.color}, ${ind.color}88)` }}
              />
              {/* Icon */}
              <div
                className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${ind.color}18`, color: ind.color }}
              >
                <ind.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white group-hover:text-primary font-bold text-base mb-2 leading-tight transition-colors duration-300">{ind.name}</h3>
              {/* Cross-fade short ↔ full description */}
              <div className="relative h-10">
                <p className="absolute inset-0 text-white/45 text-xs font-medium leading-relaxed opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {ind.desc}
                </p>
                <p className="absolute inset-0 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-600">
                  {ind.fullDesc}
                </p>
              </div>
              {/* Count badge — slides up on hover */}
              <div className="h-5 overflow-hidden mt-1.5">
                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${ind.color}20`, color: ind.color }}>
                    {ind.count}
                  </span>
                  <ArrowRight className="w-3 h-3" style={{ color: ind.color }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Roles ────────────────────────────────────────────────────────────────────
const rolesData = [
  {
    tier: "White-Collar",
    desc: "Professional, managerial, and administrative talent.",
    roles: ["Software Engineers", "Sales Managers", "Financial Analysts", "HR Professionals", "Marketing & Digital"],
    accent: "bg-blue-50 text-blue-700",
    icon: BriefcaseBusiness,
    photos: ["/people/p1.png", "/people/p5.png", "/people/p9.png"],
    placedCount: "420+",
  },
  {
    tier: "Grey-Collar",
    desc: "Specialized skills combining technical and manual labour.",
    roles: ["Customer Support", "Field Sales Executives", "Supervisors", "Delivery Executives", "Technicians"],
    accent: "bg-slate-100 text-slate-700",
    icon: UserCheck,
    photos: ["/people/p2.png", "/people/p6.png", "/people/p10.png"],
    placedCount: "380+",
  },
  {
    tier: "Blue-Collar",
    desc: "Essential manual and operational workforce.",
    roles: ["Factory Workers", "Drivers", "Warehouse Staff", "Housekeeping", "Security Staff"],
    accent: "bg-orange-50 text-orange-700",
    icon: Wrench,
    photos: ["/people/p3.png", "/people/p7.png", "/people/p11.png"],
    placedCount: "550+",
  },
];

function Roles() {
  return (
    <section id="roles" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-[100px] -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-secondary rounded-full blur-[100px] bottom-20 -right-20" />
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-secondary/80 mb-4">Talent Tiers</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 font-serif">Roles We Hire For</h2>
          <p className="text-lg text-white/70">From the boardroom to the warehouse floor, we source talent across all organisational tiers.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {rolesData.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-3xl p-8 text-primary shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${tier.accent}`}>
                <tier.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-serif">{tier.tier}</h3>
              <p className="text-sm text-muted-foreground mb-7 leading-relaxed">{tier.desc}</p>
              <ul className="space-y-3">
                {tier.roles.map((role, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
              {/* Placed candidates strip */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div className="flex -space-x-2">
                  {tier.photos.map((src, k) => (
                    <img key={k} src={src} alt="" className="w-8 h-8 rounded-full object-cover object-top ring-2 ring-white" />
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">{tier.placedCount} placements</p>
                  <p className="text-[10px] text-muted-foreground">and growing</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────────
const processSteps = [
  { title: "Requirement Analysis", desc: "Deep-dive consultations, define role expectations, cultural fit, timelines, budget." },
  { title: "Sourcing & Screening", desc: "Job boards, internal database, referrals, AI keyword matching, telephonic/video pre-screens." },
  { title: "Assessment & Interview", desc: "Skill tests, behavioral assessments, end-to-end interview scheduling." },
  { title: "Offer Management", desc: "Salary negotiations, offer letters, candidate guidance to reduce drop-offs." },
  { title: "Onboarding Support", desc: "Joining reminders, documentation collection, Day 1 readiness coordination." },
  { title: "Post-Placement Follow-Up", desc: "Check-ins at 15, 30, 90 days; feedback collection; free replacement within agreed period." },
];

function Process() {
  return (
    <section id="process" className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-primary font-serif">Our 6-Step Process</h2>
          <p className="text-lg text-muted-foreground">A rigorous methodology ensuring precision and quality at every stage of recruitment.</p>
        </motion.div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-secondary/50 hover:shadow-md transition-all group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-lg font-serif shadow-sm group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Clientele ────────────────────────────────────────────────────────────────
const staticClients = [
  { id: "zomato", name: "Zomato", logo: "/clients/zomato.png" },
  { id: "hdfc", name: "HDFC Bank", logo: "/clients/hdfc.png" },
  { id: "swiggy", name: "Swiggy", logo: "/clients/swiggy.png" },
  { id: "quess", name: "Quess", logo: "/clients/quess.png" },
  { id: "sharemarket", name: "Share.Market", logo: "/clients/sharemarket.png" },
  { id: "zepto", name: "Zepto", logo: "/clients/zepto.png" },
  { id: "paytm", name: "Paytm", logo: "/clients/paytm.png" },
  { id: "kotak", name: "Kotak", logo: "/clients/kotak.png" },
];

function Clientele() {
  const doubled = [...staticClients, ...staticClients];
  return (
    <section id="clients" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">Our Clients</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">Trusted By Leading Brands</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">Proud to serve some of India's most respected companies across every sector.</p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="flex overflow-hidden">
          <div className="flex gap-10 items-center" style={{ animation: "marquee 28s linear infinite", willChange: "transform" }}>
            {doubled.map((client, i) => (
              <div key={`${client.id}-${i}`} className="flex-shrink-0 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 h-24 w-44 hover:shadow-md hover:border-primary/20 transition-all group">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 max-w-[120px] w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    const fb = document.createElement("span");
                    fb.className = "text-xs font-semibold text-muted-foreground text-center";
                    fb.textContent = client.name;
                    el.parentElement?.appendChild(fb);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f8f9fa] relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 relative z-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary/80 mb-4">Let's Talk</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-5 font-serif">Get In Touch</h2>
              <p className="text-white/70 mb-10 max-w-md leading-relaxed">
                Ready to build your dream team? Contact us today. We aim to respond within 24 hours.
              </p>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "business@hirednest.in" },
                  { icon: Phone, label: "Phone", value: "+91 8080095367 / +91 8788527313" },
                  { icon: Globe, label: "Website", value: "www.hirednest.in" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-secondary border border-white/10">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white/50 mb-0.5">{item.label}</div>
                      <div className="font-semibold text-sm md:text-base">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl text-primary shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-7 font-serif">Send an Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Name</label>
                    <Input placeholder="John Doe" className="bg-slate-50 border-slate-200 h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Company</label>
                    <Input placeholder="Acme Corp" className="bg-slate-50 border-slate-200 h-11" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 h-11" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Phone</label>
                    <Input type="tel" placeholder="+91 0000000000" className="bg-slate-50 border-slate-200 h-11" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wide">Message</label>
                  <Textarea placeholder="Tell us about your hiring needs..." className="min-h-[130px] bg-slate-50 border-slate-200 resize-none" />
                </div>
                <Button type="submit" className="w-full h-12 text-base rounded-xl font-bold shadow-md mt-1">
                  Submit Inquiry <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="HiredNest" className="h-10 w-auto object-contain brightness-0 invert" />
            <span className="text-2xl font-bold font-serif text-white tracking-tight leading-none">HiredNest</span>
          </div>
          <nav className="flex flex-wrap gap-6 justify-center">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="text-white/40 text-sm font-medium">
            &copy; {new Date().getFullYear()} HiredNest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-secondary/30 selection:text-primary">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Industries />
        <Roles />
        <Process />
        <Clientele />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
