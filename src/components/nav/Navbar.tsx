import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Home } from "@mui/icons-material";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      {/* Conditional rendering for the Home link */}
      {pathname !== "/" && (
        <Link to="/">
          <p className="hover:text-gray-500 transition-colors text-2xl md:hidden">
            <Home />
          </p>
        </Link>
      )}

      <div className="hidden md:flex items-center gap-10 mx-auto">
        {/* Home link for larger screens, displayed only when not on the index page */}
        {pathname !== "/" && (
          <Link to="/">
            <p className="text-2xl hover:text-gray-500 transition-colors">
              <Home />
            </p>
          </Link>
        )}
        <Link to="/about">
          <p className="text-2xl hover:text-gray-500 transition-colors">
            About
          </p>
        </Link>
        <Link to="/skills">
          <p className="text-2xl hover:text-gray-500 transition-colors">
            Skills
          </p>
        </Link>
        <Link to="/contact">
          <p className="text-2xl hover:text-gray-500 transition-colors">
            Contact
          </p>
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}
