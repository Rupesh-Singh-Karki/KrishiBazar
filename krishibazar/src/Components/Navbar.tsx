import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-600 p-4 text-white shadow-md w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">My Website</div>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
