import { MessageCircle, Phone } from "lucide-react";
import { callHref, whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <>
      {/* Desktop / tablet floating button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Enquire on WhatsApp"
        className="fixed right-5 bottom-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lift transition-transform duration-300 hover:scale-110 sm:grid"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Mobile sticky booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-cream/95 px-3 py-2.5 backdrop-blur-md sm:hidden">
        <a
          href={callHref}
          className="flex items-center justify-center gap-2 rounded-full border border-pine-deep/25 py-3 text-sm font-semibold text-pine-deep"
        >
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" /> Book Now
        </a>
      </div>
    </>
  );
}
