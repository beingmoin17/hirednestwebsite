import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Target,
  Users,
  X,
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
  Factory
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Navigation
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-lock + scrollbar-width compensation to prevent layout shift
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
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
          {/* Blurred full-screen backdrop */}
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(18,50,25,0.55)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Glass card — always on top of everything */}
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
              WebkitBackdropFilter: "blur(36px) saturate(180%)",
            }}
          >
            {/* Top shimmer line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)" }} />
            {/* Inner glow */}
            <div style={{ position: "absolute", inset: 0, borderRadius: "1.5rem", background: "linear-gradient(135deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.03) 60%,transparent 100%)", pointerEvents: "none" }} />

            <nav style={{ position: "relative", display: "flex", flexDirection: "column", padding: "28px 20px", gap: "2px" }}>
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.07 + i * 0.05, duration: 0.28, ease: "easeOut" }}
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
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", width: "100%", padding: "16px", borderRadius: "12px", fontWeight: 800, color: "hsl(125 50% 25%)", fontSize: "16px", background: "hsl(47 100% 52%)", textDecoration: "none", boxShadow: "0 8px 24px rgba(255,196,0,0.3)" }}
                >
                  Contact Us
                  <ArrowRight style={{ width: 18, height: 18 }} />
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
        className={`fixed top-0 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
        style={{ zIndex: mobileMenuOpen ? 10000 : 50 }}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a
            href="#"
            className="group flex items-center gap-2.5"
            data-testid="link-logo-nav"
          >
            <span className="relative inline-flex items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-secondary/30 blur-xl opacity-0 scale-50 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110" />
              <img
                src="/logo.png"
                alt="HiredNest"
                className="relative h-12 w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3 drop-shadow-sm group-hover:drop-shadow-[0_6px_14px_rgba(18,50,25,0.25)]"
                data-testid="img-logo-nav"
              />
            </span>
            <span className="relative text-2xl font-bold font-serif text-primary tracking-tight leading-none">
              HiredNest
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-secondary transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="rounded-full px-6 font-semibold" size="default">
              <a href="#contact">Contact Us</a>
            </Button>
          </nav>

          {/* Mobile Hamburger — always above the portal overlay */}
          <button
            className="md:hidden relative flex items-center justify-center w-11 h-11 rounded-2xl border border-white/30 bg-white/20 backdrop-blur-md shadow-lg text-primary transition-all duration-200 hover:bg-white/30 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="flex flex-col items-center justify-center w-5 h-5 gap-[5px]"
            >
              <motion.span
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-5 bg-primary rounded-full origin-center"
              />
              <motion.span
                variants={{ closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } }}
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-5 bg-primary rounded-full"
              />
              <motion.span
                variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -7 } }}
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-5 bg-primary rounded-full origin-center"
              />
            </motion.div>
          </button>
        </div>
      </header>
      {menuPortal}
    </>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-[#fafafa]">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] -left-[10%] w-[50%] h-[50%] bg-primary/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] -right-[10%] w-[50%] h-[50%] bg-secondary/30 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-primary text-sm font-semibold tracking-wide uppercase mb-8">
              <span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
              Full-Spectrum Recruitment Partner
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 text-primary font-serif">
              Right Talent. <br />
              <span className="text-secondary italic">Right Time.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              We connect businesses with exceptional talent across sectors and roles. 
              Powered by advanced technology, driven by profound human insight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                <a href="#contact">
                  Find Talent <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-2 w-full sm:w-auto hover:bg-slate-50 transition-all">
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif">The HiredNest Advantage</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a premier B2B recruitment and staffing partner based in India. 
              We operate at the intersection of advanced technology and profound human 
              insight to deliver exceptional talent that fuels business growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mt-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-6 shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Delivering exceptional talent to fuel business growth with unprecedented speed and precision.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-secondary/10 rounded-2xl transform transition-transform group-hover:scale-105" />
                <div className="relative p-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 shadow-md">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To become the most trusted and reliable recruitment partner globally.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-primary p-8 md:p-12 rounded-3xl relative text-white shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-50" />
            <h3 className="text-3xl font-bold mb-10 font-serif relative z-10">Why Choose Us</h3>
            <ul className="space-y-8 relative z-10">
              {[
                { title: "Speed", desc: "Fast turnarounds with tech-enabled screening", icon: Zap },
                { title: "Accuracy", desc: "Precise matchmaking through AI + human intelligence", icon: Target },
                { title: "Reach", desc: "Pan-India hiring network & global sourcing capabilities", icon: MapPin },
                { title: "Experience", desc: "1000+ successful placements monthly across domains", icon: Users },
                { title: "Expertise", desc: "Specialized, dedicated teams for each industry sector", icon: BriefcaseBusiness },
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 mt-1 bg-white/10 p-3 rounded-xl text-secondary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <strong className="block text-white text-xl mb-1">{item.title}</strong>
                    <span className="text-primary-foreground/80 leading-relaxed block">{item.desc}</span>
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

// Services Section
const services = [
  { name: "Permanent Staffing", icon: Briefcase },
  { name: "Contract Staffing", icon: UserCheck },
  { name: "Temporary Staffing", icon: Factory },
  { name: "Executive Search", icon: Search },
  { name: "Bulk Hiring / Mass Recruitment", icon: Users },
  { name: "Remote / Freelance Talent Hiring", icon: MonitorPlay },
  { name: "Recruitment Process Outsourcing", icon: UserCog },
  { name: "Campus Hiring & Internship", icon: GraduationCap },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif">Comprehensive Offerings</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Tailored staffing solutions designed to meet your organizational demands, from short-term fixes to long-term leadership.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer bg-white hover:-translate-y-1">
                <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg text-primary leading-tight group-hover:text-secondary transition-colors">
                    {service.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Industries Section
const industries = [
  { name: "IT & Technology", icon: Computer },
  { name: "BFSI", icon: Building2 },
  { name: "Manufacturing & Engineering", icon: Wrench },
  { name: "Retail & E-commerce", icon: ShoppingCart },
  { name: "Healthcare & Pharma", icon: HeartPulse },
  { name: "Telecom & Media", icon: MonitorPlay },
  { name: "Logistics & Supply Chain", icon: Truck },
  { name: "Education & EdTech", icon: GraduationCap },
  { name: "Hospitality & Aviation", icon: Plane }
];

function Industries() {
  return (
    <section id="industries" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif">Industries We Serve</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Deep domain expertise across diverse sectors ensures we understand your specific technical and cultural requirements.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-secondary hover:bg-secondary/5 transition-all text-center flex flex-col items-center group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 text-primary group-hover:text-secondary group-hover:scale-110 transition-all">
                  <ind.icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-primary">{ind.name}</h4>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

// Roles Section
const rolesData = [
  {
    tier: "White-Collar",
    desc: "Professional, managerial, and administrative talent.",
    roles: ["Software Engineers", "Sales Managers", "Financial Analysts", "HR Professionals", "Marketing & Digital Roles"],
    color: "bg-blue-50 text-blue-700 border-blue-100",
    icon: BriefcaseBusiness
  },
  {
    tier: "Grey-Collar",
    desc: "Specialized skills combining technical and manual labor.",
    roles: ["Customer Support", "Field Sales Executives", "Supervisors", "Delivery Executives", "Technicians"],
    color: "bg-slate-100 text-slate-700 border-slate-200",
    icon: UserCheck
  },
  {
    tier: "Blue-Collar",
    desc: "Essential manual and operational workforce.",
    roles: ["Factory Workers", "Drivers", "Warehouse Staff", "Housekeeping", "Security Staff"],
    color: "bg-orange-50 text-orange-700 border-orange-100",
    icon: Wrench
  }
]

function Roles() {
  return (
    <section id="roles" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute w-96 h-96 bg-white rounded-full blur-[100px] -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-secondary rounded-full blur-[100px] bottom-20 -right-20"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Roles We Hire For</h2>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            From the boardroom to the warehouse floor, we source talent across all organizational tiers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {rolesData.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 text-primary shadow-xl"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${tier.color}`}>
                <tier.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-serif">{tier.tier}</h3>
              <p className="text-muted-foreground mb-8">{tier.desc}</p>
              
              <ul className="space-y-3">
                {tier.roles.map((role, j) => (
                  <li key={j} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    {role}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Process Section
const processSteps = [
  {
    title: "Client Requirement Analysis",
    desc: "Deep-dive consultations, define role expectations, cultural fit, timelines, budget.",
  },
  {
    title: "Sourcing & Screening",
    desc: "Job boards, internal database, referrals, AI keyword matching, telephonic/video pre-screens.",
  },
  {
    title: "Assessment & Interview",
    desc: "Skill tests, behavioral/psychometric assessments, end-to-end interview scheduling.",
  },
  {
    title: "Offer Management",
    desc: "Salary negotiations, offer letters, candidate guidance to reduce drop-offs.",
  },
  {
    title: "Onboarding Support",
    desc: "Joining reminders, documentation collection, Day 1 readiness coordination.",
  },
  {
    title: "Post-Placement Follow-Up",
    desc: "Check-ins at 15, 30, 90 days; feedback collection; free replacement within agreed period.",
  },
];

function Process() {
  return (
    <section id="process" className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-serif">The Process</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A rigorous, six-step methodology ensuring precision and quality at every stage of recruitment.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 items-start bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-secondary hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-xl font-serif">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-primary rounded-[2rem] md:rounded-[3rem] p-6 sm:p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-secondary/20 blur-[120px] rounded-full" />
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 relative z-10">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 font-serif">Get In Touch</h2>
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 mb-6 md:mb-10 max-w-md leading-relaxed">
                Ready to build your dream team? Contact us today to discuss your hiring requirements. We aim to respond within 24 hours.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary border border-white/10">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-primary-foreground/60 mb-0.5">Email</div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold truncate">business@hirednest.in</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary border border-white/10">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-primary-foreground/60 mb-0.5">Phone</div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold">+91 8080095367</div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold">+91 8788527313</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary border border-white/10">
                    <Globe className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-primary-foreground/60 mb-0.5">Website</div>
                    <div className="text-sm sm:text-base md:text-lg font-semibold">www.hirednest.in</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 sm:p-6 md:p-10 rounded-2xl md:rounded-3xl text-primary shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-5 md:mb-8 font-serif">Send an Inquiry</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold">Name</label>
                    <Input placeholder="John Doe" className="bg-slate-50 border-slate-200 h-10 md:h-12 text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold">Company</label>
                    <Input placeholder="Acme Corp" className="bg-slate-50 border-slate-200 h-10 md:h-12 text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 h-10 md:h-12 text-sm" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-semibold">Phone</label>
                    <Input type="tel" placeholder="+91 0000000000" className="bg-slate-50 border-slate-200 h-10 md:h-12 text-sm" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-semibold">Message</label>
                  <Textarea placeholder="Tell us about your hiring needs..." className="min-h-[110px] md:min-h-[150px] bg-slate-50 border-slate-200 resize-none p-3 text-sm" />
                </div>
                <Button type="submit" className="w-full h-11 md:h-14 text-sm md:text-lg rounded-xl mt-2 font-semibold shadow-md">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Clientele Section
const CLIENTS = [
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
  const trackRef = useRef<HTMLDivElement>(null);

  const doubled = [...CLIENTS, ...CLIENTS];

  if (CLIENTS.length === 0) return null;

  return (
    <section
      id="clients"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-[#f7faf7] to-white"
    >
      {/* Soft brand glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 mb-14 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[11px] font-bold uppercase tracking-[0.25em] text-primary mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary font-serif mb-4">
            Trusted By Leading Brands
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            We are proud to serve some of India's most respected companies across every sector.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div
          className="flex w-max"
          style={{ animation: "marquee 36s linear infinite", willChange: "transform" }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          ref={trackRef}
        >
          {doubled.map((client, i) => (
            <div key={`${client.id}-${i}`} className="px-4 sm:px-5 flex-shrink-0">
              <div className="group flex items-center justify-center h-28 w-48 sm:w-52 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_24px_-12px_rgba(18,50,25,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_-16px_rgba(18,50,25,0.35)] hover:border-primary/15">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-12 max-w-[130px] w-auto object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-[1.06]"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement;
                    el.style.display = "none";
                    const fallback = document.createElement("span");
                    fallback.className = "text-sm font-semibold text-muted-foreground text-center px-2";
                    fallback.textContent = client.name;
                    el.parentElement?.appendChild(fallback);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#fafafa] py-12 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="HiredNest"
              className="h-12 w-auto object-contain"
              data-testid="img-logo-footer"
            />
            <span className="text-2xl font-bold font-serif text-primary tracking-tight leading-none">
              HiredNest
            </span>
          </div>
          <div className="text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} HiredNest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans selection:bg-secondary/30 selection:text-primary">
      <Navigation />
      <main className="flex-1 relative z-10">
        <Hero />
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
