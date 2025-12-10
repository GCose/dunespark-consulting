import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

type LoadingScreenProps = {
  onFinish: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [typedText, setTypedText] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const text = "DUNESPARK CONSULTING";
  const indexRef = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const typeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    typeIntervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        const char = text.charAt(indexRef.current);
        setTypedText((prev) => prev + char);
        indexRef.current += 1;
      } else {
        if (typeIntervalRef.current) {
          clearInterval(typeIntervalRef.current);
        }

        setTimeout(() => {
          setShowOverlay(true);
        }, 500);
      }
    }, 100);

    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (showOverlay && overlayRef.current) {
      const animation = gsap.fromTo(
        overlayRef.current,
        { scale: 0 },
        {
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          transformOrigin: "center",
          onComplete: () => {
            document.body.style.overflow = "";
            onFinish();
          },
        }
      );

      return () => {
        animation.kill();
      };
    }
  }, [showOverlay, onFinish]);

  return (
    <div className="circuit-board fixed inset-0 bg-cream flex items-center justify-center h-screen z-9999 overflow-hidden">
      <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-8xl text-terracotta tracking-tight">
        {typedText}
      </h1>

      {showOverlay && (
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-pure-white clip-diagonal-lg z-50 overflow-hidden h-screen"
        />
      )}
    </div>
  );
};

export default LoadingScreen;
