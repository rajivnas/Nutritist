import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bgPrimary clip-footer">
      <div className="container mx-auto p-4 py-16">
        <div className="flex flex-col md:flex-row justify-between space-y-5 md:space-y-0">
          <div className="md:w-1/4">
            <Link href="/">
              <h1 className="text-2xl font-bold text-green-900 cursor-pointer font-nunito lg:text-3xl mb-1">
                Nutritist<span className="text-green-300">.</span>
              </h1>
            </Link>
            <p className="text-sm text-gray-600 mt-2 font-nunito">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-nunito lg:text-2xl mb-1 md:mb-2">
              Quick Links
            </h2>
            <ol className="text-sm font-normal space-y-2 md:space-y-3">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Disclaimer</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-nunito lg:text-2xl mb-1 md:mb-2">
              Get in touch
            </h2>
            <ol className="text-sm font-normal space-y-2 md:space-y-3">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Disclaimer</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ol>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 font-nunito lg:text-2xl mb-1">
              Subscribe Now
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
