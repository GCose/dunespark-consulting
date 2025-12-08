import Image from "next/image";
import Link from "next/link";

const PromiseSection = () => {
  return (
    <>
      <section className="min-h-screen md:mt-30 bg-pure-white">
        <div className="grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
          <div className="col-span-12 mb-16">
            <h2 className="font-display font-extrabold text-text-primary leading-[1.05] md:max-w-400 tracking-tight text-[clamp(2.2rem,5vw,7rem)]">
              OUR PROMISE , GROWTH MADE SIMPLE, SMART, AND SUSTAINABLE
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="relative aspect-3/4 overflow-hidden">
              <Image
                fill
                alt="Growth systems"
                src="/images/home-page/promise.webp"
                className="object-cover clip-diagonal-sm"
              />
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:col-start-7 flex flex-col pt-0">
            <div className="space-y-8">
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
                At Dunespark, we believe{" "}
                <strong className="font-bold text-terracotta">
                  growth is a system , not a project.
                </strong>
              </p>
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
                We don{"'"}t chase quick fixes or spread-your-budget-thin
                approaches. We build modular, AI-powered growth systems designed
                to work in harmony , solving your biggest bottlenecks and
                compounding results over time.
              </p>
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl leading-relaxed">
                With Dunespark, you don{"'"}t get service providers , you get{" "}
                <strong className="font-bold text-terracotta">
                  strategic growth architects
                </strong>{" "}
                who install your business{"'"}s revenue engine.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-start md:justify-end gap-4 mt-10">
              <Link
                href="/contact"
                className="group clip-diagonal-xl block w-full md:w-auto px-5 md:px-10 py-4 md:py-5 border-2 border-warm-sand text-terracotta font-medium text-center hover:bg-warm-sand hover:text-white transition-all duration-300"
              >
                <span className="font-display font-bold uppercase tracking-wider text-[clamp(1rem,2vw,1.4rem)]">
                  Book Discovery Call
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 mt-32">
        <div className="grid grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
          <div className="col-span-12 md:col-span-6 md:col-start-7 text-right space-y-6">
            <h3 className="font-display font-bold text-text-primary text-3xl md:text-4xl lg:text-6xl leading-tight">
              NO GUESSWORK. NO WASTED TIME.
            </h3>
            <p className="text-text-secondary text-xl font-medium md:text-2xl lg:text-3xl">
              Just automated, elegant systems that generate
            </p>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-8 mt-8">
            <div className="col-span-12 md:col-span-6 bg-cream p-8 relative gap-6 md:min-h-[800px] flex flex-col">
              <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-120 leading-tight">
                High-quality leads without manual outreach
              </h4>
              <div className="mt-auto ml-auto relative w-50 h-50 md:w-80 md:h-80 lg:w-150 lg:h-140">
                <Image
                  fill
                  alt="Leads generation"
                  className="object-cover"
                  src="/images/home-page/promise-card-1.webp"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 bg-cream p-8 relative gap-6 md:min-h-[800px] flex flex-col">
              <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-120 leading-tight">
                Data-backed sales prep that closes faster
              </h4>
              <div className="mt-auto ml-auto relative w-50 h-50 md:w-80 md:h-80 lg:w-150 lg:h-140">
                <Image
                  fill
                  alt="Sales preparation"
                  className="object-cover"
                  src="/images/home-page/promise-card-2.webp"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 bg-cream p-8 relative gap-6 md:min-h-[800px] flex flex-col">
              <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-160 leading-tight">
                Seamless onboarding experiences that retain clients longer
              </h4>
              <div className="mt-auto ml-auto relative w-50 h-50 md:w-80 md:h-80 lg:w-150 lg:h-140">
                <Image
                  fill
                  alt="Client onboarding"
                  className="object-cover"
                  src="/images/home-page/promise-card-3.webp"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6 bg-cream p-8 relative gap-6 md:min-h-[800px] flex flex-col">
              <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-120 leading-tight">
                Continuous optimization that evolves with your business
              </h4>
              <div className="mt-auto ml-auto relative w-50 h-50 md:w-80 md:h-80 lg:w-150 lg:h-140">
                <Image
                  fill
                  className="object-cover"
                  alt="Business optimization"
                  src="/images/home-page/promise-card-4.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromiseSection;
