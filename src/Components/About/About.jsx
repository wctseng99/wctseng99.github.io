import React from "react";

function about() {
  return (
    <div className="mb-16 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="font-serif py-4 text-base font-bold uppercase tracking-widest text-slate-800 dark:text-slate-300 ">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4">
          In 2023, I completed my Master's degree in Computer-Aided Engineering
          at{" "}
          <span className="font-bold hover:dark:text-slate-200 hover:text-blue-700">
            <a href="https://www.ntu.edu.tw/" target="_blank" rel="noopener">
              National Taiwan University
            </a>
          </span>
          , where relevant coursework includes Object-Oriented Programming, Data
          Structures and Algorithms, Machine Learning, Deep Learning,
          Computational Statistics Data Analytics, and Decentralized
          Applications.
        </p>
        <p className="mb-4">
          During this academic journey, active participation in various
          competitions and projects with my research lab colleagues led to
          several paper awards. I also gained valuable experience by publishing
          papers in both international and domestic journals. After graduating
          from NTU, I became a research assistant at the{" "}
          <span>
            <a
              className="font-bold hover:dark:text-slate-200 hover:text-blue-700"
              href="https://www.e3group.caece.net/"
              target="_blank"
              rel="noopener"
            >
              E3 research group
            </a>
          </span>
          . We participated in the 2023 Taiwan Presidential Hackathon, focusing
          on designing a transportation and energy carbon reduction strategy
          system, earning us a spot in the finals and an honourable mention.
        </p>
        <p className="mb-4"></p>
        <p className="mb-4">
          These cumulative experiences, ranging from academic coursework to
          research endeavors and practical applications, have not only
          strengthened my technical proficiency but also cultivated a
          collaborative and innovative mindset. I am enthusiastic about
          leveraging this comprehensive background to make meaningful
          contributions in the realm of software engineering.
        </p>
      </div>
    </div>
  );
}

export default about;
