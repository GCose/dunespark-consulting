import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const DifferenceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const autoHoverTimeline = useRef<gsap.core.Timeline | null>(null);

  const differentiators = [
    {
      ref: card1Ref,
      number: "01",
      title: "AI-Powered, Not AI-Added",
      description:
        "Our systems are built around AI from day one — not added as an afterthought. This means your growth engine adapts, learns, and evolves in real time to stay ahead of your market.",
      gridClass: "lg:col-span-6 lg:row-span-2",
      pattern: "circuit-board",
    },
    {
      ref: card2Ref,
      number: "02",
      title: "A Fully Integrated Growth Ecosystem",
      description:
        "We don't deliver disconnected services. We create a cohesive growth infrastructure that aligns marketing, sales, onboarding, and retention into one unstoppable machine.",
      gridClass: "lg:col-span-6 lg:row-span-2",
      pattern: "hexagonal-mesh",
    },
    {
      ref: card3Ref,
      number: "03",
      title: "We Think Like Growth Operators, Not Vendors",
      description:
        "Your success is our success. We become a seamless extension of your team — committed to driving tangible, measurable growth and ROI.",
      gridClass: "lg:col-span-6 lg:row-span-2",
      pattern: "wireframe-topology",
    },
    {
      ref: card4Ref,
      number: "04",
      title: "Boutique Experience with Enterprise-Grade Precision",
      description:
        "Every client receives personalized attention and a white-glove service experience — with the precision and discipline of a world-class engineering team.",
      gridClass: "lg:col-span-6 lg:row-span-2",
      pattern: "dot-matrix",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    gsap.set(sidebarRef.current, { opacity: 0, x: -40 });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(
      [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current],
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      }
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline();

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
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
              },
              "-=0.6"
            );
          }

          tl.to(
            [
              card1Ref.current,
              card2Ref.current,
              card3Ref.current,
              card4Ref.current,
            ],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.4,
              stagger: 0.15,
              ease: "power3.out",
            },
            "-=0.8"
          );

          tl.call(() => {
            startAutoHover();
          });

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const startAutoHover = () => {
      const cards = [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
      ];

      autoHoverTimeline.current = gsap.timeline({ repeat: -1, delay: 1 });

      cards.forEach((card) => {
        if (card) {
          const hoverElement = card.querySelector(".hover-effect");

          autoHoverTimeline
            .current!.to(hoverElement, {
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
            })
            .to(
              hoverElement,
              {
                opacity: 0,
                duration: 0.7,
                ease: "power3.out",
              },
              "+=2"
            );
        }
      });
    };

    const handleMouseEnter = () => {
      if (autoHoverTimeline.current) {
        autoHoverTimeline.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (autoHoverTimeline.current) {
        autoHoverTimeline.current.resume();
      }
    };

    [card1Ref, card2Ref, card3Ref, card4Ref].forEach((cardRef) => {
      if (cardRef.current) {
        cardRef.current.addEventListener("mouseenter", handleMouseEnter);
        cardRef.current.addEventListener("mouseleave", handleMouseLeave);
      }
    });

    return () => {
      observer.disconnect();
      if (autoHoverTimeline.current) {
        autoHoverTimeline.current.kill();
      }
      [card1Ref, card2Ref, card3Ref, card4Ref].forEach((cardRef) => {
        if (cardRef.current) {
          cardRef.current.removeEventListener("mouseenter", handleMouseEnter);
          cardRef.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-pure-white opacity-0 overflow-hidden border-t border-terracotta/20"
      style={{ visibility: "hidden" }}
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home-page/hero-section2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="max-w-editorial mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-[clamp(8rem,15vw,10rem)]">
          <div
            ref={sidebarRef}
            className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-terracotta/40 pb-12 lg:pb-0 lg:pr-8 mb-12 lg:mb-0"
          >
            <div className="flex flex-col space-y-6">
              <h3 className="font-display font-bold text-terracotta text-[clamp(1rem,1.5vw,1.25rem)] uppercase tracking-widest">
                DIFFERENT
              </h3>
              <div className="w-12 h-0.5 bg-terracotta"></div>
              <span className="font-display font-bold text-terracotta text-[clamp(4rem,6vw,5rem)] leading-none">
                03
              </span>
            </div>
          </div>

          <div className="lg:col-span-11">
            <h2
              ref={titleRef}
              className="font-display font-extrabold text-white leading-tight tracking-tighter text-[clamp(2.2rem,5vw,6rem)] mb-24 lg:mb-32"
            >
              <span className="word inline-block">HOW</span>{" "}
              <span className="word inline-block">WE{"'"}RE</span>{" "}
              <span className="word inline-block text-terracotta">
                DIFFERENT
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[minmax(200px,auto)] gap-6 lg:gap-8 pb-[clamp(8rem,15vw,10rem)]">
              {differentiators.map((diff, index) => (
                <div
                  key={index}
                  ref={diff.ref}
                  className={`${diff.gridClass} group relative overflow-hidden clip-diagonal-lg border-2 border-terracotta/30 hover:border-terracotta transition-all duration-500`}
                >
                  <div
                    className={`absolute inset-0 ${diff.pattern} opacity-20`}
                  />

                  <div className="hover-effect absolute inset-0 bg-linear-to-br from-terracotta/10 via-transparent to-terracotta-dark/70 opacity-0 group-hover:opacity-100! transition-opacity duration-700" />

                  <div className="relative h-full p-8 lg:p-12 flex flex-col justify-between backdrop-blur-sm bg-transparent">
                    <div>
                      <div className="font-display font-bold text-terracotta text-6xl lg:text-7xl mb-6 leading-none">
                        {diff.number}
                      </div>
                      <h3 className="font-display font-bold text-text-primary text-[clamp(1.5rem,2.5vw,2rem)] leading-tight mb-6">
                        {diff.title}
                      </h3>
                      <p className="text-text-secondary text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed">
                        {diff.description}
                      </p>
                    </div>

                    <div className="absolute bottom-8 right-8 w-32 h-32 lg:w-40 lg:h-40 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full text-terracotta"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="100"
                          cy="100"
                          r="80"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M100,40 L150,80 L150,140 L100,180 L50,140 L50,80 Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
