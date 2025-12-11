import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "01",
      title: "Diagnose",
      description:
        "We deep-dive into your business to identify the growth systems you need most.",
    },
    {
      number: "02",
      title: "Install",
      description:
        "Our experts build and customize your systems, deploying them in under two weeks.",
    },
    {
      number: "03",
      title: "Run",
      description:
        "Your systems operate autonomously, continuously optimizing while you monitor results via real-time dashboards.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(lineRef.current, { scaleX: 0 });
    gsap.set([step1Ref.current, step2Ref.current, step3Ref.current], {
      scale: 0,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        const tl = gsap.timeline();

        if (titleRef.current) {
          const words = titleRef.current.querySelectorAll(".word");
          tl.to(words, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          });
        }

        tl.to(lineRef.current, {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.inOut",
        });

        tl.to(
          step1Ref.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=1.2"
        );

        tl.to(
          step2Ref.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.9"
        );

        tl.to(
          step3Ref.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.9"
        );

        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-fluid-lg bg-pure-white opacity-0"
      style={{ visibility: "hidden" }}
    >
      <div className="mb-24 lg:mb-32">
        <h2
          ref={titleRef}
          className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
        >
          <span className="word inline-block">HOW</span>{" "}
          <span className="word inline-block">DUNESPARK</span>{" "}
          <span className="word inline-block">WORKS</span>
        </h2>
      </div>

      <div className="relative mx-auto px-4">
        <div
          ref={lineRef}
          className="absolute top-24 left-0 right-0 h-[3px] bg-terracotta origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div
            ref={step1Ref}
            className="flex flex-col items-center text-left"
          >
            <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center mb-8 relative z-10">
              <span className="font-display font-bold text-4xl text-white">
                {steps[0].number}
              </span>
            </div>
            <h3 className="font-display font-bold text-text-primary text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
              {steps[0].title}
            </h3>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-sm">
              {steps[0].description}
            </p>
          </div>

          <div
            ref={step2Ref}
            className="flex flex-col items-center text-left"
          >
            <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center mb-8 relative z-10">
              <span className="font-display font-bold text-4xl text-white">
                {steps[1].number}
              </span>
            </div>
            <h3 className="font-display font-bold text-text-primary text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
              {steps[1].title}
            </h3>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-sm">
              {steps[1].description}
            </p>
          </div>

          <div
            ref={step3Ref}
            className="flex flex-col items-center text-left"
          >
            <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center mb-8 relative z-10">
              <span className="font-display font-bold text-4xl text-white">
                {steps[2].number}
              </span>
            </div>
            <h3 className="font-display font-bold text-text-primary text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
              {steps[2].title}
            </h3>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-sm">
              {steps[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
