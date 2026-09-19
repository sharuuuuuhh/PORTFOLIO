import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-6 py-16">
      <section className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-12">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-3xl font-bold text-white shadow-lg">
          S
        </div>
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight">About SHARON</h1>
        <p className="mx-auto mt-5 max-w-2xl text-center leading-7 text-gray-600">
          I&apos;m SHARON, a computer science student and developer interested in web development, programming, UI/UX and building useful projects. This blog is a place to collect my technical work, experiments and lessons learned.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800">Read the blog</Link>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:bg-gray-50">LinkedIn</a>
        </div>
      </section>
    </main>
  );
}
