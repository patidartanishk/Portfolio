import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon, LinkArrow } from "./Icons";
import { projectsData } from "../data/portfolioData";

const FramerImage = motion(Image);

const FeaturedProject = ({
  title,
  subtitle,
  summary,
  contribution,
  img,
  link,
  github,
  tags,
  technologies,
  badge,
}) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-3xl border border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark shadow-2xl p-10 lg:flex-col lg:p-8 sm:p-5 xs:p-4 my-8">
      {/* Background offset card decoration */}
      <div className="absolute top-0 -right-3 -z-10 w-[101.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl sm:h-[102%] sm:w-full sm:rounded-[1.5rem]" />

      {/* Project Image Preview */}
      <div className="w-1/2 overflow-hidden rounded-2xl lg:w-full border border-dark/10 dark:border-light/10 bg-dark/5 dark:bg-light/5 flex items-center justify-center">
        <FramerImage
          src={img}
          alt={`${title} project preview`}
          className="w-full h-auto object-cover max-h-[380px] lg:max-h-[320px] sm:max-h-[220px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          width={800}
          height={450}
          priority
        />
      </div>

      {/* Project Content */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-10 lg:w-full lg:pl-0 lg:pt-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark border border-primary/20 dark:border-primaryDark/20"
              >
                {tag}
              </span>
            ))}
          {badge && (
            <span className="text-[11px] sm:text-[10px] font-bold px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/25">
              {badge}
            </span>
          )}
        </div>

        <h3 className="my-1 w-full text-left text-3xl font-bold md:text-2xl sm:text-xl text-dark dark:text-light">
          {title}
        </h3>
        {subtitle && (
          <h4 className="text-sm sm:text-xs font-semibold text-primary dark:text-primaryDark mb-2">
            {subtitle}
          </h4>
        )}

        <p className="my-2 font-normal text-dark/80 dark:text-light/80 leading-relaxed text-sm sm:text-xs">
          {summary}
        </p>

        {/* Contribution highlight */}
        {contribution && (
          <div className="my-2.5 p-3 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 w-full text-xs sm:text-[11px]">
            <span className="font-bold text-dark dark:text-light">My Contribution: </span>
            <span className="text-dark/80 dark:text-light/80">{contribution}</span>
          </div>
        )}

        {technologies && (
          <div className="flex flex-wrap gap-1.5 my-3">
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

        <div className="mt-4 flex items-center gap-4 flex-wrap">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="w-9 text-dark dark:text-light hover:opacity-80 transition-opacity"
            >
              <GithubIcon />
            </a>
          )}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark px-6 py-2.5 text-sm font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border border-dark dark:border-light transition-colors flex items-center gap-2 shadow-md"
            >
              Live Demo <LinkArrow className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-xs font-medium text-dark/60 dark:text-light/60 px-3 py-1.5 rounded-lg border border-dashed border-dark/30 dark:border-light/30">
              Showcase / Internship Build
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({
  title,
  subtitle,
  summary,
  contribution,
  img,
  link,
  github,
  tags,
  technologies,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-between relative rounded-2xl border border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark p-6 sm:p-5 shadow-xl h-full">
      <div className="absolute top-0 -right-2.5 -z-10 w-[101.5%] h-[102.5%] rounded-[2rem] bg-dark dark:bg-light rounded-br-2xl sm:w-full sm:rounded-[1.2rem]" />

      <div className="w-full overflow-hidden rounded-xl border border-dark/10 dark:border-light/10 bg-dark/5 dark:bg-light/5 flex items-center justify-center">
        <FramerImage
          src={img}
          alt={`${title} project preview`}
          className="w-full h-auto object-cover max-h-[220px]"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          width={600}
          height={340}
        />
      </div>

      <div className="w-full flex flex-col items-start justify-between mt-4 flex-grow">
        <div className="flex flex-wrap items-center gap-1.5 mb-2">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark"
              >
                {tag}
              </span>
            ))}
        </div>

        <h3 className="my-1 w-full text-left text-xl font-bold text-dark dark:text-light">
          {title}
        </h3>
        {subtitle && (
          <h4 className="text-xs font-medium text-primary dark:text-primaryDark mb-2">
            {subtitle}
          </h4>
        )}

        <p className="my-2 font-normal text-dark/80 dark:text-light/80 text-xs leading-relaxed">
          {summary}
        </p>

        {contribution && (
          <div className="my-2 p-2.5 rounded-lg bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 w-full text-[11px]">
            <span className="font-bold text-dark dark:text-light">Contribution: </span>
            <span className="text-dark/80 dark:text-light/80">{contribution}</span>
          </div>
        )}

        {technologies && (
          <div className="flex flex-wrap gap-1.5 my-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[11px] font-medium rounded bg-dark/5 dark:bg-light/10 text-dark dark:text-light"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="w-full mt-auto pt-3 border-t border-dark/10 dark:border-light/10 flex items-center justify-between">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="w-7 text-dark dark:text-light hover:opacity-80 transition-opacity"
            >
              <GithubIcon />
            </a>
          )}
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark px-4 py-1.5 text-xs font-semibold hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border border-dark dark:border-light transition-colors flex items-center gap-1.5"
            >
              Demo <LinkArrow className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] text-dark/60 dark:text-light/60">
              Showcase Build
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const featured = projectsData.filter((p) => p.featured);
  const regular = projectsData.filter((p) => !p.featured && !p.secondary);
  const secondary = projectsData.filter((p) => p.secondary);

  return (
    <section id="projects" className="w-full my-24 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl text-dark dark:text-light">
          Featured Projects
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-base md:text-sm mt-3 max-w-2xl mx-auto">
          AI-driven solutions, hackathon prototypes, client web platforms, and responsive frontend architectures.
        </p>
      </div>

      {/* Featured Projects (Sagar Netra, Boutique Clothing Store, Competitor SEO Optimizer) */}
      <div className="space-y-16">
        {featured.map((project) => (
          <FeaturedProject
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            summary={project.description}
            contribution={project.contribution}
            img={project.image}
            link={project.demoUrl}
            github={project.githubUrl}
            tags={project.tags}
            technologies={project.technologies}
            badge={project.badge}
          />
        ))}
      </div>

      {/* Web Platforms & Client Solutions Grid (Healing Coach, Ebenezer Child Care, Preschool, AI Clinic) */}
      <div className="mt-20">
        <h3 className="text-3xl sm:text-2xl font-bold text-dark dark:text-light mb-8 text-center">
          Client &amp; Internship Projects
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-10">
          {regular.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              summary={project.description}
              contribution={project.contribution}
              img={project.image}
              link={project.demoUrl}
              github={project.githubUrl}
              tags={project.tags}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>

      {/* Practice / Secondary Projects (Amazon Clone, Tic Tac Toe) */}
      {secondary.length > 0 && (
        <div className="mt-20 pt-10 border-t border-dark/10 dark:border-light/10">
          <h3 className="text-2xl sm:text-xl font-bold text-dark/80 dark:text-light/80 mb-6 text-center">
            Foundational &amp; Interactive Practice Work
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {secondary.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                summary={project.description}
                contribution={project.contribution}
                img={project.image}
                link={project.demoUrl}
                github={project.githubUrl}
                tags={project.tags}
                technologies={project.technologies}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
