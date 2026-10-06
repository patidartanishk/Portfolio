import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-16 xl:p-12 lg:p-8 md:p-6 sm:p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
