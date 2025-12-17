"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const imageItem = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-[#0A74FF]">
      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-36 md:grid-cols-2 md:pt-35 md:pb-55"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.h1
            variants={item}
            className="font-heading text-5xl font-semibold leading-[1.0] tracking-[-0.015em] text-white md:text-6xl"
          >
            Get
              More
          
            Booked Jobs
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-lg leading-[1.55] tracking-[-0.005em] text-white/85"
          >
            Shine Media offers digital marketing services to help <span className="font-bold">home service businesses</span> attract more customers, improve online
            visibility, and drive sustainable growth.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap gap-5"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                         shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
            >
              Book a free strategy call
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-[#0B5ED7] px-7 py-3 text-sm font-semibold text-white
                         shadow-[0_4px_0_0_rgba(0,0,0,0.12)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.12)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.12)]
                         hover:bg-[#094DB8]"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={imageItem}
          className="flex justify-center md:justify-end"
        >
          <div className="relative h-[360px] w-full max-w-md rounded-2xl bg-white/10 backdrop-blur">
            <Image
              src="/hero_image.jpg"
              alt="Home improvement marketing"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
