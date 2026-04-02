import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import Skills from "@/components/Skills/Skills";

const Home = () => {
  return (
    <>
      <main>
        <Header /> 
        <HeroBlock />  
        <About />     
        <Skills />
      </main>
    </>
  ) 
}
export default Home;