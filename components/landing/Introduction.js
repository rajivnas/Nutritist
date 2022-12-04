import Image from "next/image";

const Introduction = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto px-6 py-10 flex flex-col gap-4 md:py-16 md:gap-2 md:flex-row lg:py-20 lg:gap-6">
        <div className="mx-auto md:w-1/2">
          <Image
            src="/img/nutritionist-concept.png"
            width={600}
            height={540}
            alt="Intro"
          />
        </div>
        <div className="md:w-1/2">
          <span className="text-green-400 tracking-wider">About Nutritist</span>
          <h1 className="text-2xl text-gray-700 font-bold md:text-3xl lg:text-4xl lg:font-bold font-nunito">
            Care About Nutrition <br className="hidden md:block" /> For Your
            Health
          </h1>
          <p className="text-gray-600 lg:text-lg mt-2 mb-5 font-nunito">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            dignissim lectus. Pellentesque et scelerisque nunc.
          </p>
          <div className="flex flex-col space-y-2 text-gray-900 opacity-75 md:flex-row md:gap-2 lg:gap-16 lg:font-medium lg:text-gray-700 font-nunito">
            <ol className="space-y-2 md:space-y-3">
              <li>
                <span>&#10003;</span> Children Nutrition
              </li>
              <li>
                <span>&#10003;</span> Lifestyle In Pregnancy
              </li>
              <li>
                <span>&#10003;</span> Diet Health Service
              </li>
              <li>
                <span>&#10003;</span> Digestive Problems
              </li>
            </ol>

            <ol className="space-y-2 md:space-y-3">
              <li>
                <span>&#10003;</span> Balance Body & Mind
              </li>
              <li>
                <span>&#10003;</span> Workout Routines
              </li>
              <li>
                <span>&#10003;</span> Poor Eating Habits
              </li>
              <li>
                <span>&#10003;</span> Protein Advices
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
