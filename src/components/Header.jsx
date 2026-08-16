import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/img/logo.webp";

const NAV_LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#plans", label: "Plans" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
        <div
          className="
            max-w-7xl
            mx-auto
            rounded-2xl
            border
            border-white/10
            bg-white/80
            backdrop-blur-2xl
            shadow-[0_8px_40px_rgba(0,0,0,0.08)]
          "
        >
          <div className="relative h-16 md:h-20 px-5 sm:px-8">
            {/* Logo */}
            <div className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2">
              <a href="#top" className="flex items-center">
                <img
                  src={logo}
                  alt="Vitkash Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Center Navigation */}
            <nav
              className="
                hidden
                md:flex
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                items-center
                gap-8
              "
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="
                    relative
                    text-sm
                    font-medium
                    text-black/70
                    transition
                    hover:text-black
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:w-0
                    after:bg-black
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="hidden md:flex absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 items-center gap-3">
              <Link
                to="/login.php"
                className="
                  text-sm
                  font-semibold
                  text-black/70
                  hover:text-black
                  transition
                "
              >
                Log In
              </Link>

              <Link
                to="/register.php"
                className="
                  bg-black
                  text-white
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                w-10
                h-10
                rounded-xl
                bg-black
                text-white
                flex
                items-center
                justify-center
              "
            >
              {menuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            transition-all
            duration-300
            overflow-hidden
            ${menuOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/90
              backdrop-blur-2xl
              shadow-xl
              p-5
            "
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    py-3
                    px-3
                    rounded-xl
                    hover:bg-black/5
                    transition
                    font-medium
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="border-t border-black/10 mt-4 pt-4 flex flex-col gap-3">
              <Link
                to="/login.php"
                onClick={() => setMenuOpen(false)}
                className="
                  text-center
                  py-3
                  rounded-xl
                  border
                  border-black/10
                  font-semibold
                "
              >
                Log In
              </Link>

              <Link
                to="/register.php"
                onClick={() => setMenuOpen(false)}
                className="
                  text-center
                  bg-black
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

     
    </>
  );
}
