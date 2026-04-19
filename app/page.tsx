import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";

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
  ) 
}
