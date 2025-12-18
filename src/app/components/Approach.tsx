import Image from "next/image";

export default function Approach() {
  return (
    <section className="bg-zinc-50 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-zinc-900">Approach</p>

          <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Built for home
            <br />
            service companies
          </h2>

          <p className="mt-6 text-lg text-zinc-600">
            We know your business. Flooring, roofing, landscaping, decking,
            renovations. We’ve worked with them all. Our strategies are built
            around what actually works for home service companies, not generic
            marketing tactics.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                         shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
            >
              Explore
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

        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-black/5">
          <Image
            src="/roofing.jpg"
            alt="Our approach"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
