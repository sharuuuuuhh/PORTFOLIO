"use client";

import { Search } from "lucide-react";

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export default function Hero({ searchTerm, setSearchTerm }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.28),transparent_35%)]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Portfolio Blog</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Welcome to SHARON&apos;s Blog</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
          A collection of my technical articles, projects, experiments and things I learn while building with technology.
        </p>

        <form onSubmit={(event) => event.preventDefault()} className="mt-9 w-full max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={21} />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search articles..."
              aria-label="Search articles"
              className="h-14 w-full rounded-full border border-white/20 bg-white px-12 pr-5 text-slate-900 shadow-xl outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
