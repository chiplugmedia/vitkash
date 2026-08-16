import { Link } from "react-router-dom";

const STEPS = [
  {
    number: "01",
    title: "Register for Free",
    body: "Create your account in just a few steps and access our amazing features within seconds.",
  },
  {
    number: "02",
    title: "Choose Package",
    body: "Once registered, navigate to your dashboard and select a package to browse and connect with our network of verified eSIM retailers.",
  },
  {
    number: "03",
    title: "Connect, Grow & Earn",
    body: "Launch targeted ads, connect with verified users, and let our users make every ad worthwhile.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-black/5 rounded-full blur-[100px]" />

        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gray-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white text-[11px] uppercase tracking-[0.25em] text-black/60">
            HOW IT WORKS
          </span>

          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Start in Minutes.
            <br />
            <span className="text-black/40">Grow Without Limits.</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-black/60 max-w-xl mx-auto leading-relaxed">
            Join a modern digital ecosystem built to help you connect,
            advertise, expand your reach, and unlock new earning opportunities.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                border-black/10
                bg-white
                p-6
                shadow-sm
                animate-[fadeInUp_0.8s_ease-out]
              "
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Number */}
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-base font-bold">
                {step.number}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-black">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-black/60 leading-relaxed">
                {step.body}
              </p>

              <div className="mt-5 h-px bg-black/10" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
