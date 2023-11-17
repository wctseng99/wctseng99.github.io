import React from "react";
import { BsLink45Deg, BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

function Experience() {
  return (
    <div className="mb-16 text-slate-700 dark:text-slate-400">
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

        <p className="mb-4">
          In this role , My team and I have designed a transportation and energy
          carbon reduction strategy system that addresses several questions
          related to electric vehicles in Taiwan: 1. What is the impact of
          switching to electric vehicles on carbon reduction? 2. Can the goal of
          complete electrification of transportation by 2040 be achieved? 3.
          Under different policy orientations, what is the annual carbon
          reduction benefit until 2050? 4. Where should the government allocate
          transportation subsidies to maximize carbon reduction benefits? Key
          quantitative and qualitative results have been derived to facilitate
          government agencies and the public in making informed policy
          decisions.
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
              <span>TA • NTU College of Engineering</span>
              <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
            </a>
          </div>
        </h3>

        <p className="mb-4">
          During my tenure as a graduate student, I had the opportunity to
          serve as a teaching assistant for the course Energy Systems
          Engineering and Economics (CIE5143/ ChemE5071). This role not only
          allowed me to contribute to the academic environment but also enabled
          me to hone my leadership and communication skills. Taking charge of
          instructing diverse topics such as machine learning applications in
          renewable energy, data science in the energy industry, and energy
          economics, I developed a comprehensive understanding of effectively
          conveying complex concepts and fostering a collaborative learning
          environment.energy, data science in the energy industry, and energy
          economics.
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
      <div className="mb-12">
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
      </div>
    </div>
  );
}

export default Experience;
