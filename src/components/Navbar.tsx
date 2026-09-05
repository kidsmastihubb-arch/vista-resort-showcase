import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, callHref, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-cream/95 backdrop-blur-md border-b border-border shadow-warm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="group min-w-0">
          <span
            className={cn(
              "block font-display text-xl leading-none font-semibold tracking-tight transition-colors sm:text-2xl",
              scrolled || open ? "text-pine-deep" : "text-cream",
            )}
          >
            Vista Resort
          </span>
          <span
            className={cn(
              "mt-1 block text-[0.6rem] tracking-[0.22em] uppercase transition-colors",
              scrolled || open ? "text-muted-foreground" : "text-cream/75",
            )}
          >
            Manali · Himachal
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "relative py-1 text-[0.82rem] font-medium tracking-wide transition-colors",
                scrolled ? "text-bark hover:text-copper" : "text-cream/85 hover:text-cream",
              )}
              activeProps={{ className: "text-copper" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={callHref}
            className={cn(
              "hidden items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors sm:inline-flex",
              scrolled || open
                ? "border-border text-bark hover:border-copper hover:text-copper"
                : "border-cream/40 text-cream hover:bg-cream/10",
            )}
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-copper px-5 py-2.5 text-xs font-semibold tracking-wide text-accent-foreground shadow-warm transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Book on WhatsApp
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-colors xl:hidden",
              scrolled || open ? "border-border text-bark" : "border-cream/40 text-cream",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-cream xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-display text-lg text-pine-deep last:border-0"
                activeProps={{ className: "text-copper" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 mb-2 rounded-full bg-copper px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Enquire on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
