import React from "react";
import Link from "next/link";
import { GithubIcon, LinkedInIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t border-solid border-dark/15 dark:border-light/15 font-medium text-sm md:text-xs py-8 px-16 lg:px-8 md:px-6 bg-light dark:bg-dark text-dark/80 dark:text-light/80 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col items-center justify-between gap-6">
        <div className="flex flex-col sm:items-center text-center sm:text-center md:items-center">
          <p className="font-bold text-base text-dark dark:text-light tracking-wide">
            TANISHK PATIDAR
          </p>
          <p className="text-xs text-dark/70 dark:text-light/70 mt-1">
            Full-Stack Developer | B.Tech + M.Tech (IT) Dual Degree, IIPS DAVV Indore
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/#home" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/#about" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/#skills" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            Skills
          </Link>
          <Link href="/#experience" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            Experience
          </Link>
          <Link href="/#projects" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/#achievements" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            Achievements
          </Link>
          <Link href="/#education" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            Education
          </Link>
          <Link href="/#contact" className="hover:text-dark dark:hover:text-light hover:underline underline-offset-4">
            Contact
          </Link>
        </div>

        <div className="flex items-center justify-between w-full pt-4 border-t border-dark/10 dark:border-light/10 text-xs text-dark/60 dark:text-light/60 flex-col sm:flex-col sm:gap-2">
          <span>
            {new Date().getFullYear()} &copy; Tanishk Patidar. Built with Next.js &amp; Tailwind CSS.
          </span>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <a
              href="https://github.com/patidartanishk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-dark dark:hover:text-light transition-colors"
            >
              <GithubIcon className="w-5 h-5 inline" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanishk-patidar-663b53378"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0A66C2] transition-colors"
            >
              <LinkedInIcon className="w-5 h-5 inline text-[#0A66C2]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
