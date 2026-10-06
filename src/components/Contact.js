import React from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, LinkArrow } from "./Icons";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <section id="contact" className="w-full my-24 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl text-dark dark:text-light">
          Get In Touch
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-base md:text-sm mt-3 max-w-xl mx-auto">
          Interested in discussing full-stack development, hackathons, or potential engineering opportunities? Let&apos;s connect!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="relative rounded-3xl bg-light dark:bg-dark border border-dark/20 dark:border-light/20 shadow-2xl p-12 md:p-8 sm:p-6 text-center">
          {/* Signature offset card decoration */}
          <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl sm:h-[102%] sm:w-full sm:rounded-[1.5rem]" />

          <div className="max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Open to Opportunities &amp; Technical Collaborations
            </div>
            <h3 className="text-3xl sm:text-2xl font-bold text-dark dark:text-light mb-3">
              Connect With Tanishk Patidar
            </h3>
            <p className="text-sm md:text-xs text-dark/80 dark:text-light/80 leading-relaxed">
              Whether you want to discuss a project, explore software engineering opportunities, or talk about web architecture and C++ algorithms, reach out through my verified professional profiles below.
            </p>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-6 max-w-2xl mx-auto mb-10">
            {/* LinkedIn Card */}
            <motion.a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-dark/5 dark:bg-light/5 hover:bg-[#0A66C2]/10 dark:hover:bg-[#0A66C2]/20 border border-dark/10 dark:border-light/10 hover:border-[#0A66C2]/40 transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <LinkedInIcon className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-dark dark:text-light group-hover:text-[#0A66C2] transition-colors flex items-center gap-1.5">
                LinkedIn Profile <LinkArrow className="w-4 h-4" />
              </h4>
              <p className="text-xs text-dark/60 dark:text-light/60 mt-1">
                Direct messaging &amp; professional network
              </p>
              <span className="mt-3 px-3 py-1 rounded-md bg-[#0A66C2] text-light text-xs font-semibold">
                Message on LinkedIn
              </span>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-dark/5 dark:bg-light/5 hover:bg-dark/15 dark:hover:bg-light/15 border border-dark/10 dark:border-light/10 hover:border-dark/40 dark:hover:border-light/40 transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-dark/10 dark:bg-light/10 text-dark dark:text-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-dark dark:text-light group-hover:underline transition-colors flex items-center gap-1.5">
                GitHub Repository <LinkArrow className="w-4 h-4" />
              </h4>
              <p className="text-xs text-dark/60 dark:text-light/60 mt-1">
                Codebases, commits &amp; open-source projects
              </p>
              <span className="mt-3 px-3 py-1 rounded-md bg-dark text-light dark:bg-light dark:text-dark text-xs font-semibold">
                View Repositories
              </span>
            </motion.a>
          </div>

          {/* Location & Academic Footer Info */}
          <div className="pt-6 border-t border-dark/10 dark:border-light/10 max-w-xl mx-auto">
            <p className="text-xs font-medium text-dark/70 dark:text-light/70">
              📍 International Institute of Professional Studies (IIPS), DAVV, Indore, MP
            </p>
            <p className="text-[11px] text-dark/50 dark:text-light/50 mt-1">
              B.Tech + M.Tech (IT) Dual Degree • 9.41 / 10 CGPA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
