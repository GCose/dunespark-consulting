import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] py-15 pt-10 bg-pure-white">
        <div className="lg:col-span-8">
          <h1 className="font-display font-extrabold text-text-primary leading-12 md:leading-22 tracking-tight text-4xl md:text-6xl lg:text-7xl">
            INSTALL THE GROWTH INFRASTRUCTURE YOUR BUSINESS HAS BEEN MISSING
          </h1>
        </div>

        <div className="hidden lg:block lg:col-span-4" />

        <div className="hidden lg:block lg:col-span-7" />

        <div className="lg:col-span-5 flex flex-col md:flex-row items-start md:items-end md:justify-end gap-4 mt-8 lg:mt-0">
          <Link
            href="/audit"
            className="group relative block w-full md:w-auto px-10 py-5 bg-warm-sand text-cream font-medium text-center overflow-hidden transition-all duration-500 hover:shadow-lg"
          >
            <span className="font-display relative z-10 font-medium uppercase tracking-wider text-white">
              Run Free Audit
            </span>
            <div className="absolute inset-0 bg-terracotta-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>

          <Link
            href="/contact"
            className="group block w-full md:w-auto px-10 py-5 border-2 border-warm-sand text-terracotta font-medium text-center hover:bg-warm-sand hover:text-white transition-all duration-300"
          >
            <span className="font-display font-medium uppercase tracking-wider">
              Book Discovery Call
            </span>
          </Link>
        </div>
      </section>

      <section className="pb-50">
        <div className="relative w-full h-[60vh] md:h-[80vh] lg:min-h-screen">
          <Image
            fill
            priority
            className="object-cover"
            alt="Growth infrastructure"
            style={{ filter: "saturate(0.9)" }}
            src="/images/home-page/hero-bg.webp"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] pb-40 pt-20 bg-pure-white">
        <div className="hidden lg:block lg:col-span-1" />

        <div className="md:col-span-4 lg:col-span-3">
          <div className="relative aspect-3/4 overflow-hidden">
            <Image
              fill
              alt="Business growth"
              className="object-cover"
              src="/images/home-page/hero-1.webp"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-4 flex items-center px-0 md:px-8">
          <div className="space-y-8">
            <p className="text-black text-xl font-medium md:text-2xl lg:text-3xl leading-7 md:leading-10">
              You deserve a growth engine that works — effortlessly,
              intelligently, and built to scale.
            </p>
            <p className="text-black text-xl font-medium md:text-2xl lg:text-3xl leading-7 md:leading-10">
              At Dunespark Consulting, we install elegant, AI-powered growth
              systems that run quietly in the background, freeing you to focus
              on what matters most.
            </p>
            <p className="text-black text-xl font-medium md:text-2xl lg:text-3xl leading-7 md:leading-10">
              Imagine a system designed for your success — one that runs quietly
              in the background, freeing you to focus on what matters most.
            </p>
          </div>
        </div>

        <div className="md:col-span-10 md:col-start-1 lg:col-span-3 mt-12 md:mt-16 lg:mt-0 lg:pt-180">
          <div className="relative aspect-3/4 overflow-hidden">
            <Image
              fill
              alt="Tech consulting"
              className="object-cover"
              src="/images/home-page/hero-2.webp"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-1" />
      </section>
    </>
  );
};

export default HeroSection;
