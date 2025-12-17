export default function CTA() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-zinc-900 px-8 py-14 text-center md:px-16 pb-24 md:pb-32">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Ready To Fill Your
            <br />
            Calendar?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Let&apos;s talk about what&apos;s possible for your business in
            Vancouver
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                         shadow-[0_4px_0_0_rgba(0,0,0,0.15)]
                         transition-all
                         hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.15)]
                         active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.15)]"
            >
              Start
            </a>

            <a
              href="#learn"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white
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
      </div>
    </section>
  );
}
