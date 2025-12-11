import { useState } from "react";
import Layout from "@/components/layouts/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/home-page/HeroSection";
import ApartSection from "@/components/home-page/ApartSection";
import PromiseSection from "@/components/home-page/PromiseSection";
import ChallengesSection from "@/components/home-page/ChallengesSection";
import GrowthEcosystemSection from "@/components/home-page/GrowthSection";
import ProcessSection from "@/components/home-page/ProcessSection";

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
        </>
      )}
    </Layout>
  );
};

export default Home;
