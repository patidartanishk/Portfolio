import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const check = () => {
      if (userPref) {
        const checkMode = userPref === "dark" ? "dark" : "light";
        setMode(checkMode);
        if (checkMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        const checkMode = mediaQuery.matches ? "dark" : "light";
        setMode(checkMode);
        if (checkMode === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    check();

    const handleChange = () => {
      check();
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
}
