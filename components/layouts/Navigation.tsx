import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-text-primary/5">
      <div className="container-editorial">
        <div className="grid-editorial items-center py-6">
          <div className="col-span-3">
            <Link
              href="/"
              className="text-2xl font-display font-bold tracking-tight text-text-primary hover:text-terracotta transition-premium"
            >
              Dunespark
            </Link>
          </div>

          <div className="col-span-6 flex justify-center items-center gap-12">
            <Link
              href="/services"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
            >
              About
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
            >
              Work
            </Link>
            <Link
              href="/insights"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-premium tracking-wide uppercase"
            >
              Insights
            </Link>
          </div>

          <div className="col-span-3 flex justify-end">
            <Link
              href="/contact"
              className="px-8 py-3 bg-terracotta text-cream text-sm font-medium tracking-wide uppercase hover:bg-terracotta-dark transition-premium"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
