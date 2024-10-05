import React from "react";

function About() {
  return (
    <div className="mb-24 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="py-4 text-2xl text-slate-800 dark:text-slate-300">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 leading-loose">
          In 2023, I completed my Master's degree in Computer-Aided Engineering
          at{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200 z-10 transition-all duration-300 ease-in-out">
            <a
              href="https://www.ntu.edu.tw/"
              target="_blank"
              rel="noopener"
              className="hover-underline-animation left"
            >
              National Taiwan University
            </a>
          </span>
          , where I developed a robust foundation in computer science and data
          science. Throughout my academic journey, I garnered valuable
          experience through publications in both international and domestic
          journals.
        </p>
        <p className="mb-4 leading-loose">
          Following my graduation from NTU, I joined the{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200 transition-all duration-300 ease-in-out">
            <a
              href="https://www.e3group.caece.net/"
              target="_blank"
              rel="noopener"
              className="hover-underline-animation left"
            >
              E3 research group
            </a>
          </span>{" "}
          as a research assistant. Engaging in the Taiwan Presidential
          Hackathon, my focus was on crafting a system for carbon reduction in
          transportation and energy, earning us a spot in the finals and an
          honourable mention.
        </p>
        <p className="mb-4 leading-loose">
          These diverse experiences have not only enhanced my technical
          proficiency but also nurtured a collaborative and innovative mindset.
          I am eager to apply this comprehensive background to make impactful
          contributions in the field of software engineering.
        </p>

        <div
          className="relative mt-6 svg-container w-full h-[500px] bg-no-repeat bg-fixed bg-center bg-cover rounded-2xl"
          style={{
            backgroundImage: "url('/map_bg.webp')",
          }}
        >
          <svg
            className="absolute"
            style={{
              top: "72%",
              left: "52%",
              transform: "translate(-50%, -50%)", // Optional: center the SVG around the top-left corner of its position
            }}
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g transform="translate(200,200)">
              <circle id="core" cx="0" cy="0" r="8"></circle>
              <circle id="radar" cx="0" cy="0" r="8"></circle>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
