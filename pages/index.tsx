import Layout from "@/components/layouts/Layout";
import HeroSection from "@/components/home-page/HeroSection";
import PromiseSection from "@/components/home-page/PromiseSection";
import ChallengesSection from "@/components/home-page/ChallengesSection";
import ApartSection from "@/components/home-page/ApartSection";

const Home = () => {
  return (
    <Layout title="Dunespark Consulting | Growth Infrastructure That Works">
      <HeroSection />
      <ChallengesSection />
      <PromiseSection />
      <ApartSection />
    </Layout>
  );
};

export default Home;
