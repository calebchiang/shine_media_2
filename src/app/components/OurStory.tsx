import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative -mt-24 mb-12 overflow-hidden rounded-t-[56px] bg-[#0A74FF] pb-40 md:pb-48">
      <div className="mx-auto max-w-6xl px-6 pt-24">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-sm font-semibold text-white/80">Story</p>

          <h2 className="mt-4 font-heading text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            We Know Home Service
            <br />
            Marketing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85">
            Shine Media works with flooring, decking, roofing, landscaping, and
            renovation companies across British Columbia. We speak your language
            because we live in your world.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                         shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
            >
              Learn
            </a>

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white
                         transition-transform duration-200 ease-out hover:scale-125"
            >
              <span>About</span>
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
          <div className="relative h-[520px] w-full overflow-hidden rounded-3xl bg-white/10">
            <Image src="/home.jpg" alt="Our story" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
