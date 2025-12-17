"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    label: "Design",
    title: "Websites Built For Results",
    description: "A clean, fast website that turns visitors into booked jobs.",
    href: "#",
    imageSrc: "/web_design.jpg",
  },
  {
    label: "Ads",
    title: "Meta Ads That Reach Ready Buyers",
    description: "We put your offer in front of homeowners actively looking on Facebook and Instagram.",
    href: "#",
    imageSrc: "/facebook.jpg",
  },
  {
    label: "Calls",
    title: "Appointment Setting That Closes Deals",
    description: "We handle follow-up so your calendar stays full.",
    href: "#",
    imageSrc: "/appointment.jpg",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section className="-mt-24 mb-24 rounded-t-[56px] bg-zinc-50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold text-zinc-900">Build</p>
          <h2 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Three Ways to Grow
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Sites that convert visitors into customers
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white"
            >
              <div className="p-8">
                <p className="text-sm font-semibold text-[#0A74FF]">
                  {s.label}
                </p>

                <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-zinc-900">
                  {s.title}
                </h3>

                <p className="mt-4 text-base text-zinc-600">{s.description}</p>

                <a
                  href={s.href}
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900
                             transition-transform duration-200 ease-out
                             hover:scale-125 hover:text-black"
                >
                  <span>Explore</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-2"
                  >
                    →
                  </span>
                </a>
              </div>

              <div className="relative mt-auto h-[280px] w-full bg-zinc-100">
                <Image
                  src={s.imageSrc}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
