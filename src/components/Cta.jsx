export default function Cta() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 md:py-28">
      <div className="bg-ink text-paper rounded-3xl px-6 py-14 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-brandBright/20 blur-3xl" />
        <div className="relative">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight max-w-xl mx-auto">
            Your next line takes two minutes to set up.
          </h2>
          <p className="mt-4 text-paper/60 max-w-md mx-auto">
            No shop visit, no physical SIM to lose. Just your phone and a QR code.
          </p>
          <a
            href="/register"
            className="inline-block mt-8 bg-brandBright text-ink font-semibold rounded-full px-8 py-3.5 hover:bg-brandBright/90 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
