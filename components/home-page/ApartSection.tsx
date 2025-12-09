import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const ApartSection = () => {
  const pointRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activePoint, setActivePoint] = useState(0);

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

  return (
    <section
      className={`${points[activePoint].bg} transition-colors duration-700 py-fluid-lg`}
    >
      <div className="mb-16 lg:mb-24">
        <h2 className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)]">
          WHAT SETS DUNESPARK APART — THE BOUTIQUE GROWTH EXPERIENCE
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
            className="bg-pure-white mobile-card flex flex-col items-start py-4 px-5 clip-diagonal-lg"
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
                style={{ filter: "saturate(0.85)" }}
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
