"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative border-b border-white/10 bg-[#0A74FF]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="hidden items-center gap-6 text-sm font-medium text-white/90 md:flex">
          <a href="/" className="transition hover:text-white">
            Home
          </a>
          <a href="/about" className="transition hover:text-white">
            About
          </a>
          <a href="/services" className="transition hover:text-white">
            Services
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo_4.png"
            alt="Shine Media Logo"
            width={100}
            height={32}
            priority
          />
        </div>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-2 text-sm font-semibold text-zinc-900
                     shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                     transition-all
                     hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                     active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
        >
          Contact
        </a>
      </nav>

      {open && (
        <div className="absolute left-0 top-full z-50 w-full bg-[#0A74FF] shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-5 py-6 text-sm font-medium text-white">
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <a href="/about" className="transition hover:text-white">
              About
            </a>
            <a href="/services" className="transition hover:text-white">
              Services
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
