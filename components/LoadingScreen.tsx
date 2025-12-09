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

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const typeInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        const char = text.charAt(indexRef.current);
        setTypedText((prev) => prev + char);
        indexRef.current += 1;
      } else {
        clearInterval(typeInterval);

        setTimeout(() => {
          setShowOverlay(true);
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(typeInterval);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (showOverlay && overlayRef.current) {
      gsap.fromTo(
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
    }
  }, [showOverlay, onFinish]);

  return (
    <div className="fixed inset-0 bg-cream flex items-center justify-center h-screen z-9999 overflow-hidden">
      <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-8xl text-text-primary tracking-tight">
        {typedText}
      </h1>

      {showOverlay && (
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-white clip-diagonal-lg z-50 overflow-hidden h-screen"
        />
      )}
    </div>
  );
};

export default LoadingScreen;
