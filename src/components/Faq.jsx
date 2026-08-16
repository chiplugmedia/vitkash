const FAQS = [
  {
    q: "What is Nextel Connect?",
    a: "Nextel Connect is a licensed virtual telecom operator that lets Nigerians hold an eSIM and manage contacts on partner carrier networks. The platform offers 7 activity areas including call activity tracking, network transfers, airtime rewards, ATM card access, and secure digital services.",
  },
  {
    q: "How much does membership cost?",
    a: "Choose any plan that suits your needs. Membership requires a one-time payment with no recurring fees, hidden charges, or automatic renewals.",
  },
  {
    q: "What happens if I don't renew my plan?",
    a: "Your line remains active for 7 days in essentials mode, allowing you to receive calls and top up before the service pauses.",
  },
  {
    q: "How does the referral credit work?",
    a: "Share your referral code with friends. Once they activate a paid plan, both of you receive a reward as a thank-you bonus.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black text-white py-16 md:py-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[11px] uppercase tracking-[0.25em] text-white/60">
            FAQ
          </span>

          <h2 className="mt-4 font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Frequently Asked
            <br />
            <span className="text-white/50">Questions</span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-white/60 max-w-xl mx-auto">
            Everything you need to know about Nextel Connect, membership,
            rewards, and how the platform works.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mt-12 grid lg:grid-cols-2 gap-4">
          {FAQS.map((item, index) => (
            <details
              key={item.q}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                overflow-hidden
                transition-all
                duration-300
              "
            >
              <summary className="list-none cursor-pointer p-5 md:p-6">
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div
                    className="
                      flex-shrink-0
                      w-11
                      h-11
                      rounded-xl
                      bg-white
                      text-black
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-sm
                    "
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base md:text-lg font-semibold">
                        {item.q}
                      </h3>

                      <div
                        className="
                          text-lg
                          text-white/50
                          transition-transform
                          duration-300
                          group-open:rotate-45
                        "
                      >
                        +
                      </div>
                    </div>

                    <div
                      className="
                        grid
                        transition-all
                        duration-500
                        ease-in-out
                        grid-rows-[0fr]
                        group-open:grid-rows-[1fr]
                      "
                    >
                      <div className="overflow-hidden">
                        <p className="pt-3 text-sm text-white/60 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </summary>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
