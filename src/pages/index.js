import React from "react";
import DownloadPopUp from './download-popup.js'
import MotopartBanner from './banner.js'
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

const IndexPage = ({data}) => (
 
    <>
      <Seo title="Motopart.org" />
      <Page useSplashScreenAnimation>
      <MotopartBanner></MotopartBanner>
        <HeroSection sectionId="hero" />
         
        <AboutSection sectionId="about" heading="About Motopart" />
        <InterestsSection sectionId="details" heading="Parts Listings" />
        <ProjectsSection sectionId="features" heading="App Features" />
        <ContactSection sectionId="github" heading="Contact" />
        <DownloadPopUp></DownloadPopUp>
      </Page>
    </>
  )



export default IndexPage