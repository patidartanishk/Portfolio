import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Tanishk Patidar | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Tanishk Patidar — IT student at IIPS DAVV Indore and aspiring Full-Stack Developer working with C++, JavaScript, Node.js, Express.js, MongoDB, React, Next.js, and modern web technologies."
        />
        <meta name="author" content="Tanishk Patidar" />
        <meta
          property="og:title"
          content="Tanishk Patidar | Full-Stack Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Portfolio of Tanishk Patidar — Full-Stack Developer, DSA in C++, Node.js, Express.js, MongoDB, React, and Next.js."
        />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen text-dark dark:text-light transition-colors duration-300 flex flex-col justify-between`}
      >
        <Navbar />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  );
}
