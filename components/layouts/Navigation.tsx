import { useState, useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed max-w-editorial top-0 left-0 right-0 z-50 bg-pure-white/80 backdrop-blur-md border-b border-text-primary/5 px-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl font-bold tracking-tight text-text-primary hover:text-terracotta transition-premium"
        >
          DUNESPARK
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link
            href="/services"
            className="text-lg font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
          >
            About
          </Link>
          <Link
            href="/work"
            className="text-lg font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
          >
            Work
          </Link>
          <Link
            href="/insights"
            className="text-lg font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
          >
            Insights
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
