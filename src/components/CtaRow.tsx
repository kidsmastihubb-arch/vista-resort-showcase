import { MessageCircle, Phone, MapPin } from "lucide-react";
import { callHref, directionsHref, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CtaRow({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-copper font-semibold text-accent-foreground shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
          compact ? "px-5 py-2.5 text-xs" : "px-6 py-3.5 text-sm",
        )}
      >
        <MessageCircle className="h-4 w-4" /> Book / Enquire on WhatsApp
      </a>
      <a
        href={callHref}
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-cream/45 font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10",
          compact ? "px-5 py-2.5 text-xs" : "px-6 py-3.5 text-sm",
        )}
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a
        href={directionsHref}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-cream/45 font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10",
          compact ? "px-5 py-2.5 text-xs" : "px-6 py-3.5 text-sm",
        )}
      >
        <MapPin className="h-4 w-4" /> Get Directions
      </a>
    </div>
  );
}

export function WhatsAppButton({
  label = "Enquire on WhatsApp",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-pine-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper hover:shadow-warm",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}
