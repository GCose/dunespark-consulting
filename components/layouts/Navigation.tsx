import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/work", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed max-w-editorial top-0 left-0 right-0 z-50 bg-transparent border-b border-text-primary/5 px-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="py-4 md:py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl md:text-3xl font-bold tracking-tight text-text-tertiary hover:text-terracotta transition-premium"
        >
          DUNESPARK
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-text-primary focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`hidden md:flex items-center gap-8 lg:gap-12 transition-all`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium tracking-wide uppercase transition-premium ${
                pathname === link.href
                  ? "text-terracotta "
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-pure-white/95 backdrop-blur-md px-4 py-4 flex flex-col gap-4 border-t border-text-primary/5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium tracking-wide uppercase transition-premium ${
                pathname === link.href
                  ? "text-terracotta"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
