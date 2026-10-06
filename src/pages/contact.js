import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Tanishk Patidar</title>
        <meta
          name="description"
          content="Connect with Tanishk Patidar — Full-Stack Developer, C++ DSA, Node.js, Express, MongoDB, Next.js. GitHub and LinkedIn profiles."
        />
      </Head>

      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Let's Build Something Meaningful!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <Contact />
        </Layout>
      </main>
    </>
  );
}
