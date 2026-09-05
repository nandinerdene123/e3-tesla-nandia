"use client";

import Image from "next/image";
import { useState } from "react";

const models = [
  { src: "/assets/fsd.jpeg", alt: "Red Tesla sports car driving" },
  { src: "/assets/model-red.jpeg", alt: "Tesla Cybertruck on the road" },
  { src: "/assets/hero.jpeg", alt: "Tesla Model 3 parked in a modern setting" },
];

export function ModelCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + models.length) % models.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % models.length);
  };

  return (
    <div>
      <div className="relative h-[645px] overflow-hidden rounded-lg max-[850px]:h-[430px] max-[520px]:h-[300px]">
        <Image
          key={models[activeIndex].src}
          className="object-cover"
          src={models[activeIndex].src}
          alt={models[activeIndex].alt}
          fill
          sizes="(max-width: 850px) calc(100vw - 48px), 1280px"
        />
        <button
          type="button"
          className="focus-ring absolute top-1/2 left-0 grid h-10.5 w-8 -translate-y-1/2 place-items-center rounded-r-sm bg-white text-2xl shadow-sm"
          aria-label="Previous model"
          onClick={showPrevious}
        >
          ‹
        </button>
        <button
          type="button"
          className="focus-ring absolute top-1/2 right-0 grid h-10.5 w-8 -translate-y-1/2 place-items-center rounded-l-sm bg-white text-2xl shadow-sm"
          aria-label="Next model"
          onClick={showNext}
        >
          ›
        </button>
      </div>

      <div className="mt-7 flex justify-center gap-3" aria-label="Choose a model image">
        {models.map((model, index) => (
          <button
            key={model.src}
            type="button"
            className={`focus-ring size-2 rounded-full ${
              index === activeIndex ? "bg-black" : "bg-neutral-300"
            }`}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
