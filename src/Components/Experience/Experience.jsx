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
        <div className="flex items-center">
          <svg
            className="h-14 mr-4 mb-1 dark:hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
          >
            <image
              href="micron-logo.svg"
              x="0"
              y="0"
              width="150"
              height="150"
            />
          </svg>

          <svg
            className="h-14 mr-4 mb-1 hidden dark:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
          >
            <image
              href="micron-logo-white.svg"
              x="0"
              y="0"
              width="150"
              height="150"
            />
          </svg>
          <div>
            <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-slate-100">
              <div>
                <div className="inline-flex items-center font-medium leading-tight text-base">
                  <a
                    href="https://www.micron.com/"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Software Engineer • Micron Technology</span>
                  </a>
                  <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
                </div>
              </div>
            </h3>
            <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-cyan-500">
              JUL 2024 - Present
            </header>
          </div>
        </div>

        <p className="mb-4 leading-loose">
          As a member of the probe data team, I contributed to the development
          of systems for probe data collection, management, and processing,
          aimed at improving product classification and boosting production
          yield. Our team manages and maintains software across global
          manufacturing sites, overseeing over 1,200 Linux compute nodes. My
          role also involved optimizing ETL pipelines for seamless data
          processing from databases to web services, ensuring both efficiency
          and accuracy. Additionally, I designed web applications for data
          management, enabling smooth integration and transformation of cloud
          and local data storage.
        </p>
        <ul className="mt-2 flex flex-wrap mb-4">
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Database
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Linux
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Azure Cloud
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              CI/CD
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Docker
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Scrum
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              C++
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Typescript
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-cyan-950 dark:text-cyan-400 text-xs font-medium leading-5">
              Angular.js
            </div>
          </li>
        </ul>
      </div>

      <div className="mb-12 lg:hover:bg-gray-100/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <div className="flex items-center">
          <img src="e3-logo.svg" className="h-11 mr-4 mb-1" alt="E3 Icon" />
          <div>
            <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-slate-100">
              <div>
                <div className="inline-flex items-center font-medium leading-tight text-base">
                  <a
                    href="https://e3center.caece.net/"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Research Assistant • E3 Research Group @ NTU</span>
                  </a>
                  <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
                </div>
              </div>
            </h3>
            <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-cyan-500">
              AUG 2023 - OCT 2023
            </header>
          </div>
        </div>

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
          className="rounded-xl mt-2 w-full max-w-xl mx-auto shadow-xl"
        ></img>
      </div>

      <div className="mb-12 lg:hover:bg-gray-100/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <div className="flex items-center">
          <img src="NTU-logo.svg" className="h-14 mr-4 mb-1" alt="NTU Icon" />

          <div>
            <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-slate-100">
              <div>
                <div className="inline-flex items-center font-medium leading-tight text-base">
                  <a
                    href="http://www.eng.ntu.edu.tw/"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>
                      Teaching Assistant • College of Engineering @ NTU
                    </span>
                  </a>
                  <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
                </div>
              </div>
            </h3>
            <header className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-cyan-500">
              AUG 2022 - FEB 2023
            </header>
          </div>
        </div>
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
    </div>
  );
}

export default Experience;
