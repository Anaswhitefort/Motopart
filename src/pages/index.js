import React from "react";
import TextImg from '/Users/adamanas/new-motopart/motopart/components/textimg.js'
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Motopart.org" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
         <TextImg></TextImg>
        <AboutSection sectionId="about" heading="About Motopart" />
        <InterestsSection sectionId="details" heading="Parts Listings" />
        <ProjectsSection sectionId="features" heading="App Features" />
          <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
