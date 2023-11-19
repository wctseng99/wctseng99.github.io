import React from "react";
import { BsLink45Deg, BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

function Experience() {
  return (
    <div className="mb-32 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="font-serif py-4 text-base font-bold uppercase tracking-widest text-slate-800 dark:text-slate-300 ">
          Experience
        </h2>
      </div>

      <div className="mb-12">
        <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          AUG 2023 - present
        </header>
        <h3 className="font-medium mb-2 leading-snug text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-sky-300 group">
          <div>
            <a
              className="inline-flex items-center font-medium leading-tight text-base"
              href="https://www.e3group.caece.net/"
              target="_blank"
              rel="noopener"
            >
              <span>RA • E3 Research Group @ NTU</span>
              <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
            </a>
          </div>
        </h3>

        <p className="mb-4 leading-loose">
          In this role, my team and I designed a comprehensive strategy system
          to tackle key questions regarding electric vehicles in Taiwan,
          including assessing the impact of transitioning to electric vehicles
          on carbon reduction, Examining the feasibility of achieving complete
          electrification of transportation by 2040, analyzing annual carbon
          reduction benefits until 2050 under various policy orientations, and
          recommending optimal allocation of transportation subsidies for
          maximum carbon reduction benefits.
        </p>
        <ul className="mt-2 flex flex-wrap">
          <li className="mr-4">
            <a
              className="mt-2 inline-flex items-center text-sm font-medium hover:text-blue-700 dark:hover:text-slate-200"
              href="https://github.com/wctseng99/emission-intensity-tw"
              target="_blank"
              rel="noopener"
            >
              <BsLink45Deg className="mr-1.5" />
              <span>Emission Intensity</span>
            </a>
          </li>
          <li className="mr-4">
            <a
              className="mt-2 inline-flex items-center text-sm font-medium hover:text-blue-700 dark:hover:text-slate-200"
              href="https://github.com/wctseng99/presidential-cup-hackathon-2023"
              target="_blank"
              rel="noopener"
            >
              <BsLink45Deg className="mr-1.5" />
              <span>AI Net Zero Think Tank</span>
            </a>
          </li>
        </ul>
        <ul className="mt-2 flex flex-wrap">
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Python
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Data Science
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Game theory
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Computational Statistics
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Git
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              GitHub
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-12">
        <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
          AUG 2022 - FEB 2023
        </header>
        <h3 className="font-medium mb-2 leading-snug text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-sky-300 group">
          <div>
            <a
              className="inline-flex items-center font-medium leading-tight text-base"
              href="http://www.eng.ntu.edu.tw/"
              target="_blank"
              rel="noopener"
            >
              <span>TA • College of Engineering @ NTU</span>
              <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
            </a>
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
        <ul className="mt-2 flex flex-wrap">
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Python
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Machine Learning
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Time Series Forecasting
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
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
