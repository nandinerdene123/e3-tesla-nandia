// The editor may type-check this page without the project's React JSX types
// installed; keep the page's JSX from producing false-positive diagnostics.
// @ts-nocheck
import Image from "next/image";

import { CalEmbed } from "@/components/cal-embed";
import { CalLink } from "@/components/cal-link";
import { Header } from "@/components/header";
import { ModelCarousel } from "@/components/model-carousel";
import { ProductCarousel } from "@/components/product-carousel";

const features = [
  {
    id: "performance-technology",
    title: "Medium Length Section Heading Goes Here",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: "safety-technology",
    title: "Medium Length Section Heading Goes Here",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: "efficiency-technology",
    title: "Medium Length Section Heading Goes Here",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

function FeatureIcon() {
  return (
    <svg
      className="size-8"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect x="5" y="5" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 21 21 11M14 11h7v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section
          id="vehicles"
          className="relative grid h-[590px] place-items-center overflow-hidden text-center text-white max-[850px]:h-[620px]"
        >
          <Image
            className="object-cover"
            src="/assets/hero.jpeg"
            alt="Tesla Model 3"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex flex-col items-center gap-3.5">
            <span>Electric</span>
            <h1 className="heading-display text-[clamp(48px,5vw,72px)]">Model 3</h1>
            <p className="text-lg">1.99% APR Available</p>
            <div className="mt-4 flex gap-4 max-[520px]:w-screen max-[520px]:px-4.5">
              <a
                className="focus-ring inline-flex min-w-27.5 items-center justify-center rounded-md bg-white px-6 py-2.5 text-base font-medium text-black max-[520px]:flex-1"
                href="#performance"
              >
                Order
              </a>
              <a
                className="focus-ring inline-flex min-w-32.5 items-center justify-center rounded-md border border-white/40 bg-white/5 px-6 py-2.5 text-base font-medium backdrop-blur-sm max-[520px]:flex-1"
                href="#performance"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="performance" className="scroll-mt-18 bg-neutral-100 py-28 max-[850px]:py-18">
          <div className="container-shell grid grid-cols-2 items-center gap-20 max-[850px]:grid-cols-1 max-[850px]:gap-11">
            <div>
              <p className="mb-4 font-semibold">Performance</p>
              <h2 className="heading-display text-[clamp(36px,3.6vw,52px)]">
                Full Self-Driving
                <br />
                (Supervised)
              </h2>
              <p className="mt-4 text-lg">
                Makes every drive easier. Subscribe for $99/mo.<sup>1</sup>
              </p>

              <div className="my-8 grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <strong className="font-display text-[44px] leading-[0.82] tracking-[-0.05em] max-[520px]:text-[32px]">
                    7x
                  </strong>
                  <span className="mt-3">Fewer Collisions</span>
                </div>
                <div className="flex flex-col">
                  <strong className="font-display text-[44px] leading-[0.82] tracking-[-0.05em] max-[520px]:text-[32px]">
                    1,345,677,
                    <br />
                    890
                  </strong>
                  <span className="mt-3">Miles Driven</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4">
                <a
                  className="focus-ring inline-flex items-center justify-center rounded-md border border-neutral-400 px-6 py-2.5 text-base font-medium"
                  href="#shop"
                >
                  Schedule
                </a>
                <a className="focus-ring rounded-sm text-base font-medium" href="#technology">
                  Learn more →
                </a>
              </div>
            </div>

            <div className="relative aspect-3/2 overflow-hidden rounded-lg max-[850px]:row-start-1">
              <Image
                className="object-cover"
                src="/assets/product-2.jpeg"
                alt="Tesla Full Self-Driving at night"
                fill
                sizes="(max-width: 850px) calc(100vw - 48px), 50vw"
              />
            </div>
          </div>
        </section>

        <section className="py-28 max-[850px]:py-18" aria-labelledby="models-title">
          <div className="container-shell">
            <div className="mb-20 text-center max-[850px]:mb-11">
              <h2 id="models-title" className="heading-display text-[52px] max-[520px]:text-[42px]">
                Tesla Models
              </h2>
              <p className="mt-3">Drive</p>
            </div>
            <ModelCarousel />
          </div>
        </section>

        <section id="energy" className="scroll-mt-18 py-28 max-[850px]:py-18">
          <div className="container-shell">
            <div id="technology" className="mb-16 max-w-170 scroll-mt-18">
              <p className="mb-4 font-semibold">Technology</p>
              <h2 className="heading-display text-[clamp(36px,3.6vw,52px)]">
                Medium Length Section
                <br />
                Heading Goes Here
              </h2>
              <p className="mt-5 max-w-155 leading-6 text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique. Duis cursus.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-[850px]:grid-cols-1">
              {features.map((feature) => (
                <article key={feature.id}>
                  <div className="grid h-57.5 place-items-center bg-neutral-200 text-neutral-500 max-[850px]:h-80 max-[520px]:h-57.5">
                    <FeatureIcon />
                  </div>
                  <h3 className="heading-display mt-6 text-2xl">{feature.title}</h3>
                  <p className="mt-4 max-w-90 leading-6 text-neutral-700">{feature.body}</p>
                  <a className="focus-ring mt-4 inline-block rounded-sm font-medium" href="#performance">
                    Learn more →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="charging" className="scroll-mt-18 bg-neutral-200 py-28 max-[850px]:py-18">
          <div className="container-shell">
            <div className="mb-12 text-center">
              <h2 className="heading-display text-[48px] max-[520px]:text-[38px]">
                Tesla Superchargers in
                <br />
                United States
              </h2>
              <p className="mt-4">Located on major routes near convenient amenities.</p>
            </div>
            <div className="relative mx-auto aspect-4/3 w-[72%] max-[850px]:w-full">
              <Image
                className="object-contain"
                src="/assets/product-3.jpeg"
                alt="Map of Tesla Superchargers in the United States"
                fill
                sizes="(max-width: 850px) calc(100vw - 48px), 72vw"
              />
            </div>
          </div>
        </section>

        <section className="py-17.5">
          <div className="container-shell grid grid-cols-2 gap-20 max-[850px]:grid-cols-1 max-[850px]:gap-11">
            <div>
              <p className="mb-4 font-semibold">Explore</p>
              <h2 className="heading-display text-[44px]">Find Your Charge</h2>
            </div>
            <div>
              <p>View thousands of fast Superchargers and Destination Chargers.</p>
              <div className="mt-7 flex gap-14 max-[520px]:gap-6">
                <strong className="font-display text-[40px] max-[520px]:text-[28px]">
                  37,613
                  <small className="block font-sans text-xs font-normal">Superchargers</small>
                </strong>
                <strong className="font-display text-[40px] max-[520px]:text-[28px]">
                  5,661
                  <small className="block font-sans text-xs font-normal">Destination Chargers</small>
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="scroll-mt-18 overflow-hidden bg-neutral-950 py-28 text-white max-[850px]:py-18">
          <div className="container-shell">
            <p className="mb-4 font-semibold">Tesla Shop</p>
            <h2 className="heading-display mb-14 text-[clamp(36px,3.6vw,52px)]">Products</h2>
            <ProductCarousel />
          </div>
        </section>
      </main>

      <footer className="bg-neutral-100 pt-16 pb-9">
        <div className="container-shell grid grid-cols-[1fr_auto_1fr] items-center max-[850px]:grid-cols-1 max-[850px]:gap-7">
          <a className="focus-ring w-42 rounded-sm font-display text-[25px] font-extrabold" href="#vehicles" aria-label="Tesla home">
            T
          </a>
          <nav className="flex gap-7 font-semibold max-[850px]:flex-wrap max-[520px]:flex-col max-[520px]:gap-3" aria-label="Footer navigation">
            <a href="#vehicles">Model S</a>
            <a href="#vehicles">Model 3</a>
            <a href="#vehicles">Model X</a>
            <a href="#vehicles">Model Y</a>
            <a href="#shop">Shop</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="text-right max-[850px]:text-left" aria-label="Social media links">
            ●　◎　𝕏　in　▶
          </div>
        </div>
        <div className="container-shell mt-14 flex justify-center gap-6 border-t border-neutral-300 pt-7 text-xs max-[850px]:flex-col max-[850px]:items-center max-[850px]:gap-2.5">
          <span>© 2024 Tesla. All rights reserved.</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </footer>

      <section
        id="contact"
        className="scroll-mt-18 bg-neutral-950 py-24 text-white max-[850px]:py-18"
        aria-labelledby="contact-title"
      >
        <div className="container-shell grid grid-cols-[1fr_0.9fr] items-center gap-20 max-[850px]:grid-cols-1 max-[850px]:gap-10">
          <div className="max-w-155">
            <p className="mb-4 font-semibold text-white/65">Contact</p>
            <h2
              id="contact-title"
              className="heading-display text-[clamp(42px,5vw,72px)]"
            >
              Let&apos;s Talk
            </h2>
            <p className="mt-6 max-w-135 text-lg leading-8 text-white/70">
              Have questions about Model 3, charging, or your next Tesla? Choose a convenient
              time and speak with us online.
            </p>
          </div>

          <div className="rounded-xl bg-white p-10 text-black max-[520px]:p-6">
            <div className="mb-10 flex size-12 items-center justify-center rounded-full bg-black text-white">
              <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 3v3m10-3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="heading-display text-[32px]">Book a consultation</h3>
            <p className="mt-4 leading-6 text-neutral-600">
              View available dates and reserve the time that works best for you.
            </p>
            <CalLink className="focus-ring mt-8 inline-flex w-full items-center justify-between rounded-md bg-black px-6 py-4 font-medium text-white transition-colors hover:bg-neutral-800">
              <span>Schedule a call</span>
              <span aria-hidden="true">→</span>
            </CalLink>
            <p className="mt-4 text-xs text-neutral-500">
              Online appointment · Available times are shown in your local timezone
            </p>
          </div>
        </div>
      </section>

      <CalEmbed />
    </>
  );
}
