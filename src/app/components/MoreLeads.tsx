import Image from "next/image";
import { MessageSquare, X, FileText } from "lucide-react";

export default function MoreLeads() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-zinc-100">
          <Image
            src="/job.jpg"
            alt="More leads"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <div className="space-y-10">
            <div>
              <div className="flex items-start gap-5">
                <MessageSquare className="mt-1 h-7 w-7 text-black" />
                <div>
                  <h3 className="text-2xl font-semibold text-black">
                    More Leads
                  </h3>
                  <p className="mt-3 text-base text-black/70">
                    A steady stream of qualified prospects calling your
                    business, not just tire kickers wasting your time.
                  </p>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black"
                  >
                    <span>Discover</span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-5">
                <X className="mt-1 h-7 w-7 text-black" />
                <div>
                  <h3 className="text-2xl font-semibold text-black">
                    Higher Close Rates
                  </h3>
                  <p className="mt-3 text-base text-black/70">
                    Better leads mean better appointments. You spend less time
                    chasing and more time closing real jobs.
                  </p>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black"
                  >
                    <span>Discover</span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-5">
                <FileText className="mt-1 h-7 w-7 text-black" />
                <div>
                  <h3 className="text-2xl font-semibold text-black">
                    Measurable Returns
                  </h3>
                  <p className="mt-3 text-base text-black/70">
                    You see exactly what you’re getting. Every dollar tracked.
                    Every lead counted. Every appointment booked.
                  </p>
                  <a
                    href="#"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black"
                  >
                    <span>Discover</span>
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
