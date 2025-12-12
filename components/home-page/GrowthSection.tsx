import { gsap } from "gsap";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLottie } from "lottie-react";
import confettiAnimation from "@/public/lotties/confetti.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GrowthEcosystemSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stackContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const confettiRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lastProgress = useRef(0);
  const confettiPlayed = useRef(false);

  const {
    View: ConfettiView,
    play: playConfetti,
    goToAndPlay,
  } = useLottie({
    animationData: confettiAnimation,
    loop: false,
    autoplay: false,
  });

  const cards = [
    {
      ref: card1Ref,
      title: "KAIRO",
      subtitle: "Your Automated Growth Audit",
      description:
        "Turn cold, uninterested visitors into qualified, warm calls with an AI-powered audit funnel. Kairo asks the right questions, delivers instant value, and filters prospects — so your sales team spends time on true buyers.",
    },
    {
      ref: card2Ref,
      title: "AIRO",
      subtitle: "Your AI Sales Prep Engine",
      description:
        "Arm your sales team with AI-driven insights before every call. Airo analyzes prospects, competitors, objections, and more — so your team closes with confidence and speed.",
    },
    {
      ref: card3Ref,
      title: "ONBOARD",
      subtitle: "Seamless Client Delivery",
      description:
        "Deliver an onboarding experience that wows clients and saves your time — fully automated and customized.",
    },
    {
      ref: card4Ref,
      title: "NURTURE & RETAIN",
      subtitle: "Continuous Revenue Growth",
      description:
        "Keep leads and clients engaged with smart workflows that increase lifetime value and reduce churn — silently working in the background.",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(
      [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current],
      {
        position: "absolute",
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        width: "100%",
      }
    );

    gsap.set([card2Ref.current, card3Ref.current, card4Ref.current], {
      opacity: 0,
      scale: 0.9,
      y: "+=200",
    });

    gsap.set(card1Ref.current, {
      opacity: 1,
      scale: 1,
    });

    gsap.set(confettiRef.current, { opacity: 0 });
    gsap.set(ctaRef.current, { opacity: 0, y: 50 });

    const titleObserver = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        if (titleRef.current) {
          const words = titleRef.current.querySelectorAll(".word");
          gsap.to(words, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          });
        }

        titleObserver.disconnect();
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stackContainerRef.current,
        start: "top top",
        end: "+=250%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.5) {
            confettiPlayed.current = false;
            lastProgress.current = progress;
          } else if (
            progress > 0.85 &&
            lastProgress.current <= 0.85 &&
            !confettiPlayed.current
          ) {
            goToAndPlay(0, true);
            confettiPlayed.current = true;
            lastProgress.current = progress;
          } else {
            lastProgress.current = progress;
          }
        },
      },
    });

    tl.to(card1Ref.current, {
      y: "-50%",
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out",
    })
      .to(
        card1Ref.current,
        {
          scale: 0.95,
          opacity: 0.7,
          y: "-=70",
          duration: 1,
          ease: "power3.inOut",
        },
        "+=0.3"
      )
      .to(
        card2Ref.current,
        {
          y: "-50%",
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        [card1Ref.current, card2Ref.current],
        {
          scale: 0.92,
          opacity: 0.6,
          y: "-=90",
          duration: 1,
          ease: "power3.inOut",
        },
        "+=0.3"
      )
      .to(
        card3Ref.current,
        {
          y: "-50%",
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        [card1Ref.current, card2Ref.current, card3Ref.current],
        {
          scale: 0.9,
          opacity: 0.5,
          y: "-=110",
          duration: 1,
          ease: "power3.inOut",
        },
        "+=0.3"
      )
      .to(
        card4Ref.current,
        {
          y: "-50%",
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )
      .to(
        confettiRef.current,
        {
          opacity: 1,
          duration: 0.3,
        },
        "+=0.3"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.3"
      );

    return () => {
      titleObserver.disconnect();
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [playConfetti]);

  const GeometricShape = ({ index }: { index: number }) => {
    const shapes = [
      <svg
        key="shape1"
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
        />
        <polygon
          points="100,40 160,160 40,160"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.6"
        />
      </svg>,
      <svg
        key="shape2"
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
          transform="rotate(45 100 100)"
        />
        <circle
          cx="100"
          cy="100"
          r="50"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.4"
        />
      </svg>,
      <svg
        key="shape3"
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="100,30 170,85 170,145 100,200 30,145 30,85"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
        <line
          x1="100"
          y1="30"
          x2="100"
          y2="200"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>,
      <svg
        key="shape4"
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100,40 L150,80 L150,140 L100,180 L50,140 L50,80 Z"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
        <circle
          cx="100"
          cy="110"
          r="60"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>,
    ];

    return shapes[index];
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-fluid-lg md:py-fluid-xl bg-pure-white opacity-0 overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      <div
        ref={confettiRef}
        className="fixed inset-0 w-screen h-screen pointer-events-none z-50"
      >
        {ConfettiView}
      </div>

      <div className="mb-24 lg:mb-32">
        <h2
          ref={titleRef}
          className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
        >
          <span className="word inline-block">DUNESPARK</span>{" "}
          <span className="word inline-block">GROWTH</span>{" "}
          <span className="word inline-block">ECOSYSTEM</span>{" "}
          <span className="word inline-block">—</span>{" "}
          <span className="word inline-block">THE</span>{" "}
          <span className="word inline-block">SYSTEMS</span>{" "}
          <span className="word inline-block">THAT</span>{" "}
          <span className="word inline-block">DRIVE</span>{" "}
          <span className="word inline-block">YOUR</span>{" "}
          <span className="word inline-block">REVENUE</span>
        </h2>
      </div>

      <div className="flex justify-end mb-16 lg:mb-24">
        <div className="max-w-2xl">
          <p className="text-text-primary text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-right">
            Our core systems work together — or independently — to address every
            phase of your growth.
          </p>
        </div>
      </div>

      <div
        ref={stackContainerRef}
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="w-full max-w-5xl mx-auto px-4 relative h-[70vh]">
          {cards.map((card, index) => (
            <div key={index} ref={card.ref}>
              <div
                className={`circuit-board clip-diagonal-lg bg-cream border border-terracotta p-12 lg:p-16 min-h-[70vh] flex flex-col relative`}
              >
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-terracotta text-[clamp(2rem,5vw,4rem)] leading-tight">
                      {card.title}
                    </h3>
                    <h4 className="font-display font-semibold text-text-primary text-[clamp(1.5rem,3vw,2.5rem)] leading-tight">
                      {card.subtitle}
                    </h4>
                  </div>
                  <p className="text-text-secondary text-xl md:text-2xl leading-relaxed max-w-3xl">
                    {card.description}
                  </p>
                </div>

                <div className="absolute bottom-12 right-12 w-48 h-48 lg:w-64 lg:h-64 text-terracotta/30">
                  <GeometricShape index={index} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={ctaRef}
        className="flex flex-col md:flex-row justify-center items-start gap-4"
      >
        <Link
          href="/contact"
          className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand hover:bg-white hover:text-terracotta font-medium text-center bg-warm-sand text-white transition-all duration-300"
        >
          <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
            Explore Our Systems
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
  );
};

export default GrowthEcosystemSection;
