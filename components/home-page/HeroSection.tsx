import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] py-15 bg-pure-white">
        <div className="col-span-7">
          <h1 className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-7xl">
            Install the Growth Infrastructure Your Business Has Been Missing
          </h1>
        </div>

        <div className="col-span-5 flex flex-col md:flex-row items-end justify-end gap-4">
          <Link
            href="/audit"
            className="group relative block px-10 py-5 bg-warm-sand text-cream font-medium text-center overflow-hidden transition-all duration-500 hover:shadow-lg"
          >
            <span className="relative z-10 text-sm uppercase tracking-wider text-white font-bold">
              Run Free Audit
            </span>
            <div className="absolute inset-0 bg-terracotta-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>

          <Link
            href="/contact"
            className="group block px-10 py-5 border-2 border-terracotta text-terracotta font-medium text-center hover:bg-terracotta hover:text-cream transition-all duration-300"
          >
            <span className="text-sm uppercase tracking-wider">
              Book Discovery Call
            </span>
          </Link>
        </div>
      </section>

      <section className="pb-22">
        <div className="relative w-full min-h-screen">
          <Image
            fill
            priority
            src="/images/home-page/hero-bg.jpg"
            className="object-cover"
            alt="Growth infrastructure"
            style={{ filter: "saturate(0.9)" }}
          />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] pb-40 pt-20 bg-pure-white">
        <div className="col-span-1" />

        <div className="col-span-3">
          <div className="relative aspect-3/4 overflow-hidden">
            <Image
              fill
              alt="Business growth"
              className="object-cover"
              src="/images/home-page/hero-1.jpg"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>

        <div className="col-span-4 flex items-center px-8">
          <div className="space-y-8">
            <p className="text-secondary text-3xl leading-8">
              You deserve a growth engine that works — effortlessly,
              intelligently, and built to scale.
            </p>
            <p className="text-secondary text-3xl leading-8">
              At Dunespark Consulting, we install elegant, AI-powered growth
              systems that run quietly in the background, freeing you to focus
              on what matters most.
            </p>
          </div>
        </div>

        <div className="col-span-3 pt-180">
          <div className="relative aspect-3/4 overflow-hidden">
            <Image
              fill
              alt="Tech consulting"
              className="object-cover"
              src="/images/home-page/hero-2.jpg"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>

        <div className="col-span-1" />
      </section>
    </>
  );
};

export default HeroSection;
