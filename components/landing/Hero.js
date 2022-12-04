import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-full bg-bgPrimary clip-hero pb-10">
      <div className="container mx-auto px-6 py-4 flex flex-col-reverse gap-2 md:gap-6 md:flex-row">
        <div className="space-y-8 md:w-1/2 md:pt-6 lg:mt-10">
          <div className="text-center md:text-left">
            <span className="text-green-400 tracking-wider">
              Professional Dietician
            </span>
            <h1 className="text-4xl text-gray-800 font-bold md:leading-tight lg:text-5xl lg:leading-tight font-nunito">
              Eat Healthy Live Healthy Today
            </h1>
            <p className="text-gray-600 lg:text-lg my-5 md:my-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius mod tempor incididunt ut labore et dolore magna aliqua.
              Utenim adminim veniam, quis nostrud exercitation ullam.
            </p>

            <div className="flex justify-center space-x-2 md:justify-start">
              <button
                type="button"
                className="btn bg-green-500 hover:bg-green-400 focus:bg-green-400"
              >
                Get Srarted
              </button>
              <button
                type="button"
                className="btn bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400"
              >
                Meal Plan
              </button>
            </div>
          </div>
        </div>

        <div className="w-4/5 mx-auto md:w-1/2">
          <Image
            src="/img/hero.png"
            width={550}
            height={555}
            layout="responsive"
            alt="Hero"
            className="imgAnimation"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
