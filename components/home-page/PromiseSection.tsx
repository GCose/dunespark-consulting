import Image from "next/image";

const PromiseSection = () => {
  return (
    <>
      <section className="min-h-screen py-fluid-md mt-20 bg-pure-white">
        <div className="">
          <div className="mb-16 lg:mb-44">
            <h2 className="font-display font-extrabold text-text-primary leading-[1.05] md:max-w-400 tracking-tight text-4xl md:text-6xl lg:text-7xl">
              OUR PROMISE , GROWTH MADE SIMPLE, SMART, AND SUSTAINABLE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(1.5rem,3vw,2.5rem)]">
            <div className="lg:col-span-6">
              <div className="relative aspect-3/4 overflow-hidden">
                <Image
                  fill
                  alt="Growth systems"
                  className="object-cover"
                  src="/images/home-page/promise.webp"
                  style={{ filter: "saturate(0.85)" }}
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-start pt-0">
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl md:leading-10">
                At Dunespark, we believe{" "}
                <strong className="font-bold text-terracotta">
                  growth is a system , not a project.
                </strong>
              </p>
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl md:leading-10 mt-8">
                We don{"'"}t chase quick fixes or spread-your-budget-thin
                approaches. We build modular, AI-powered growth systems designed
                to work in harmony , solving your biggest bottlenecks and
                compounding results over time.
              </p>
              <p className="text-text-primary text-xl font-medium md:text-2xl lg:text-3xl md:leading-10 mt-8">
                With Dunespark, you don{"'"}t get service providers , you get{" "}
                <strong className="font-bold text-terracotta">
                  strategic growth architects
                </strong>{" "}
                who install your business{"'"}s revenue engine.
              </p>
            </div>

            <div className="hidden lg:block lg:col-span-1" />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className=" px-8">
          <div className="grid grid-cols-1 gap-16">
            <div className="text-right space-y-6">
              <h3 className="font-display font-bold text-text-primary text-3xl md:text-4xl lg:text-6xl leading-tight">
                NO GUESSWORK. NO WASTED TIME.
              </h3>
              <p className="text-text-secondary text-xl font-medium md:text-2xl lg:text-3xl">
                Just automated, elegant systems that generate
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-cream p-8 relative min-h-[800px] flex flex-col">
                <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-120 leading-tight">
                  High-quality leads without manual outreach
                </h4>
                <div className="mt-auto ml-auto relative w-80 h-80 lg:w-150 lg:h-140">
                  <Image
                    fill
                    alt="Leads generation"
                    className="object-cover"
                    src="/images/home-page/promise-card-1.webp"
                  />
                </div>
              </div>

              <div className="bg-cream p-8 relative min-h-[800px] flex flex-col">
                <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-120 leading-tight">
                  Data-backed sales prep that closes faster
                </h4>
                <div className="mt-auto ml-auto relative w-80 h-80 lg:w-150 lg:h-140">
                  <Image
                    fill
                    alt="Sales preparation"
                    className="object-cover"
                    src="/images/home-page/promise-card-2.webp"
                  />
                </div>
              </div>

              <div className="bg-cream p-8 relative min-h-[800px] flex flex-col">
                <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-160 leading-tight">
                  Seamless onboarding experiences that retain clients longer
                </h4>
                <div className="mt-auto ml-auto relative w-80 h-80 lg:w-150 lg:h-140">
                  <Image
                    fill
                    alt="Client onboarding"
                    className="object-cover"
                    src="/images/home-page/promise-card-3.webp"
                  />
                </div>
              </div>

              <div className="bg-cream p-8 relative min-h-[800px] flex flex-col">
                <h4 className="font-display font-semibold text-text-primary text-xl md:text-4xl max-w-120 leading-tight">
                  Continuous optimization that evolves with your business
                </h4>
                <div className="mt-auto ml-auto relative w-80 h-80 lg:w-150 lg:h-140">
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
        </div>
      </section>
    </>
  );
};

export default PromiseSection;
