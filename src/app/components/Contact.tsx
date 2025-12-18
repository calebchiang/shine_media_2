"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function updateField<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <section id="contact" className="-mt-52 overflow-hidden rounded-t-[56px] bg-zinc-100">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-zinc-900">Contact</p>
            <h2 className="mt-4 font-heading text-5xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
              Tell us about your business
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600">
              Share a few details and we’ll reach out with next steps. No
              pressure — just a quick chat to see if we’re a fit.
            </p>

            <div className="mt-10 space-y-3 text-sm text-zinc-600">
              <p>
                <span className="font-semibold text-zinc-900">Response time:</span>{" "}
                usually within 24 hours
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // No backend yet — just frontend.
                console.log("Contact form submit:", form);
              }}
              className="space-y-6"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-zinc-900">
                    Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none
                               focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-zinc-900">
                    Phone
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="(604) 123-4567"
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none
                               focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-zinc-900">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none
                             focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-zinc-900">
                  Short message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="What trade are you in, and what are you trying to improve (calls, booked estimates, website, ads)?"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none
                             focus:border-zinc-300 focus:ring-4 focus:ring-zinc-100"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-zinc-900
                             shadow-[0_4px_0_0_rgba(0,0,0,0.08)]
                             transition-all
                             hover:translate-y-[1px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.08)]
                             active:translate-y-[2px] active:shadow-[0_2px_0_0_rgba(0,0,0,0.08)]"
                >
                  Send message
                </button>

                <p className="text-sm text-zinc-500">
                  By submitting, you agree we can contact you about your request.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
