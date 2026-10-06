import React from "react";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="absolute left-6 bottom-6 lg:left-4 lg:bottom-4 md:hidden flex items-center justify-center z-10">
      <div className="w-36 h-36 xl:w-28 xl:h-28 flex items-center justify-center relative">
        <svg
          className="animate-spin-slow w-full h-full text-dark dark:text-light"
          viewBox="0 0 300 300"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
            />
          </defs>
          <text className="text-[14.5px] font-semibold tracking-widest fill-dark dark:fill-light uppercase">
            <textPath href="#circlePath" startOffset="0%">
              • TANISHK PATIDAR • FULL-STACK DEVELOPER • SOFTWARE ENGINEER
            </textPath>
          </text>
        </svg>

        <Link
          href="#contact"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-16 h-16 xl:w-12 xl:h-12 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light text-center text-xs xl:text-[10px] transition-all duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
