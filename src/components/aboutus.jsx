import heroVisual from "@/assets/img/hero-visual.jpeg";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-black/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gray-300/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}

        {/* SECTION 1 */}
        <div className="mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Left */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-black/10">
              <img
                src={heroVisual}
                alt="About NEXTEL"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Right */}
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-black/40">
              Our Mission
            </span>

            <h3 className="mt-4 text-3xl md:text-5xl font-bold text-black leading-tight">
              Empowering People Through Digital Innovation.
            </h3>

            <p className="mt-6 text-black/60 leading-relaxed text-lg">
              We believe technology should create opportunities for everyone.
              Our platform enables individuals and businesses to connect,
              collaborate, advertise, and grow within a trusted ecosystem.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed">
              Through innovative digital solutions, we help users unlock value,
              build stronger networks, and create sustainable earning
              opportunities in today's connected economy.
            </p>

            <div className="mt-8">
              <Link
                to="/register"
                className="
      inline-flex
      items-center
      justify-center
      bg-black
      text-white
      px-8
      py-4
      rounded-full
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
    "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="mt-28 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Left */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-black/40">
              Our Vision
            </span>

            <h3 className="mt-4 text-3xl md:text-5xl font-bold text-black leading-tight">
              A Future Where Every Connection Creates Value.
            </h3>

            <p className="mt-6 text-black/60 leading-relaxed text-lg">
              We are building a platform where meaningful connections become
              economic opportunities. By bringing businesses and users together,
              we create an environment where everyone benefits.
            </p>

            <p className="mt-4 text-black/60 leading-relaxed">
              Our vision is to become one of the most trusted digital networks,
              helping people expand their reach, grow their businesses, and
              unlock new streams of income through engagement and collaboration.
            </p>
          </div>

          {/* Image Right */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-black/10">
              <img
                src={heroVisual}
                alt="NEXTEL Vision"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
