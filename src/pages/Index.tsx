import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompanyLogos from "@/components/CompanyLogos";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <CompanyLogos />
        <Features />
        <Integrations />
      </main>
      <Footer />
    </div>
  );
}
