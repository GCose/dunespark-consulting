import { gsap } from "gsap";
import Image from "next/image";
import { useRef, useEffect } from "react";

const SuccessStoriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const case1ImageRef = useRef<HTMLDivElement>(null);
  const case1ContentRef = useRef<HTMLDivElement>(null);
  const case2ImageRef = useRef<HTMLDivElement>(null);
  const case2ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set([case1ImageRef.current, case1ContentRef.current], {
      opacity: 0,
      y: 60,
    });

    gsap.set([case2ImageRef.current, case2ContentRef.current], {
      opacity: 0,
      y: 60,
    });

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

    const case1Observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline();

          tl.to(case1ImageRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          });

          tl.to(
            case1ContentRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.8"
          );

          case1Observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (case1ImageRef.current) case1Observer.observe(case1ImageRef.current);

    const case2Observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline();

          tl.to(case2ContentRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          });

          tl.to(
            case2ImageRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.8"
          );

          case2Observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (case2ContentRef.current) case2Observer.observe(case2ContentRef.current);

    return () => {
      titleObserver.disconnect();
      case1Observer.disconnect();
      case2Observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-fluid-lg bg-pure-white opacity-0 px-4 overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className="cyan-glow"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-24 lg:mb-32">
          <h2
            ref={titleRef}
            className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
          >
            <span className="word inline-block">REAL</span>{" "}
            <span className="word inline-block">SUCCESS</span>{" "}
            <span className="word inline-block">STORIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
          <div
            ref={case2ContentRef}
            className="lg:col-span-6 flex flex-col justify-center space-y-8 order-2 lg:order-1"
          >
            <h3 className="font-display font-bold text-terracotta text-3xl md:text-4xl lg:text-5xl">
              ShopEase E-commerce
            </h3>

            <div className="space-y-4">
              <p className="text-text-primary text-xl md:text-2xl">
                <strong className="font-bold">Challenge:</strong> Stagnant
                sales, wasted ad budget
              </p>
              <p className="text-text-primary text-xl md:text-2xl">
                <strong className="font-bold">Solution:</strong> AI
                infrastructure + unified digital strategy
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-terracotta text-6xl md:text-7xl lg:text-8xl">
                  65%
                </span>
                <span className="text-text-secondary text-2xl md:text-3xl">
                  sales increase
                </span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-terracotta text-6xl md:text-7xl lg:text-8xl">
                  38%
                </span>
                <span className="text-text-secondary text-2xl md:text-3xl">
                  acquisition cost reduction
                </span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-terracotta text-6xl md:text-7xl lg:text-8xl">
                  3x
                </span>
                <span className="text-text-secondary text-2xl md:text-3xl">
                  new customer segments
                </span>
              </div>
            </div>
          </div>

          <div
            ref={case2ImageRef}
            className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2"
          >
            <div className="relative w-full h-screen overflow-hidden">
              <Image
                fill
                alt="ShopEase E-commerce"
                src="/images/home-page/promise-section.jpg"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] mb-32 lg:mb-48">
          <div ref={case1ImageRef} className="lg:col-span-5">
            <div className="relative w-full h-screen overflow-hidden">
              <Image
                fill
                alt="UrbanCare Home Services"
                src="/images/home-page/hero-img-1.jpg"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>

          <div
            ref={case1ContentRef}
            className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center space-y-8"
          >
            <h3 className="font-display font-bold text-terracotta text-3xl md:text-4xl lg:text-5xl">
              UrbanCare Home Services
            </h3>

            <div className="space-y-4">
              <p className="text-text-primary text-xl md:text-2xl">
                <strong className="font-bold">Challenge:</strong> Fragmented
                marketing and inconsistent leads
              </p>
              <p className="text-text-primary text-xl md:text-2xl">
                <strong className="font-bold">Solution:</strong> AI-driven
                targeting + optimized lead capture
              </p>
            </div>

            <div className="space-y-6 pt-8">
              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-terracotta text-6xl md:text-7xl lg:text-8xl">
                  50%
                </span>
                <span className="text-text-secondary text-2xl md:text-3xl">
                  lower acquisition costs
                </span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-terracotta text-6xl md:text-7xl lg:text-8xl">
                  80%
                </span>
                <span className="text-text-secondary text-2xl md:text-3xl">
                  more qualified leads
                </span>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="font-display font-bold text-terracotta text-6xl md:text-7xl lg:text-8xl">
                  2x
                </span>
                <span className="text-text-secondary text-2xl md:text-3xl">
                  revenue growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
