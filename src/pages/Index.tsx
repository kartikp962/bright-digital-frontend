import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Footer from "@/components/Footer";
import VideoEditing from "@/components/VideoEditing";
import Testimonials from "@/components/Testimonials";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        {/* <CompanyLogos /> */}
        <Features />
        <Integrations />
        {/* <VideoEditing /> */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
