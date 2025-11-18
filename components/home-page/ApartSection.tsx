import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const ApartSection = () => {
  const pointRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    const observers = pointRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActivePoint(index);
            }
          });
        },
        {
          threshold: 0.6,
          rootMargin: "-10% 0px",
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const points = [
    {
      number: "01",
      title: "Pre-built AI Systems",
      description: "Tested, proven, ready to deploy quickly",
      side: "left",
      image: "/images/home-page/apart-1.webp",
    },
    {
      number: "02",
      title: "Rapid Installations",
      description: "Most systems go live in under 14 days",
      side: "right",
      image: "/images/home-page/apart-2.webp",
    },
    {
      number: "03",
      title: "Designed for Scale",
      description: "Self-optimizing and built to grow with you",
      side: "left",
      image: "/images/home-page/apart-3.webp",
    },
    {
      number: "04",
      title: "White-Glove Service",
      description: "Personalized attention with enterprise-grade quality",
      side: "right",
      image: "/images/home-page/apart-4.webp",
    },
    {
      number: "05",
      title: "Outcome-Focused",
      description: "Every system tied directly to revenue and growth",
      side: "left",
      image: "/images/home-page/apart-5.webp",
    },
  ];

  const activeImage = points[activePoint]?.image || points[0].image;

  return (
    <section className="bg-pure-white py-fluid-lg">
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

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 flex flex-col">
          {points
            .filter((point) => point.side === "left")
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
                  className={`min-h-[150vh] flex items-center py-20 ${
                    idx > 0 ? "mt-[150vh]" : ""
                  }`}
                >
                  <div>
                    <div className="text-terracotta text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6">
                      {point.number}
                    </div>
                    <h3 className="font-display font-bold text-text-primary text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-text-secondary text-lg md:text-xl lg:text-2xl leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-20 lg:h-fit mb-12 lg:mb-0">
            <div className="relative aspect-2/3 overflow-hidden">
              <Image
                key={activeImage}
                fill
                alt="Growth systems"
                className="object-cover transition-opacity duration-500"
                src={activeImage}
                style={{ filter: "saturate(0.85)" }}
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col mt-[150vh]">
          {points
            .filter((point) => point.side === "right")
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
                  className={`min-h-[150vh] flex items-center py-20 ${
                    idx > 0 ? "mt-[150vh]" : ""
                  }`}
                >
                  <div>
                    <div className="text-terracotta text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6">
                      {point.number}
                    </div>
                    <h3 className="font-display font-bold text-text-primary text-2xl md:text-3xl lg:text-5xl mb-3 md:mb-4 leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-text-secondary text-lg md:text-xl lg:text-3xl leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ApartSection;
