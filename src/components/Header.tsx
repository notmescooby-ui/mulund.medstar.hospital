import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import medstarLogo from "@/assets/Green Minimalistic Gift Circle Sticker - 1.png";

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
      className={`fixed top-0 inset-x-0 z-50 bg-sky-50/90 backdrop-blur-xl border-b border-sky-100/70 transition-all duration-500 ${
        scrolled ? "py-2 shadow-soft" : "py-4"
      }`}
    >
      <div className="container-px mx-auto max-w-[95rem]">
<div className={`rounded-2xl bg-white/80 border border-sky-100/65 backdrop-blur-xl shadow-soft transition-all duration-500 ${scrolled ? "px-3 sm:px-4 py-2" : "px-3 sm:px-4 py-3"}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link to="/" className="flex flex-1 min-w-0 items-center gap-3 group" aria-label="Medstar Multispeciality Hospital and ICU home">
                <span className="grid place-items-center h-14 w-14 min-w-[3.5rem] rounded-full bg-sky-100 shadow-elegant ring-2 ring-sky-200/60 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={medstarLogo}
                    alt="Medstar Hospital logo"
                    className="h-full w-full object-cover"
                  />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="font-display font-bold text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.16em] text-slate-950 leading-tight break-words">
                    Medstar Multispeciality Hospital and ICU
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-600 mt-1 leading-tight">A Star in Health Care</span>
              </span>
            </Link>

            <nav className="hidden lg:flex flex-1 items-center justify-center gap-3 min-w-0">
              {NAV.map((n) => {
                const active = n.to === "/" ? loc.pathname === "/" : loc.pathname.startsWith(n.to);
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`relative px-4 py-2 text-sm font-medium rounded-2xl transition-all duration-200 ${
                      active
                        ? "text-primary bg-sky-100/80"
                        : "text-slate-700 hover:text-primary hover:bg-sky-100/80"
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

            <div className="flex shrink-0 items-center gap-2">
              <a
                href={SITE.phoneLink}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-2xl text-xs font-semibold text-slate-700 hover:text-primary hover:bg-sky-100/80 transition-all duration-200"
              >
                <Phone className="size-4" /> {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-4 py-2.5 rounded-2xl text-sm font-semibold shadow-soft hover:shadow-glow transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden grid place-items-center size-10 rounded-2xl text-foreground hover:bg-sky-100 transition-all duration-200"
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
