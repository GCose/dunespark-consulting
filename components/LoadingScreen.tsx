import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

type LoadingScreenProps = {
  onFinish: () => void;
};

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [typedText, setTypedText] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [videosLoaded, setVideosLoaded] = useState(false);
  const text = "DUNESPARK CONSULTING";
  const indexRef = useRef(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const typeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // List of all videos that need to be preloaded
  const videoUrls = [
    "/videos/home-page/hero-section.mp4",
    "/videos/home-page/hero-section2.mp4",
    "/videos/home-page/hero-section3.mp4",
    "/videos/home-page/apart-section.mp4",
    "/videos/home-page/process-section.mp4",
    "/videos/home-page/benefits-section.mp4",
  ];

  // Preload all videos
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

      const handleCanPlayThrough = () => {
        loadedCount++;
        console.log(`Video loaded: ${url} (${loadedCount}/${totalVideos})`);

        if (loadedCount === totalVideos) {
          console.log("All videos loaded!");
          setVideosLoaded(true);
        }
      };

      const handleError = () => {
        console.error(`Failed to load video: ${url}`);
        loadedCount++;

        if (loadedCount === totalVideos) {
          setVideosLoaded(true);
        }
      };

      video.addEventListener("canplaythrough", handleCanPlayThrough);
      video.addEventListener("error", handleError);

      video.load();
      videoElements.push(video);
    });

    return () => {
      videoElements.forEach((video) => {
        video.src = "";
        video.load();
      });
    };
  }, []);

  // Typing animation
  useEffect(() => {
    document.body.style.overflow = "hidden";

    typeIntervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        const char = text.charAt(indexRef.current);
        setTypedText((prev) => prev + char);
        indexRef.current += 1;
      } else {
        // Text is done typing, but keep looping if videos aren't loaded
        if (videosLoaded) {
          if (typeIntervalRef.current) {
            clearInterval(typeIntervalRef.current);
          }

          setTimeout(() => {
            setShowOverlay(true);
          }, 500);
        } else {
          // Reset and keep typing while videos load
          indexRef.current = 0;
          setTypedText("");
        }
      }
    }, 100);

    return () => {
      if (typeIntervalRef.current) {
        clearInterval(typeIntervalRef.current);
      }
      document.body.style.overflow = "";
    };
  }, [videosLoaded]);

  // Overlay animation
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
      <div className="text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-8xl text-terracotta tracking-tight mb-4">
          {typedText}
        </h1>
        {!videosLoaded && (
          <p className="text-text-secondary text-sm md:text-base mt-4">
            Loading experience...
          </p>
        )}
      </div>

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
