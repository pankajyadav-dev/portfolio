import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsGrid from "@/components/SkillsGrid";
import Projects from "@/components/Projects";
import CPStats from "@/components/CPStats";
import Timeline from "@/components/Timeline";
import Achievements from "@/components/Achievements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <SkillsGrid />
        <CPStats />
        <Achievements />
        <Timeline />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
