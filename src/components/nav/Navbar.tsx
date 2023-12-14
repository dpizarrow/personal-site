"use client";

import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="flex gap-10 ml-12">
        {pathname !== "/" && (
          <Link href="/">
            <p className="hover:text-gray-500 transition-colors text-2xl">
              Home
            </p>
          </Link>
        )}
        <Link href="/about">
          <p className="text-2xl hover:text-gray-500 transition-colors">
            About
          </p>
        </Link>
        <Link href="/skills">
          <p className="text-2xl hover:text-gray-500 transition-colors">
            Skills
          </p>
        </Link>
        <Link href="/contact">
          <p className="text-2xl hover:text-gray-500 transition-colors">
            Contact
          </p>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}
