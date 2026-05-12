import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, ChevronDown, Stethoscope, UserRound } from "lucide-react";
import { useState } from "react";
import { DEPARTMENTS, SITE, type Department, type Doctor } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { DepartmentIcon } from "@/components/DepartmentIcon";
import cardioBg from "@/assets/cardio-bg.png";
import entBg from "@/assets/ent-bg.png";
import eyeBg from "@/assets/eye-bg.png";
import gastroBg from "@/assets/gastro-bg.png";
import generalSurgeryBg from "@/assets/general-surgery-bg.png";
import gynecBg from "@/assets/gynec-bg.png";
import genMedBg from "@/assets/gen-med.png";
import icuBg from "@/assets/icu-bg.png";
import spineBg from "@/assets/spine-bg.png";
import nephroBg from "@/assets/nephro.png";
import neuroBg from "@/assets/neuro-bg.png";
import neurologyBg from "@/assets/neurology-bg.png";
import oncoBg from "@/assets/onco-bg.png";
import orthoBg from "@/assets/ortho-bg.png";
import pedBg from "@/assets/ped-bg.png";
import plasticBg from "@/assets/plastic-bg.png";
import urologyBg from "@/assets/urology-bg.png";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const dept = DEPARTMENTS.find((d) => d.slug === params.slug);
    if (!dept) return { meta: [{ title: "Department — Medstar" }] };
    return {
      meta: [
        { title: `${dept.name} — Medstar Hospital, Mulund West` },
        { name: "description", content: `${dept.name} at Medstar Hospital: ${dept.description}` },
        { property: "og:title", content: `${dept.name} — Medstar Hospital` },
        { property: "og:description", content: dept.description },
      ],
    };
  },
  loader: ({ params }) => {
    const dept = DEPARTMENTS.find((d) => d.slug === params.slug);
    if (!dept) throw notFound();
    return { dept } as { dept: (typeof DEPARTMENTS)[number] };
  },
  component: DepartmentPage,
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-24 text-center">
      <h1 className="text-3xl font-bold">Department not found</h1>
      <Link to="/services" className="mt-4 inline-block text-primary font-semibold">
        Back to all services
      </Link>
    </div>
  ),
});

const FAQ = [
  {
    q: "How do I book a consultation?",
    a: "You can book by calling us, using WhatsApp, or filling the appointment form on the contact page. Our team confirms your slot within minutes.",
  },
  {
    q: "Do you accept insurance?",
    a: "Yes — we offer cashless treatment with leading insurers including Mediassist, Tata AIG, Bajaj Allianz, ACKO, Care Health and more.",
  },
  {
    q: "What about emergencies?",
    a: "Our ICU and Emergency department are open 24×7. For emergencies, call us immediately on 099200 14466.",
  },
];

function getInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const AVATAR_GRADIENTS = [
  "from-teal-400 to-cyan-600",
  "from-sky-400 to-blue-600",
  "from-indigo-400 to-violet-600",
  "from-emerald-400 to-teal-600",
  "from-cyan-400 to-sky-600",
];

function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const gradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
  const initials = getInitials(doctor.name);
  return (
    <div
      className="group relative rounded-2xl bg-card shadow-card overflow-hidden
                 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300
                 border border-violet-200 hover:border-violet-400"
      style={{ boxShadow: "0 0 0 1px rgba(139,92,246,0.15), 0 2px 8px rgba(139,92,246,0.08)" }}
    >
      {/* top purple accent bar — always visible, brightens on hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

      {/* subtle purple tint background on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative p-6 flex flex-col items-center text-center gap-4">
        {/* Avatar with stethoscope badge */}
        <div className="relative">
          <div
            className={`grid place-items-center size-16 rounded-2xl bg-gradient-to-br ${gradient}
                        text-white font-bold text-xl shadow-soft
                        group-hover:scale-105 transition-transform duration-300`}
          >
            {initials}
            <span className="absolute inset-0 rounded-2xl ring-2 ring-violet-400/0 group-hover:ring-violet-400/40 transition-all duration-300" />
          </div>
          {/* Stethoscope badge */}
          <div
            className="absolute -bottom-2 -right-2 grid place-items-center size-7 rounded-full
                          bg-white border-2 border-violet-200 shadow-sm
                          group-hover:border-violet-400 group-hover:bg-violet-50 transition-all duration-300"
          >
            <Stethoscope className="size-3.5 text-violet-500" />
          </div>
        </div>

        {/* Name & role */}
        <div className="mt-1">
          <p className="font-semibold text-base leading-snug">{doctor.name}</p>
          {doctor.role && (
            <p className="text-xs text-muted-foreground mt-1 font-medium">{doctor.role}</p>
          )}
        </div>

        {/* Book button */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600
                     border border-violet-200 rounded-xl px-4 py-2
                     hover:bg-violet-600 hover:text-white hover:border-violet-600
                     transition-all duration-200 w-full justify-center"
        >
          Book Appointment <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}

function DepartmentHeroBackground({ dept }: { dept: Department }) {
  const heroImage =
    dept.slug === "cardiology"
      ? cardioBg
      : dept.slug === "orthopaedics"
        ? orthoBg
        : dept.slug === "oncology"
          ? oncoBg
          : dept.slug === "neurology"
            ? neurologyBg
            : dept.slug === "gastroenterology"
              ? gastroBg
              : dept.slug === "general-surgery"
                ? generalSurgeryBg
                : dept.slug === "plastic-surgery"
                  ? plasticBg
                  : dept.slug === "pediatrics"
                    ? pedBg
                    : dept.slug === "gynecology"
                      ? gynecBg
                      : dept.slug === "general-medicine"
                        ? genMedBg
                        : dept.slug === "nephrology"
                          ? nephroBg
                          : dept.slug === "neurosurgery"
                            ? neuroBg
                            : dept.slug === "spine-surgery"
                              ? spineBg
                              : dept.slug === "urology"
                                ? urologyBg
                                : dept.slug === "icu-emergency"
                                  ? icuBg
                                  : dept.slug === "ent"
                                    ? entBg
                                    : dept.slug === "ophthalmology"
                                      ? eyeBg
                                      : null;

  if (heroImage) {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/88 via-background/55 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/35" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -right-16 top-8 hidden size-80 place-items-center rounded-full border border-primary/10 bg-primary/5 text-primary/10 lg:grid">
        <DepartmentIcon name={dept.icon} className="size-40" />
      </div>
      <div className="absolute right-24 bottom-10 hidden size-28 place-items-center rounded-3xl border border-violet-200/60 bg-white/45 text-violet-300 shadow-soft backdrop-blur-sm lg:grid">
        <DepartmentIcon name={dept.icon} className="size-14" />
      </div>
      <div className="absolute left-8 top-10 size-24 rounded-full border border-primary/10 bg-white/35 blur-sm" />
      <div className="absolute bottom-8 left-1/3 size-16 rounded-2xl border border-violet-200/50 bg-violet-100/20 rotate-12" />
    </div>
  );
}

function DepartmentPage() {
  const { dept } = Route.useLoaderData() as { dept: Department };
  const related = DEPARTMENTS.filter((d) => d.slug !== dept.slug).slice(0, 4);
  const doctors = dept.doctors ?? [];
  const hasDoctors = doctors.length > 0;

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <DepartmentHeroBackground dept={dept} />
        <div className="container-px relative mx-auto max-w-7xl py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-8 space-y-5">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all"
            >
              ← All Services
            </Link>
            <div className="flex items-center gap-4">
              <div className="grid place-items-center size-16 rounded-2xl bg-primary-gradient text-primary-foreground shadow-glow">
                <DepartmentIcon name={dept.icon} className="size-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{dept.name}</h1>
                <p className="text-primary font-medium mt-1">{dept.tagline}</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{dept.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-6 py-3 rounded-2xl font-semibold shadow-soft hover:shadow-glow transition"
              >
                Book Consultation <ArrowRight className="size-4" />
              </Link>
              <a
                href={SITE.phoneLink}
                className="inline-flex items-center gap-2 glass text-foreground px-6 py-3 rounded-2xl font-semibold shadow-card"
              >
                <Phone className="size-4" /> Call {SITE.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4">
            <div className="rounded-3xl glass p-6 shadow-elegant space-y-4">
              <div className="text-xs uppercase font-semibold text-primary tracking-wider">
                Why Medstar
              </div>
              {dept.highlights.map((h: Department["highlights"][number]) => (
                <div key={h.title} className="rounded-xl bg-card p-4 border shadow-card">
                  <div className="font-semibold text-sm">{h.title}</div>
                  <p className="text-xs text-muted-foreground mt-1">{h.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consulting Doctors */}
      {hasDoctors && (
        <section className="bg-soft py-20">
          <div className="container-px mx-auto max-w-7xl">
            <Reveal className="space-y-3 mb-10 text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                <Stethoscope className="size-3" /> Our Specialists
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Meet your <span className="gradient-text">consulting doctors</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                Our {dept.name} team comprises experienced, compassionate specialists committed to
                your best outcome.
              </p>
            </Reveal>

            <div
              className={`grid gap-5
                ${doctors.length === 1 ? "sm:grid-cols-1 max-w-xs mx-auto" : ""}
                ${doctors.length === 2 ? "sm:grid-cols-2 max-w-lg mx-auto" : ""}
                ${doctors.length === 3 ? "sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto" : ""}
                ${doctors.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : ""}
              `}
            >
              {doctors.map((doc, i) => (
                <Reveal key={doc.name} delay={i * 80}>
                  <DoctorCard doctor={doc} index={i} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Offered */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <Reveal className="space-y-3 mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
            Services Offered
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">What we treat & offer</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dept.services.map((s: string, i: number) => (
            <Reveal key={s} delay={(i % 3) * 60}>
              <div className="flex items-start gap-3 rounded-2xl border bg-card p-5 shadow-card hover:shadow-soft hover:-translate-y-0.5 transition-all">
                <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">{s}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Modern protocols and personalised treatment plans by experienced specialists.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft py-20">
        <div className="container-px mx-auto max-w-3xl">
          <Reveal className="space-y-3 mb-8 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              Frequently Asked
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">Your questions, answered.</h2>
          </Reveal>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <FaqItem key={f.q} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Departments */}
      <section className="container-px mx-auto max-w-7xl py-20">
        <Reveal className="mb-8 flex items-end justify-between">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
              More Departments
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">Explore related care</h2>
          </div>
          <Link
            to="/services"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            View all <ArrowRight className="size-4" />
          </Link>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {related.map((d) => (
            <Link
              key={d.slug}
              to="/services/$slug"
              params={{ slug: d.slug }}
              className="group rounded-2xl border bg-card p-5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="grid place-items-center size-11 rounded-xl bg-accent text-primary group-hover:bg-primary-gradient group-hover:text-primary-foreground transition-all mb-3">
                <DepartmentIcon name={d.icon} className="size-5" />
              </div>
              <div className="font-semibold">{d.name}</div>
              <p className="text-xs text-muted-foreground mt-1">{d.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-2xl border bg-card shadow-card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-sm sm:text-base">{q}</span>
        <ChevronDown
          className={`size-5 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
