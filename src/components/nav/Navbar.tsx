"use client";

import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";
import { usePathname } from "next/navigation";

import { Home } from "@mui/icons-material";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      {/* Conditional rendering for the Home link */}
      {pathname !== "/" && (
        <Link href="/">
          <p className="hover:text-gray-500 transition-colors text-2xl md:hidden">
            <Home />
          </p>
        </Link>
      )}

      <div className="hidden md:flex items-center gap-10 mx-auto">
        {" "}
        {/* Centering container */}
        {/* Home link for larger screens, displayed only when not on the index page */}
        {pathname !== "/" && (
          <Link href="/">
            <p className="text-2xl hover:text-gray-500 transition-colors">
              <Home />
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
