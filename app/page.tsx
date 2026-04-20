import Header from "@/components/Header/Header";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/About/About"));
const Skills = dynamic(() => import("@/components/Skills/Skills"));
const Projects = dynamic(() => import("@/components/Projects/Projects"));
const Contact = dynamic(() => import("@/components/Contact/Contact"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

export default function Home() {
  return (
    <>
      <main>
        <Header /> 
        <HeroBlock />  
        <About />     
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
