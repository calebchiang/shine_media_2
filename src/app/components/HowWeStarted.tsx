import Image from "next/image";
import { Landmark } from "lucide-react";

export default function HowWeStarted() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 pb-36 md:pb-55">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex w-fit flex-col items-center gap-3">
            <Landmark className="h-8 w-8 text-black" />
            <p className="text-xs font-semibold tracking-wide text-black/70">
              Foundation
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-black md:text-5xl">
            How We Started Serving
            <br />
            Vancouver&apos;s Trades
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-black/70">
            We watched good contractors struggle. They had the skills, the
            reputation, the work ethic. What they lacked were phones ringing and
            calendars full. That gap between capable and booked became our
            obsession. We built Shine Media to close it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                         shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
            >
              Services
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-black
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

        <div className="mt-16">
          <div className="relative h-[520px] w-full overflow-hidden rounded-3xl bg-black/5">
            <Image
              src="/team.jpg"
              alt="How we started"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
