import type { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  intro,
  children,
}: {
  image: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-28 pb-14 sm:min-h-[62vh] sm:pb-20">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="veil absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-xl text-cream/80 sm:text-lg">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-3 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          light ? "text-cream" : "text-pine-deep"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 leading-relaxed ${light ? "text-cream/75" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
