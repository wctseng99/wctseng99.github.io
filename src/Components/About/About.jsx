import React from "react";

function about() {
  return (
    <div className="mb-32 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="py-4 text-base font-bold tracking-widest text-slate-800 dark:text-slate-300 ">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 leading-loose">
          In 2023, I completed my Master's degree in Computer-Aided Engineering
          at{" "}
          <span className="font-semibold dark:text-cyan-300 text-blue-700 z-10 transition-all duration-300 ease-in-out">
            <a
              href="https://www.ntu.edu.tw/"
              target="_blank"
              rel="noopener"
              className="bg-left-bottom bg-gradient-to-r from-blue-700 to-blue-700 dark:from-cyan-300 dark:to-cyan-300 bg-[length:0%_1.3px] bg-no-repeat hover:bg-[length:100%_1.3px] transition-all duration-300 ease-out"
            >
              National Taiwan University
            </a>
          </span>
          , where I developed a robust foundation in computer science and data
          science. Throughout my academic journey, I garnered valuable
          experience through publications in both international and domestic
          journals.
        </p>{" "}
        <p className="mb-4 leading-loose">
          Following my graduation from NTU, I joined the{" "}
          <span className="font-semibold dark:text-cyan-300 text-blue-700 transition-all duration-300 ease-in-out">
            <a
              href="https://www.e3group.caece.net/"
              target="_blank"
              rel="noopener"
              className="bg-left-bottom bg-gradient-to-r from-blue-700 to-blue-700 dark:from-cyan-300 dark:to-cyan-300 bg-[length:0%_1.3px] bg-no-repeat hover:bg-[length:100%_1.3px] transition-all duration-300 ease-out"
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
      </div>
    </div>
  );
}

export default about;
