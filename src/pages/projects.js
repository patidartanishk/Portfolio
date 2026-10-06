import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Tanishk Patidar</title>
        <meta
          name="description"
          content="Featured projects by Tanishk Patidar — Sagar Netra, Boutique Clothing Store, Competitor SEO Optimizer, Healing Coach, Child Care Platform, Preschool Discovery, and AI Clinic."
        />
      </Head>

      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Ideas Engineered Into Reality!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <Projects />
        </Layout>
      </main>
    </>
  );
}
