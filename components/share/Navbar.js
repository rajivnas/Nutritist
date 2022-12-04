import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-bgPrimary relative">
      <nav className="container mx-auto p-4 md:p-6 top-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <h1 className="text-2xl font-bold text-green-900 cursor-pointer font-nunito lg:text-3xl">
                Nutritist<span className="text-green-300">.</span>
              </h1>
            </Link>
          </div>
          <div className="hidden space-x-10 text-green-800 md:flex">
            {navLinks.map((link, i) => {
              return (
                <div key={i}>
                  <Link className="text-md font-bold" href={link.path}>
                    <span className="cursor-pointer">{link.name}</span>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="hidden md:block">
            <Link href="/appointment">
              <button type="button" className="btnOutline">
                <span className="text-md font-semibold lg:text-lg">
                  Appointment
                </span>
              </button>
            </Link>
          </div>

          <div className="block md:hidden focus:outline-none">
            <div className={show ? "open" : ""}>
              <button
                className="block hamburger md:hidden focus:outline-none"
                onClick={() => setShow(!show)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={show ? "block" : "hidden"}>
        <div className="side-nav">
          {navLinks.map((link, i) => {
            return (
              <div className="text-lg text-gray-800 font-semibold" key={i}>
                <Link href={link.path}>
                  <span
                    className="cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    {link.name}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
