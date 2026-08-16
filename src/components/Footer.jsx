import logo from "@/assets/logos/vitkashwhitelogo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo Card */}
            <div className="inline-flex items-center gap-3 px-4 py-3">
              <img
                src={logo}
                alt="Vitkash Logo"
                className="h-10 w-auto object-contain"
              />

              
            </div>

            <p className="mt-6 text-sm text-white/50 leading-relaxed">
              Vitkash is a digital platform designed to provide users with
              access to innovative online services, earning opportunities, and
              financial solutions in one secure ecosystem. Our mission is to
              empower individuals by connecting them with tools that promote
              financial growth, digital engagement, and everyday convenience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
  {/* Telegram */}
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M21.5 2.5L2.8 9.7c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.8 5.7c.2.6.1.8.8.8.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8L22.8 4c.3-1.4-.5-2-1.3-1.5z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 107.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 119.5 12 2.5 2.5 0 0112 9.5zm4.8-3.3a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
    </svg>
  </a>

  {/* TikTok */}
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M19.6 8.4c-1.4-.1-2.8-.8-3.8-1.9V16c0 4-3.2 7-7 7-3.6 0-6.5-2.9-6.5-6.5S5.2 10 8.8 10c.4 0 .8 0 1.2.1v3.2c-.4-.1-.8-.2-1.2-.2-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3c1.9 0 3.2-1.3 3.2-3.8V1h3.1c.3 2.5 2.2 4.4 4.5 4.7v2.7z" />
    </svg>
  </a>
</div>
</div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-lg text-white">Quick Links</h4>

            <ul className="mt-6 space-y-4 text-white/60">
              <li>
                <a
                  href="/register.php"
                  className="hover:text-white transition-colors duration-300"
                >
                  Create Account
                </a>
              </li>

              <li>
                <a
                  href="/login.php"
                  className="hover:text-white transition-colors duration-300"
                >
                  Login
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
                  href="/about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
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
            © 2026 Vitkash. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
