import { gsap } from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";

const AboutHeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const supportingRef = useRef<HTMLParagraphElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const storyTitleRef = useRef<HTMLHeadingElement>(null);
  const storyContentRef = useRef<HTMLDivElement>(null);
  const storyImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    gsap.set(sidebarRef.current, { opacity: 0, x: -40 });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(supportingRef.current, { opacity: 0, y: 40 });
    gsap.set(heroImageRef.current, { opacity: 0, scale: 1.1 });
    gsap.set(storyTitleRef.current, { opacity: 0, y: 40 });
    gsap.set(storyContentRef.current, { opacity: 0, y: 40 });
    gsap.set(storyImageRef.current, { opacity: 0, scale: 1.1 });

    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(sidebarRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      tl.to(
        words,
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }

    tl.to(
      supportingRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.6"
    );

    tl.to(
      heroImageRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
      },
      "-=1.0"
    );

    tl.to(
      storyTitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.4"
    );

    tl.to(
      storyContentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.7"
    );

    tl.to(
      storyImageRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
      },
      "-=0.9"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-pure-white opacity-0 relative overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none opacity-20">
        <div className="cyan-glow"></div>
      </div>

      <div className="mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-[clamp(8rem,15vw,10rem)]">
          <div
            ref={sidebarRef}
            className="lg:col-span-1 flex flex-col space-y-12 border-b lg:border-b-0 lg:border-r border-terracotta/40 pb-12 lg:pb-0 lg:pr-8 mb-12 lg:mb-0"
          >
            <div className="flex flex-col space-y-6">
              <h3 className="font-display font-bold text-terracotta text-[clamp(1rem,1.5vw,1.25rem)] uppercase tracking-widest">
                ABOUT
              </h3>
              <div className="w-12 h-0.5 bg-terracotta"></div>
              <span className="font-display font-bold text-terracotta text-[clamp(4rem,6vw,5rem)] leading-none">
                01
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-start space-y-16 lg:pl-24 lg:pr-12">
            <h1
              ref={titleRef}
              className="font-display font-extrabold text-text-primary leading-tight tracking-tighter text-[clamp(2.2rem,5vw,7rem)]"
            >
              <span className="word inline-block">GROWTH</span>{" "}
              <span className="word inline-block">SHOULDN{"'"}T</span>{" "}
              <span className="word inline-block">BE</span>{" "}
              <span className="word inline-block">GUESS</span>
              <span className="word inline-block">WORK.</span>
              <span className="word inline-block">IT</span>{" "}
              <span className="word inline-block">SHOULD</span>{" "}
              <span className="word inline-block">BE</span>{" "}
              <span className="word inline-block text-terracotta">
                ENGINEERED
              </span>
              .
            </h1>

            <p
              ref={supportingRef}
              className="text-text-secondary text-[clamp(1.25rem,2vw,2rem)] leading-normal font-light max-w-3xl"
            >
              If you{"'"}re tired of juggling multiple agencies, fragmented
              strategies, and growth that feels unpredictable, you{"'"}re not
              alone. At Dunespark, we believe business growth isn{"'"}t about
              buying more services — it{"'"}s about{" "}
              <strong className="text-text-primary font-semibold">
                installing the right systems
              </strong>
              .
            </p>
          </div>

          <div
            ref={heroImageRef}
            className="lg:col-span-4 mt-16 lg:mt-0 lg:self-center"
          >
            <div className="relative w-full h-[70vh] lg:h-[80vh] overflow-hidden">
              <Image
                fill
                alt="Dunespark engineering growth systems"
                src="/images/home-page/hero-img-1.jpg"
                className="object-cover clip-diagonal-lg"
                priority
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-[clamp(8rem,15vw,10rem)] mt-[clamp(6rem,12vw,8rem)] border-t border-terracotta/20 pt-[clamp(6rem,12vw,8rem)]">
          <div className="lg:col-span-1 lg:border-r border-terracotta/40 lg:pr-8">
            <div className="flex flex-col space-y-6">
              <h3 className="font-display font-bold text-terracotta text-[clamp(1rem,1.5vw,1.25rem)] uppercase tracking-widest">
                STORY
              </h3>
              <div className="w-12 h-0.5 bg-terracotta"></div>
            </div>
          </div>

          <div
            ref={storyImageRef}
            className="lg:col-span-5 mb-16 lg:mb-0 lg:pl-24"
          >
            <div className="relative w-full h-[70vh] lg:h-[85vh] overflow-hidden">
              <Image
                fill
                alt="The story behind Dunespark"
                src="/images/home-page/promise-section.jpg"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-16">
            <h2
              ref={storyTitleRef}
              className="font-display font-bold text-terracotta text-[clamp(2rem,4vw,4.5rem)] uppercase tracking-wide leading-tight"
            >
              THE STORY BEHIND
              <br />
              DUNESPARK
            </h2>

            <div ref={storyContentRef} className="space-y-10 max-w-4xl">
              <p className="text-text-primary text-[clamp(1.125rem,1.8vw,2rem)] leading-relaxed font-light">
                Dunespark was born from frustration with the traditional growth
                model — one where businesses spent time and money chasing
                fragmented vendors and vague promises.
              </p>
              <p className="text-text-primary text-[clamp(1.125rem,1.8vw,2rem)] leading-relaxed font-light">
                Our founders envisioned a different future: One where growth is
                a{" "}
                <strong className="font-semibold text-terracotta">
                  machine you build once
                </strong>
                , that runs continuously and intelligently, where AI and
                automation work hand-in-hand with strategy and service, where
                every system installed is a step toward freedom, predictability,
                and lasting success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
