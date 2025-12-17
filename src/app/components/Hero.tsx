"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const pillAnimation = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="bg-[#0A74FF]">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-36 md:pt-18 md:pb-55">
        <motion.div
          variants={pillAnimation}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full
                       border border-white/20
                       bg-zinc-900/50
                       px-4 py-2
                       text-sm font-semibold text-white/90
                       backdrop-blur-md
                       shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_24px_rgba(0,0,0,0.25)]
                       transition-all
                       hover:bg-zinc-900/60"
          >
            <Sparkles className="h-4 w-4 text-white/80" />
            <span>Book a free strategy call</span>
            <span className="mx-1 h-4 w-px bg-white/20" />
            <span className="text-white/70">See availability</span>
            <ArrowRight className="h-4 w-4 text-white/70 transition group-hover:translate-x-0.5 group-hover:text-white/90" />
          </a>
        </motion.div>

        <div className="mt-8 grid items-center gap-12 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="font-heading text-5xl font-semibold leading-[1.0] tracking-[-0.015em] text-white md:text-6xl">
              Growth Marketing for Home Service Businesses
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-lg leading-[1.55] tracking-[-0.005em] text-white/85 md:mx-0">
              Shine Media offers digital marketing services to help{" "}
              <span className="font-bold">home service businesses</span> attract
              more customers, improve online visibility, and drive sustainable
              growth.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5 md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                           shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                           transition-all
                           hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                           active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
              >
                Contact Us
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-[#0B5ED7] px-7 py-3 text-sm font-semibold text-white
                           shadow-[0_4px_0_0_rgba(0,0,0,0.12)]
                           transition-all
                           hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.12)]
                           active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.12)]
                           hover:bg-[#094DB8]"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative h-[360px] w-full max-w-md rounded-2xl bg-white/10 backdrop-blur">
              <Image
                src="/hero_image.jpg"
                alt="Home improvement marketing"
                fill
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
