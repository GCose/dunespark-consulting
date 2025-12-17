import Layout from "@/components/layouts/Layout";
import CTASection from "@/components/home-page/CTASection";
import AboutHeroSection from "@/components/about-page/HeroSection";
import MissionVisionSection from "@/components/about-page/MissionVision";
import DifferenceSection from "@/components/about-page/DifferenceSection";

const AboutPage = () => {
  return (
    <Layout
      title="Dunespark Consulting | About Us"
      description="Growth shouldn't be guesswork. It should be engineered. Learn how Dunespark designs AI-powered growth systems that deliver real, measurable results."
    >
      <div className="circuit-board inset-0">
        <AboutHeroSection />
        <MissionVisionSection />
        <DifferenceSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default AboutPage;
