import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Achievements from "@/components/Achievements";

export default function AchievementsPage() {
  return (
    <>
      <Head>
        <title>Achievements &amp; Honors | Tanishk Patidar</title>
        <meta
          name="description"
          content="Hackathon achievements, awards, and certifications earned by Tanishk Patidar — CodeNeeti 2026 2nd Runner-Up, Smart India Hackathon 2026 Qualified."
        />
      </Head>

      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Milestones, Hackathons &amp; Impact!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <Achievements />
        </Layout>
      </main>
    </>
  );
}
