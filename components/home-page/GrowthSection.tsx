import { gsap } from "gsap";
import Link from "next/link";
import { useLottie } from "lottie-react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import moneyAnimation from "@/public/lotties/money.json";
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

  const { View: ConfettiView, play: playConfetti } = useLottie({
    animationData: confettiAnimation,
    loop: false,
    autoplay: false,
  });

  const { View: Money1View, play: playMoney1 } = useLottie({
    animationData: moneyAnimation,
    loop: true,
    autoplay: false,
  });

  const { View: Money2View, play: playMoney2 } = useLottie({
    animationData: moneyAnimation,
    loop: true,
    autoplay: false,
  });

  const { View: Money3View, play: playMoney3 } = useLottie({
    animationData: moneyAnimation,
    loop: true,
    autoplay: false,
  });

  const { View: Money4View, play: playMoney4 } = useLottie({
    animationData: moneyAnimation,
    loop: true,
    autoplay: false,
  });

  const cards = [
    {
      ref: card1Ref,
      title: "KAIRO",
      subtitle: "Your Automated Growth Audit",
      description:
        "Turn cold, uninterested visitors into qualified, warm calls with an AI-powered audit funnel. Kairo asks the right questions, delivers instant value, and filters prospects — so your sales team spends time on true buyers.",
      gradient: "from-terracotta/40 to-warm-sand/50",
      moneyView: Money1View,
    },
    {
      ref: card2Ref,
      title: "AIRO",
      subtitle: "Your AI Sales Prep Engine",
      description:
        "Arm your sales team with AI-driven insights before every call. Airo analyzes prospects, competitors, objections, and more — so your team closes with confidence and speed.",
      gradient: "from-deep-clay/40 to-terracotta-dark/50",
      moneyView: Money2View,
    },
    {
      ref: card3Ref,
      title: "ONBOARD",
      subtitle: "Seamless Client Delivery",
      description:
        "Deliver an onboarding experience that wows clients and saves your time — fully automated and customized.",
      gradient: "from-warm-sand/40 to-terracotta-light/50",
      moneyView: Money3View,
    },
    {
      ref: card4Ref,
      title: "NURTURE & RETAIN",
      subtitle: "Continuous Revenue Growth",
      description:
        "Keep leads and clients engaged with smart workflows that increase lifetime value and reduce churn — silently working in the background.",
      gradient: "from-terracotta-dark/40 to-burnt-sienna/50",
      moneyView: Money4View,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set([card2Ref.current, card3Ref.current, card4Ref.current], {
      y: 200,
      opacity: 0,
      scale: 0.9,
    });

    gsap.set(card1Ref.current, {
      y: 0,
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
        end: () => {
          const isMobile = window.innerWidth < 768;
          const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
          if (isMobile) return "+=450%";
          if (isTablet) return "+=350%";
          return "+=250%";
        },
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(card1Ref.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out",
      onStart: () => playMoney1(),
    })
      .to(
        card1Ref.current,
        {
          scale: 0.96,
          opacity: 0.85,
          y: -15,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "+=0.2"
      )
      .to(
        card2Ref.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          onStart: () => playMoney2(),
        },
        "-=0.5"
      )
      .to(
        [card1Ref.current, card2Ref.current],
        {
          scale: 0.94,
          opacity: 0.8,
          y: -30,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "+=0.2"
      )
      .to(
        card3Ref.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          onStart: () => playMoney3(),
        },
        "-=0.5"
      )
      .to(
        [card1Ref.current, card2Ref.current, card3Ref.current],
        {
          scale: 0.92,
          opacity: 0.75,
          y: -45,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "+=0.2"
      )
      .to(
        card4Ref.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          onStart: () => playMoney4(),
        },
        "-=0.5"
      )
      .to(
        confettiRef.current,
        {
          opacity: 1,
          duration: 0.2,
          onStart: () => {
            playConfetti();
          },
        },
        "+=0.3"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.1"
      );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [playConfetti, playMoney1, playMoney2, playMoney3, playMoney4]);

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
        className="relative min-h-screen flex items-start justify-center"
      >
        <div className="sticky top-32 w-full max-w-7xl mx-auto px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={card.ref}
              className="absolute top-0 left-0 w-full"
              style={{ transformOrigin: "center top" }}
            >
              <div
                className={`relative clip-diagonal-lg circuit-board bg-cream border border-terracotta/20 p-12 lg:p-16 min-h-[80vh] flex flex-col`}
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

                <div className="absolute bottom-12 right-12 w-64 h-64 lg:w-96 lg:h-96 opacity-60">
                  {card.moneyView}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        ref={ctaRef}
        className="flex flex-col md:flex-row justify-center items-center gap-4 mt-24"
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
