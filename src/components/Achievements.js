import React from "react";
import Link from "next/link";
import { TrophyIcon, LinkArrow } from "./Icons";
import { achievementsData, certificationsData } from "../data/portfolioData";

const Achievements = () => {
  return (
    <section id="achievements" className="w-full my-24 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl text-dark dark:text-light">
          Achievements &amp; Honors
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-base md:text-sm mt-3 max-w-2xl mx-auto">
          Hackathon recognitions, competitive tracks, leadership milestones, and verified certifications.
        </p>
      </div>

      {/* Primary Hackathon Achievements Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-10 max-w-6xl mx-auto mb-16">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="relative rounded-3xl border border-dark/20 dark:border-light/20 bg-light dark:bg-dark p-8 md:p-6 shadow-xl flex flex-col justify-between"
          >
            <div className="absolute top-0 -right-2.5 -z-10 w-[101.5%] h-[102.5%] rounded-[2rem] bg-dark dark:bg-light rounded-br-2xl" />

            <div>
              <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                  <TrophyIcon className="w-4 h-4 inline" />
                  {item.badge}
                </span>
                <span className="text-xs font-semibold text-primary dark:text-primaryDark">
                  {item.track}
                </span>
              </div>

              <h3 className="text-2xl sm:text-xl font-bold text-dark dark:text-light mb-1">
                {item.title}
              </h3>

              <p className="text-xs font-semibold text-dark/70 dark:text-light/70 mb-3">
                {item.organization}
              </p>

              <div className="my-3 p-3.5 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10">
                <p className="text-xs font-bold text-dark dark:text-light mb-1">
                  Project:{" "}
                  <span className="text-primary dark:text-primaryDark">
                    {item.projectTitle}
                  </span>
                </p>
                {item.role && (
                  <p className="text-xs font-semibold text-dark/80 dark:text-light/80 mb-1">
                    Role: <span className="font-bold text-dark dark:text-light">{item.role}</span>
                  </p>
                )}
                <p className="text-xs text-dark/80 dark:text-light/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Team members */}
              <div className="mt-3">
                <p className="text-xs font-bold text-dark/70 dark:text-light/70 mb-1">
                  Team Members:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.team.map((member) => (
                    <span
                      key={member}
                      className={`text-xs px-2.5 py-0.5 rounded-md ${
                        member.includes("Tanishk")
                          ? "bg-primary/15 dark:bg-primaryDark/15 text-primary dark:text-primaryDark font-bold border border-primary/20"
                          : "bg-dark/5 dark:bg-light/10 text-dark/80 dark:text-light/80 font-medium"
                      }`}
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Demonstrated */}
              <div className="mt-3">
                <p className="text-xs font-bold text-dark/70 dark:text-light/70 mb-1">
                  Key Skills:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 rounded bg-dark/5 dark:bg-light/10 text-dark dark:text-light"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-dark/10 dark:border-light/10 flex items-center justify-between">
              {item.projectLink ? (
                <Link
                  href={item.projectLink}
                  className="text-xs font-bold text-primary dark:text-primaryDark hover:underline flex items-center gap-1"
                >
                  View Related Project <LinkArrow className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <span className="text-xs text-dark/60 dark:text-light/60">
                  Verified Hackathon Award
                </span>
              )}
              <span className="text-[11px] px-2.5 py-1 rounded-md border border-dashed border-dark/30 dark:border-light/30 text-dark/60 dark:text-light/60">
                Certificate On Record
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Subsection */}
      <div className="max-w-4xl mx-auto pt-6">
        <h3 className="text-2xl font-bold text-dark dark:text-light mb-6 text-center">
          Certifications &amp; Courses
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-light dark:bg-dark border border-dark/15 dark:border-light/15 shadow-sm hover:border-dark/40 dark:hover:border-light/40 transition-all flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark flex items-center justify-center flex-shrink-0 mt-0.5">
                <TrophyIcon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-dark dark:text-light">
                  {cert.title}
                </h4>
                <p className="text-xs text-dark/60 dark:text-light/60 mt-1">
                  Domain: {cert.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
