import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

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

  const videoUrls = [
    "/videos/home-page/hero-section.mp4",
    "/videos/home-page/hero-section2.mp4",
    "/videos/home-page/hero-section3.mp4",
    "/videos/home-page/apart-section.mp4",
    "/videos/home-page/process-section.mp4",
    "/videos/home-page/benefits-section.mp4",
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
    let loadedCount = 0;
    const totalVideos = videoUrls.length;
    const videoElements: HTMLVideoElement[] = [];

    videoUrls.forEach((url) => {
      const video = document.createElement("video");
      video.src = url;
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;

      const handleLoaded = () => {
        loadedCount++;
        const currentProgress = Math.round((loadedCount / totalVideos) * 100);
        setProgress(currentProgress);

        if (loadedCount === totalVideos) {
          setTimeout(() => {
            setShowOverlay(true);
          }, 300);
        }
      };

      const handleError = () => {
        loadedCount++;
        const currentProgress = Math.round((loadedCount / totalVideos) * 100);
        setProgress(currentProgress);

        if (loadedCount === totalVideos) {
          setTimeout(() => {
            setShowOverlay(true);
          }, 300);
        }
      };

      video.addEventListener("canplaythrough", handleLoaded, { once: true });
      video.addEventListener("error", handleError, { once: true });

      video.load();
      videoElements.push(video);
    });

    return () => {
      videoElements.forEach((video) => {
        video.src = "";
        video.load();
      });
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
