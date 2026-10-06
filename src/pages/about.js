import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  return (
    <>
      <Head>
        <title>About Tanishk Patidar | Full-Stack Developer</title>
        <meta
          name="description"
          content="About Tanishk Patidar — Full-Stack Developer, B.Tech + M.Tech IT student at IIPS DAVV Indore (9.41 CGPA), C++ DSA, Node.js, Express, MongoDB."
        />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                Biography &amp; Career Objective
              </h2>
              {personalInfo.bio.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="font-normal text-dark/85 dark:text-light/85 mb-4 leading-relaxed text-sm md:text-xs"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="col-span-4 flex flex-col justify-between xl:col-span-4 md:col-span-8">
              <div className="p-8 rounded-3xl bg-light dark:bg-dark border border-dark/20 dark:border-light/20 shadow-xl relative mb-8">
                <div className="absolute top-0 -right-2.5 -z-10 w-[101.5%] h-[102.5%] rounded-[2rem] bg-dark dark:bg-light rounded-br-2xl" />
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <h4 className="font-bold text-lg text-dark dark:text-light">
                    Academic Focus
                  </h4>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    {personalInfo.cgpa} CGPA
                  </span>
                </div>
                <p className="text-sm font-semibold text-primary dark:text-primaryDark">
                  International Institute of Professional Studies (IIPS), DAVV, Indore
                </p>
                <p className="text-xs text-dark/70 dark:text-light/70 mt-1">
                  B.Tech + M.Tech (Information Technology) Dual Degree • 2025 – 2030
                </p>
                <p className="text-xs text-dark/80 dark:text-light/80 mt-3 leading-relaxed">
                  Actively engineering full-stack platforms, developing REST APIs, working with MongoDB, and solving core data structures problems in C++.
                </p>
              </div>

              {/* Stat Counters: 6+ Real Projects, 3+ Hackathons, SIH '26 Team Leader */}
              <div className="grid grid-cols-3 gap-4 sm:gap-2">
                <div className="flex flex-col items-center justify-center p-4 sm:p-2.5 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-center">
                  <span className="inline-block text-4xl font-bold md:text-2xl sm:text-xl text-dark dark:text-light">
                    6+
                  </span>
                  <h5 className="text-xs sm:text-[10px] font-semibold uppercase text-dark/70 dark:text-light/70 mt-1">
                    Real Projects
                  </h5>
                </div>

                <div className="flex flex-col items-center justify-center p-4 sm:p-2.5 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-center">
                  <span className="inline-block text-4xl font-bold md:text-2xl sm:text-xl text-primary dark:text-primaryDark">
                    3+
                  </span>
                  <h5 className="text-xs sm:text-[10px] font-semibold uppercase text-dark/70 dark:text-light/70 mt-1">
                    Hackathons
                  </h5>
                </div>

                <div className="flex flex-col items-center justify-center p-4 sm:p-2.5 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-center">
                  <span className="inline-block text-4xl font-bold md:text-2xl sm:text-xl text-dark dark:text-light">
                    SIH &apos;26
                  </span>
                  <h5 className="text-xs sm:text-[10px] font-semibold uppercase text-dark/70 dark:text-light/70 mt-1">
                    Team Leader
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
