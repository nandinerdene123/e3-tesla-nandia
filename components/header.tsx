"use client";

import { useState } from "react";

import { CalLink } from "@/components/cal-link";

const navigation = [
  { label: "Vehicles", href: "#vehicles" },
  { label: "Energy", href: "#energy" },
  { label: "Charging", href: "#charging" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative z-50 flex h-18 items-center gap-8 bg-white px-16 max-[850px]:h-16 max-[850px]:px-6 max-[520px]:px-4.5">
      <a
        className="focus-ring w-42 font-display text-[25px] font-extrabold max-[850px]:w-auto"
        href="#vehicles"
        aria-label="Tesla home"
        onClick={closeMenu}
      >
        T
      </a>

      <button
        type="button"
        className="focus-ring ml-auto hidden size-10 place-items-center rounded-md max-[850px]:grid"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="text-2xl leading-none">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      <nav
        id="primary-navigation"
        aria-label="Primary navigation"
        className={`${
          isOpen ? "max-[850px]:flex" : "max-[850px]:hidden"
        } mx-auto flex items-center gap-8 text-base max-[850px]:absolute max-[850px]:top-16 max-[850px]:right-0 max-[850px]:left-0 max-[850px]:flex-col max-[850px]:items-stretch max-[850px]:gap-2 max-[850px]:border-t max-[850px]:border-black/10 max-[850px]:bg-white max-[850px]:p-6 max-[850px]:shadow-lg`}
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            className="focus-ring rounded-sm py-2 max-[850px]:px-2"
            href={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a
          className="focus-ring rounded-sm py-2 max-[850px]:px-2"
          href="#discover"
          onClick={closeMenu}
        >
          Discover <span aria-hidden="true">⌄</span>
        </a>
        <CalLink
          className="focus-ring rounded-sm py-2 max-[850px]:px-2"
          onClick={closeMenu}
        >
          Shop
        </CalLink>
      </nav>

      <CalLink className="focus-ring ml-auto inline-flex items-center justify-center rounded-md bg-black px-5.5 py-2 text-base font-medium text-white max-[850px]:hidden">
        Shop
      </CalLink>
    </header>
  );
}
