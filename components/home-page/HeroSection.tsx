import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-beige">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />

        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(245, 241, 232, 0.9) 0%, rgba(237, 230, 214, 0.85) 100%)",
          }}
        />

        <div className="container-editorial relative z-10">
          <div className="grid-editorial items-center min-h-[80vh]">
            <div className="col-span-1" />

            <div className="col-span-10">
              <h1
                className="font-display font-bold text-text-primary mb-8 text-balance"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                }}
              >
                Install the Growth Infrastructure Your Business Has Been Missing
              </h1>

              <p
                className="text-text-secondary max-w-3xl mx-auto text-center"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.728rem)",
                  lineHeight: "1.6",
                  marginTop: "2rem",
                }}
              >
                You deserve a growth engine that works — effortlessly,
                intelligently, and built to scale.
              </p>
            </div>

            <div className="col-span-1" />
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-text-tertiary font-medium">
              Scroll to explore
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-text-tertiary to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-fluid-xl bg-cream">
        <div className="container-editorial">
          <div className="grid-editorial items-center gap-y-16">
            <div className="col-span-7 relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/hero-proposition.jpg"
                  alt="Growth infrastructure visualization"
                  fill
                  className="object-cover"
                  style={{
                    filter: "saturate(0.85) contrast(1.05)",
                  }}
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-transparent mix-blend-multiply" />
              </div>

              <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-warm-sand/30 -z-10" />
            </div>

            <div className="col-span-5 pl-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p
                    className="text-text-primary font-display leading-snug"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.074rem)",
                      lineHeight: "1.4",
                    }}
                  >
                    At Dunespark Consulting, we don't sell hours or vague
                    strategies.
                  </p>

                  <p className="text-text-secondary leading-relaxed text-lg">
                    We{" "}
                    <strong className="font-semibold text-text-primary">
                      install elegant, AI-powered growth systems
                    </strong>{" "}
                    that generate leads, close deals, and grow your business on
                    autopilot.
                  </p>

                  <p className="text-text-secondary leading-relaxed text-lg">
                    Imagine a system designed for your success — one that runs
                    quietly in the background, freeing you to focus on what
                    matters most.
                  </p>
                </div>

                <div className="pt-6 flex flex-col gap-4">
                  <Link
                    href="/audit"
                    className="group relative px-10 py-5 bg-terracotta text-cream font-medium text-center overflow-hidden transition-all duration-500 hover:shadow-lg"
                  >
                    <span className="relative z-10 text-sm uppercase tracking-wider">
                      Run Your Free Growth Audit
                    </span>
                    <div className="absolute inset-0 bg-terracotta-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group px-10 py-5 border-2 border-terracotta text-terracotta font-medium text-center hover:bg-terracotta hover:text-cream transition-all duration-300"
                  >
                    <span className="text-sm uppercase tracking-wider">
                      Book a Discovery Call
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
