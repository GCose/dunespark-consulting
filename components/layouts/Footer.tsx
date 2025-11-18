import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cream/80 px-4 pt-fluid-sm pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-[clamp(1.5rem,3vw,2.5rem)] pb-16 md:pb-20 lg:pb-24">
        <div className="md:col-span-2 lg:col-span-4">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            DUNESPARK
          </h3>
          <p className="text-lg text-text-secondary leading-relaxed max-w-sm">
            Engineering growth systems that work effortlessly, intelligently,
            and scale with your ambition.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xl font-semibold uppercase tracking-wider text-text-primary mb-4 md:mb-6">
            Services
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/kairo"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Growth Audit
              </Link>
            </li>
            <li>
              <Link
                href="/services/airo"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                AI Sales Prep
              </Link>
            </li>
            <li>
              <Link
                href="/services/onboard"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Client Onboarding
              </Link>
            </li>
            <li>
              <Link
                href="/services/nurture"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Retention Systems
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xl font-semibold uppercase tracking-wider text-text-primary mb-4 md:mb-6">
            Company
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/about"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/work"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Our Work
              </Link>
            </li>
            <li>
              <Link
                href="/insights"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xl font-semibold uppercase tracking-wider text-text-primary mb-4 md:mb-6">
            Resources
          </h4>
          <ul className="space-y-3">
            <li>
              <Link
                href="/resources/case-studies"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/resources/guides"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Guides
              </Link>
            </li>
            <li>
              <Link
                href="/resources/faq"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xl font-semibold uppercase tracking-wider text-text-primary mb-4 md:mb-6">
            Connect
          </h4>
          <ul className="space-y-3">
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@dunespark.com"
                className="text-lg text-text-secondary hover:text-terracotta transition-premium"
              >
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 pt-8 md:pt-12 border-t border-text-primary/10">
        <div>
          <p className="text-xl text-text-tertiary">
            © {new Date().getFullYear()} Dunespark Consulting. All rights
            reserved.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-end gap-4 md:gap-8">
          <Link
            href="/privacy"
            className="text-xl text-text-tertiary hover:text-text-primary transition-premium"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xl text-text-tertiary hover:text-text-primary transition-premium"
          >
            Terms of Service
          </Link>
          <Link
            href="/cookies"
            className="text-xl text-text-tertiary hover:text-text-primary transition-premium"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
