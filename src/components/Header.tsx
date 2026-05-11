import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Stethoscope } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/insurance", label: "Insurance" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div className={`glass rounded-2xl shadow-soft transition-all duration-500 ${scrolled ? "px-4 py-2" : "px-5 py-3"}`}>
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <span className="grid place-items-center size-10 rounded-xl bg-primary-gradient text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
                <Stethoscope className="size-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base sm:text-lg text-foreground">Medstar</span>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground -mt-0.5">A Star in Health Care</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((n) => {
                const active = n.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(n.to);
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      active ? "text-primary" : "text-foreground/75 hover:text-primary"
                    }`}
                  >
                    {n.label}
                    {active && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-primary-gradient" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={SITE.phoneLink}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-primary hover:bg-accent transition"
              >
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden grid place-items-center size-10 rounded-lg text-foreground hover:bg-accent transition"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden mt-3 pt-3 border-t flex flex-col animate-fade-in">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="px-2 py-3 text-sm font-medium text-foreground/80 hover:text-primary">
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex justify-center items-center bg-primary-gradient text-primary-foreground px-4 py-3 rounded-xl text-sm font-semibold"
              >
                Book Appointment
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
