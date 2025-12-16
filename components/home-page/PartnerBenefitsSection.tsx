import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const PartnerBenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      ref: card1Ref,
      number: "01",
      title: "Fully Installed, Plug-and-Play System",
      description:
        "Custom-built for your market, ready to operate from day one.",
      gridClass: "lg:col-span-4 lg:row-span-2",
      pattern: "circuit-board",
    },
    {
      ref: card2Ref,
      number: "02",
      title: "AI-Powered Automation That Runs 24/7",
      description:
        "Your growth engine works quietly in the background, qualifying leads, preparing sales, and optimizing performance without manual effort.",
      gridClass: "lg:col-span-4 lg:row-span-2",
      pattern: "dot-matrix",
    },
    {
      ref: card3Ref,
      number: "03",
      title: "Real-Time Analytics and Dashboards",
      description:
        "See exactly how your systems are performing anytime, anywhere. No guesswork, no surprises.",
      gridClass: "lg:col-span-4 lg:row-span-4",
      pattern: "hexagonal-mesh",
    },
    {
      ref: card4Ref,
      number: "04",
      title: "White-Glove Onboarding and Support",
      description:
        "From setup to scale, we walk alongside you with personalized attention and expert guidance.",
      gridClass: "lg:col-span-8 lg:row-span-2",
      pattern: "wireframe-topology",
    },
    {
      ref: card5Ref,
      number: "05",
      title: "Ongoing System Refinement",
      description:
        "Your business evolves, and so do your systems. Continuous AI-driven optimizations keep your growth aligned with market changes.",
      gridClass: "lg:col-span-12 lg:row-span-2",
      pattern: "binary-rain",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(
      [
        card1Ref.current,
        card2Ref.current,
        card3Ref.current,
        card4Ref.current,
        card5Ref.current,
      ],
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const words = titleRef.current?.querySelectorAll(".word") || [];
          gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          });
          titleObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);

    const cardsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(
            [
              card1Ref.current,
              card2Ref.current,
              card3Ref.current,
              card4Ref.current,
              card5Ref.current,
            ],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.4,
              stagger: 0.15,
              ease: "power3.out",
            }
          );
          cardsObserver.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (card1Ref.current) cardsObserver.observe(card1Ref.current);

    return () => {
      titleObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-fluid-lg bg-pure-white opacity-0 px-4 relative overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="cyan-glow"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-24 lg:mb-32">
          <h2
            ref={titleRef}
            className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)] max-w-[1400px]"
          >
            <span className="word inline-block">WHAT</span>{" "}
            <span className="word inline-block">YOU</span>{" "}
            <span className="word inline-block">RECEIVE</span>{" "}
            <span className="word inline-block">WHEN</span>{" "}
            <span className="word inline-block">YOU</span>{" "}
            <span className="word inline-block">PARTNER</span>{" "}
            <span className="word inline-block">WITH</span>{" "}
            <span className="word inline-block">DUNESPARK</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[minmax(200px,auto)] gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={benefit.ref}
              className={`${benefit.gridClass} group relative overflow-hidden clip-diagonal-lg border-2 border-terracotta/30 hover:border-terracotta transition-all duration-500`}
            >
              <div
                className={`absolute inset-0 ${benefit.pattern} opacity-20`}
              />

              {/* <div className="absolute inset-0 bg-linear-to-br from-terracotta/10 via-transparent to-terracotta-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" /> */}

              <div className="relative h-full p-8 lg:p-12 flex flex-col justify-between backdrop-blur-sm bg-pure-white/10">
                <div>
                  <div className="font-display font-bold text-terracotta text-6xl lg:text-7xl mb-6 leading-none">
                    {benefit.number}
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-lg md:text-xl lg:text-2xl leading-relaxed">
                    {benefit.description}
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
    </section>
  );
};

export default PartnerBenefitsSection;
