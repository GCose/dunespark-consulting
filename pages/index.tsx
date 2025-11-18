import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/home-page/HeroSection";
import PromiseSection from "@/components/home-page/PromiseSection";
import ChallengesSection from "@/components/home-page/ChallengesSection";

const Home = () => {
  return (
    <Layout title="Dunespark Consulting | Growth Infrastructure That Works">
      <HeroSection />
      <ChallengesSection />
      <PromiseSection />
    </Layout>
  );
};

export default Home;
