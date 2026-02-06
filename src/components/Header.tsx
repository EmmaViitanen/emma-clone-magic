import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-6 md:px-12">
        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wider transition-colors hover:text-primary ${
              isActive("/") && location.pathname === "/" ? "text-primary" : "text-foreground"
            }`}
          >
            WORKS
          </Link>
          <Link
            to="/bio"
            className={`text-sm font-medium tracking-wider transition-colors hover:text-primary ${
              isActive("/bio") ? "text-primary" : "text-foreground"
            }`}
          >
            BIO
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium tracking-wider transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-foreground"
            }`}
          >
            CONTACT
          </Link>
        </nav>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2">
          <span
            className="text-xl md:text-2xl font-bold tracking-wider text-primary"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            <img src="/logga-01.png" alt="Emma Viitanen Logo" width={200} />
          </span>
        </Link>

        {/* Empty div for spacing */}
        <div className="w-24" />
      </div>
    </header>
  );
};

export default Header;
