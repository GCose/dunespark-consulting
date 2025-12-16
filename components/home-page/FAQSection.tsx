import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const faqContainerRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef<HTMLParagraphElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can Dunespark systems be installed?",
      answer:
        "Most systems are live and delivering value within 10–14 days after our discovery session.",
    },
    {
      question: "Are these systems customizable?",
      answer:
        "Yes. Every system is tailored to your specific business model, audience, and goals.",
    },
    {
      question: "Do I need to be tech-savvy to use Dunespark systems?",
      answer:
        "Not at all. Our systems run automatically with minimal manual input. You get dashboards and insights — we handle the rest.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We've helped clients across B2B consulting, healthcare, SaaS, professional services, and more.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "White-glove onboarding, training, and ongoing AI-powered optimization are included in your monthly plan.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(sectionRef.current, { opacity: 1, visibility: "visible" });

    if (titleRef.current) {
      const words = titleRef.current.querySelectorAll(".word");
      gsap.set(words, { y: -80, opacity: 0 });
    }

    gsap.set(faqContainerRef.current?.children || [], {
      opacity: 0,
      y: 60,
    });

    gsap.set(closingRef.current, { opacity: 0, y: 40 });

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
          faqContainerRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
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
      className="py-fluid-lg bg-pure-white opacity-0 px-4"
      style={{ visibility: "hidden" }}
    >
      <div>
        <div className="mb-24">
          <h2
            ref={titleRef}
            className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,6vw,8rem)]"
          >
            <span className="word inline-block">FREQUENTLY</span>{" "}
            <span className="word inline-block">ASKED</span>{" "}
            <span className="word inline-block">QUESTIONS</span>
          </h2>
        </div>

        <div ref={faqContainerRef} className="max-w-6xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const answerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!answerRef.current) return;

    if (isOpen) {
      gsap.to(answerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      className="clip-diagonal-lg border-2 border-terracotta/30 hover:border-terracotta transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onToggle}
    >
      <div className="p-8 lg:p-10">
        <div className="flex items-start justify-between gap-6">
          <h3 className="font-display font-bold text-text-primary uppercase text-xl md:text-2xl lg:text-4xl leading-tight flex-1">
            {question}
          </h3>
          <div
            className={`shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            <svg
              className="w-full h-full text-terracotta"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>

        <div
          ref={answerRef}
          className="overflow-hidden"
          style={{ height: 0, opacity: 0 }}
        >
          <p className="text-text-secondary text-lg md:text-xl lg:text-2xl leading-relaxed mt-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
