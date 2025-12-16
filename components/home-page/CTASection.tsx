import { gsap } from "gsap";
import Link from "next/link";
import { useRef, useEffect } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const ctaTextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(descriptionRef.current, { opacity: 0, y: 60 });
    gsap.set(ctaTextRef.current, { opacity: 0, y: 40 });
    gsap.set(buttonsRef.current, { opacity: 0, y: 50 });

    // Video playback on scroll
    const videoObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoElementRef.current?.play();
        } else {
          videoElementRef.current?.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) videoObserver.observe(sectionRef.current);

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
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6"
        );

        tl.to(
          ctaTextRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );

        tl.to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        );

        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      videoObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-fluid-lg bg-pure-white opacity-0 px-4 relative overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoElementRef}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/home-page/hero-section.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] relative z-10">
        <div className="col-span-12">
          <h2
            ref={titleRef}
            className="font-display font-extrabold text-white leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,8rem)] text-center mb-16"
          >
            <span className="word inline-block">YOUR</span>{" "}
            <span className="word inline-block">GROWTH</span>{" "}
            <span className="word inline-block">JOURNEY</span>{" "}
            <span className="word inline-block">STARTS</span>{" "}
            <span className="word inline-block">HERE</span>
          </h2>
        </div>

        <div
          ref={descriptionRef}
          className="col-span-12 lg:col-span-8 lg:col-start-3"
        >
          <p className="text-white text-xl md:text-2xl lg:text-5xl leading-relaxed text-center font-medium mb-8">
            The path to reliable, scalable growth isn{"'"}t about hustle or
            hope. It{"'"}s about installing the right systems — designed for
            your business — that deliver predictable revenue and free your time.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:col-start-3">
          <p
            ref={ctaTextRef}
            className="text-white text-2xl md:text-3xl lg:text-4xl leading-tight text-center font-display font-bold mb-12"
          >
            Take the first step to transforming your growth with Dunespark.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="col-span-12 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/audit"
            className="group clip-diagonal-lg w-full md:w-auto px-10 py-6 bg-terracotta text-white font-display font-bold text-xl md:text-2xl hover:bg-transparent transition-all duration-300 text-center border-2 border-terracotta hover:border-terracotta hover:text-terracotta"
          >
            RUN YOUR FREE GROWTH AUDIT
          </Link>

          <Link
            href="/contact"
            className="group clip-diagonal-lg w-full md:w-auto px-10 py-6 border-2 border-terracotta text-terracotta font-display font-bold text-xl md:text-2xl hover:bg-terracotta hover:text-white transition-all duration-300 text-center"
          >
            BOOK YOUR DISCOVERY CALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
