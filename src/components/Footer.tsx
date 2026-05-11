import { Link } from "@tanstack/react-router";
import { Stethoscope, Phone, Mail, MapPin, Siren } from "lucide-react";
import { SITE, DEPARTMENTS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-soft border-t">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center size-10 rounded-xl bg-primary-gradient text-primary-foreground shadow-glow">
              <Stethoscope className="size-5" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold">Medstar Hospital</div>
              <div className="text-xs text-muted-foreground">{SITE.tagline}</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A modern multispeciality hospital and ICU in Mulund West, Mumbai — committed to compassionate, expert care for every patient.
          </p>
          <a
            href={SITE.phoneLink}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-destructive text-destructive-foreground text-sm font-semibold shadow-soft hover:shadow-elegant transition"
          >
            <Siren className="size-4" /> 24×7 Emergency: {SITE.phone}
          </a>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
            <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
            <li><Link to="/insurance" className="hover:text-primary transition">Insurance</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/80">Departments</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {DEPARTMENTS.slice(0, 6).map((d) => (
              <li key={d.slug}>
                <Link to="/services/$slug" params={{ slug: d.slug }} className="hover:text-primary transition">{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-3 text-sm">
          <h4 className="font-semibold mb-1 text-sm uppercase tracking-wider text-foreground/80">Reach Us</h4>
          <p className="flex gap-2 text-muted-foreground"><MapPin className="size-4 mt-0.5 text-primary shrink-0" />{SITE.address}</p>
          <p className="flex gap-2 text-muted-foreground"><Phone className="size-4 mt-0.5 text-primary shrink-0" />{SITE.phone}</p>
          <p className="flex gap-2 text-muted-foreground"><Mail className="size-4 mt-0.5 text-primary shrink-0" />{SITE.email}</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Medstar Multispeciality Hospital and ICU. All rights reserved.</span>
          <span>Designed with care for our patients.</span>
        </div>
      </div>
    </footer>
  );
}
