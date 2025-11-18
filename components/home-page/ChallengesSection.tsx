import Image from "next/image";

const ChallengesSection = () => {
  return (
    <section className="bg-cream rounded-full py-fluid-lg mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
        <div className="lg:col-span-10 md:mb-20">
          <h2 className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-3xl md:text-6xl lg:text-7xl mb-16 lg:mb-24">
            THE REAL CHALLENGE BEHIND YOUR GROWTH STRUGGLES
          </h2>
        </div>

        <div className="hidden lg:block lg:col-span-2" />

        <div className="lg:col-start-2 lg:col-span-4">
          <p className="text-terracotta text-2xl md:text-3xl lg:text-5xl font-bold md:leading-15">
            You{"'"}re not alone if this sounds familiar:
          </p>
        </div>

        <div className="hidden lg:block lg:col-span-1" />

        <div className="lg:col-span-5">
          <ul className="space-y-8">
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-8 md:leading-10">
              You{"'"}ve hired agencies and consultants, but their work feels
              disconnected , marketing, sales, software, all running separate
              races.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-8 md:leading-10">
              You spend heavily on ads, yet your leads are low-quality or
              inconsistent.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-8 md:leading-10">
              Your sales team scrambles without the insights they need to close
              confidently.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-8 md:leading-10">
              Client onboarding feels manual, clunky, and drains your time and
              resources.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-8 md:leading-10">
              The tech solutions you{""}ve tried are complex or don{""}t talk to
              each other , creating more headaches than help.
            </li>
          </ul>
        </div>

        <div className="hidden lg:block lg:col-span-1" />

        <div className="lg:col-start-2 lg:col-span-4 mt-20 lg:mt-32">
          <h3 className="font-display font-bold text-terracotta text-2xl md:text-4xl lg:text-5xl leading-tight">
            Why is growth so hard?
          </h3>
        </div>

        <div className="hidden lg:block lg:col-span-1" />

        <div className="lg:col-span-5 md:mt-32">
          <p className="text-text-primary font-medium text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Because{" "}
            <strong className="font-bold text-terracotta-dark">
              traditional growth models are broken.
            </strong>
            <br />
            They focus on isolated tasks, not the integrated outcomes your
            business truly needs.
          </p>
        </div>

        <div className="hidden lg:block lg:col-span-1" />

        <div className="hidden lg:block lg:col-start-2 lg:col-span-4" />

        <div className="hidden lg:block lg:col-span-1" />

        <div className="lg:col-span-5 ">
          <div className="relative w-full min-h-screen">
            <Image
              fill
              className="object-cover"
              style={{ filter: "saturate(0.85)" }}
              alt="Growth challenges visualization"
              src="/images/home-page/challenge.webp"
            />
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-1" />
      </div>
    </section>
  );
};

export default ChallengesSection;
