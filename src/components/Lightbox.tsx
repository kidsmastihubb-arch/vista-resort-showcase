import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: { src: string; alt: string }[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, items.length, onClose, onNavigate]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/92 p-4 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
      >
        <X className="h-5 w-5" />
      </button>
      <button
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:left-8"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-[78vh] w-auto rounded-sm object-contain shadow-lift"
        />
        <figcaption className="mt-4 text-center text-sm text-white/70">
          {item.alt} · {index + 1} / {items.length}
        </figcaption>
      </figure>
      <button
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 sm:right-8"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
