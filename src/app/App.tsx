import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/favicon-removebg-preview.png";
import emmanuelImg from "@/imports/emmanuel.png";
import {
  CheckCircle2,
  Zap,
  BookOpen,
  Video,
  FileText,
  Image,
  Layers,
  Bot,
  Globe,
  Clock,
  Users,
  Star,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  Award,
  Cpu,
} from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/GRrW94XffPf2xZrqqQ2T3T?s=sw&p=i&ilr=1";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[56px]">
      <span
        className="text-2xl sm:text-3xl font-bold tabular-nums"
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          color: "#F07800",
        }}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">
        {label}
      </span>
    </div>
  );
}

const discovers = [
  {
    text: "What Artificial Intelligence really is — explained without technical jargon",
  },
  {
    text: "Why AI is becoming an essential skill across every industry and profession",
  },
  { text: "The most common misconceptions about AI that hold people back" },
  {
    text: "The real opportunities AI creates for professionals, entrepreneurs and creators",
  },
  {
    text: "How AI can save you time, sharpen your workflow and support business growth",
  },
];

const demos = [
  { icon: FileText, label: "Generate professional eBooks" },
  { icon: Layers, label: "Create presentation slides" },
  { icon: Image, label: "Generate AI images" },
  { icon: Video, label: "Create AI-powered videos" },
  { icon: Globe, label: "Build modern landing pages" },
  { icon: Bot, label: "AI agents & workflow automation" },
];

const stats = [
  { value: "30+", label: "Projects Built" },
  { value: "400+", label: "Students Trained" },
  { value: "5+", label: "Years Experience" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const eventDate = useMemo(
    () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
    [],
  );
  const timeLeft = useCountdown(eventDate);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* NAV */}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border"
            : ""
        }`}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ImageWithFallback
              src={logoImg}
              alt="Highcrown Academy logo"
              className="h-8 w-8 object-contain"
            />
            <span
              className="font-semibold text-foreground text-sm tracking-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Highcrown Academy
            </span>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: "#C8120A", color: "#fff" }}
          >
            Reserve My Seat
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32 px-5 sm:px-8 overflow-hidden">
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(200,18,10,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(240,120,0,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full border text-xs font-medium tracking-wider uppercase"
            style={{
              borderColor: "rgba(200,18,10,0.4)",
              background: "rgba(200,18,10,0.08)",
              color: "#F07800",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "#C8120A" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: "#C8120A" }}
              />
            </span>
            Limited Seats Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            <span className="block text-foreground">FREE LIVE</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #C8120A 0%, #F07800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI MASTERCLASS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-4"
          >
            Discover How Artificial Intelligence Is Changing the Way People
            Work, Build Businesses and Create Opportunities
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10"
          >
            Join this FREE one-day live session with Emmanuel Eseigbe and gain a
            clear understanding of what AI is, why it matters, and how people
            are already using it to improve productivity, create digital
            products, automate tasks and unlock new opportunities.
          </motion.p>

          {/* Countdown */}
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex items-center justify-center gap-5 sm:gap-8 mb-10"
          >
            <CountdownUnit value={timeLeft.days} label="Days" />
            <span className="text-zinc-600 text-2xl font-light mb-3">:</span>
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <span className="text-zinc-600 text-2xl font-light mb-3">:</span>
            <CountdownUnit value={timeLeft.minutes} label="Min" />
            <span className="text-zinc-600 text-2xl font-light mb-3">:</span>
            <CountdownUnit value={timeLeft.seconds} label="Sec" />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #C8120A 0%, #D84010 100%)",
                color: "#fff",
                boxShadow: "0 0 40px rgba(200,18,10,0.35)",
              }}
            >
              Reserve My Free Seat
              <ArrowRight className="h-4 w-4" />
            </a>
            <span className="text-xs text-zinc-500 tracking-wide">
              100% Free &nbsp;•&nbsp; Live Online &nbsp;•&nbsp; Beginner
              Friendly
            </span>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU'LL DISCOVER */}

      {/* <section className="py-24 px-5 sm:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <span className="text-xs uppercase tracking-widest font-medium mb-3 block" style={{ color: "#F07800" }}>
              Session Overview
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              What You'll Discover
            </h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-base">
              This is an introduction — not an implementation workshop. You'll leave with clarity, not confusion.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {discovers.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  className="group flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-red-900/50 transition-all duration-300"
                  style={{ background: "rgba(17,17,19,0.8)" }}
                >
                  <CheckCircle2
                    className="h-5 w-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#C8120A" }}
                  />
                  <p className="text-sm text-zinc-300 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* LIVE DEMONSTRATIONS */}

      {/* <section className="py-24 px-5 sm:px-8 relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(240,120,0,1) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <span className="text-xs uppercase tracking-widest font-medium mb-3 block" style={{ color: "#F07800" }}>
              See It in Action
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Live Demonstrations
            </h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              Emmanuel will walk you through live examples of what's actually possible with AI today.
              These demonstrations are designed to show you the landscape — step-by-step implementation
              is covered in the advanced training.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {demos.map(({ icon: Icon, label }, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl border border-border text-center hover:border-orange-900/50 transition-all duration-300 cursor-default"
                  style={{ background: "rgba(17,17,19,0.9)" }}
                >
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-red-950"
                    style={{ background: "rgba(200,18,10,0.12)" }}
                  >
                    <Icon className="h-5 w-5" style={{ color: "#F07800" }} />
                  </div>
                  <span className="text-sm font-medium text-zinc-200">{label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* ABOUT THE INSTRUCTOR */}
      <section className="py-24 px-5 sm:px-8 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <span
              className="text-xs uppercase tracking-widest font-medium mb-3 block"
              style={{ color: "#F07800" }}
            >
              Your Guide
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Meet the Instructor
            </h2>
          </FadeIn>

          <FadeIn>
            <div
              className="rounded-2xl border border-border overflow-hidden"
              style={{ background: "rgba(17,17,19,0.9)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Professional Photo */}
                <div
                  className="relative flex items-center justify-center min-h-[300px] lg:min-h-[420px]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(200,18,10,0.12) 0%, rgba(240,120,0,0.06) 100%)",
                  }}
                >
                  <div
                    className="w-64 h-64 rounded-full overflow-hidden border-4"
                    style={{
                      borderColor: "rgba(200,18,10,0.3)",
                      background: "#fff",
                    }}
                  >
                    <ImageWithFallback
                      src={emmanuelImg}
                      alt="Emmanuel Eseigbe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-4 w-4" style={{ color: "#F07800" }} />
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                      Instructor
                    </span>
                  </div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-foreground mb-1"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                  >
                    Emmanuel Eseigbe
                  </h3>
                  <p className="text-sm text-zinc-500 mb-5">
                    Software Engineer · AI Educator · Digital Solutions Expert
                  </p>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    I am passionate about helping individuals and businesses
                    understand emerging technologies in practical, accessible
                    ways. Through Highcrown Academy, I teach people how AI
                    can improve productivity, support business growth and
                    simplify everyday work.
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {stats.map(({ value, label }) => (
                      <div key={label} className="text-center">
                        <div
                          className="text-2xl font-bold"
                          style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            background:
                              "linear-gradient(135deg, #C8120A, #F07800)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {value}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1 leading-tight">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 px-5 sm:px-8 relative overflow-hidden border-t border-border">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 100%, rgba(200,18,10,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <div
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full text-xs font-medium border"
              style={{
                borderColor: "rgba(240,120,0,0.3)",
                background: "rgba(240,120,0,0.06)",
                color: "#F07800",
              }}
            >
              <Cpu className="h-3 w-3" />
              The AI era is already here
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              AI Isn't Replacing Everyone — But People Who Learn AI May Have an
              Advantage.
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Reserve your FREE seat today and take your first practical step
              toward understanding the opportunities AI offers.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95"
              style={{
                background: "linear-gradient(135deg, #C8120A 0%, #D84010 100%)",
                color: "#fff",
                boxShadow: "0 0 50px rgba(200,18,10,0.4)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Join the Free WhatsApp Community
            </a>

            <p className="text-xs text-zinc-600 mt-5">
              Registration closes once available spaces have been filled.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <ImageWithFallback
                src={logoImg}
                alt="Highcrown Academy"
                className="h-7 w-7 object-contain"
              />
              <span
                className="font-semibold text-sm text-foreground"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                Highcrown Academy
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-zinc-300 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-xs text-zinc-600">
            <p className="italic text-zinc-500 text-xs mb-1">
              Practical AI Skills for the Modern Professional.
            </p>
            <p>
              © {new Date().getFullYear()} Highcrown Academy. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-8 right-5 sm:right-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          background: "#25D366",
          color: "#fff",
          boxShadow: "0 4px 24px rgba(37,211,102,0.4)",
        }}
        aria-label="Join WhatsApp community"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Join WhatsApp</span>
      </a>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden z-40 p-3 bg-background/95 backdrop-blur-xl border-t border-border">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95"
          style={{
            background: "linear-gradient(135deg, #C8120A 0%, #D84010 100%)",
            color: "#fff",
          }}
        >
          Reserve My Free Seat
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
