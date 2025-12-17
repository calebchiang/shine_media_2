"use client";

import { motion, type Variants } from "framer-motion";

const reviews = [
  {
    quote: "Shine Media got us booked solid for three months straight.",
    name: "Marcus Chen",
    location: "Surrey, BC",
  },
  {
    quote: "Our phone never rang like this before their ads started running.",
    name: "Sarah Mitchell",
    location: "Burnaby, BC",
  },
  {
    quote: "They handle the calls so we can focus on the work.",
    name: "David Torres",
    location: "Richmond, BC",
  },
  {
    quote: "Leads actually showed up ready to book. Super smooth process.",
    name: "Kevin Park",
    location: "Richmond, BC",
  },
  {
    quote: "Their ads brought in better customers, not just random clicks.",
    name: "Alicia",
    location: "New Westminster, BC",
  },
  {
    quote: "We went from slow weeks to consistent calls without changing our pricing.",
    name: "Sandeep Singh",
    location: "Vancouver, BC",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Reviews() {
  return (
    <section className="relative z-10 -mt-24 overflow-hidden rounded-t-[56px] bg-white">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28">
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Real Results
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Hear from home service owners
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {reviews.map((r, idx) => (
            <motion.div
              key={`${r.name}-${idx}`}
              variants={item}
              className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
            >
              <div>
                <div className="mb-6 flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-xl font-semibold leading-snug text-zinc-900">
                  “{r.quote}”
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-zinc-400">
                  ●
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{r.name}</p>
                  <p className="text-sm text-zinc-600">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
