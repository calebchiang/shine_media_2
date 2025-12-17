import Image from "next/image";

export default function AboutHeader() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      <Image
        src="/about_bg_2.jpg"
        alt="About Shine Media"
        fill
        priority
        className="object-cover"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-xl text-white">
          <h1 className="font-heading text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            We Build
            Momentum
          </h1>

          <p className="mt-6 text-lg text-white">
            Shine Media transforms home service businesses across Vancouver
            into lead-generating machines.
          </p>
        </div>
      </div>
    </section>
  );
}
