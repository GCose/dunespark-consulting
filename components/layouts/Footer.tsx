import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cream/80 py-fluid-sm px-4">
      <div className="grid-editorial pb-24">
        <div className="col-span-4">
          <h3 className="text-4xl font-display font-bold mb-6">Dunespark</h3>
          <p className="text-base text-text-secondary leading-relaxed max-w-sm">
            Engineering growth systems that work effortlessly, intelligently,
            and scale with your ambition.
          </p>
        </div>

        <div className="col-span-2"></div>

        <div className="col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-6">
            Services
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/kairo"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Growth Audit
              </Link>
            </li>
            <li>
              <Link
                href="/services/airo"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                AI Sales Prep
              </Link>
            </li>
            <li>
              <Link
                href="/services/onboard"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Client Onboarding
              </Link>
            </li>
            <li>
              <Link
                href="/services/nurture"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Retention Systems
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-6">
            Company
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/about"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-6">
            Connect
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@dunespark.com"
                className="text-base text-text-secondary hover:text-terracotta transition-premium"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid-editorial pt-12 border-t border-text-primary/10">
        <div className="col-span-6">
          <p className="text-sm text-text-tertiary">
            © {new Date().getFullYear()} Dunespark Consulting. All rights
            reserved.
          </p>
        </div>
        <div className="col-span-6 flex justify-end gap-8">
          <Link
            href="/privacy"
            className="text-sm text-text-tertiary hover:text-text-primary transition-premium"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-text-tertiary hover:text-text-primary transition-premium"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookies"
            className="text-sm text-text-tertiary hover:text-text-primary transition-premium"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
