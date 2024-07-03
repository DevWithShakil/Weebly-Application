import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-teal-100 via-teal-500 to-teal-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Unlock All Your Digital Products
            <span className="sm:block mt-4 "> with a Simple Click. </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl sm:text-xl/relaxed">
          Uncover State-of-the-Art Assets Starting Now!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium transition-all text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded border border-teal-600 px-12 py-3 text-sm font-medium text-white transition-all hover:text-white hover:bg-teal-600 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
