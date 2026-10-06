import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { useThemeSwitch } from "./hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();
  const isActive = router.asPath === href || router.pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} relative group text-dark dark:text-light font-medium text-sm xl:text-xs tracking-wide`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 transition-[width] ease duration-300 group-hover:w-full ${
          isActive ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const isActive = router.asPath === href || router.pathname === href;

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2 font-semibold text-lg tracking-wide`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 transition-[width] ease duration-300 group-hover:w-full ${
          isActive ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: "Home", href: "/#home" },
    { title: "About", href: "/#about" },
    { title: "Skills", href: "/#skills" },
    { title: "Experience", href: "/#experience" },
    { title: "Projects", href: "/#projects" },
    { title: "Achievements", href: "/#achievements" },
    { title: "Education", href: "/#education" },
    { title: "Contact", href: "/#contact" },
  ];

  return (
    <header className="w-full px-16 py-7 font-medium flex items-center justify-between dark:text-light relative z-30 lg:px-8 md:px-6 sm:px-4">
      {/* Mobile Hamburger Button */}
      <button
        aria-label="Toggle navigation menu"
        className="flex-col justify-center items-center hidden lg:flex z-50 focus:outline-none"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Brand Monogram Logo */}
      <div className="flex items-center">
        <Link
          href="/"
          className="w-12 h-12 bg-dark text-light dark:border-light border border-solid border-transparent dark:bg-light dark:text-dark flex items-center justify-center rounded-full text-lg font-bold hover:scale-105 transition-transform"
        >
          TP
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="flex items-center space-x-6 xl:space-x-4 lg:hidden">
        {navLinks.map((link) => (
          <CustomLink key={link.title} href={link.href} title={link.title} />
        ))}
      </nav>

      {/* Social Icons & Theme Switcher */}
      <div className="flex items-center justify-center space-x-4 sm:space-x-2">
        <motion.a
          href="https://github.com/patidartanishk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 text-dark dark:text-light"
        >
          <GithubIcon />
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/tanishk-patidar-663b53378"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 text-[#0A66C2]"
        >
          <LinkedInIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          aria-label="Toggle Dark and Light Mode"
          className={`ml-3 sm:ml-1 flex items-center justify-center rounded-full p-1.5 transition-colors ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className="w-5 h-5 fill-dark" />
          ) : (
            <MoonIcon className="w-5 h-5 fill-dark" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="min-w-[75vw] sm:min-w-[88vw] flex flex-col justify-between z-40 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/95 dark:bg-light/95 backdrop-blur-md py-14 px-8 rounded-2xl border border-light/20 dark:border-dark/20 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <nav className="flex items-center flex-col justify-center mb-6">
              {navLinks.map((link) => (
                <CustomMobileLink
                  key={link.title}
                  href={link.href}
                  title={link.title}
                  toggle={handleClick}
                />
              ))}
            </nav>

            <div className="flex items-center justify-center space-x-6 mt-2 pt-4 border-t border-light/20 dark:border-dark/20 w-full">
              <motion.a
                href="https://github.com/patidartanishk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-7 text-light dark:text-dark"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tanishk-patidar-663b53378"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-7 text-[#0A66C2]"
              >
                <LinkedInIcon />
              </motion.a>

              <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                aria-label="Toggle Dark and Light Mode"
                className={`flex items-center justify-center rounded-full p-2 transition-colors ${
                  mode === "light" ? "bg-light text-dark" : "bg-dark text-light"
                }`}
              >
                {mode === "dark" ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
