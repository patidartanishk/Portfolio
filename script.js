/* =========================================================
   PORTFOLIO INTERACTIONS
========================================================= */


/* =========================================================
   THEME
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.querySelector(".theme-icon");


function setTheme(theme) {

    document.documentElement.setAttribute(
        "data-theme",
        theme
    );

    localStorage.setItem(
        "tp-theme",
        theme
    );


    if (themeIcon) {

        themeIcon.textContent =
            theme === "dark"
                ? "☾"
                : "☼";

    }

}


const savedTheme =
    localStorage.getItem("tp-theme");


if (savedTheme) {

    setTheme(savedTheme);

} else {

    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    setTheme(
        prefersDark
            ? "dark"
            : "light"
    );

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const current =
                document.documentElement
                    .getAttribute("data-theme");


            setTheme(
                current === "dark"
                    ? "light"
                    : "dark"
            );

        }
    );

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const hamburger =
    document.getElementById("hamburger");

const mobileMenu =
    document.getElementById("mobileMenu");


function closeMobileMenu() {

    if (!mobileMenu || !hamburger) {
        return;
    }


    mobileMenu.classList.remove(
        "open"
    );


    hamburger.setAttribute(
        "aria-expanded",
        "false"
    );

}


if (hamburger && mobileMenu) {

    hamburger.addEventListener(
        "click",
        () => {

            const open =
                mobileMenu.classList.toggle(
                    "open"
                );


            hamburger.setAttribute(
                "aria-expanded",
                open
                    ? "true"
                    : "false"
            );

        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );

        });


    document.addEventListener(
        "click",
        event => {

            if (
                mobileMenu.classList.contains(
                    "open"
                ) &&
                !mobileMenu.contains(
                    event.target
                ) &&
                !hamburger.contains(
                    event.target
                )
            ) {

                closeMobileMenu();

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".navbar__nav .nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const id =
                    entry.target.getAttribute(
                        "id"
                    );


                navLinks.forEach(link => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    link.classList.toggle(
                        "active",
                        href === `#${id}`
                    );

                });

            });

        },
        {
            threshold: 0.05,

            rootMargin:
                "-25% 0px -60% 0px"
        }
    );


sections.forEach(section => {

    sectionObserver.observe(
        section
    );

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if (
    "IntersectionObserver"
    in window
) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    entry.target.classList.add(
                        "visible"
                    );


                    revealObserver.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.08,

                rootMargin:
                    "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(
            element
        );

    });

} else {

    revealElements.forEach(element => {

        element.classList.add(
            "visible"
        );

    });

}


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById(
        "backToTop"
    );


function updateBackToTop() {

    if (!backToTop) {
        return;
    }


    if (window.scrollY > 450) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    {
        passive: true
    }
);


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   FOOTER YEAR
========================================================= */

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   RESIZE
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 900
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

        updateBackToTop();

    }
);