import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, HeartHandshake, ShieldCheck, Sparkles, Stethoscope, Users } from "lucide-react";
import doctorImg from "@/assets/about-doctor.jpg";
import icuImg from "@/assets/icu-facility.jpg";
import hospitalImg from "@/assets/about-hospital.png";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Medstar Hospital — Mulund West, Mumbai" },
      { name: "description", content: "Learn about Medstar Multispeciality Hospital and ICU — our story, founder, vision, mission and patient-first approach in Mulund West, Mumbai." },
      { property: "og:title", content: "About Medstar Multispeciality Hospital and ICU" },
      { property: "og:description", content: "Our story, vision, mission and commitment to patient-first multispeciality care in Mumbai." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">A hospital built on <span className="gradient-text">trust & technology</span>.</h1>
            <p className="text-muted-foreground max-w-2xl">Medstar Multispeciality Hospital and ICU is a modern healthcare institution in Mulund West, Mumbai. We blend advanced clinical expertise with warm, personalised care — for every age, every stage, every story.</p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-elegant">
              <img src={doctorImg} alt="Medstar specialist" loading="lazy" className="w-full h-[400px] object-cover" width={1200} height={1400} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, title: "Our Vision", body: "To be Mumbai's most trusted neighbourhood multispeciality hospital — accessible, expert and deeply compassionate." },
            { icon: HeartHandshake, title: "Our Mission", body: "Deliver patient-first healthcare with modern technology, ethical practice and genuine human care, every single day." },
            { icon: ShieldCheck, title: "Our Promise", body: "Transparent pricing, cashless insurance, and clinical excellence you and your family can rely on." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="rounded-2xl border bg-card p-7 h-full shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="grid place-items-center size-12 rounded-xl bg-primary-gradient text-primary-foreground mb-4 shadow-soft"><c.icon className="size-5" /></div>
                <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="container-px mx-auto max-w-7xl py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img src={icuImg} alt="Hospital infrastructure" loading="lazy" className="w-full h-[440px] object-cover" width={1600} height={1000} />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 space-y-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Our Founder</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Built by clinicians, for patients.</h2>
            <p className="text-muted-foreground leading-relaxed">Founded by a team of experienced doctors who believed Mumbai's neighbourhoods deserved a modern, ethical and compassionate hospital — Medstar was born to bridge the gap between premium tertiary care and the warmth of a family clinic.</p>
            <p className="text-muted-foreground leading-relaxed">Today the institution stands as a true multispeciality centre with critical care capability, supported by visiting consultants across 16 specialities and a deeply patient-first nursing team.</p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Users, label: "Patient-first" },
                { icon: Award, label: "Ethical practice" },
                { icon: Stethoscope, label: "Expert clinicians" },
              ].map(b => (
                <div key={b.label} className="rounded-xl border bg-card p-4 flex items-center gap-3 shadow-card">
                  <b.icon className="size-5 text-primary" />
                  <span className="text-sm font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Hospital — replaces Timeline */}
      <section className="bg-soft py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <Reveal className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-bold">Compassionate care, <span className="gradient-text">close to home</span>.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Medstar Multispeciality Hospital and ICU is a modern healthcare center located in Mulund West, Mumbai, dedicated to providing compassionate, reliable, and advanced medical care. With a patient-first approach and a commitment to excellence, Medstar offers comprehensive multispeciality services including Orthopaedics, Oncology, Cardiology, Neurology, Ophthalmology, General Surgery, ICU and Emergency Care, and many more.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Equipped with experienced medical professionals, advanced technology, and well-designed critical care facilities, the hospital focuses on delivering trusted healthcare solutions with warmth, comfort, and professionalism. At Medstar, the vision is to create a healthier community through quality treatment, personalized attention, and accessible healthcare for every patient.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={hospitalImg}
                  alt="Medstar Hospital patient care"
                  loading="lazy"
                  className="w-full h-[440px] object-cover"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20">
        <div className="rounded-3xl bg-primary-gradient text-primary-foreground p-10 sm:p-14 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <div className="relative space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold">Care, when you need it most.</h2>
            <p className="opacity-90 max-w-xl mx-auto">Whether it's a routine consultation or a critical emergency — we're ready to help.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-2xl font-semibold shadow-soft hover:scale-105 transition">Book Appointment <ArrowRight className="size-4" /></Link>
              <Link to="/services" className="inline-flex items-center gap-2 glass text-primary-foreground px-6 py-3 rounded-2xl font-semibold hover:bg-white/20 transition">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}