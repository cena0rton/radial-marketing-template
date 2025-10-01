  import Container from "./components/Container";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Trusted from "./components/Trusted";
import Grad from "./components/ui/gradient";
import Pricing from "./components/Pricing";
import UseCase from "./components/UseCase";
import Footer from "./components/Footer";

import FAQ from "./components/FAQ";
import { HowItWorksSection } from "./components/How";
import Features from "./components/Features";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <Container className="divide-y divide-neutral-200">
      <Grad>
        <Nav />
        <Hero />
      </Grad>
     
      <Trusted /> 
      <HowItWorksSection />
      <Features />
      <UseCase />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />  
    </Container>
    
  );
}
