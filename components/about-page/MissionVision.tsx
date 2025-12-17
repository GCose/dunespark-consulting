import { gsap } from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";

const MissionVisionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const missionImageRef = useRef<HTMLDivElement>(null);
  const missionContentRef = useRef<HTMLDivElement>(null);
  const visionContentRef = useRef<HTMLDivElement>(null);
  const visionImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    gsap.set(
      [
        sidebarRef.current,
        missionImageRef.current,
        missionContentRef.current,
        visionContentRef.current,
        visionImageRef.current,
      ],
      {
        opacity: 0,
        y: 80,
      }
    );

    gsap.set([missionImageRef.current, visionImageRef.current], {
      scale: 1.1,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline();

          tl.to(sidebarRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          });

          tl.to(
            missionImageRef.current,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.6,
              ease: "power3.out",
            },
            "-=0.8"
          );

          tl.to(
            missionContentRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: "power3.out",
            },
            "-=1.0"
          );

          tl.to(
            visionContentRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1.4,
              ease: "power3.out",
            },
            "-=0.8"
          );

          tl.to(
            visionImageRef.current,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.6,
              ease: "power3.out",
            },
            "-=1.0"
          );

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-pure-white opacity-0 border-t border-terracotta/20"
      style={{ visibility: "hidden" }}
    >
      <div className="max-w-editorial mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-[clamp(8rem,15vw,10rem)] pb-[clamp(6rem,12vw,8rem)]">
          <div
            ref={sidebarRef}
            className="lg:col-span-1 flex flex-col space-y-12 border-b lg:border-b-0 lg:border-r border-terracotta/40 pb-12 lg:pb-0 lg:pr-8 mb-12 lg:mb-0"
          >
            <div className="flex flex-col space-y-6">
              <h3 className="font-display font-bold text-terracotta text-[clamp(1rem,1.5vw,1.25rem)] uppercase tracking-widest">
                MISSION
              </h3>
              <div className="w-12 h-0.5 bg-terracotta"></div>
              <span className="font-display font-bold text-terracotta text-[clamp(4rem,6vw,5rem)] leading-none">
                02
              </span>
            </div>
          </div>

          <div
            ref={missionImageRef}
            className="lg:col-span-5 mb-16 lg:mb-0 lg:pl-24 lg:pr-8"
          >
            <div className="relative w-full h-[75vh] lg:h-[90vh] overflow-hidden">
              <Image
                fill
                alt="Our mission at Dunespark"
                src="/images/about-page/mission.jpg"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>

          <div
            ref={missionContentRef}
            className="lg:col-span-6 flex flex-col justify-center space-y-12 lg:pl-12"
          >
            <h2 className="font-display font-bold text-text-primary text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.95] tracking-tight">
              YOUR GROWTH, OUR COMMITMENT
            </h2>

            <div className="space-y-8 max-w-2xl">
              <p className="text-text-secondary text-[clamp(1.125rem,1.8vw,2rem)] leading-relaxed font-light">
                Your growth challenges are not just problems — they{"'"}re our
                mission to solve.
              </p>

              <p className="text-text-primary text-[clamp(1.125rem,1.8vw,2rem)] leading-relaxed font-light">
                We design and install{" "}
                <strong className="font-semibold text-terracotta">
                  custom AI-powered growth infrastructures
                </strong>{" "}
                that work seamlessly behind the scenes, generating leads,
                accelerating sales, and scaling your revenue with precision.
              </p>
            </div>

            <div className="border-t border-terracotta/40 pt-12 space-y-8 max-w-2xl">
              <h3 className="font-display font-bold text-terracotta text-[clamp(1.5rem,2.5vw,2rem)] uppercase tracking-wide">
                OUR PROMISE
              </h3>
              <div className="space-y-6">
                <p className="text-text-primary text-[clamp(1.25rem,2vw,2.5rem)] font-light leading-tight">
                  Replace{" "}
                  <span className="text-terracotta font-semibold">chaos</span>{" "}
                  with{" "}
                  <span className="text-terracotta font-semibold">clarity</span>
                </p>
                <p className="text-text-primary text-[clamp(1.25rem,2vw,2.5rem)] font-light leading-tight">
                  <span className="text-terracotta font-semibold">
                    Complexity
                  </span>{" "}
                  with{" "}
                  <span className="text-terracotta font-semibold">
                    simplicity
                  </span>
                </p>
                <p className="text-text-primary text-[clamp(1.25rem,2vw,2.5rem)] font-light leading-tight">
                  <span className="text-terracotta font-semibold">
                    Guesswork
                  </span>{" "}
                  with{" "}
                  <span className="text-terracotta font-semibold">
                    growth that compounds
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-[clamp(6rem,12vw,8rem)] border-t border-terracotta/20">
          <div className="lg:col-span-1 lg:border-r border-terracotta/40 lg:pr-8">
            <div className="flex flex-col space-y-6">
              <h3 className="font-display font-bold text-terracotta text-[clamp(1rem,1.5vw,1.25rem)] uppercase tracking-widest">
                VISION
              </h3>
              <div className="w-12 h-0.5 bg-terracotta"></div>
            </div>
          </div>

          <div
            ref={visionContentRef}
            className="lg:col-span-5 flex flex-col justify-center space-y-12 lg:pl-24 lg:pr-12 mb-16 lg:mb-0"
          >
            <h2 className="font-display font-bold text-text-primary text-[clamp(2.5rem,5vw,4.5rem)] uppercase leading-[0.95] tracking-tight">
              THE FUTURE OF GROWTH, TODAY
            </h2>

            <div className="space-y-10 max-w-2xl">
              <p className="text-text-secondary text-[clamp(1.125rem,1.8vw,2rem)] leading-relaxed font-light">
                We aim to be the{" "}
                <strong className="font-semibold text-terracotta">
                  most trusted growth partner in the UAE and MENA region
                </strong>{" "}
                — setting the standard for how modern businesses grow.
              </p>

              <p className="text-text-primary text-[clamp(1.125rem,1.8vw,2rem)] leading-relaxed font-light">
                By pioneering{" "}
                <strong className="font-semibold text-terracotta">
                  AI-driven, fully integrated growth systems
                </strong>
                , we help businesses unlock exponential revenue and scalable
                success — not just in the next quarter, but for years to come.
              </p>
            </div>
          </div>

          <div ref={visionImageRef} className="lg:col-span-6 lg:pl-8">
            <div className="relative w-full h-[75vh] lg:h-[90vh] overflow-hidden">
              <Image
                fill
                alt="The future of growth at Dunespark"
                src="/images/about-page/vision.jpg"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
