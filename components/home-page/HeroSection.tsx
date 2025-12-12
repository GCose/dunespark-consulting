import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const section2Ref = useRef<HTMLElement>(null);
  const section2VideoRef = useRef<HTMLDivElement>(null);
  const section2VideoElementRef = useRef<HTMLVideoElement>(null);
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
    });

    gsap.set(ctaRef.current, { opacity: 0, y: 50 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(imageRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
      });

      tl.to(
        titleRef.current?.querySelectorAll(".word") || [],
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        },
        "+=1"
      );

      tl.to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!section2Ref.current) return;

    gsap.set(section2Ref.current, { opacity: 0 });
    gsap.set(section2VideoRef.current, { opacity: 0 });

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

          tl.to(
            section2VideoRef.current,
            {
              opacity: 1,
              duration: 1.5,
              ease: "power3.inOut",
              onStart: () => {
                section2VideoElementRef.current?.play();
              },
            },
            "-=1.8"
          );

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-screen flex items-center justify-center px-4 bg-pure-white opacity-0 overflow-hidden"
        style={{ visibility: "hidden" }}
      >
        <div ref={imageRef} className="absolute inset-0 w-full h-full">
          <video
            loop
            muted
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/home-page/hero-section.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center px-4 ">
          <h1
            ref={titleRef}
            className="font-display font-extrabold text-white md:leading-tight tracking-tight text-[clamp(2.2rem,6vw,8rem)] mb-10 max-w-500"
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
            ref={ctaRef}
            className="flex flex-col md:flex-row w-full items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand hover:bg-transparent hover:text-terracotta font-medium text-center bg-warm-sand text-white transition-all duration-300"
            >
              <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
                Run Free Audit
              </span>
            </Link>

            <Link
              href="/contact"
              className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand text-white font-medium text-center hover:bg-warm-sand hover:text-white transition-all duration-300"
            >
              <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
                Book Discovery Call
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={section2Ref}
        className="pt-20 md:pt-50 px-4 relative grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] lg:min-h-[180vh] overflow-hidden"
      >
        <div
          ref={section2VideoRef}
          className="absolute inset-0 w-full h-full z-0"
        >
          <video
            ref={section2VideoElementRef}
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="/videos/home-page/hero-section2.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between relative z-10">
          <div className="relative aspect-3/4 overflow-hidden">
            <div ref={img1Ref} className="w-full h-full">
              <Image
                fill
                alt="Business growth"
                src="/images/home-page/hero-1.jpg"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>

          <div className="hidden lg:block w-[400px] h-[400px] mt-auto" />
        </div>

        <div
          ref={paragraphsRef}
          className="lg:col-span-4 flex items-center justify-center relative z-10"
        >
          <div className="space-y-12 lg:space-y-16">
            <p className="font-body text-white font-normal text-[clamp(1.3rem,5vw,2rem)] leading-relaxed">
              You deserve a growth engine that works, effortlessly,
              intelligently, and built to scale.
            </p>
            <p className="font-body text-white text-[clamp(1.3rem,5vw,2rem)] leading-relaxed">
              At Dunespark Consulting, we install elegant, AI-powered growth
              systems that run quietly in the background, freeing you to focus
              on what matters most.
            </p>
            <p className="font-body text-white text-[clamp(1.3rem,5vw,2rem)] leading-relaxed">
              Imagine a system designed for your success, one that runs quietly
              in the background, freeing you to focus on what matters most.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-between relative z-10">
          <div className="hidden lg:block w-[400px] h-[400px] ml-auto" />

          <div className="relative aspect-3/4 overflow-hidden mt-auto">
            <div ref={img2Ref} className="w-full h-full">
              <Image
                fill
                alt="Tech consulting"
                src="/images/home-page/hero-2.jpg"
                className="object-cover clip-diagonal-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
