"use client";

import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    src: "/assets/product-1.jpeg",
    alt: "Tesla solar roof",
    description: "Turn sunlight into clean, renewable energy to power your home.",
    name: "Solar Roof",
    contain: false,
  },
  {
    src: "/assets/product-4.jpeg",
    alt: "Tesla home appliance",
    description: "Efficient technology designed to complement the modern home.",
    name: "Home Energy",
    contain: true,
  },
  {
    src: "/assets/model-red.jpeg",
    alt: "Tesla Cybertruck",
    description: "Experience Tesla technology, utility, performance and safety.",
    name: "Cybertruck",
    contain: false,
  },
  {
    src: "/assets/hero.jpeg",
    alt: "Tesla Model 3",
    description: "Charge at home and stay powered wherever your journey takes you.",
    name: "Vehicles",
    contain: false,
  },
];

export function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * 414, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={trackRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto"
      >
        {products.map((product) => (
          <article
            key={product.name}
            className="w-[390px] shrink-0 snap-start max-[520px]:w-[82vw]"
          >
            <div className="relative h-[300px] overflow-hidden bg-neutral-900">
              <Image
                className={product.contain ? "object-contain" : "object-cover"}
                src={product.src}
                alt={product.alt}
                fill
                sizes="(max-width: 520px) 82vw, 390px"
              />
            </div>
            <p className="mt-4 min-h-15 leading-6 text-white/90">{product.description}</p>
            <small className="mt-4 mb-2 block text-white/70">{product.name}</small>
            <div className="tracking-[0.18em]" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden="true">
          {products.map((product, index) => (
            <span
              key={product.name}
              className={`size-1.5 rounded-full ${index === 0 ? "bg-white" : "bg-white/35"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="focus-ring grid size-12 place-items-center rounded border border-white/25 bg-white/5 text-lg transition-colors hover:bg-white/10"
            aria-label="Previous products"
            onClick={() => scroll(-1)}
          >
            ←
          </button>
          <button
            type="button"
            className="focus-ring grid size-12 place-items-center rounded border border-white/25 bg-white/5 text-lg transition-colors hover:bg-white/10"
            aria-label="Next products"
            onClick={() => scroll(1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
