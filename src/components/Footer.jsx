import logo from "@/assets/img/logo.webp";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glow Orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Nextel Logo"
              className="w-20 h-20 object-contain"
            />

            <p className="mt-6 text-white/50 leading-relaxed">
              A digital-first ecosystem helping users connect, engage, earn, and
              grow through innovative technology.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {["X", "F", "I", "T"].map((item) => (
                <button
                  key={item}
                  className="
                    w-10
                    h-10
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    hover:bg-white
                    hover:text-black
                    hover:scale-110
                    transition-all
                    duration-300
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-lg text-white">Product</h4>

            <ul className="mt-6 space-y-4 text-white/60">
              <li>
                <a
                  href="#plans"
                  className="hover:text-white transition-colors duration-300"
                >
                  Plans
                </a>
              </li>

              <li>
                <a
                  href="#coverage"
                  className="hover:text-white transition-colors duration-300"
                >
                  Coverage
                </a>
              </li>

              <li>
                <a
                  href="#how"
                  className="hover:text-white transition-colors duration-300"
                >
                  How It Works
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg text-white">Support</h4>

            <ul className="mt-6 space-y-4 text-white/60">
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Report Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg text-white">Company</h4>

            <ul className="mt-6 space-y-4 text-white/60">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/40 text-sm text-center md:text-left">
            © 2026 Nextel Connect. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/40">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms
            </a>

            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
