export default function ServicesHeader() {
  return (
    <section className="bg-zinc-900">
      <div className="mx-auto flex max-w-6xl items-center px-6 pt-20 pb-28 md:pt-18 md:pb-40">
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

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                         shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
            >
              Contact
            </a>

            <a
              href="#service2"
              className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white
                         backdrop-blur
                         transition-all
                         hover:bg-white/20"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
