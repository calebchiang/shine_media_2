import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-[#0A74FF] border-b border-white/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6 text-sm font-medium text-white/90">
          <a href="#" className="transition hover:text-white">
            Home
          </a>
          <a href="#" className="transition hover:text-white">
            About
          </a>
          <a href="#" className="transition hover:text-white">
            Services
          </a>
        </div>

        <div className="flex items-center">
          <Image
            src="/logo_4.png"
            alt="Shine Media Logo"
            width={100}
            height={32}
            priority
          />
        </div>

        <a
          href="#"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-zinc-900
                     shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                     transition-all
                     hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                     active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
