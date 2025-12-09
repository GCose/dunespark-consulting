import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PromiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const horizontalWrapperRef = useRef<HTMLElement>(null);
  const horizontalContainerRef = useRef<HTMLDivElement>(null);
  const horizontalContentRef = useRef<HTMLDivElement>(null);
  const brandTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(imageWrapperRef.current, { opacity: 0 });
    gsap.set(imageRef.current, {
      width: "100%",
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    gsap.set(textContentRef.current, { opacity: 0, y: -100 });
    gsap.set(ctaRef.current, { opacity: 0, y: 50 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

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
          imageWrapperRef.current,
          {
            opacity: 1,
            duration: 0.4,
          },
          "-=0.6"
        );

        tl.to(
          imageRef.current,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1.8,
            ease: "power3.inOut",
          },
          "-=0.8"
        );

        tl.to(
          imageRef.current,
          {
            width: "100%",
            duration: 1.4,
            ease: "power3.inOut",
          },
          "-=0.2"
        );

        tl.to(
          textContentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );

        tl.to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.9"
        );

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      !horizontalWrapperRef.current ||
      !horizontalContainerRef.current ||
      !horizontalContentRef.current
    )
      return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const horizontalContent = horizontalContentRef.current;
    const horizontalContainer = horizontalContainerRef.current;

    const scrollWidth = horizontalContent.scrollWidth;
    const viewportWidth = window.innerWidth;

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalWrapperRef.current,
        pin: horizontalContainer,
        scrub: 1,
        start: "top top",
        end: () => `+=${scrollWidth - viewportWidth}`,
        invalidateOnRefresh: true,
      },
    });

    mainTimeline.to(horizontalContent, {
      x: () => -(scrollWidth - viewportWidth),
      ease: "none",
    });

    if (brandTextRef.current) {
      mainTimeline.fromTo(
        brandTextRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
        },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
        },
        0
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const cards = [
    {
      title: "High-quality leads without manual outreach",
      image: "/images/home-page/promise-card-1.webp",
      alt: "Leads generation",
    },
    {
      title: "Data-backed sales prep that closes faster",
      image: "/images/home-page/promise-card-2.webp",
      alt: "Sales preparation",
    },
    {
      title: "Seamless onboarding experiences that retain clients longer",
      image: "/images/home-page/promise-card-3.webp",
      alt: "Client onboarding",
    },
    {
      title: "Continuous optimization that evolves with your business",
      image: "/images/home-page/promise-card-4.webp",
      alt: "Business optimization",
    },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen md:mt-30 bg-pure-white opacity-0"
        style={{ visibility: "hidden" }}
      >
        <div className="grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
          <div className="col-span-12 mb-16">
            <h2
              ref={titleRef}
              className="font-display font-extrabold text-text-primary leading-[1.05] md:max-w-400 tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
            >
              <span className="word inline-block">OUR</span>{" "}
              <span className="word inline-block">PROMISE</span>{" "}
              <span className="word inline-block">,</span>{" "}
              <span className="word inline-block">GROWTH</span>{" "}
              <span className="word inline-block">MADE</span>{" "}
              <span className="word inline-block">SIMPLE,</span>{" "}
              <span className="word inline-block">SMART,</span>{" "}
              <span className="word inline-block">AND</span>{" "}
              <span className="word inline-block">SUSTAINABLE</span>
            </h2>
          </div>

          <div ref={imageWrapperRef} className="col-span-12 lg:col-span-6">
            <div ref={imageRef} className="relative aspect-3/4 overflow-hidden">
              <Image
                fill
                alt="Growth systems"
                src="/images/home-page/promise.webp"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>

          <div
            ref={textContentRef}
            className="col-span-12 lg:col-span-5 lg:col-start-7 flex flex-col pt-0"
          >
            <div className="space-y-8">
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
                At Dunespark, we believe{" "}
                <strong className="font-bold text-terracotta">
                  growth is a system , not a project.
                </strong>
              </p>
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
                We don{"'"}t chase quick fixes or spread-your-budget-thin
                approaches. We build modular, AI-powered growth systems designed
                to work in harmony , solving your biggest bottlenecks and
                compounding results over time.
              </p>
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
                With Dunespark, you don{"'"}t get service providers , you get{" "}
                <strong className="font-bold text-terracotta">
                  strategic growth architects
                </strong>{" "}
                who install your business{"'"}s revenue engine.
              </p>
            </div>

            <div
              ref={ctaRef}
              className="flex flex-col md:flex-row items-start md:items-start md:justify-end gap-4 mt-10"
            >
              <Link
                href="/contact"
                className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand text-terracotta font-medium text-center hover:bg-warm-sand hover:text-white transition-all duration-300"
              >
                <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
                  Book Discovery Call
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={horizontalWrapperRef}
        className="relative mt-32 lg:min-h-[500vh] md:bg-terracotta-dark/10"
      >
        <div
          ref={horizontalContainerRef}
          className="lg:h-screen lg:overflow-hidden relative"
        >
          <div
            ref={brandTextRef}
            className="hidden lg:block absolute top-1/2 left-20 -translate-y-1/2 pointer-events-none z-0 whitespace-nowrap"
            style={{
              fontSize: "clamp(8rem, 15vw, 25rem)",
              fontFamily: "Boska, serif",
              fontWeight: 700,
              color: "#c67b5c",
              opacity: 0.8,
              letterSpacing: "0.05em",
              width: "100vw",
            }}
          >
            DUNESPARK
          </div>

          <div
            ref={horizontalContentRef}
            className="relative z-10 lg:flex lg:flex-nowrap lg:gap-32"
          >
            <div className="lg:min-w-screen lg:w-screen lg:h-screen lg:flex lg:items-center lg:justify-end lg:px-16">
              <div className="text-right space-y-6 py-14 lg:py-0">
                <h3 className="font-display font-bold text-text-primary text-[clamp(2.2rem,5vw,7rem)] leading-tight">
                  NO GUESSWORK. NO WASTED TIME.
                </h3>
                <p className="text-text-secondary text-xl font-medium md:text-2xl lg:text-3xl">
                  Just automated, elegant systems that generate
                </p>
              </div>
            </div>

            {cards.map((card, index) => (
              <div
                key={index}
                className="lg:min-w-[65vw] lg:w-[65vw] lg:h-screen lg:flex lg:items-center lg:justify-center lg:px-12 mt-8 lg:mt-0"
              >
                <div className="bg-terracotta clip-diagonal-lg p-8 lg:p-16 w-full lg:max-w-4xl lg:h-[90vh] flex flex-col gap-6 relative">
                  <h4 className="font-display font-semibold text-white text-[clamp(1.5rem,5vw,2.5rem)] max-w-190 leading-tight">
                    {card.title}
                  </h4>
                  <div className="mt-auto ml-auto relative w-full h-50 md:w-80 md:h-80 lg:w-full lg:h-full max-w-[75vw] lg:max-h-[75vh]">
                    <Image
                      fill
                      alt={card.alt}
                      src={card.image}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PromiseSection;
