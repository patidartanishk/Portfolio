import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import { LinkArrow, LightBulb, GithubIcon, LinkedInIcon } from "@/components/Icons";
import { personalInfo } from "@/data/portfolioData";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanishk Patidar | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Tanishk Patidar — Full-Stack Developer, C++ DSA, Node.js, Express.js, MongoDB, React, Next.js. Dual degree IT student at IIPS DAVV Indore."
        />
      </Head>

      <main className="flex flex-col items-center text-dark dark:text-light w-full min-h-screen">
        {/* ================= HERO SECTION ================= */}
        <section id="home" className="w-full relative">
          <Layout className="pt-0 md:pt-16 sm:pt-8">
            <div className="flex items-center justify-between w-full lg:flex-col gap-12">
              {/* Hero Profile Visual */}
              <div className="w-1/2 md:w-full flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primaryDark rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                  <div className="relative rounded-[2rem] overflow-hidden border-2 border-dark/20 dark:border-light/20 bg-light dark:bg-dark p-3 shadow-2xl">
                    <Image
                      src={personalInfo.avatar}
                      alt="Tanishk Patidar - Full-Stack Developer"
                      width={480}
                      height={480}
                      className="w-full h-auto rounded-[1.5rem] object-cover max-w-[420px] md:max-w-[320px]"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center lg:items-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark/5 dark:bg-light/10 border border-dark/10 dark:border-light/10 text-xs font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  B.Tech + M.Tech (IT) Dual Degree • IIPS, DAVV Indore
                </div>

                <AnimatedText
                  text="Turning Ideas Into Practical Solutions With Clean Code."
                  className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
                />

                <p className="my-4 text-base md:text-sm font-medium text-dark/80 dark:text-light/80 leading-relaxed">
                  Hi, I&apos;m{" "}
                  <span className="font-bold text-dark dark:text-light">
                    Tanishk Patidar
                  </span>
                  . A Full-Stack Developer and aspiring Software Engineer. I build modern, scalable web applications and practical software solutions using{" "}
                  <span className="font-semibold text-primary dark:text-primaryDark">
                    JavaScript, Node.js, Express.js, MongoDB, React, Next.js, and Tailwind CSS
                  </span>
                  , while actively strengthening my Data Structures &amp; Algorithms foundation in{" "}
                  <span className="font-semibold text-primary dark:text-primaryDark">
                    C++
                  </span>
                  .
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-4 mt-2 lg:self-center flex-wrap sm:justify-center">
                  <Link
                    href="#projects"
                    className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-base font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all md:p-2 md:px-4 md:text-sm shadow-md"
                  >
                    View My Work <LinkArrow className="w-5 h-5 ml-2" />
                  </Link>

                  <Link
                    href="#about"
                    className="text-base font-semibold capitalize text-dark dark:text-light underline underline-offset-4 hover:text-primary dark:hover:text-primaryDark md:text-sm"
                  >
                    About Me
                  </Link>

                  <div className="flex items-center gap-3 ml-2 sm:ml-0">
                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-2 rounded-full bg-dark/5 dark:bg-light/10 hover:scale-110 transition-transform"
                    >
                      <GithubIcon className="w-5 h-5 text-dark dark:text-light" />
                    </a>
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-2 rounded-full bg-dark/5 dark:bg-light/10 hover:scale-110 transition-transform"
                    >
                      <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Layout>

          <HireMe />

          <div className="absolute right-8 bottom-8 inline-block w-20 md:hidden opacity-40 hover:opacity-100 transition-opacity">
            <LightBulb className="w-full h-auto text-dark dark:text-light" />
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section id="about" className="w-full scroll-mt-24">
          <Layout className="pt-16">
            <div className="text-center mb-16">
              <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl text-dark dark:text-light">
                About Me
              </h2>
              <p className="text-dark/70 dark:text-light/70 text-base md:text-sm mt-3 max-w-xl mx-auto">
                Passion fuels purpose — solving problems through clean code, structured logic, and continuous learning.
              </p>
            </div>

            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              {/* Biography */}
              <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
                <h3 className="mb-4 text-2xl font-bold uppercase text-dark/75 dark:text-light/75">
                  Biography &amp; Direction
                </h3>
                {personalInfo.bio.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-normal text-dark/85 dark:text-light/85 mb-4 leading-relaxed text-sm md:text-xs"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Profile Card & Highlights */}
              <div className="col-span-4 flex flex-col justify-between xl:col-span-4 md:col-span-8 md:order-1">
                <div className="p-8 rounded-3xl bg-light dark:bg-dark border border-dark/20 dark:border-light/20 shadow-xl relative mb-8">
                  <div className="absolute top-0 -right-2.5 -z-10 w-[101.5%] h-[102.5%] rounded-[2rem] bg-dark dark:bg-light rounded-br-2xl" />
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <h4 className="font-bold text-lg text-dark dark:text-light">
                      Academic Identity
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
                    Strengthening theoretical computer science fundamentals while actively building end-to-end full-stack projects and solving data structures problems in C++.
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
          </Layout>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <div className="w-full">
          <Layout className="py-0">
            <Skills />
          </Layout>
        </div>

        {/* ================= EXPERIENCE SECTION ================= */}
        <div className="w-full">
          <Layout className="py-0">
            <Experience />
          </Layout>
        </div>

        {/* ================= PROJECTS SECTION ================= */}
        <div className="w-full">
          <Layout className="py-0">
            <Projects />
          </Layout>
        </div>

        {/* ================= ACHIEVEMENTS SECTION ================= */}
        <div className="w-full">
          <Layout className="py-0">
            <Achievements />
          </Layout>
        </div>

        {/* ================= EDUCATION SECTION ================= */}
        <div className="w-full">
          <Layout className="py-0">
            <Education />
          </Layout>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <div className="w-full">
          <Layout className="py-0">
            <Contact />
          </Layout>
        </div>
      </main>
    </>
  );
}
