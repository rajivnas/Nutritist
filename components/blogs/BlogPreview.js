import Image from "next/image";

const BlogPreview = () => {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="md:flex flex-row gap-5 space-y-8">
        <div className="space-y-3 md:w-3/4">
          <Image src="/img/blog2.jpg" width={800} height={520} alt="blog" />
          <h1 className="card-title">
            Easy Weight Loss How To Prevent Chronic Disease – Dr. Trudi Deakin
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>

          <h2 className="text-xl text-blue-900 font-bold md:text-2xl md:font-semibold font-nunito">
            Best Products For Fitness Nutrition & Muscles
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <h2 className="text-xl text-blue-900 font-bold md:text-2xl md:font-semibold font-nunito">
            What are “normal” cholesterol levels?
          </h2>

          <p>
            Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa
            dolor, imperdiet nec consequat a, congue id sem. Maecenas malesuada
            faucibus finibus. Utenim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl  font-bold md:text-2xl md:font-semibold font-nunito">
            Written by :
          </h2>
          <p className="text-xl text-blue-900 font-bold md:font-semibold font-nunito">
            John Doe
          </p>

          <hr />

          <h2 className="text-xl  font-bold md:text-2xl md:font-semibold font-nunito">
            Posted on :
          </h2>
          <p className="text-xl text-blue-900 font-bold md:font-semibold font-nunito">
            September 21, 2021
          </p>

          <hr />

          <h2 className="text-xl  font-bold md:text-2xl md:font-semibold font-nunito">
            Tags :
          </h2>
          <p className="text-xl text-blue-900 font-bold md:font-semibold font-nunito">
            #Yoga
          </p>

          <hr />

          <h2 className="text-xl  font-bold md:text-2xl md:font-semibold font-nunito">
            Share :
          </h2>

          <hr />
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
