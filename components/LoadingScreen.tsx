import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";

type LoadingScreenProps = {
  onFinish: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [typedText, setTypedText] = useState("");
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const text = "DUNESPARK CONSULTING";
  const indexRef = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const typeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const assets = [
    "/videos/home-page/hero-section.mp4",
    "/videos/home-page/hero-section2.mp4",
    "/videos/home-page/challenges-section.mp4",
    "/videos/home-page/apart-section.mp4",
    "/videos/home-page/process-section.mp4",
    "/videos/home-page/benefits-section.mp4",
    "/videos/home-page/growth-section.mp4",
    "/images/home-page/hero-1.jpg",
    "/images/home-page/hero-2.jpg",
    "/images/home-page/promise-section.jpg",
    "/images/home-page/promise-card-1.webp",
    "/images/home-page/promise-card-2.webp",
    "/images/home-page/promise-card-3.webp",
    "/images/home-page/promise-card-4.webp",
    "/images/home-page/apart-1.webp",
    "/images/home-page/apart-2.webp",
    "/images/home-page/apart-3.webp",
    "/images/home-page/apart-4.webp",
    "/images/home-page/apart-5.webp",
    "/images/home-page/challenge.jpg",
  ];

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
      }
    }, 100);

    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let loaded = 0;
    const total = assets.length;

    const updateProgress = () => {
      loaded++;
      setProgress(Math.round((loaded / total) * 100));

      if (loaded === total) {
        setTimeout(() => setShowOverlay(true), 300);
      }
    };

    assets.forEach((url) => {
      if (url.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.muted = true;
        video.playsInline = true;

        video.addEventListener("loadeddata", updateProgress, { once: true });
        video.addEventListener("error", updateProgress, { once: true });

        video.src = url;
        video.load();
      } else {
        const img = new Image();
        img.onload = updateProgress;
        img.onerror = updateProgress;
        img.src = url;
      }
    });

    return () => {
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
    <div className="circuit-board fixed inset-0 bg-cream flex flex-col items-center justify-center h-screen z-9999 overflow-hidden">
      <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-8xl text-terracotta tracking-tight mb-8">
        {typedText}
      </h1>

      <p className="font-display font-bold text-3xl md:text-5xl text-text-primary">
        {progress}%
      </p>

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
