import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home", isRoute: true },
  { href: "/about", label: "About", isRoute: true },
  { href: "#earn", label: "Ways to earn", isRoute: true },
  {
    href: "#pages",
    label: "Pages",
    isRoute: false,
    children: [
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms Of Use" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-white/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
          <div className="relative h-16 md:h-20 px-5 sm:px-8">
            {/* Logo */}
            <div className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2">
              <a href="#top" className="flex items-center">
                <img
                  src="/mysite/app/vitkashblacklogo.png"
                  alt="Vitkash Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>

            {/* Center Navigation */}
            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
              {NAV_LINKS.map((link) => {
                const hasChildren = link.children && link.children.length > 0;

                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() =>
                      hasChildren && setOpenDropdown(link.href)
                    }
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="relative flex items-center gap-1 text-sm font-medium text-black/70 transition hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="relative flex items-center gap-1 text-sm font-medium text-black/70 transition hover:text-black after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
                      >
                        {link.label}
                        {hasChildren && (
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              openDropdown === link.href ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </a>
                    )}

                    {hasChildren && (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                          openDropdown === link.href
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div className="min-w-[200px] rounded-2xl border border-black/10 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2">
                          {link.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-black/70 hover:bg-black/5 hover:text-black transition"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Buttons */}
            <div className="hidden md:flex absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 items-center gap-3">
              <Link
                to="/login.php"
                className="text-sm font-semibold text-black/70 hover:text-black transition"
              >
                Log In
              </Link>

              <Link
                to="/register.php"
                className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center"
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
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-white/90 backdrop-blur-2xl shadow-xl p-5">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const hasChildren = link.children && link.children.length > 0;
                const isOpen = openMobileDropdown === link.href;

                if (hasChildren) {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(isOpen ? null : link.href)
                        }
                        className="w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-black/5 transition font-medium text-left"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          isOpen ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-col pl-4 border-l border-black/10 ml-3 mt-1 mb-1">
                          {link.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              onClick={() => {
                                setMenuOpen(false);
                                setOpenMobileDropdown(null);
                              }}
                              className="py-2.5 px-3 rounded-xl hover:bg-black/5 transition text-sm text-black/70"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-3 rounded-xl hover:bg-black/5 transition font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-3 px-3 rounded-xl hover:bg-black/5 transition font-medium"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="border-t border-black/10 mt-4 pt-4 flex flex-col gap-3">
              <Link
                to="/login.php"
                onClick={() => setMenuOpen(false)}
                className="text-center py-3 rounded-xl border border-black/10 font-semibold"
              >
                Log In
              </Link>

              <Link
                to="/register.php"
                onClick={() => setMenuOpen(false)}
                className="text-center bg-black text-white py-3 rounded-xl font-semibold"
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
