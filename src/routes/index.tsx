import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Wind,
  Wifi,
  CarFront,
  ArrowUpDown,
  Sparkles,
  Shirt,
  Sun,
  Star,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { images, ADDRESS } from "@/lib/site";
import { CtaRow, WhatsAppButton } from "@/components/CtaRow";
import { Reveal, useParallax } from "@/components/Reveal";
import { SectionHeading } from "@/components/PageHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vista Resort Manali – Centrally Heated Hotel Near Mall Road" },
      {
        name: "description",
        content:
          "Vista Resort, Siyal Bhajogi Manali: a budget-friendly 3-star centrally heated and air cooled hotel about 500m from Mall Road. Rooftop bonfire, free Wi-Fi and parking. Book on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Vista Resort Manali – Centrally Heated & Air Cooled",
      },
      {
        property: "og:description",
        content:
          "A cozy centrally heated stay in the heart of Manali, a 5-minute walk from Mall Road. Rated 3.8/5 by 300+ guests.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const highlights = [
  { icon: Flame, label: "Centrally Heated Rooms" },
  { icon: Wind, label: "Air Cooled Rooms" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: CarFront, label: "Free Parking" },
  { icon: ArrowUpDown, label: "Lift" },
  { icon: Sparkles, label: "Daily Housekeeping" },
  { icon: Shirt, label: "Laundry" },
  { icon: Sun, label: "Rooftop Bonfire" },
];

function Home() {
  const parallax = useParallax(0.12);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={parallax as never}
            src={images.rooftopDeck}
            alt="Rooftop deck at Vista Resort with Himalayan mountain views in Manali"
            className="h-full w-full scale-110 object-cover will-change-transform"
          />
        </div>
        <div className="veil absolute inset-0" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-24 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-black/20 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.2em] text-cream/90 uppercase backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-copper text-copper" /> 3.8 / 5 · 300+ Reviews
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-4xl text-[2.4rem] leading-[1.03] text-cream sm:text-6xl lg:text-7xl">
              Vista Resort – Centrally Heated &amp; Air Cooled
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 max-w-xl text-lg text-cream/85 sm:text-xl">
              A cozy stay in the heart of Manali.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-2 text-sm text-cream/90 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-copper" /> Around 500m — a 5-minute walk from Mall
              Road
            </p>
          </Reveal>
          <Reveal delay={380}>
            <CtaRow className="mt-9" />
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal
                key={h.label}
                delay={i * 60}
                className="group flex items-center gap-3 border-l-2 border-copper/30 pl-4 transition-colors hover:border-copper"
              >
                <h.icon className="h-5 w-5 shrink-0 text-copper transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm leading-snug font-medium text-bark">{h.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / STORY */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-sm shadow-lift">
              <img
                src={images.lobbyReception}
                alt="Warm wood-panelled reception lobby at Vista Resort Manali"
                className="img-zoom h-[340px] w-full object-cover sm:h-[480px]"
              />
            </div>
            <div className="absolute -right-3 -bottom-8 hidden w-52 overflow-hidden rounded-sm border-8 border-cream shadow-warm sm:block lg:-right-10">
              <img
                src={images.mountainView}
                alt="Snow-capped Himalayan peaks seen from Vista Resort"
                className="img-zoom h-40 w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <SectionHeading
              eyebrow="Welcome to Siyal, Manali"
              title="Warm rooms, mountain light and Mall Road minutes away"
              intro="Vista Resort is a budget-friendly 3-star stay in Bhajogi, Siyal — close enough to walk into central Manali, quiet enough to hear the valley. Every room is centrally heated for winter and air cooled for summer, so the season never decides your comfort."
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Our team keeps things simple and helpful: clean rooms, daily housekeeping, a lift to
              every floor, free parking for your cab or car, and a rooftop where evenings end
              around the bonfire with the Himalayas in view.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton />
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-bark transition-colors hover:border-copper hover:text-copper"
              >
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ROOMS PREVIEW */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Stay with us"
              title="Rooms built for Manali weather"
              intro="Comfortable interiors across different room categories, including Supreme rooms with better mountain views."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                img: images.roomDeluxe,
                alt: "Centrally heated room with wooden interiors at Vista Resort Manali",
                title: "Centrally Heated Rooms",
                copy: "Warm through Manali winters, with cozy wood-toned interiors and comfortable bedding.",
              },
              {
                img: images.corridorLift,
                alt: "Bright interior corridor with lift access at Vista Resort Manali",
                title: "Air Cooled Rooms",
                copy: "Cool and fresh through the summer months, with lift access to every floor.",
              },
              {
                img: images.rooftopMountains,
                alt: "Supreme room outlook over the Manali valley and snow peaks",
                title: "Supreme Rooms",
                copy: "Our better-view category, opening toward the mountains and the valley below.",
              },
            ].map((r, i) => (
              <Reveal key={r.title} delay={i * 120}>
                <article className="group h-full overflow-hidden rounded-sm bg-card shadow-warm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.alt}
                      loading="lazy"
                      className="img-zoom h-60 w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl text-pine-deep">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-pine-deep transition-colors hover:text-copper"
            >
              View all rooms <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* LOCATION BAND */}
      <section className="relative overflow-hidden">
        <img
          src={images.rooftopEvening}
          alt="Vista Resort rooftop seating at blue hour above Manali"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-pine-deep/78" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              light
              eyebrow="The location"
              title="Walk to Mall Road, drive to everywhere else"
              intro={ADDRESS}
            />
          </Reveal>
          <Reveal delay={140} className="grid gap-4 sm:grid-cols-2">
            {[
              ["Mall Road", "approx. 500m · 5-minute walk"],
              ["Hidimba Devi Temple", "approx. 1.1 km"],
              ["Tibetan Monastery", "nearby"],
              ["Markets & transport hubs", "central Manali"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-sm border border-cream/20 bg-cream/5 p-5">
                <p className="font-display text-xl text-cream">{k}</p>
                <p className="mt-1 text-sm text-cream/70">{v}</p>
              </div>
            ))}
            <Link
              to="/location"
              className="inline-flex items-center gap-2 text-sm font-semibold text-copper sm:col-span-2"
            >
              Open map &amp; directions <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* AMENITIES STRIP */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Amenities"
              title="Everything a mountain stay should quietly get right"
              intro="Heating and cooling, connectivity, parking, housekeeping and a rooftop that earns its evenings."
            />
            <Link
              to="/amenities"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-bark transition-colors hover:border-copper hover:text-copper"
            >
              See all amenities <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={140} className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-sm shadow-warm">
              <img
                src={images.rooftopLounge}
                alt="Rooftop lounge with umbrellas and seating at Vista Resort Manali"
                loading="lazy"
                className="img-zoom h-56 w-full object-cover sm:h-72"
              />
            </div>
            <div className="mt-8 overflow-hidden rounded-sm shadow-warm">
              <img
                src={images.diningHall}
                alt="In-house dining area at Vista Resort Manali"
                loading="lazy"
                className="img-zoom h-56 w-full object-cover sm:h-72"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Guest feedback"
              title="Rated 3.8 out of 5 by more than 300 guests"
            />
            <div className="flex items-center gap-3">
              <span className="font-display text-6xl leading-none text-copper">3.8</span>
              <div>
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-copper text-copper" />
                  ))}
                  <Star className="h-4 w-4 text-copper/40" />
                </div>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground">300+ reviews</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Warm, heated rooms", "Guests consistently mention how warm the centrally heated rooms stay through cold Manali nights."],
              ["Helpful staff", "Feedback often highlights a team that is responsive and easy to reach for local help."],
              ["Competitive pricing", "Reviews point to good value for a 3-star stay this close to Mall Road."],
            ].map(([t, c], i) => (
              <Reveal key={t} delay={i * 120}>
                <div className="h-full rounded-sm border border-border bg-card p-7 shadow-warm">
                  <Star className="h-5 w-5 fill-copper text-copper" />
                  <h3 className="mt-4 text-xl text-pine-deep">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden">
        <img
          src={images.rooftopMountains}
          alt="Snow peaks framed from the Vista Resort rooftop in Manali"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/58" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
          <Reveal>
            <p className="eyebrow">Reservations</p>
            <h2 className="mt-3 text-4xl text-cream sm:text-5xl">
              Check availability for your dates
            </h2>
            <p className="mt-4 text-cream/80">
              Message us on WhatsApp and we'll share room availability, prices and booking details.
            </p>
            <CtaRow className="mt-8 justify-center" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
