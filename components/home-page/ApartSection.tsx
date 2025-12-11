import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import rocketLaunchAnimation from "@/public/lotties/rocket-launch.json";

const ApartSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pointRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rocket1Ref = useRef<HTMLDivElement>(null);
  const rocket2Ref = useRef<HTMLDivElement>(null);
  const rocket3Ref = useRef<HTMLDivElement>(null);
  const rocket4Ref = useRef<HTMLDivElement>(null);
  const rocket5Ref = useRef<HTMLDivElement>(null);
  const rocket1Played = useRef(false);
  const rocket2Played = useRef(false);
  const rocket3Played = useRef(false);
  const rocket4Played = useRef(false);
  const rocket5Played = useRef(false);
  const [activePoint, setActivePoint] = useState(0);

  const { View: Rocket1View, goToAndPlay: playRocket1 } = useLottie({
    animationData: rocketLaunchAnimation,
    loop: false,
    autoplay: false,
  });

  const { View: Rocket2View, goToAndPlay: playRocket2 } = useLottie({
    animationData: rocketLaunchAnimation,
    loop: false,
    autoplay: false,
  });

  const { View: Rocket3View, goToAndPlay: playRocket3 } = useLottie({
    animationData: rocketLaunchAnimation,
    loop: false,
    autoplay: false,
  });

  const { View: Rocket4View, goToAndPlay: playRocket4 } = useLottie({
    animationData: rocketLaunchAnimation,
    loop: false,
    autoplay: false,
  });

  const { View: Rocket5View, goToAndPlay: playRocket5 } = useLottie({
    animationData: rocketLaunchAnimation,
    loop: false,
    autoplay: false,
  });

  const points = [
    {
      number: "01",
      title: "Pre-built AI Systems",
      description: "Tested, proven, ready to deploy quickly",
      side: "left",
      image: "/images/home-page/apart-1.webp",
      bg: "bg-pure-white",
    },
    {
      number: "02",
      title: "Rapid Installations",
      description: "Most systems go live in under 14 days",
      side: "right",
      image: "/images/home-page/apart-2.webp",
      bg: "bg-warm-beige",
    },
    {
      number: "03",
      title: "Designed for Scale",
      description: "Self-optimizing and built to grow with you",
      side: "left",
      image: "/images/home-page/apart-3.webp",
      bg: "bg-deep-clay",
    },
    {
      number: "04",
      title: "White-Glove Service",
      description: "Personalized attention with enterprise-grade quality",
      side: "right",
      image: "/images/home-page/apart-4.webp",
      bg: "bg-soft-white",
    },
    {
      number: "05",
      title: "Outcome-Focused",
      description: "Every system tied directly to revenue and growth",
      side: "left",
      image: "/images/home-page/apart-5.webp",
      bg: "bg-terracotta/10",
    },
  ];

  useEffect(() => {
    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      gsap.set(
        [
          rocket1Ref.current,
          rocket2Ref.current,
          rocket3Ref.current,
          rocket4Ref.current,
          rocket5Ref.current,
        ],
        {
          opacity: 0,
        }
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = pointRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActivePoint(index);
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 1024) return;

    const mobileCards = document.querySelectorAll(".mobile-card");

    const observers = Array.from(mobileCards).map((card) => {
      gsap.set(card, { opacity: 0, y: 50 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
              });
              observer.disconnect();
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      return observer;
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    if (activePoint === 0 && !rocket1Played.current) {
      rocket1Played.current = true;
      gsap.set(rocket1Ref.current, { opacity: 1, y: 0 });
      gsap.to(rocket1Ref.current, {
        y: -800,
        duration: 3,
        ease: "none",
        onStart: () => playRocket1(0, true),
        onComplete: () => {
          gsap.set(rocket1Ref.current, { opacity: 0 });
        },
      });
    }

    if (activePoint === 1 && !rocket2Played.current) {
      rocket2Played.current = true;
      gsap.set(rocket2Ref.current, { opacity: 1, y: 0 });
      gsap.to(rocket2Ref.current, {
        y: -800,
        duration: 3,
        ease: "none",
        onStart: () => playRocket2(0, true),
        onComplete: () => {
          gsap.set(rocket2Ref.current, { opacity: 0 });
        },
      });
    }

    if (activePoint === 2 && !rocket3Played.current) {
      rocket3Played.current = true;
      gsap.set(rocket3Ref.current, { opacity: 1, y: 0 });
      gsap.to(rocket3Ref.current, {
        y: -800,
        duration: 3,
        ease: "none",
        onStart: () => playRocket3(0, true),
        onComplete: () => {
          gsap.set(rocket3Ref.current, { opacity: 0 });
        },
      });
    }

    if (activePoint === 3 && !rocket4Played.current) {
      rocket4Played.current = true;
      gsap.set(rocket4Ref.current, { opacity: 1, y: 0 });
      gsap.to(rocket4Ref.current, {
        y: -800,
        duration: 3,
        ease: "none",
        onStart: () => playRocket4(0, true),
        onComplete: () => {
          gsap.set(rocket4Ref.current, { opacity: 0 });
        },
      });
    }

    if (activePoint === 4 && !rocket5Played.current) {
      rocket5Played.current = true;
      gsap.set(rocket5Ref.current, { opacity: 1, y: 0 });
      gsap.to(rocket5Ref.current, {
        y: -800,
        duration: 3,
        ease: "none",
        onStart: () => playRocket5(0, true),
        onComplete: () => {
          gsap.set(rocket5Ref.current, { opacity: 0 });
        },
      });
    }
  }, [
    activePoint,
    playRocket1,
    playRocket2,
    playRocket3,
    playRocket4,
    playRocket5,
  ]);

  return (
    <section
      className={`${points[activePoint].bg} transition-colors duration-700 py-fluid-lg relative`}
    >
      <div
        ref={rocket1Ref}
        className="hidden lg:block fixed left-[0%] top-1/2 translate-x-0 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none z-50 opacity-0"
      >
        {Rocket1View}
      </div>
      <div
        ref={rocket2Ref}
        className="hidden lg:block fixed left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none z-50 opacity-0"
      >
        {Rocket2View}
      </div>
      <div
        ref={rocket3Ref}
        className="hidden lg:block fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none z-50 opacity-0"
      >
        {Rocket3View}
      </div>
      <div
        ref={rocket4Ref}
        className="hidden lg:block fixed left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none z-50 opacity-0"
      >
        {Rocket4View}
      </div>
      <div
        ref={rocket5Ref}
        className="hidden lg:block fixed right-[0%] top-1/2 translate-x-0 -translate-y-1/2 w-[350px] h-[350px] pointer-events-none z-50 opacity-0"
      >
        {Rocket5View}
      </div>

      <div className="mb-16 lg:mb-24">
        <h2
          ref={titleRef}
          className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
        >
          <span className="word inline-block">WHAT</span>{" "}
          <span className="word inline-block">SETS</span>{" "}
          <span className="word inline-block">DUNESPARK</span>{" "}
          <span className="word inline-block">APART</span>{" "}
          <span className="word inline-block">—</span>{" "}
          <span className="word inline-block">THE</span>{" "}
          <span className="word inline-block">BOUTIQUE</span>{" "}
          <span className="word inline-block">GROWTH</span>{" "}
          <span className="word inline-block">EXPERIENCE</span>
        </h2>
      </div>

      <div className="flex justify-end mb-16 lg:mb-32">
        <div className="max-w-2xl">
          <p className="text-text-primary text-xl md:text-2xl lg:text-3xl font-medium leading-10 text-right">
            We{"'"}re not a typical agency. We{"'"}re your partner in
            intelligent growth, combining:
          </p>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-3 flex flex-col">
          {points
            .filter((p) => p.side === "left")
            .map((point, idx) => {
              const originalIndex = points.findIndex(
                (p) => p.number === point.number
              );
              return (
                <div
                  key={point.number}
                  ref={(el) => {
                    pointRefs.current[originalIndex] = el;
                  }}
                  className={`min-h-[150vh] flex flex-col justify-center py-20 ${
                    idx > 0 ? "mt-[150vh]" : ""
                  }`}
                >
                  <div className="text-terracotta text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6">
                    {point.number}
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary text-lg md:text-xl lg:text-3xl leading-10">
                    {point.description}
                  </p>
                </div>
              );
            })}
        </div>

        <div className="lg:col-span-6 relative">
          <div className="hidden lg:block lg:sticky lg:top-10 lg:py-10 mb-12 lg:mb-0 h-[80vh] md:h-[90vh]">
            {points.map((point, idx) => (
              <Image
                fill
                src={point.image}
                key={point.number}
                alt="Growth systems"
                className={`object-cover clip-diagonal-lg transition-opacity duration-700 absolute top-0 left-0 w-full h-full ${
                  idx === activePoint ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col mt-[150vh]">
          {points
            .filter((p) => p.side === "right")
            .map((point, idx) => {
              const originalIndex = points.findIndex(
                (p) => p.number === point.number
              );
              return (
                <div
                  key={point.number}
                  ref={(el) => {
                    pointRefs.current[originalIndex] = el;
                  }}
                  className={`min-h-[150vh] flex flex-col justify-center py-20 ${
                    idx > 0 ? "mt-[150vh]" : ""
                  }`}
                >
                  <div className="text-terracotta text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6">
                    {point.number}
                  </div>
                  <h3 className="font-display font-bold text-text-primary text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4 leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-text-secondary text-lg md:text-xl lg:text-3xl leading-10">
                    {point.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-12">
        {points.map((point) => (
          <div
            key={point.number}
            className="bg-cream mobile-card flex flex-col items-start py-4 px-5 clip-diagonal-lg"
          >
            <div className="text-terracotta text-6xl font-display font-bold mb-2">
              {point.number}
            </div>
            <h3 className="font-display font-bold text-text-primary text-2xl mb-2">
              {point.title}
            </h3>
            <p className="text-text-secondary text-lg mb-4">
              {point.description}
            </p>
            <div className="relative w-full h-64">
              <Image
                fill
                src={point.image}
                alt={point.title}
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-24 gap-4">
        <Link
          href="/contact"
          className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand hover:bg-text-primary hover:text-terracotta font-medium text-center bg-warm-sand text-text-primary transition-all duration-300"
        >
          <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
            Book Consultation Call
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ApartSection;
