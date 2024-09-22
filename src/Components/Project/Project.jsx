import React from "react";
import { BsLink45Deg, BsArrowUpRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

function Project() {
  return (
    <div className="mb-24 text-slate-700 dark:text-slate-400">
      <div className="sticky lg:relative top-0 z-10 mb-4 backdrop-blur">
        <h2 className="py-4 text-2xl text-slate-800 dark:text-slate-300 ">
          Projects
        </h2>
      </div>

      <div className="mb-12 lg:hover:bg-gray-200/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <a href="https://wctseng99.github.io" target="_blank" rel="noopener">
          <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-cyan-300">
            <div>
              <div className="inline-flex items-center font-medium leading-tight text-base">
                <span>Personal Website</span>
                <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
              </div>
            </div>
          </h3>

          <p className="mb-4 leading-loose">
            My first portfolio website, built with React.js, Tailwind CSS, and
            Vite.js.
          </p>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-4">
              <a
                className="mt-2 inline-flex items-center text-sm font-medium hover:text-blue-700 dark:hover:text-slate-200"
                href="https://github.com/wctseng99/wctseng99.github.io"
                target="_blank"
                rel="noopener"
              >
                <BsLink45Deg className="mr-1.5" />
                <span>Learn more about the website.</span>
              </a>
            </li>
          </ul>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                JavaScript
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                React.js
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Tailwind CSS
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                GitHub Actions
              </div>
            </li>
          </ul>
        </a>
      </div>

      <div className="mb-12 lg:hover:bg-gray-200/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <a
          href="https://github.com/wctseng99/Mapin"
          target="_blank"
          rel="noopener"
        >
          <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-cyan-300">
            <div>
              <div className="inline-flex items-center font-medium leading-tight text-base">
                <span>Mapin - the Full Stack Project</span>
                <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
              </div>
            </div>
          </h3>

          <p className="mb-4 leading-loose">
            Ａ web app crafted with React.js, Express.js, MongoDB, Node.js, and
            Mapbox API, enables users to effortlessly share their favorite
            places. Clicking a pin reveals the place's details and the user who
            shared it. Additionally, users can easily share their preferred
            spots by double-clicking the map, fostering seamless exploration and
            collaboration.
          </p>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-4">
              <a
                className="mt-2 inline-flex items-center text-sm font-medium hover:text-blue-700 dark:hover:text-slate-200"
                href="https://github.com/wctseng99/Mapin"
                target="_blank"
                rel="noopener"
              >
                <BsLink45Deg className="mr-1.5" />
                <span>Learn more about Mapin.</span>
              </a>
            </li>
          </ul>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                JavaScript
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                React.js
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Node.js
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Express.js
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                MongoDB
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Axios
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Mapbox API
              </div>
            </li>
          </ul>
        </a>
      </div>
      <div className="mb-12 lg:hover:bg-gray-200/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <a
          href="https://wctseng99.github.io/travel-website-project/"
          target="_blank"
          rel="noopener"
        >
          <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-cyan-300">
            <div>
              <div className="inline-flex items-center font-medium leading-tight text-base">
                <span>MulTrip - the Front End Project</span>
                <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
              </div>
            </div>
          </h3>

          <p className="mb-4 leading-loose">
            This RWD frontend project, developed with React.js, seamlessly
            integrates GitHub Actions for CI/CD processes.
          </p>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-4">
              <a
                className="mt-2 inline-flex items-center text-sm font-medium hover:text-blue-700 dark:hover:text-slate-200"
                href="https://github.com/wctseng99/travel-website-project"
                target="_blank"
                rel="noopener"
              >
                <BsLink45Deg className="mr-1.5" />
                <span>Learn more about the MulTrip.</span>
              </a>
            </li>
          </ul>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                JavaScript
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                React.js
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Vite.js
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                SCSS
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                GitHub Actionss
              </div>
            </li>
          </ul>
        </a>
      </div>
      <div className="mb-12 lg:hover:bg-gray-200/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <a
          href="https://wctseng99.github.io/Simon/"
          target="_blank"
          rel="noopener"
        >
          <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-cyan-300">
            <div>
              <div className="inline-flex items-center font-medium leading-tight text-base">
                <span>Simon - the Web Memory Game</span>
                <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
              </div>
            </div>
          </h3>

          <p className="mb-4 leading-loose">
            Simon consists of a round plastic device with four large coloured
            buttons: red, blue, green, and yellow. The game has a built-in
            speaker that plays a series of random tones and lights up the
            corresponding buttons in a specific sequence. The player's objective
            is to replicate the sequence by pressing the buttons in the same
            order.
          </p>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-4">
              <a
                className="mt-2 inline-flex items-center text-sm font-medium hover:text-blue-700 dark:hover:text-slate-200"
                href="https://github.com/wctseng99/travel-website-project"
                target="_blank"
                rel="noopener"
              >
                <BsLink45Deg className="mr-1.5" />
                <span>Learn more about Simon.</span>
              </a>
            </li>
          </ul>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                JavaScript
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                CSS
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                HTML
              </div>
            </li>
          </ul>
        </a>
      </div>
      <div className="mb-12 lg:hover:bg-gray-200/60 dark:lg:hover:bg-gray-800/50 dark:lg:hover:drop-shadow-md lg:-ml-4 lg:px-4 lg:py-4 lg:rounded-lg group">
        <a href="http://cert.caece.net/" target="_blank" rel="noopener">
          <h3 className="font-medium mb-2 leading-snug text-blue-700 dark:text-cyan-300">
            <div>
              <div className="inline-flex items-center font-medium leading-tight text-base">
                <span>NTU CAECE NFT Certificate System</span>
                <AiOutlineArrowRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:translate-x-1" />
              </div>
            </div>
          </h3>

          <p className="mb-4 leading-loose">
            For the NTU CAECE summer internship's digital certificate system,
            users can log in using the MetaMask wallet and, after identity
            verification, mint their own blockchain-encrypted digital graduation
            certificates on Polygon.
          </p>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-4">
              <a
                className="mt-2 inline-flex items-center text-sm font-medium hover:text-blue-700 dark:hover:text-slate-200"
                href="https://github.com/Web3blockchain"
                target="_blank"
                rel="noopener"
              >
                <BsLink45Deg className="mr-1.5" />
                <span>Learn more about the system.</span>
              </a>
            </li>
          </ul>
          <ul className="mt-2 flex flex-wrap">
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Blockchain
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Solidity
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Smart Contract
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                React.js
              </div>
            </li>
            <li className="mr-2 mt-2">
              <div className="flex items-center rounded-full px-3 py-1 bg-slate-200 text-blue-700 dark:bg-sky-950 dark:text-cyan-400 text-xs font-medium leading-5">
                Linux
              </div>
            </li>
          </ul>
        </a>
      </div>
      {/* <div className="mb-12 ">
        <h3 className="font-medium mb-2 leading-snug group">
          <div>
            <a
              className="inline-flex items-center font-medium leading-tight text-base"
              href="https://github.com/wctseng99"
              target="_blank"
              rel="noopener"
            >
              <span className="hover:dark:text-slate-200 hover:text-blue-700">
                View more projects.
              </span>
              <BsArrowUpRight className="ml-2 text-xs shrink-0 transition-transform duration-100 ease-in-out group-hover:scale-125" />
            </a>
          </div>
        </h3>
      </div> */}
    </div>
  );
}

export default Project;
