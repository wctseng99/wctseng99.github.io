import React from "react";
import { BsLink45Deg, BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

function Experience() {
  return (
    <div className="mb-24 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="py-4 text-2xl text-slate-800 dark:text-slate-300 ">
          Experience
        </h2>
      </div>
      <div className="mb-12 lg:hover:bg-gray-100/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          AUG 2023 - OCT 2023
        </header>
        <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-cyan-300">
          <div>
            <div className="inline-flex items-center font-medium leading-tight text-base">
              <a
                href="https://e3group.caece.net/"
                target="_blank"
                rel="noopener"
              >
                <span>Research Assistant • E3 Research Group @ NTU</span>
              </a>
              <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
            </div>
          </div>
        </h3>

        <p className="mb-4 leading-loose">
          In this role, my team and I designed a comprehensive strategy system
          to tackle key questions regarding electric vehicles in Taiwan,
          including assessing the impact of transitioning to electric vehicles
          on carbon reduction, examining the feasibility of achieving complete
          electrification of transportation by 2040, analyzing annual carbon
          reduction benefits until 2050 under various policy orientations, and
          recommending optimal allocation of transportation subsidies for
          maximum carbon reduction benefits.
        </p>

        {/* <ul className="mt-2 flex flex-wrap">
          <li className="mr-4">
            <a
              className="mt-2 inline-flex items-center text-sm font-medium"
              href="https://github.com/wctseng99/presidential-cup-hackathon-2023"
              target="_blank"
              rel="noopener"
            >
              <BsLink45Deg className="mr-1.5" />
              <span className="hover-underline-animation left bottom-0">
                AI Net Zero Think Tank
              </span>
            </a>
          </li>
          <li className="mr-4">
            <a
              className="mt-2 inline-flex items-center text-sm font-medium"
              href="https://github.com/wctseng99/emission-intensity-tw"
              target="_blank"
              rel="noopener"
            >
              <BsLink45Deg className="mr-1.5" />
              <span className="hover-underline-animation left bottom-0">
                Emission Intensity
              </span>
            </a>
          </li>
        </ul> */}
        <ul className="mt-2 flex flex-wrap mb-4">
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Python
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Data Science
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Game theory
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Computational Statistics
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Git
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              GitHub
            </div>
          </li>
        </ul>
        <img
          src="/ra.png"
          alt="Research"
          className="rounded-xl mt-2 w-full max-w-xl mx-auto group-hover:shadow-xl"
        ></img>
      </div>

      <div className="mb-12 lg:hover:bg-gray-100/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          AUG 2022 - FEB 2023
        </header>
        <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-cyan-300">
          <div>
            <div className="inline-flex items-center font-medium leading-tight text-base">
              <a
                href="http://www.eng.ntu.edu.tw/"
                target="_blank"
                rel="noopener"
              >
                <span>Teaching Assistant • College of Engineering @ NTU</span>
              </a>
              <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
            </div>
          </div>
        </h3>

        <p className="mb-4 leading-loose">
          In my graduate studies, I served as a teaching assistant for the
          Energy Systems Engineering and Economics course (CIE5143/ ChemE5071).
          This role sharpened my leadership and communication skills. Teaching
          diverse subjects, including machine learning applications in renewable
          energy, data science in the energy industry, and energy economics,
          enabled me to adeptly convey intricate concepts and cultivate a
          collaborative learning environment.
        </p>
        <img src=""></img>
        <ul className="mt-2 flex flex-wrap">
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Python
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Machine Learning
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Time Series Forecasting
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Economics
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="mb-12">
        <h3 className="font-medium mb-2 leading-snug group">
          <div>
            <a
              className="inline-flex items-center font-medium leading-tight text-base"
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
            >
              <span className="hover:dark:text-slate-200 hover:text-blue-700">
                View Tseng's C.V.
              </span>
              <BsArrowUpRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:scale-125" />
            </a>
          </div>
        </h3>
      </div> */}
    </div>
  );
}

export default Experience;
