import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/portfolioData";

const SkillBadge = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.08 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="w-full my-24 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl text-dark dark:text-light">
          Technical Skills
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-base md:text-sm mt-3 max-w-2xl mx-auto">
          Core programming languages, web frameworks, backend architectures, databases, and active problem-solving competencies.
        </p>
      </div>

      {/* Circular Interactive Skill Radar */}
      <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full overflow-hidden bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm mb-16">
        <motion.div
          className="flex items-center justify-center rounded-full font-bold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs text-center z-10"
          whileHover={{ scale: 1.05 }}
        >
          Full-Stack
          <br />
          Core
        </motion.div>

        {/* Inner Ring */}
        <SkillBadge name="C++" x="-20vw" y="2vw" />
        <SkillBadge name="JavaScript" x="-5vw" y="-10vw" />
        <SkillBadge name="React.js" x="20vw" y="6vw" />
        <SkillBadge name="Node.js" x="0vw" y="12vw" />
        <SkillBadge name="Next.js" x="-20vw" y="-15vw" />

        {/* Mid Ring */}
        <SkillBadge name="Express.js" x="15vw" y="-12vw" />
        <SkillBadge name="MongoDB" x="32vw" y="-5vw" />
        <SkillBadge name="Tailwind CSS" x="0vw" y="-20vw" />
        <SkillBadge name="REST APIs" x="-25vw" y="18vw" />
        <SkillBadge name="Git & GitHub" x="18vw" y="18vw" />

        {/* Outer Ring */}
        <SkillBadge name="C" x="-35vw" y="-2vw" />
        <SkillBadge name="Postman" x="28vw" y="-18vw" />
        <SkillBadge name="Mongoose" x="-12vw" y="-24vw" />
        <SkillBadge name="HTML5 & CSS3" x="-32vw" y="-14vw" />
        <SkillBadge name="DSA (C++)" x="-2vw" y="24vw" />
      </div>

      {/* Honest Categorized Skill Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {/* Languages */}
        <div className="bg-light dark:bg-dark/70 border border-dark/15 dark:border-light/15 rounded-2xl p-6 shadow-sm hover:border-dark/40 dark:hover:border-light/40 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <h3 className="font-bold text-xl text-dark dark:text-light">
              Languages
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.languages.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark/5 dark:bg-light/10 text-dark dark:text-light border border-dark/10 dark:border-light/10"
              >
                {skill.name}{" "}
                <span className="text-xs text-dark/60 dark:text-light/60">
                  ({skill.level})
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Frontend / Web */}
        <div className="bg-light dark:bg-dark/70 border border-dark/15 dark:border-light/15 rounded-2xl p-6 shadow-sm hover:border-dark/40 dark:hover:border-light/40 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
            <h3 className="font-bold text-xl text-dark dark:text-light">
              Frontend &amp; Web
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.frontend.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark/5 dark:bg-light/10 text-dark dark:text-light border border-dark/10 dark:border-light/10"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="bg-light dark:bg-dark/70 border border-dark/15 dark:border-light/15 rounded-2xl p-6 shadow-sm hover:border-dark/40 dark:hover:border-light/40 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <h3 className="font-bold text-xl text-dark dark:text-light">
              Backend Engineering
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.backend.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark/5 dark:bg-light/10 text-dark dark:text-light border border-dark/10 dark:border-light/10"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="bg-light dark:bg-dark/70 border border-dark/15 dark:border-light/15 rounded-2xl p-6 shadow-sm hover:border-dark/40 dark:hover:border-light/40 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <h3 className="font-bold text-xl text-dark dark:text-light">
              Databases
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.database.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark/5 dark:bg-light/10 text-dark dark:text-light border border-dark/10 dark:border-light/10"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Workflow */}
        <div className="bg-light dark:bg-dark/70 border border-dark/15 dark:border-light/15 rounded-2xl p-6 shadow-sm hover:border-dark/40 dark:hover:border-light/40 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
            <h3 className="font-bold text-xl text-dark dark:text-light">
              Developer Tools
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.tools.map((skill) => (
              <span
                key={skill.name}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-dark/5 dark:bg-light/10 text-dark dark:text-light border border-dark/10 dark:border-light/10"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Active Learning - DSA Patterns */}
        <div className="bg-gradient-to-br from-dark/5 to-primary/10 dark:from-light/5 dark:to-primaryDark/10 border border-primary/30 dark:border-primaryDark/30 rounded-2xl p-6 shadow-sm md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-3 h-3 rounded-full bg-primary dark:bg-primaryDark animate-pulse"></span>
            <h3 className="font-bold text-xl text-dark dark:text-light">
              Active Learning: DSA (C++)
            </h3>
          </div>
          <p className="text-xs text-dark/70 dark:text-light/70 mb-3">
            Pattern-based problem solving and algorithmic reasoning:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {skillsData.currentLearning.patterns.map((pattern) => (
              <span
                key={pattern}
                className="px-2.5 py-1 rounded-md text-xs font-medium bg-light dark:bg-dark text-dark dark:text-light border border-dark/10 dark:border-light/10"
              >
                {pattern}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
