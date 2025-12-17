"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const services = [
  {
    label: "Design",
    title: "Website design that closes deals",
    description:
      "A site that converts visitors into phone calls and bookings.",
    href: "#",
    imageSrc: "/web_design.jpg",
  },
  {
    label: "Ads",
    title: "Meta ads that find your customers",
    description:
      "Facebook and Instagram campaigns built to reach local homeowners ready to hire.",
    href: "#",
    imageSrc: "/facebook.jpg",
  },
  {
    label: "Appointments",
    title: "Appointment setting that fills your calendar",
    description:
      "We handle the calls and qualify the leads so you focus on the work.",
    href: "#",
    imageSrc: "/appointment.jpg",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services2() {
  return (
    <section id="service2" className="-mt-24 overflow-hidden rounded-t-[56px] bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-zinc-900">Core</p>

          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Three Services That Work
          </h2>

          <p className="mt-5 text-lg text-zinc-600">
            Each built to drive appointments and revenue for home service
            companies.
          </p>
        </div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
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
                <p className="text-sm font-semibold text-zinc-900">
                  {s.label}
                </p>

                <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-zinc-900">
                  {s.title}
                </h3>

                <p className="mt-4 text-base text-zinc-600">
                  {s.description}
                </p>

                <a
                  href={s.href}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-transform duration-200 ease-out hover:scale-125"
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

              <div className="relative mt-auto h-[260px] w-full bg-zinc-100">
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
