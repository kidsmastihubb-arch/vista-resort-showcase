import { createFileRoute } from "@tanstack/react-router";
import { Flame, Wind, Wifi, Sparkles, ArrowUpDown, Mountain, Shirt, CarFront } from "lucide-react";
import { images } from "@/lib/site";
import { PageHero, SectionHeading } from "@/components/PageHero";
import { WhatsAppButton } from "@/components/CtaRow";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms – Centrally Heated & Air Cooled Stays | Vista Resort Manali" },
      {
        name: "description",
        content:
          "Centrally heated rooms, air cooled rooms and Supreme rooms with better mountain views at Vista Resort, Siyal Manali. Enquire on WhatsApp for availability.",
      },
      { property: "og:title", content: "Rooms at Vista Resort Manali" },
      {
        property: "og:description",
        content:
          "Comfortable interiors across different room categories — centrally heated, air cooled and Supreme rooms with mountain views.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: Rooms,
});

const rooms = [
  {
    title: "Centrally Heated Room",
    image: images.roomDeluxe,
    alt: "Centrally heated room with wooden ceiling and warm lighting at Vista Resort Manali",
    copy: "A warm, wood-toned room made for Manali winters. Central heating keeps the room comfortable through the night, with soft lighting and comfortable interiors for an easy end to a day on the hills.",
    facilities: [
      { icon: Flame, label: "Central heating" },
      { icon: Sparkles, label: "Daily housekeeping" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Shirt, label: "Laundry service" },
    ],
  },
  {
    title: "Air Cooled Room",
    image: images.corridorLift,
    alt: "Bright hotel corridor with lift access at Vista Resort Manali",
    copy: "For the warmer months, our air cooled rooms stay fresh and comfortable. Every floor is served by a lift, and housekeeping keeps the room ready each day of your stay.",
    facilities: [
      { icon: Wind, label: "Air cooling" },
      { icon: ArrowUpDown, label: "Lift access" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: CarFront, label: "Free parking" },
    ],
  },
  {
    title: "Supreme Room",
    image: images.rooftopMountains,
    alt: "Mountain and valley view from the Supreme room outlook at Vista Resort Manali",
    copy: "Our better-view category. Supreme rooms look out toward the mountains and the Manali valley, with the same centrally heated comfort and access to the rooftop's scenic views.",
    facilities: [
      { icon: Mountain, label: "Better mountain views" },
      { icon: Flame, label: "Central heating" },
      { icon: Sparkles, label: "Daily housekeeping" },
      { icon: Wifi, label: "Free Wi-Fi" },
    ],
  },
];

function Rooms() {
  return (
    <>
      <PageHero
        image={images.roomDeluxe}
        eyebrow="Accommodation"
        title="Rooms at Vista Resort"
        intro="Different room categories, one shared idea: comfortable interiors that hold their warmth in winter and stay cool in summer."
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Choose your stay"
              title="Centrally heated, air cooled and Supreme rooms"
              intro="Rooftop scenic views are open to all our guests, whichever category you book."
            />
          </Reveal>

          <div className="mt-16 space-y-20">
            {rooms.map((room, i) => (
              <Reveal key={room.title}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="overflow-hidden rounded-sm shadow-lift">
                    <img
                      src={room.image}
                      alt={room.alt}
                      loading="lazy"
                      className="img-zoom h-[300px] w-full object-cover sm:h-[440px]"
                    />
                  </figure>
                  <div>
                    <p className="eyebrow">Room category</p>
                    <h2 className="mt-3 text-3xl text-pine-deep sm:text-4xl">{room.title}</h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{room.copy}</p>

                    <h3 className="mt-8 text-xs font-bold tracking-[0.22em] text-bark uppercase">
                      Key facilities
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {room.facilities.map((f) => (
                        <li
                          key={f.label}
                          className="flex items-center gap-3 rounded-sm border border-border bg-card px-4 py-3 text-sm text-bark"
                        >
                          <f.icon className="h-4 w-4 shrink-0 text-copper" />
                          {f.label}
                        </li>
                      ))}
                    </ul>

                    <WhatsAppButton className="mt-8" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img
          src={images.rooftopLounge}
          alt="Rooftop lounge seating with mountain backdrop at Vista Resort Manali"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-pine-deep/80" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
          <Reveal>
            <h2 className="text-3xl text-cream sm:text-4xl">Rooftop views for every guest</h2>
            <p className="mt-4 text-cream/80">
              Whichever room you choose, the rooftop is yours — open skies, valley light and the
              evening bonfire.
            </p>
            <WhatsAppButton
              label="Check availability on WhatsApp"
              className="mt-8 bg-copper text-accent-foreground hover:bg-cream hover:text-pine-deep"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
