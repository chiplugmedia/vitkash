import { PLANS } from '@/lib/constants';

export default function Plans() {
  return (
    <section id="plans" className="bg-inkSoft text-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-brandBright">Simple pricing</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-3 tracking-tight">
              Plans that don't punish you for using your phone.
            </h2>
          </div>
          <p className="text-paper/60 text-sm max-w-xs">
            No contracts, no hidden charges. Cancel or switch plans anytime from the app.
          </p>
        </div>

        <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PLANS.map((plan) =>
            plan.featured ? (
              <div
                key={plan.id}
                className="bg-brandBright text-ink rounded-3xl p-8 border border-brandBright relative flex flex-col md:-translate-y-3 shadow-2xl"
              >
                <span className="absolute top-6 right-6 sm:right-8 text-xs font-mono uppercase tracking-widest bg-ink text-brandBright rounded-full px-3 py-1">
                  Most popular
                </span>
                <h3 className="font-display font-semibold text-lg">{plan.name}</h3>
                <p className="text-ink/60 text-sm mt-1">{plan.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-mono font-semibold text-4xl">{plan.price}</span>
                  <span className="text-ink/60 text-sm">{plan.cadence}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-ink/80 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">✓ {f}</li>
                  ))}
                </ul>
                <a
                  href="/register"
                  className="mt-8 text-center bg-ink text-paper rounded-full py-3 font-semibold hover:bg-inkSoft transition"
                >
                  Choose {plan.name}
                </a>
              </div>
            ) : (
              <div key={plan.id} className="bg-ink rounded-3xl p-8 border border-paper/10 flex flex-col">
                <h3 className="font-display font-semibold text-lg">{plan.name}</h3>
                <p className="text-paper/50 text-sm mt-1">{plan.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-mono font-semibold text-4xl">{plan.price}</span>
                  <span className="text-paper/50 text-sm">{plan.cadence}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-paper/70 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brandBright">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/register"
                  className="mt-8 text-center border border-paper/25 rounded-full py-3 font-semibold hover:bg-paper/10 transition"
                >
                  Choose {plan.name}
                </a>
              </div>
            )
          )}
        </div>

        <div className="mt-8 text-center text-sm text-paper/50">
          Give a friend ₦500 airtime when they join with your code — they get ₦500 too.
        </div>
      </div>
    </section>
  );
}
