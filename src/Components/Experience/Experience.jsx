import React from "react";
import { BsLink45Deg, BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

function Experience() {
  return (
    <div className="mb-16 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="py-4 font-bold uppercase tracking-widest text-slate-800 dark:text-slate-300 ">
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
              <span>Research Assistant • E3 Research Group @ NTU</span>
              <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
            </a>
          </div>
        </h3>

        <p className="mb-4">
          Donec ligula velit, tempor a tincidunt eget, facilisis in dui. Nam
          convallis arcu in bibendum condimentum. Proin id dolor id mauris
          accumsan placerat ac sit amet ex. Ut quis placerat nisi. Suspendisse
          non dapibus tortor, ac tempor nisi. Vivamus bibendum pretium tempor.
          Nulla ac condimentum odio.
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
              Computational Statistics
            </div>
          </li>
          <li className="mr-2 mt-2">
            <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-sky-300 text-xs font-medium leading-5">
              Game theory
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
              <span>Teaching Assistant • NTU College of Engineering</span>
              <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
            </a>
          </div>
        </h3>

        <p className="mb-4">
          Donec ligula velit, tempor a tincidunt eget, facilisis in dui. Nam
          convallis arcu in bibendum condimentum. Proin id dolor id mauris
          accumsan placerat ac sit amet ex. Ut quis placerat nisi. Suspendisse
          non dapibus tortor, ac tempor nisi. Vivamus bibendum pretium tempor.
          Nulla ac condimentum odio.
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
