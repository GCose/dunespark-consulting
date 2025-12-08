import Link from "next/link";
import Image from "next/image";

const ChallengesSection = () => {
  return (
    <section className="py-fluid-lg md:mt-30 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)] relative z-10">
        <div className="lg:col-span-10">
          <h2 className="font-display font-extrabold text-text-primary leading-[1.05] tracking-tight text-[clamp(2.2rem,5vw,7rem)] mb-16 lg:mb-24">
            THE REAL CHALLENGE BEHIND YOUR GROWTH STRUGGLES
          </h2>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-12 relative z-10">
        <div className="lg:col-span-4 lg:col-start-2 pt-5 md:pt-20 border-y md:border-b-0 md:border-y-0 border-gray-500">
          <p className="text-terracotta text-2xl md:text-3xl lg:text-5xl font-bold md:leading-15 pb-5">
            You{"'"}re not alone if this sounds familiar:
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 md:border-l md:border-r border-gray-500 md:px-10 pt-5 md:pt-20">
          <ul className="space-y-8 mb-12">
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              You{"'"}ve hired agencies and consultants, but their work feels
              disconnected , marketing, sales, software, all running separate
              races.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              You spend heavily on ads, yet your leads are low-quality or
              inconsistent.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              Your sales team scrambles without the insights they need to close
              confidently.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              Client onboarding feels manual, clunky, and drains your time and
              resources.
            </li>
            <li className="text-text-primary font-medium text-xl md:text-3xl leading-relaxed">
              The tech solutions you{""}ve tried are complex or don{""}t talk to
              each other , creating more headaches than help.
            </li>
          </ul>
          <div className="mx-auto mt-10 flex flex-col md:flex-row items-start md:items-start md:justify-end gap-4">
            <Link
              href="/contact"
              className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand hover:bg-white hover:text-terracotta font-medium text-center bg-warm-sand text-white transition-all duration-300"
            >
              <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
                Run Free Audit
              </span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-2 pt-20 lg:pt-32">
          <h3 className="font-display font-bold text-terracotta text-2xl md:text-4xl lg:text-5xl leading-tight pb-5 pt-5 md:pt-20 border-y md:border-y-0 border-gray-500">
            Why is growth so hard?
          </h3>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 pt-12 flex flex-col gap-8 lg:pt-52 md:border-l md:border-r border-gray-500">
          <p className="text-text-primary font-medium text-xl md:text-2xl lg:text-3xl leading-relaxed md:px-10">
            Because{" "}
            <strong className="font-bold text-terracotta-dark">
              traditional growth models are broken.
            </strong>
            <br />
            They focus on isolated tasks, not the integrated outcomes your
            business truly needs.
          </p>
          <div className="relative w-full min-h-screen">
            <Image
              fill
              style={{ filter: "saturate(0.85)" }}
              alt="Growth challenges visualization"
              src="/images/home-page/challenge.webp"
              className="object-cover clip-diagonal-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
