import { Target, Users, ShieldCheck, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gray-100 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gray-100 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-32 pb-24">
        <div className="text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-black/40 uppercase mb-4">
            About Us
          </span>
          <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-black">
            Turning free time into
            <span className="block text-black/40">real opportunity</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-black/60 leading-relaxed max-w-2xl mx-auto">
            NEXTEL Connect helps everyday people earn from simple social tasks,
            build valuable online skills, and turn their network into steady
            income — all from one trusted platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <Target className="w-6 h-6 text-black/50 mb-4" />
            <h3 className="font-bold text-lg text-black mb-2">Our Mission</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              To make earning online simple, transparent, and accessible to
              anyone with an internet connection — no experience required.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <Users className="w-6 h-6 text-black/50 mb-4" />
            <h3 className="font-bold text-lg text-black mb-2">Our Community</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              Over 50,000 members earn on NEXTEL Connect, supported by a growing
              network of advertisers and brands.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <ShieldCheck className="w-6 h-6 text-black/50 mb-4" />
            <h3 className="font-bold text-lg text-black mb-2">
              Trust & Safety
            </h3>
            <p className="text-sm text-black/60 leading-relaxed">
              Every task and payout is verified. We're committed to a secure,
              fair platform for both members and advertisers.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <TrendingUp className="w-6 h-6 text-black/50 mb-4" />
            <h3 className="font-bold text-lg text-black mb-2">Growth</h3>
            <p className="text-sm text-black/60 leading-relaxed">
              We've paid out over ₦100M to our members and continue to expand
              opportunities every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
