import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { useLottie } from "lottie-react";
import rocketAnimation from "@/public/lotties/rocket-businessman.json";

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  const { View: RocketView } = useLottie({
    animationData: rocketAnimation,
    loop: true,
    autoplay: true,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(videoWrapperRef.current, { opacity: 0 });
    gsap.set(textContentRef.current, { opacity: 0, y: -100 });
    gsap.set(ctaRef.current, { opacity: 0, y: 50 });
    gsap.set(rocketRef.current, { opacity: 0, x: -50, y: 30 });

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
          videoWrapperRef.current,
          {
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.6"
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
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );

        tl.to(
          rocketRef.current,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );

        observer.disconnect();
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen md:mt-30 pb-20 bg-pure-white opacity-0 px-4"
      style={{ visibility: "hidden" }}
    >
      <div className="grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
        <div className="col-span-12 mb-16">
          <h2
            ref={titleRef}
            className="font-display font-extrabold text-text-primary leading-[1.05] md:max-w-400 tracking-tight text-[clamp(2.2rem,5vw,7rem)]"
          >
            <span className="word inline-block">WHO</span>{" "}
            <span className="word inline-block">BENEFITS</span>{" "}
            <span className="word inline-block">MOST</span>{" "}
            <span className="word inline-block">FROM</span>{" "}
            <span className="word inline-block">DUNESPARK</span>{" "}
            <span className="word inline-block">CONSULTING?</span>
          </h2>
        </div>

        <div ref={videoWrapperRef} className="col-span-12 lg:col-span-6">
          <div ref={videoRef} className="relative aspect-3/4 overflow-hidden">
            <Image
              fill
              alt="Benefits of Dunespark Consulting"
              src="/images/home-page/benefit.jpg"
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
              We partner best with founders and executives who are fed up with
              fragmented agencies and ineffective vendors.
            </p>
            <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
              Who crave predictable, scalable growth that frees their time, who
              value clarity, strategic insight, and white-glove partnership.
            </p>
            <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
              Who are ready to invest in systems that generate compounding
              revenue, and who believe that growth infrastructure is the future
              — not quick hacks.
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

          <div
            ref={rocketRef}
            className="hidden lg:block mt-12 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]"
          >
            {RocketView}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
