import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const section2Ref = useRef<HTMLElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(imageRef.current, {
      opacity: 0,
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });

    gsap.set(ctaRef.current, { opacity: 0, y: 50 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

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
        imageRef.current,
        {
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.8,
          ease: "power3.inOut",
        },
        "-=1.0"
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(ctaRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.4,
            delay: 0.4,
            ease: "power3.out",
          });
          ctaObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) ctaObserver.observe(ctaRef.current);
  }, []);

  useEffect(() => {
    if (!section2Ref.current) return;

    gsap.set(section2Ref.current, { opacity: 0 });

    gsap.set([img1Ref.current, img2Ref.current], {
      opacity: 0,
      clipPath: "inset(0 100% 0 0)",
    });

    const textParagraphs = paragraphsRef.current?.querySelectorAll("p") || [];
    gsap.set(textParagraphs, { opacity: 0, y: 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const tl = gsap.timeline();

          tl.to(section2Ref.current, {
            opacity: 1,
            duration: 0.4,
          });

          tl.to(img1Ref.current, {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.4,
            delay: 0.2,
            ease: "power3.out",
          });

          tl.to(textParagraphs, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.45,
            ease: "power3.out",
          });

          tl.to(img2Ref.current, {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.4,
            delay: 0.2,
            ease: "power3.out",
          });

          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section2Ref.current);
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="pb-15 bg-pure-white opacity-0"
        style={{ visibility: "hidden" }}
      >
        <h1
          ref={titleRef}
          className="font-display font-extrabold text-text-primary md:leading-tight tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
        >
          <span className="word inline-block">INSTALL</span>{" "}
          <span className="word inline-block">THE</span>{" "}
          <span className="word inline-block">GROWTH</span>{" "}
          <span className="word inline-block">INFRASTRUCTURE</span>
          <br />
          <span className="word inline-block">YOUR</span>{" "}
          <span className="word inline-block">BUSINESS</span>{" "}
          <span className="word inline-block">HAS</span>{" "}
          <span className="word inline-block">BEEN</span>{" "}
          <span className="word inline-block">MISSING</span>
        </h1>

        <div
          ref={imageRef}
          className="relative w-full h-[70vh] md:h-screen mt-10"
        >
          <Image
            fill
            priority
            alt="Growth infrastructure"
            src="/images/home-page/hero.jpg"
            className="object-cover clip-diagonal-sm"
          />
        </div>

        <div
          ref={ctaRef}
          className="mx-auto mt-10 flex flex-col md:flex-row items-start md:items-end md:justify-end gap-4"
        >
          <Link
            href="/contact"
            className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand hover:bg-white hover:text-terracotta font-medium text-center bg-warm-sand text-white transition-all duration-300"
          >
            <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
              Run Free Audit
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

      <section
        ref={section2Ref}
        className="mt-20 md:mt-50 relative grid grid-cols-1 md:grid-cols-10 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] bg-pure-white"
      >
        <div className="hidden lg:block absolute inset-y-0 left-0 w-px bg-gray-500" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-px bg-gray-500" />

        <div className="md:col-span-4 lg:col-span-4 lg:col-start-1 border-l border-r border-gray-500">
          <div className="relative aspect-3/4 overflow-hidden">
            <div ref={img1Ref} className="w-full h-full">
              <Image
                fill
                alt="Business growth"
                src="/images/home-page/hero-1.webp"
                style={{ filter: "saturate(0.85)" }}
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>
        </div>

        <div
          ref={paragraphsRef}
          className="md:col-span-6 lg:col-span-5 lg:col-start-5 flex items-center px-0"
        >
          <div className="space-y-18">
            <p className="font-body text-black font-normal text-[clamp(1.3rem,5vw,2rem)] leading-7 md:leading-relaxed">
              You deserve a growth engine that works, effortlessly,
              intelligently, and built to scale.
            </p>
            <p className="font-body text-black text-[clamp(1.3rem,5vw,2rem)] leading-7 md:leading-relaxed">
              At Dunespark Consulting, we install elegant, AI-powered growth
              systems that run quietly in the background, freeing you to focus
              on what matters most.
            </p>
            <p className="font-body text-black text-[clamp(1.3rem,5vw,2rem)] leading-7 md:leading-relaxed">
              Imagine a system designed for your success, one that runs quietly
              in the background, freeing you to focus on what matters most.
            </p>
          </div>
        </div>

        <div className="md:col-span-10 md:col-start-1 lg:col-span-4 lg:col-start-10 mt-12 border-l border-r border-gray-500 md:mt-16 lg:mt-0 lg:pt-280">
          <div className="relative aspect-3/4 overflow-hidden">
            <div ref={img2Ref} className="w-full h-full">
              <Image
                fill
                alt="Tech consulting"
                className="object-cover clip-diagonal-lg"
                src="/images/home-page/hero-2.webp"
                style={{ filter: "saturate(0.85)" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
