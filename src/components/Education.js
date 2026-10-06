import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { educationData } from "../data/portfolioData";

const EducationDetails = ({ type, time, place, cgpa, info, location }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-start justify-between lg:w-[75%] md:w-[85%] sm:w-[90%]"
    >
      <div className="relative w-full">
        <div className="absolute -left-[3.8rem] md:-left-[2.8rem] sm:-left-[2.3rem] top-1">
          <div className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-dark dark:bg-light flex items-center justify-center p-1 shadow-md">
            <div className="w-3.5 h-3.5 sm:w-2.5 sm:h-2.5 rounded-full bg-primary dark:bg-primaryDark" />
          </div>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
            {type}
          </h3>
          {cgpa && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              {cgpa}
            </span>
          )}
        </div>

        <span className="capitalize font-semibold text-primary dark:text-primaryDark text-base md:text-sm mt-1 block">
          {place}
        </span>
        <div className="font-medium text-dark/75 dark:text-light/75 text-sm xs:text-xs mt-0.5">
          {time} {location ? `• ${location}` : ""}
        </div>
        {info && (
          <p className="font-normal w-full text-sm sm:text-xs text-dark/90 dark:text-light/90 mt-2.5 leading-relaxed">
            {info}
          </p>
        )}
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section id="education" className="my-24 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl text-dark dark:text-light">
          Education
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-base md:text-sm mt-3 max-w-xl mx-auto">
          Academic foundation in Information Technology, Computer Science, and Engineering.
        </p>
      </div>

      <div ref={ref} className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:left-[30px] sm:left-[22px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {educationData.map((edu, index) => (
            <EducationDetails
              key={index}
              type={edu.degree}
              place={edu.institution}
              time={edu.period}
              cgpa={edu.cgpa}
              location={edu.location}
              info={edu.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
