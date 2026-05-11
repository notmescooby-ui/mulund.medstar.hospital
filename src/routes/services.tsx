import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { DEPARTMENTS } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { DepartmentIcon } from "@/components/DepartmentIcon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Departments — Medstar Hospital" },
      { name: "description", content: "Explore 16 specialist departments at Medstar — orthopaedics, cardiology, neurology, oncology, ICU, gynaecology, pediatrics and more." },
      { property: "og:title", content: "Medstar Hospital — Specialist Departments" },
      { property: "og:description", content: "Multispeciality care under one roof in Mulund West, Mumbai." },
    ],
  }),
  component: ServicesLayout,
});

function ServicesLayout() {
  const loc = useLocation();
  const isIndex = loc.pathname === "/services" || loc.pathname === "/services/";
  if (!isIndex) return <Outlet />;
  return <ServicesIndex />;
}

function ServicesIndex() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-hero">
        <div className="container-px mx-auto max-w-7xl py-16 lg:py-24 text-center space-y-5">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-primary">Our Services</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Specialist care, <span className="gradient-text">tailored for you</span>.</h1>
          <p className="max-w-2xl mx-auto text-muted-foreground">16 specialist departments, advanced ICU, and 24×7 emergency — explore our complete range of services.</p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 lg:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 80}>
              <Link
                to="/services/$slug"
                params={{ slug: d.slug }}
                className="group block h-full rounded-2xl border bg-card p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 size-40 rounded-full bg-primary-gradient opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500" />
                <div className="relative">
                  <div className="grid place-items-center size-14 rounded-2xl bg-accent text-primary group-hover:bg-primary-gradient group-hover:text-primary-foreground transition-all duration-300 mb-5">
                    <DepartmentIcon name={d.icon} className="size-7" />
                  </div>
                  <h3 className="font-semibold text-xl">{d.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.description}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                    View department <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
