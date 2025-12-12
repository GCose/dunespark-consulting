import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = `Who Benefits Most From Dunespark Consulting? We partner best with founders and executives who are fed up with fragmented agencies and ineffective vendors, who crave predictable, scalable growth that frees their time, who value clarity, strategic insight, and white-glove partnership, who are ready to invest in systems that generate compounding revenue, and who believe that growth infrastructure is the future — not quick hacks.`;

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    gsap.set(videoRef.current, { opacity: 0 });

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

    if (sectionRef.current) videoObserver.observe(sectionRef.current);

    const chars = textRef.current.querySelectorAll(".char");
    gsap.set(chars, { opacity: 0.5 });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalChars = chars.length;

          chars.forEach((char, index) => {
            const charProgress = index / totalChars;

            if (progress >= charProgress) {
              const fadeProgress = Math.min(
                (progress - charProgress) * totalChars * 0.1,
                1
              );
              const opacity = 0.5 + 0.5 * fadeProgress;
              gsap.set(char, { opacity });
            }
          });
        },
      });
    });

    return () => {
      ctx.revert();
      videoObserver.disconnect();
    };
  }, []);

  const renderTextWithChars = () => {
    return text.split("").map((char, index) => (
      <span key={index} className="char">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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
            src="/videos/home-page/benefits-section.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl">
        <p
          ref={textRef}
          className="font-display font-bold text-white text-[clamp(2rem,4vw,5rem)] leading-[1.2]"
        >
          {renderTextWithChars()}
        </p>
      </div>
    </section>
  );
};

export default BenefitsSection;
