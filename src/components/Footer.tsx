import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import {
  ADDRESS,
  NAV_LINKS,
  PHONE_DISPLAY,
  callHref,
  whatsappHref,
  directionsHref,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-pine-deep text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <h3 className="font-display text-2xl text-cream">Vista Resort</h3>
          <p className="mt-1 text-[0.65rem] tracking-[0.24em] uppercase text-copper">
            Centrally Heated &amp; Air Cooled
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A budget-friendly 3-star stay in Siyal, Bhajogi — a short walk from Mall Road, with warm
            heated rooms and a rooftop that opens onto the Himalayas.
          </p>
          <p className="mt-5 flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
            {ADDRESS}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.22em] uppercase text-cream">Explore</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-copper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.22em] uppercase text-cream">
            Reservations
          </h4>
          <div className="mt-5 flex flex-col gap-3 text-sm">
            <a href={callHref} className="flex items-center gap-2 transition-colors hover:text-copper">
              <Phone className="h-4 w-4 text-copper" /> {PHONE_DISPLAY}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-copper"
            >
              <MessageCircle className="h-4 w-4 text-copper" /> WhatsApp enquiry
            </a>
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-copper"
            >
              <MapPin className="h-4 w-4 text-copper" /> Get directions
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Vista Resort, Manali. All rights reserved.</p>
          <p>Rated 3.8/5 by 300+ guests</p>
        </div>
      </div>
    </footer>
  );
}
