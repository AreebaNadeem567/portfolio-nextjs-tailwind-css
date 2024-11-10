import React from 'react';

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font bg-black min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-10 md:py-24">

          {/* About Box 1: Introduction */}
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-2/3 mb-8 md:mb-10 p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center">
              <h1 className="title-font text-3xl sm:text-4xl mb-4 font-medium text-gray-900 text-center">
                About Me
              </h1>
              <p className="mb-6 sm:mb-8 leading-relaxed text-lg sm:text-xl text-center">
                Hi, I&apos;m Areeba Nadeem, a passionate web developer from Karachi, currently studying BS Economics at Karachi University. 
                I specialize in HTML, CSS, TypeScript, and Next.js, building responsive and engaging websites.
                My focus is on mastering Next.js to deliver high-quality solutions. 
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;