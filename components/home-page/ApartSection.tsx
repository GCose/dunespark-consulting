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
      bg: "bg-white",
    },
    {
      number: "02",
      title: "Rapid Installations",
      description: "Most systems go live in under 14 days",
      side: "right",
      image: "/images/home-page/apart-2.webp",
      bg: "bg-[#FFF8E1]",
    },
    {
      number: "03",
      title: "Designed for Scale",
      description: "Self-optimizing and built to grow with you",
      side: "left",
      image: "/images/home-page/apart-3.webp",
      bg: "bg-[#E8F5E9]",
    },
    {
      number: "04",
      title: "White-Glove Service",
      description: "Personalized attention with enterprise-grade quality",
      side: "right",
      image: "/images/home-page/apart-4.webp",
      bg: "bg-[#E3F2FD]",
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

  return (
    <section
      className={`${points[activePoint].bg} transition-colors duration-700 py-fluid-lg`}
    >
      <div className="mb-16 lg:mb-24">
        <h2 className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-3xl md:text-6xl lg:text-7xl">
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
        <div className="lg:col-span-4 flex flex-col">
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

        <div className="lg:col-span-4 relative">
          <div className="hidden lg:block lg:sticky lg:top-10 lg:py-10 mb-12 lg:mb-0 h-[80vh] md:h-[90vh]">
            {points.map((point, idx) => (
              <Image
                key={point.number}
                fill
                src={point.image}
                alt="Growth systems"
                className={`object-cover clip-diagonal-lg transition-opacity duration-700 absolute top-0 left-0 w-full h-full ${
                  idx === activePoint ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col mt-[150vh]">
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

      <div className="bg-cream lg:hidden flex flex-col gap-12">
        {points.map((point) => (
          <div key={point.number} className="flex flex-col items-start">
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
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApartSection;
