import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChallengesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const splashRef = useRef<SVGSVGElement>(null);
  const mainTitleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const nextTitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });
    if (mainTitleRef.current) {
      const words = mainTitleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }
    gsap.set(subtitleRef.current, { opacity: 0, x: -50 });
    if (listRef.current)
      gsap.set(Array.from(listRef.current.children), { opacity: 0, y: 40 });
    gsap.set(ctaRef.current, { opacity: 0, y: 50 });
    gsap.set(nextTitleRef.current, { opacity: 0, y: -50 });
    gsap.set(descriptionRef.current, { opacity: 0, y: 40 });
    gsap.set(imageRef.current, { opacity: 0, clipPath: "inset(0 100% 0 0)" });

    // Splash setup
    if (splashRef.current) {
      const splashDroplets =
        splashRef.current.querySelectorAll(".splash-droplet");
      gsap.set(splashDroplets, {
        scale: 0,
        opacity: 0,
        transformOrigin: "center center",
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;

        const tl = gsap.timeline();
        if (mainTitleRef.current) {
          const words = mainTitleRef.current.querySelectorAll(".word");
          tl.to(words, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          });
        }
        tl.to(
          subtitleRef.current,
          { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
        if (listRef.current) {
          tl.to(
            Array.from(listRef.current.children),
            { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" },
            "-=0.6"
          );
        }
        tl.to(
          ctaRef.current,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        );

        // SPLASH BURST - After CTA shows
        if (splashRef.current) {
          const splashDroplets =
            splashRef.current.querySelectorAll(".splash-droplet");
          tl.to(
            splashDroplets,
            {
              scale: 1,
              opacity: 0.2,
              duration: 0.8,
              stagger: {
                amount: 0.3,
                from: "random",
              },
              ease: "back.out(2)",
            },
            "-=0.3"
          );
        }

        tl.to(
          nextTitleRef.current,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
        tl.to(
          descriptionRef.current,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.5"
        );
        tl.to(
          imageRef.current,
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.4,
            ease: "power3.out",
          },
          "-=0.8"
        );

        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-fluid-lg md:mt-30 relative opacity-0 overflow-hidden"
      style={{ visibility: "hidden" }}
    >
      <svg
        ref={splashRef}
        className="hidden lg:block absolute top-[20%] left-[15%] w-[900px] h-[900px] pointer-events-none z-0"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          className="splash-droplet"
          cx="450"
          cy="450"
          rx="180"
          ry="180"
          fill="#C67B5C"
          opacity="0.3"
        />
        <ellipse
          className="splash-droplet"
          cx="450"
          cy="450"
          rx="120"
          ry="120"
          fill="#C67B5C"
          opacity="0.4"
        />

        <ellipse
          className="splash-droplet"
          cx="280"
          cy="320"
          rx="85"
          ry="95"
          fill="#C67B5C"
          transform="rotate(-25 280 320)"
        />
        <ellipse
          className="splash-droplet"
          cx="620"
          cy="300"
          rx="75"
          ry="90"
          fill="#C67B5C"
          transform="rotate(30 620 300)"
        />
        <ellipse
          className="splash-droplet"
          cx="690"
          cy="480"
          rx="70"
          ry="80"
          fill="#C67B5C"
          transform="rotate(15 690 480)"
        />
        <ellipse
          className="splash-droplet"
          cx="600"
          cy="650"
          rx="80"
          ry="85"
          fill="#C67B5C"
          transform="rotate(-40 600 650)"
        />
        <ellipse
          className="splash-droplet"
          cx="320"
          cy="620"
          rx="75"
          ry="90"
          fill="#C67B5C"
          transform="rotate(20 320 620)"
        />
        <ellipse
          className="splash-droplet"
          cx="220"
          cy="480"
          rx="65"
          ry="75"
          fill="#C67B5C"
          transform="rotate(-35 220 480)"
        />

        <ellipse
          className="splash-droplet"
          cx="380"
          cy="250"
          rx="55"
          ry="65"
          fill="#C67B5C"
          transform="rotate(45 380 250)"
        />
        <ellipse
          className="splash-droplet"
          cx="550"
          cy="240"
          rx="50"
          ry="60"
          fill="#C67B5C"
          transform="rotate(-20 550 240)"
        />
        <ellipse
          className="splash-droplet"
          cx="720"
          cy="380"
          rx="45"
          ry="55"
          fill="#C67B5C"
          transform="rotate(60 720 380)"
        />
        <ellipse
          className="splash-droplet"
          cx="740"
          cy="580"
          rx="50"
          ry="58"
          fill="#C67B5C"
          transform="rotate(-15 740 580)"
        />
        <ellipse
          className="splash-droplet"
          cx="520"
          cy="720"
          rx="48"
          ry="56"
          fill="#C67B5C"
          transform="rotate(35 520 720)"
        />
        <ellipse
          className="splash-droplet"
          cx="350"
          cy="730"
          rx="52"
          ry="60"
          fill="#C67B5C"
          transform="rotate(-50 350 730)"
        />
        <ellipse
          className="splash-droplet"
          cx="180"
          cy="580"
          rx="45"
          ry="53"
          fill="#C67B5C"
          transform="rotate(25 180 580)"
        />
        <ellipse
          className="splash-droplet"
          cx="160"
          cy="380"
          rx="48"
          ry="55"
          fill="#C67B5C"
          transform="rotate(-45 160 380)"
        />

        <circle
          className="splash-droplet"
          cx="320"
          cy="190"
          r="28"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="580"
          cy="170"
          r="25"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="760"
          cy="300"
          r="30"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="790"
          cy="520"
          r="26"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="680"
          cy="720"
          r="28"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="450"
          cy="780"
          r="32"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="250"
          cy="730"
          r="27"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="120"
          cy="520"
          r="29"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="110"
          cy="300"
          r="26"
          fill="#C67B5C"
        />
        <circle
          className="splash-droplet"
          cx="240"
          cy="180"
          r="24"
          fill="#C67B5C"
        />
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] relative z-10">
        <div className="lg:col-span-10">
          <h2
            ref={mainTitleRef}
            className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)] mb-16 lg:mb-24"
          >
            <span className="word inline-block">THE</span>{" "}
            <span className="word inline-block">REAL</span>{" "}
            <span className="word inline-block">CHALLENGE</span>{" "}
            <span className="word inline-block">BEHIND</span>{" "}
            <span className="word inline-block">YOUR</span>{" "}
            <span className="word inline-block">GROWTH</span>{" "}
            <span className="word inline-block">STRUGGLES</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 relative z-10 max-w-[2400px] lg:mx-auto">
        <div className="lg:col-span-4 lg:col-start-2 pt-5 md:pt-20 border-y md:border-b-0 md:border-y-0 border-terracotta">
          <p
            ref={subtitleRef}
            className="text-terracotta text-2xl md:text-3xl lg:text-5xl font-bold md:leading-15 pb-5"
          >
            You{"'"}re not alone if this sounds familiar:
          </p>
        </div>

        <div className="lg:col-span-7 lg:col-start-7 md:border-l md:border-r border-terracotta md:px-10 pt-5 md:pt-20">
          <ul ref={listRef} className="space-y-8 mb-12">
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              You{"'"}ve hired agencies and consultants, but their work feels
              disconnected, marketing, sales, software, all running separate
              races.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              You spend heavily on ads, yet your leads are low-quality or
              inconsistent.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              Your sales team scrambles without the insights they need to close
              confidently.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              Client onboarding feels manual, clunky, and drains your time and
              resources.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              The tech solutions you{"'"}ve tried are complex or don{"'"}t talk
              to each other, creating more headaches than help.
            </li>
          </ul>

          <div
            ref={ctaRef}
            className="mx-auto mt-10 flex flex-col md:flex-row items-start md:items-start md:justify-end gap-4"
          >
            <Link
              href="/contact"
              className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand hover:bg-white hover:text-terracotta font-medium text-center bg-warm-sand text-white transition-all duration-300"
            >
              <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
                Run Free Audit
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-2 pt-20 lg:pt-32">
          <h3
            ref={nextTitleRef}
            className="font-display font-bold text-terracotta text-2xl md:text-4xl lg:text-5xl leading-tight pb-5 pt-5 md:pt-20 border-y md:border-y-0 border-terracotta"
          >
            Why is growth so hard?
          </h3>
        </div>

        <div className="lg:col-span-7 lg:col-start-7 pt-12 flex flex-col gap-8 lg:pt-52 md:border-l md:border-r border-terracotta">
          <p
            ref={descriptionRef}
            className="text-text-primary font-medium text-xl md:text-2xl lg:text-3xl leading-relaxed md:px-10"
          >
            Because{" "}
            <strong className="font-bold text-terracotta-dark">
              traditional growth models are broken.
            </strong>
            <br />
            They focus on isolated tasks, not the integrated outcomes your
            business truly needs.
          </p>
          <div ref={imageRef} className="relative w-full min-h-screen">
            <Image
              fill
              alt="Growth challenges visualization"
              src="/images/home-page/challenge.webp"
              className="object-cover clip-diagonal-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
