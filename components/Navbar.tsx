import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-black/95 text-white backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-gray-300">
          SHARON
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-gray-300">Blog</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
        </div>
      </nav>
    </header>
  );
}
