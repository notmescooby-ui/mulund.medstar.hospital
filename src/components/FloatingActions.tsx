import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-40 flex flex-col gap-3">
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        className="grid place-items-center size-14 rounded-full bg-[oklch(0.72_0.17_150)] text-white shadow-elegant hover:scale-110 transition-transform animate-pulse-soft"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={SITE.phoneLink}
        aria-label="Call us"
        className="grid place-items-center size-14 rounded-full bg-primary-gradient text-primary-foreground shadow-elegant hover:scale-110 transition-transform"
      >
        <Phone className="size-6" />
      </a>
    </div>
  );
}
