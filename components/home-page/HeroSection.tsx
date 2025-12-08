import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="pb-15 bg-pure-white">
        <h1 className="font-display font-extrabold text-text-primary md:leading-tight tracking-tight text-[clamp(2.2rem,5vw,7rem)]">
          <span className="">INSTALL THE GROWTH INFRASTRUCTURE</span>
          <br />
          YOUR BUSINESS HAS BEEN MISSING
        </h1>

        <div className="relative w-full h-screen mt-10">
          <Image
            fill
            priority
            alt="Growth infrastructure"
            src="/images/home-page/hero.jpg"
            className="object-cover clip-diagonal-sm"
          />
        </div>

        <div className="mx-auto mt-10 flex flex-col md:flex-row items-start md:items-end md:justify-end gap-4">
          <Link
            href="/contact"
            className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand hover:bg-white hover:text-terracotta font-medium text-center bg-warm-sand text-white transition-all duration-300"
          >
            <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
              Run Free Audit
            </span>
          </Link>

          <Link
            href="/contact"
            className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand text-terracotta font-medium text-center hover:bg-warm-sand hover:text-white transition-all duration-300"
          >
            <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
              Book Discovery Call
            </span>
          </Link>
        </div>
      </section>

      <section className="mt-20 md:mt-50 relative grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] bg-pure-white">
        <div className="hidden lg:block absolute inset-y-0 left-0 w-px bg-gray-600" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-px bg-gray-600" />

        <div className="md:col-span-4 lg:col-span-4 lg:col-start-1 border-l border-r border-gray-300">
          <div className="relative aspect-3/4 overflow-hidden">
            <Image
              fill
              alt="Business growth"
              src="/images/home-page/hero-1.webp"
              style={{ filter: "saturate(0.85)" }}
              className="object-cover clip-diagonal-lg"
            />
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-5 lg:col-start-5 flex items-center px-0">
          <div className="space-y-18">
            <p className="font-body text-black font-normal text-[clamp(1.3rem,5vw,2rem)] leading-7 md:leading-relaxed">
              You deserve a growth engine that works, effortlessly,
              intelligently, and built to scale.
            </p>
            <p className="font-body text-black font-normal text-[clamp(1.3rem,5vw,2rem)] leading-7 md:leading-relaxed">
              At Dunespark Consulting, we install elegant, AI-powered growth
              systems that run quietly in the background, freeing you to focus
              on what matters most.
            </p>
            <p className="font-body text-black font-normal text-[clamp(1.3rem,5vw,2rem)] leading-7 md:leading-relaxed">
              Imagine a system designed for your success , one that runs quietly
              in the background, freeing you to focus on what matters most.
            </p>
          </div>
        </div>

        <div className="md:col-span-10 md:col-start-1 lg:col-span-4 lg:col-start-10 mt-12 border-l border-r border-gray-300 md:mt-16 lg:mt-0 lg:pt-280">
          <div className="relative aspect-3/4 overflow-hidden">
            <Image
              fill
              alt="Tech consulting"
              className="object-cover clip-diagonal-lg"
              src="/images/home-page/hero-2.webp"
              style={{ filter: "saturate(0.85)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
