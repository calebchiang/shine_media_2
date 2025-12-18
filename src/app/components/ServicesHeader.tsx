"use client";

import { motion, type Variants } from "framer-motion";

const buttons: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const buttonItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesHeader() {
  return (
    <section className="bg-zinc-900">
      <div className="mx-auto flex max-w-6xl items-center px-6 pt-32 pb-32 md:pt-32 md:pb-44">
        <div className="max-w-2xl text-white">
          <p className="text-sm font-semibold text-white/70">Services</p>

          <h1 className="mt-4 font-heading text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Services That
            Convert
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/85">
            We build the systems home service businesses need to fill their
            schedules with qualified leads.
          </p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-5"
            variants={buttons}
            initial="hidden"
            animate="show"
          >
            <motion.a
              variants={buttonItem}
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                         shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
            >
              Contact
            </motion.a>

            <motion.a
              variants={buttonItem}
              href="#service2"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-zinc-800/70 px-7 py-3 text-sm font-semibold text-white/90
                         backdrop-blur
                         shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_6px_18px_rgba(0,0,0,0.25)]
                         transition-all
                         hover:bg-zinc-800/90"
            >
              Learn more
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
