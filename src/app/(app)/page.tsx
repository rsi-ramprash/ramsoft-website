import UtilityBar from "@/components/UtilityBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import WhoWeServe from "@/components/WhoWeServe";
import Platform from "@/components/Platform";
import AISection from "@/components/AISection";
import Testimonials from "@/components/Testimonials";
import Compliance from "@/components/Compliance";
import DemoForm from "@/components/DemoForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <WhoWeServe />
        <Platform />
        <AISection />
        <Testimonials />
        <Compliance />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
