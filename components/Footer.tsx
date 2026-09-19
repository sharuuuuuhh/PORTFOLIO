import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 px-6 py-8 text-center">
      <div className="flex justify-center gap-4 text-sm font-semibold text-blue-600">
        <Link href="/" className="hover:text-blue-800">Home</Link>
        <span className="text-gray-400">|</span>
        <Link href="/about" className="hover:text-blue-800">About</Link>
      </div>
      <p className="mt-3 text-sm text-gray-600">© {new Date().getFullYear()} SHARON. All rights reserved.</p>
      <p className="mt-1 text-sm text-gray-500">Built with Next.js, React and Tailwind CSS.</p>
    </footer>
  );
}
