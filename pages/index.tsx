import { useState } from "react";
import Layout from "@/components/layouts/Layout";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/home-page/HeroSection";
import ApartSection from "@/components/home-page/ApartSection";
import PromiseSection from "@/components/home-page/PromiseSection";
import ChallengesSection from "@/components/home-page/ChallengesSection";

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
        </>
      )}
    </Layout>
  );
};

export default Home;
