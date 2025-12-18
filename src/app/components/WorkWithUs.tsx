import Image from "next/image";

const cards = [
  {
    title: "More qualified\nleads",
    description: "Your phone rings with people ready to hire you",
    href: "/contact",
  },
  {
    title: "Booked\nappointments",
    description: "Fewer no-shows and more jobs in your calendar",
    href: "/contact",
  },
];

export default function WorkWithUs() {
  return (
    <section className="relative z-0 -mt-44 mb-12 overflow-x-hidden rounded-t-[48px] bg-zinc-900">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-24 lg:grid-cols-2 lg:items-stretch">
        <div className="relative h-[520px] overflow-hidden rounded-3xl lg:h-full">
          <Image
            src="/work_with_us.png"
            alt="Results"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="w-full max-w-md text-center text-white">
              <p className="text-sm font-semibold text-white/80">Results</p>

              <h2 className="mt-3 font-heading text-5xl font-semibold leading-[1.0] tracking-tight md:text-6xl">
                What You Get
                <br />
                From Working With
                <br />
                Us
              </h2>
            </div>
          </div>
        </div>

        <div className="flex h-full flex-col gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-1 flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-800 px-10 py-14 text-center"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10">
                <span className="h-4 w-4 rounded-sm bg-white" />
              </div>

              <h3 className="whitespace-pre-line font-heading text-5xl font-semibold leading-[1.0] tracking-tight text-white">
                {c.title}
              </h3>

              <p className="mt-6 max-w-sm text-base text-white/70">
                {c.description}
              </p>

              <a
                href={c.href}
                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white transition-transform duration-200 ease-out hover:scale-105 active:scale-105"
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
          ))}
        </div>
      </div>
    </section>
  );
}
