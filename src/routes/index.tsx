import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Clock, Award, HeartHandshake, Sparkles,
  Siren, Star, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/WhatsApp Image 2026-05-12 at 6.50.14 AM.jpeg";
import icuImg from "@/assets/icu-facility.jpg";
import doctorImg from "@/assets/reception.jpg";
import founderImg from "@/assets/WhatsApp Image 2025-01-06 at 20.30.09_0aea704c.jpg";
import { DEPARTMENTS, SITE, STATS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { DepartmentIcon } from "@/components/DepartmentIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medstar Multispeciality Hospital and ICU — Mulund West, Mumbai" },
      { name: "description", content: "Trusted multispeciality hospital with 24×7 ICU & emergency care in Mulund West, Mumbai. Book appointments online with expert specialists." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-hero" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative container-px mx-auto max-w-7xl pt-10 pb-20 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-7 animate-fade-up">
            <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-slate-950/90">
              Medstar Multispeciality Hospital and ICU
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold text-primary shadow-card">
              <Sparkles className="size-3.5" /> {SITE.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Compassionate care.<br />
              <span className="gradient-text">Modern medicine.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Medstar Multispeciality Hospital and ICU brings together expert specialists, advanced technology and warm, patient-first care — right in the heart of Mulund West, Mumbai.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-6 py-3.5 rounded-2xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5">
                Book Appointment <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 glass px-6 py-3.5 rounded-2xl text-sm font-semibold text-foreground shadow-card hover:shadow-soft transition">
                Explore Services <ChevronRight className="size-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="inline-flex items-center gap-2 rounded-2xl bg-sky-50/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft">
                <ShieldCheck className="size-5 text-primary" /> Cashless insurance
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-sky-50/90 px-4 py-2 text-sm font-semibold text-slate-950 shadow-soft">
                <Clock className="size-5 text-primary" /> 24×7 ICU & Emergency
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-card">
                <Award className="size-5 text-primary" /> 17 specialities
              </span>
            </div>
          </div>
          <div className="lg:col-span-6 relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={heroImg} alt="Modern hospital lobby at Medstar Hospital" className="w-full h-[420px] sm:h-[520px] object-cover" width={1920} height={1280} />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -left-4 sm:-left-8 bottom-8 glass rounded-2xl p-4 shadow-elegant w-56 animate-float">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center size-11 rounded-xl bg-teal-gradient text-white"><HeartHandshake className="size-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Patient first</div>
                  <div className="font-semibold text-sm">Care that listens</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 sm:-right-6 bottom-16 glass rounded-2xl p-4 shadow-elegant w-52" style={{ animation: "float 7s ease-in-out infinite", animationDelay: "1s" }}>
              <div className="flex items-center gap-2 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="size-3.5 fill-coral text-coral" style={{ color: "oklch(0.74 0.14 30)" }} />)}
              </div>
              <div className="text-xs font-semibold">Treated by 1,000+ patients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-elegant">
              <img src={doctorImg} alt="Compassionate Medstar doctor" loading="lazy" className="w-full h-[520px] object-cover" width={1200} height={1400} />
            </div>
            <div className="absolute -bottom-6 -right-4 glass rounded-2xl p-5 shadow-elegant w-60 hidden sm:block">
              <div className="text-3xl font-bold gradient-text">Trusted with patient care for years</div>
              <div className="text-xs text-muted-foreground mt-1">By the people of Mulund</div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">About Medstar</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">A modern hospital with a <span className="gradient-text">human heart</span>.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Located in Mulund West, Mumbai, Medstar Multispeciality Hospital and ICU is built on a simple promise — outstanding clinical care delivered with empathy. Our experienced founders envisioned a place where modern medicine and warm hospitality meet, where patients are treated like family.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-card p-5 shadow-card hover:shadow-soft transition">
                <div className="font-semibold mb-1">Our Vision</div>
                <p className="text-sm text-muted-foreground">To be Mumbai's most trusted neighbourhood multispeciality hospital — accessible, expert and compassionate.</p>
              </div>
              <div className="rounded-2xl border bg-card p-5 shadow-card hover:shadow-soft transition">
                <div className="font-semibold mb-1">Our Mission</div>
                <p className="text-sm text-muted-foreground">Deliver patient-first healthcare with modern technology, ethical practice, and genuine human care, every single day.</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Patient-first approach in every interaction",
                "24×7 ICU and emergency response",
                "16 specialist departments under one roof",
                "Cashless insurance & ethical pricing",
              ].map(t => (
                <li key={t} className="flex items-start gap-2"><span className="mt-1 size-1.5 rounded-full bg-primary" /> {t}</li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Read More <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary-gradient text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs sm:text-sm opacity-85 mt-2 uppercase tracking-wider">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <Reveal className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Multispeciality care, <span className="gradient-text">all under one roof</span>.</h2>
          <p className="text-muted-foreground">From routine consultations to advanced surgeries and intensive care — explore our 16 specialist departments.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DEPARTMENTS.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 4) * 80}>
              <Link
                to="/services/$slug"
                params={{ slug: d.slug }}
                className="group relative block h-full rounded-2xl border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-hero opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative">
                  <div className="grid place-items-center size-12 rounded-xl bg-accent text-primary group-hover:bg-primary-gradient group-hover:text-primary-foreground transition-all duration-300 mb-4">
                    <DepartmentIcon name={d.icon} className="size-6" />
                  </div>
                  <h3 className="font-semibold text-lg">{d.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{d.tagline}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                    Learn more <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ICU / EMERGENCY BANNER */}
      <section className="container-px mx-auto max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden shadow-elegant">
          <img src={icuImg} alt="Modern ICU at Medstar" loading="lazy" className="absolute inset-0 w-full h-full object-cover" width={1600} height={1000} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
          <div className="relative grid lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-16 text-primary-foreground">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary-foreground">
                <Siren className="size-3.5" /> 24×7 Emergency & ICU
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 leading-tight">When seconds matter, we're ready.</h2>
              <p className="mt-4 opacity-90 max-w-lg">Our ICU is staffed round-the-clock by trained intensivists with advanced ventilators, multi-parameter monitoring and a rapid response team.</p>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-end gap-4">
              <a href={SITE.phoneLink} className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-4 rounded-2xl font-bold text-lg shadow-elegant hover:scale-[1.02] transition-transform">
                <Siren className="size-5" /> Call Emergency: {SITE.phone}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 glass text-primary-foreground px-6 py-3 rounded-2xl font-semibold text-sm hover:bg-white/20 transition">
                Request a Callback
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <section className="container-px mx-auto max-w-7xl py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <Reveal className="order-2 lg:order-1 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-xs font-semibold text-sky-800 shadow-soft">
              Founder’s Note
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-950">
              A warm message from our founder, Dr. Shailendra Nanaware.
            </h2>
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>At Medstar Multispeciality Hospital and ICU, our vision has always been to create a healthcare environment where compassion meets excellence. We believe that every patient deserves not only advanced medical treatment, but also warmth, dignity, trust, and personal attention during every step of their healthcare journey. From emergency and critical care services to multispeciality consultations and modern treatment facilities, our mission is to provide accessible, reliable, and patient-focused healthcare for the community of Mulund and beyond.</p>
              <p>Our team of dedicated doctors, specialists, nurses, and healthcare professionals work together with one shared commitment — to place patients and their families at the heart of everything we do. We continuously strive to combine modern medical technology with ethical healthcare practices and compassionate care to ensure the best possible outcomes for every individual who walks through our doors.</p>
              <p>We sincerely thank our patients and the community for their trust and support, and we remain committed to building a healthier future together.</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="rounded-[2rem] overflow-hidden border border-slate-200/80 bg-white shadow-elegant transition-all hover:-translate-y-0.5">
              <div className="relative overflow-hidden">
                <img
                  src={founderImg}
                  alt="Dr. Shailendra Nanaware"
                  loading="lazy"
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8 bg-gradient-to-br from-sky-50 via-slate-100 to-white border-t border-sky-100 shadow-soft">
                <div className="text-lg font-semibold text-slate-950">Dr. Shailendra Nanaware</div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-900 shadow-sm ring-1 ring-sky-200">
                  Founder & Ophthalmologist
                </div>
                <div className="mt-3 text-sm text-slate-600">Medstar Multispeciality Hospital and ICU</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
