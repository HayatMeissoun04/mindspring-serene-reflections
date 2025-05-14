
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-400 bg-clip-text text-transparent">
            MindSpring
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/check-in"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            Check-In
          </Link>
          <Link
            to="/history"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            History
          </Link>
          <Link
            to="/about"
            className="font-medium text-gray-600 hover:text-primary transition-colors"
          >
            About Us
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          <Link to="/signin">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="default" size="sm">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
