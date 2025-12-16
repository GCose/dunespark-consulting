import { useState } from "react";
import Layout from "@/components/layouts/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import FAQSection from "@/components/home-page/FAQSection";
import CTASection from "@/components/home-page/CTASection";
import HeroSection from "@/components/home-page/HeroSection";
import ApartSection from "@/components/home-page/ApartSection";
import PromiseSection from "@/components/home-page/PromiseSection";
import ProcessSection from "@/components/home-page/ProcessSection";
import BenefitsSection from "@/components/home-page/BenefitsSection";
import ChallengesSection from "@/components/home-page/ChallengesSection";
import SuccessStoriesSection from "@/components/home-page/SuccessStories";
import GrowthEcosystemSection from "@/components/home-page/GrowthSection";
import PartnerBenefitsSection from "@/components/home-page/PartnerBenefitsSection";

const Home = () => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <Layout title="Dunespark Consulting | Growth Infrastructure That Works">
      {!loadingFinished && (
        <LoadingScreen onFinish={() => setLoadingFinished(true)} />
      )}

      {loadingFinished && (
        <>
          <HeroSection />
          <ChallengesSection />
          <PromiseSection />
          <ApartSection />
          <GrowthEcosystemSection />
          <ProcessSection />
          <BenefitsSection />
          <SuccessStoriesSection />
          <PartnerBenefitsSection />
          <FAQSection />
          <CTASection />
        </>
      )}
    </Layout>
  );
};

export default Home;
