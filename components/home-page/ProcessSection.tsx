import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
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
    gsap.set(videoRef.current, { opacity: 0 });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(lineRef.current, { scaleY: 0 });
    gsap.set([step1Ref.current, step2Ref.current, step3Ref.current], {
      scale: 0,
      opacity: 0,
    });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        const tl = gsap.timeline();

        tl.to(videoRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: "power3.inOut",
          onStart: () => {
            videoElementRef.current?.play();
          },
        });

        if (titleRef.current) {
          const words = titleRef.current.querySelectorAll(".word");
          tl.to(
            words,
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.15,
              ease: "power3.out",
            },
            "-=1.2"
          );
        }

        tl.to(lineRef.current, {
          scaleY: 1,
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
      className="py-fluid-lg relative opacity-0 overflow-hidden px-4"
      style={{ visibility: "hidden" }}
    >
      <div ref={videoRef} className="absolute inset-0 w-full h-full z-0">
        <video
          loop
          muted
          playsInline
          ref={videoElementRef}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            type="video/mp4"
            src="/videos/home-page/process-section.mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10">
        <div className="mb-24 lg:mb-32">
          <h2
            ref={titleRef}
            className="font-display font-extrabold text-white leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
          >
            <span className="word inline-block">HOW</span>{" "}
            <span className="word inline-block">DUNESPARK</span>{" "}
            <span className="word inline-block">WORKS</span>
          </h2>
        </div>

        <div className="relative mx-auto px-4 max-w-3xl">
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-terracotta origin-top"
          />

          <div className="flex flex-col gap-32 md:gap-40">
            <div
              ref={step1Ref}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center mb-8 relative z-10">
                <span className="font-display font-bold text-4xl text-white">
                  {steps[0].number}
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-6xl mb-4 uppercase">
                {steps[0].title}
              </h3>
              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-md">
                {steps[0].description}
              </p>
            </div>

            <div
              ref={step2Ref}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center mb-8 relative z-10">
                <span className="font-display font-bold text-4xl text-white">
                  {steps[1].number}
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
                {steps[1].title}
              </h3>
              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-md">
                {steps[1].description}
              </p>
            </div>

            <div
              ref={step3Ref}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-terracotta flex items-center justify-center mb-8 relative z-10">
                <span className="font-display font-bold text-4xl text-white">
                  {steps[2].number}
                </span>
              </div>
              <h3 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-4 uppercase">
                {steps[2].title}
              </h3>
              <p className="text-white text-lg md:text-2xl leading-relaxed max-w-md">
                {steps[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
