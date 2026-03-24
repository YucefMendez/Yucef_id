import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import CursorFollower from "@/components/CursorFollower";
import SkillsTicker from "@/components/SkillsTicker";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <CommandPalette />
      <Navigation />
      <main>
        <Hero />
        <SkillsTicker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
