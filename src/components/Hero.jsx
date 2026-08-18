import { Link } from "react-router-dom";
import { Users, Megaphone, Wallet, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-white"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-gray-100 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gray-100 rounded-full blur-[140px]" />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[100svh] px-5 sm:px-8 pt-28 pb-20 flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h1 className="mt-4 font-black text-[2.8rem] sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-black max-w-5xl">
          <span className="block">Turn those little pockets of free time</span>

          {/* <span className="block bg-gradient-to-r from-black via-gray-500 to-black bg-clip-text text-transparent">
            of free time
          </span> */}

          <span className="block text-black/40">into steady cash</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-[15px] sm:text-lg lg:text-xl text-black/60 leading-relaxed max-w-2xl">
          Earn by doing simple social tasks, invite friends for extra rewards,
          and build valuable online skills from one powerful platform.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md sm:max-w-none sm:w-auto">
          <Link
            to="/register.php"
            className="
              flex
              items-center
              justify-center
              bg-black
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)]
            "
          >
            Get Started
          </Link>

          <a
            href="#about"
            className="
              flex
              items-center
              justify-center
              border
              border-black/10
              bg-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:bg-gray-50
              transition-all
            "
          >
            Learn More
          </a>
        </div>

        {/* Premium Stats Card */}
        <div className="mt-10 w-full max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-3 mx-auto">
                <Users size={22} />
              </div>

              <div className="text-xl sm:text-2xl font-bold text-black">
                50K+
              </div>

              <div className="text-xs text-black/50 mt-1">Members</div>
            </div>

            <div className="p-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-3 mx-auto">
                <Megaphone size={22} />
              </div>

              <div className="text-xl sm:text-2xl font-bold text-black">
                20K+
              </div>

              <div className="text-xs text-black/50 mt-1">Advertisers</div>
            </div>

            <div className="p-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-3 mx-auto">
                <Wallet size={22} />
              </div>

              <div className="text-xl sm:text-2xl font-bold text-black">
                ₦100M+
              </div>

              <div className="text-xs text-black/50 mt-1">Payouts</div>
            </div>

            <div className="p-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-3 mx-auto">
                <Zap size={22} />
              </div>

              <div className="text-xl sm:text-2xl font-bold text-black">
                24/7
              </div>

              <div className="text-xs text-black/50 mt-1">Active</div>
            </div>
          </div>
        </div>
        {/* ================= HERO IMAGE ================= */}
        <div className="relative mt-14 sm:mt-20 flex justify-center">
          {/* Glow */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] bg-black/5 rounded-full" />
          </div>

          {/* Orbit Rings */}
          <div className="absolute w-[250px] h-[250px] sm:w-[450px] sm:h-[450px] border border-black/10 rounded-full animate-[spin_30s_linear_infinite]" />

          <div className="absolute w-[190px] h-[190px] sm:w-[350px] sm:h-[350px] border border-black/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

          {/* Floating Dot */}
          <div className="absolute top-5 left-5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-black animate-bounce" />

          <div className="absolute bottom-10 right-5 w-3 h-3 rounded-full bg-gray-400 animate-pulse" />

          {/* Main Card */}
          <div className="relative animate-float">
            <div
              className="
                w-[290px]
                sm:w-[420px]
                lg:w-[520px]
                rounded-[32px]
                border
                border-black/10
                bg-white/80
                backdrop-blur-3xl
                p-3
                sm:p-4
              "
            >
              <img
                src="/"
                alt="vitkash"
                className="
                  w-full
                  rounded-[24px]
                  object-cover
                "
              />

              <div className="mt-3 p-4 rounded-2xl border border-black/10 bg-white">
                <div className="text-xs text-black/50">Featured Collection</div>

                <div className="font-bold text-lg sm:text-xl text-black mt-1">
                  Vitkash
                </div>
              </div>
            </div>
          </div>

          {/* Earnings Card */}
          <div
            className="
              absolute
              -left-3
              sm:-left-10
              lg:-left-24
              top-10
              sm:top-16
              bg-black
              text-white
              rounded-2xl
              sm:rounded-3xl
              px-3
              sm:px-5
              py-2
              sm:py-4
              shadow-2xl
              animate-float
            "
          >
            <div className="text-[10px] sm:text-xs text-white/60">
              Daily Earnings
            </div>

            <div className="font-bold text-sm sm:text-xl">₦8,250</div>
          </div>

          {/* Referrals Card */}
          <div
            className="
              absolute
              -right-3
              sm:-right-8
              lg:-right-20
              bottom-8
              sm:bottom-10
              border
              border-black/10
              bg-white
              rounded-2xl
              sm:rounded-3xl
              px-3
              sm:px-5
              py-2
              sm:py-4
              shadow-xl
              animate-float-delay
            "
          >
            <div className="text-[10px] sm:text-xs text-black/50">
              Referrals
            </div>

            <div className="font-bold text-sm sm:text-xl text-black">1,284</div>
          </div>
        </div>
      </div>

      {/* ================= CUSTOM ANIMATIONS ================= */}
      <style>{`
        @keyframes float {
          0%,100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
