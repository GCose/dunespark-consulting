import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect, useMemo } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ApartSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);

  const cardRefs = useMemo(
    () => [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref],
    []
  );

  const pointsData = [
    {
      number: "01",
      title: "Pre-built AI Systems",
      description: "Tested, proven, ready to deploy quickly",
      image: "/images/home-page/apart-1.webp",
    },
    {
      number: "02",
      title: "Rapid Installations",
      description: "Most systems go live in under 14 days",
      image: "/images/home-page/apart-2.webp",
    },
    {
      number: "03",
      title: "Designed for Scale",
      description: "Self-optimizing and built to grow with you",
      image: "/images/home-page/apart-3.webp",
    },
    {
      number: "04",
      title: "White-Glove Service",
      description: "Personalized attention with enterprise-grade quality",
      image: "/images/home-page/apart-4.webp",
    },
    {
      number: "05",
      title: "Outcome-Focused",
      description: "Every system tied directly to revenue and growth",
      image: "/images/home-page/apart-5.webp",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(videoRef.current, { opacity: 0 });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(descriptionRef.current, { opacity: 0, y: 40 });

    const titleObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
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

          tl.to(
            descriptionRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.6"
          );

          titleObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);

    return () => {
      titleObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!cardsContainerRef.current) return;
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    gsap.set(
      cardRefs.map((ref) => ref.current),
      {
        z: -2500,
        scale: 0.3,
        opacity: 0,
        rotationY: 15,
      }
    );

    const ctx = gsap.context(() => {
      const mainScrollTrigger = ScrollTrigger.create({
        trigger: cardsContainerRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 0.5,
      });

      const videoObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            gsap.to(videoRef.current, {
              opacity: 1,
              duration: 1,
              onStart: () => {
                videoElementRef.current?.play();
              },
            });
            videoObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (cardsContainerRef.current)
        videoObserver.observe(cardsContainerRef.current);

      cardRefs.forEach((ref, index) => {
        const isLastCard = index === cardRefs.length - 1;

        gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            onUpdate: (self) => {
              const totalProgress = self.progress;
              const cardsCount = cardRefs.length;
              const cardDuration = 1 / cardsCount;

              const cardStart = index * cardDuration;
              const cardEnd = cardStart + cardDuration;

              let cardProgress = 0;
              if (totalProgress >= cardStart && totalProgress <= cardEnd) {
                cardProgress = (totalProgress - cardStart) / cardDuration;
              } else if (totalProgress < cardStart) {
                cardProgress = 0;
              } else {
                cardProgress = 1;
              }

              let z, scale, rotationY, opacity;

              if (cardProgress < 0.33) {
                const phaseProgress = cardProgress / 0.33;
                z = -2500 + 2500 * phaseProgress;
                scale = 0.3 + 0.7 * phaseProgress;
                rotationY = 15 - 15 * phaseProgress;
                opacity = phaseProgress;
              } else if (cardProgress < 0.66 || isLastCard) {
                z = 0;
                scale = 1;
                rotationY = 0;
                opacity = 1;
              } else {
                const phaseProgress = (cardProgress - 0.66) / 0.34;
                z = 0 + 1500 * phaseProgress;
                scale = 1 + 0.2 * phaseProgress;
                rotationY = 0 - 15 * phaseProgress;
                opacity = 1 - phaseProgress;
              }

              gsap.set(ref.current, { z, scale, rotationY, opacity });
            },
          },
        });
      });

      return () => {
        mainScrollTrigger.kill();
        videoObserver.disconnect();
      };
    });

    return () => {
      ctx.revert();
    };
  }, [cardRefs]);

  return (
    <section
      ref={sectionRef}
      className="bg-pure-white py-fluid-lg relative overflow-hidden"
    >
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
          <p
            ref={descriptionRef}
            className="text-text-primary text-xl md:text-2xl lg:text-3xl font-medium leading-10 text-right"
          >
            We{"'"}re not a typical agency. We{"'"}re your partner in
            intelligent growth, combining:
          </p>
        </div>
      </div>

      <div
        ref={cardsContainerRef}
        className="hidden lg:block relative h-screen"
      >
        <div ref={videoRef} className="absolute inset-0 w-full h-full z-0">
          <video
            ref={videoElementRef}
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/videos/home-page/apart-section.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "2000px" }}
        >
          {pointsData.map((point, index) => (
            <div
              key={point.number}
              ref={cardRefs[index]}
              className="absolute inset-0 px-8 md:px-16 lg:px-24 flex items-center gap-8 lg:gap-16"
              style={{ transformStyle: "preserve-3d", zIndex: index }}
            >
              <div className="w-1/2 relative aspect-square">
                <Image
                  fill
                  src={point.image}
                  alt={point.title}
                  className="object-cover clip-diagonal-lg"
                />
              </div>

              <div className="w-1/2 space-y-6">
                <div className="text-terracotta text-7xl md:text-8xl lg:text-9xl font-display font-bold">
                  {point.number}
                </div>
                <h3 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight">
                  {point.title}
                </h3>
                <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-12 mt-12">
        {pointsData.map((point) => (
          <div key={point.number} className="flex flex-col gap-6">
            <div className="relative aspect-video w-full">
              <Image
                fill
                src={point.image}
                alt={point.title}
                className="object-cover clip-diagonal-lg"
              />
            </div>

            <div className="space-y-4">
              <div className="text-terracotta text-6xl font-display font-bold">
                {point.number}
              </div>
              <h3 className="font-display font-bold text-text-primary text-2xl md:text-3xl">
                {point.title}
              </h3>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                {point.description}
              </p>
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
