"use client";

import { useMemo, useState } from "react";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most sites launch within 2 to 3 weeks from start to finish. We move fast because we know your business can't wait. The timeline depends on how quickly you provide content and feedback.",
  },
  {
    q: "What results should I expect?",
    a: "You’ll see more calls and booked appointments. Most clients see qualified leads within the first month of running ads. Website results build over time as search engines index your pages.",
  },
  {
    q: "Do you work with all home service trades?",
    a: "We specialize in flooring, decking, roofing, landscaping, and renovation companies. If you're in the home service business in Metro Vancouver, we know how to reach your customers.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long contracts. No hidden fees. You pay monthly and can stop whenever you want. We keep clients because our work speaks for itself.",
  },
  {
    q: "Who answers the phones for appointment setting?",
    a: "Our team handles it. They’re trained in home service sales and know exactly how to book your jobs. You get a real person — not a robot.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = useMemo(
    () =>
      faqs.map((f, idx) => ({
        ...f,
        id: `${idx}-${f.q}`,
      })),
    []
  );

  return (
    <section className="bg-white mb-32 md:mb-40">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-start">
        {/* Left */}
        <div>
          <h2 className="font-heading text-5xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
            Questions
          </h2>

          <p className="mt-6 max-w-sm text-base leading-7 text-zinc-600">
            Everything you need to know about working with Shine Media
          </p>

          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center rounded-2xl border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                       shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                       transition-all
                       hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                       active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
          >
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="divide-y divide-zinc-200 border-t border-zinc-200">
          {items.map((f, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={f.id} className="py-8">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-start justify-between gap-6 text-left"
                >
                  <span className="text-base font-semibold text-zinc-900 md:text-lg">
                    {f.q}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-700 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▾
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
