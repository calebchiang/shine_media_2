import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0A74FF]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-30 w-30">
              <Image
                src="/logo_4.png"
                alt="Shine Media"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="mt-6 max-w-sm text-base leading-7 text-white/85">
            We are a digital marketing agency in Vancouver, BC, Canada. We place
            a heavy emphasis on marketing analytics to connect the dots between
            marketing costs and revenue generated.
          </p>
        </div>

        <div className="md:justify-self-center">
          <p className="text-lg font-semibold text-white">Social</p>

          <div className="mt-6 space-y-3 text-base text-white/85">
            <a href="#" className="inline-flex items-center hover:text-white">
              <span className="text-2xl font-semibold">f</span>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="md:justify-self-end">
          <nav className="flex flex-col gap-4 text-right">
            <a href="/services" className="text-sm font-semibold text-white/85 hover:text-white">
              Services
            </a>
            <a href="/about" className="text-sm font-semibold text-white/85 hover:text-white">
              About
            </a>
            <a href="/contact" className="text-sm font-semibold text-white/85 hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Shine Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
