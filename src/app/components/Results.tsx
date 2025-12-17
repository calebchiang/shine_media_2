"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  {
    title: "Clients served",
    value: "50+",
    description: "Home service businesses across the region",
  },
  {
    title: "Leads generated",
    value: "2000+",
    description: "Qualified prospects delivered to our clients",
  },
  {
    title: "Appointments booked",
    value: "1200+",
    description: "Jobs scheduled through our campaigns",
  },
  {
    title: "Years in business",
    value: "3",
    description: "Building momentum for Vancouver's best contractors",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Results() {
  return (
    <section className="-mt-24 rounded-t-[56px] bg-zinc-100">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-24 md:pb-55">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-zinc-900">Results</p>

            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              What we&apos;ve built in
              <br />
              Vancouver
            </h2>

            <p className="mt-6 text-lg text-zinc-600">
              Numbers that matter. Clients who trust us with their growth.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                           shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                           transition-all
                           hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                           active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
              >
                Services
              </a>

              <a
                href="#learn"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-900
                           transition-transform duration-200 ease-out hover:scale-125"
              >
                <span>Learn</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-2"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.title}
                variants={item}
                className="rounded-2xl border border-zinc-200 bg-white p-8"
              >
                <p className="text-sm font-semibold text-zinc-900">
                  {stat.title}
                </p>

                <div className="mt-6 text-5xl font-semibold tracking-tight text-zinc-900">
                  {stat.value}
                </div>

                <div className="my-6 h-px w-full bg-zinc-200" />

                <p className="text-sm text-zinc-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
