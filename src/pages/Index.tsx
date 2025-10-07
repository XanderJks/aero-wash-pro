import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VideoDemo from "@/components/VideoDemo";
import Features from "@/components/Features";
import AllIncluded from "@/components/AllIncluded";
import Industries from "@/components/Industries";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <VideoDemo />
        <Features />
        <AllIncluded />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
