import React from "react";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import { MainLayout } from "../../../components/layout";
import { SkipNavContent } from "@chakra-ui/skip-nav";

const Main = ({ aboutRef, skillsRef, projectsRef, contactRef }) => {
  const handleClick = () => {
    if (aboutRef) {
      aboutRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <MainLayout>
      <Hero
        handleClick={handleClick}
        mt={{ base: "12vh", xxl: "16vh", xxxl: "32vh" }}
        mb={{ base: "10vh", md: "10vh", xl: "10vh" }}
        w={{ xl: "90%" }}
      />
      <SkipNavContent>
        <About ref={aboutRef} id="about" pt="10vh" mb="10vh" />
      </SkipNavContent>
      <Skills ref={skillsRef} id="skills" pt="10vh" mb="10vh" />
      <Projects ref={projectsRef} id="projects" pt="10vh" mb="10vh" />
      <Contact ref={contactRef} id="contact" pt="10vh" mb="10vh" />
    </MainLayout>
  );
};

export default Main;
