import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experienceData } from "../data/portfolioData";

const Details = ({
  position,
  company,
  time,
  address,
  work,
  selectedContributions,
  technologies,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-start justify-between lg:w-[75%] md:w-[85%] sm:w-[90%]"
    >
      <div className="relative w-full">
        {/* Animated timeline indicator */}
        <div className="absolute -left-[3.8rem] md:-left-[2.8rem] sm:-left-[2.3rem] top-1">
          <div className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-dark dark:bg-light flex items-center justify-center p-1 shadow-md">
            <div className="w-3.5 h-3.5 sm:w-2.5 sm:h-2.5 rounded-full bg-primary dark:bg-primaryDark animate-pulse" />
          </div>
        </div>

        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-dark dark:text-light">
          {position}&nbsp;
          <span className="text-primary dark:text-primaryDark">@{company}</span>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 text-sm xs:text-xs">
          {time} {address ? `| ${address}` : ""}
        </span>

        {/* Core Responsibilities */}
        <ul className="font-normal w-full text-sm sm:text-xs text-dark/90 dark:text-light/90 mt-4 space-y-2 list-disc list-inside">
          {work.map((point, index) => (
            <li key={index} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>

        {/* Selected Project Contributions */}
        {selectedContributions && selectedContributions.length > 0 && (
          <div className="mt-5 p-4 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 w-full">
            <h4 className="font-bold text-xs uppercase tracking-wider text-primary dark:text-primaryDark mb-2.5">
              Selected Client &amp; Internship Contributions
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs text-dark/85 dark:text-light/85">
              {selectedContributions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-primary dark:text-primaryDark font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-dark dark:text-light">{item.project}:</strong>{" "}
                    {item.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {technologies && (
          <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-dark/10 dark:border-light/10">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs sm:text-[11px] font-semibold rounded-md bg-dark/5 dark:bg-light/10 text-dark dark:text-light"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section id="experience" className="my-24 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl text-dark dark:text-light">
          Experience
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-base md:text-sm mt-3 max-w-xl mx-auto">
          Practical software and web development experience working on real-world client platforms.
        </p>
      </div>

      <div ref={ref} className="w-[80%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Animated vertical timeline bar */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:left-[30px] sm:left-[22px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {experienceData.map((exp, index) => (
            <Details
              key={index}
              position={exp.role}
              company={exp.company}
              time={exp.period}
              address={exp.type}
              work={exp.points}
              selectedContributions={exp.selectedContributions}
              technologies={exp.technologies}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
