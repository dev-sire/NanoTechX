import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Team from "@/components/Team";

const Index = () => {
  const heroObserver = useIntersectionObserver({ threshold: 0.2 });
  const servicesObserver = useIntersectionObserver({ threshold: 0.1 });
  const aboutObserver = useIntersectionObserver({ threshold: 0.2 });
  const contactObserver = useIntersectionObserver({ threshold: 0.2 });
  const footerObserver = useIntersectionObserver({ threshold: 0.2 });
  const teamObserver = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div 
        ref={heroObserver.ref}
        className={`transition-all duration-1000 ${
          heroObserver.isIntersecting 
            ? 'animate-reveal-fade opacity-100' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <Hero />
      </div>
      <div 
        ref={servicesObserver.ref}
        className={`transition-all duration-1000 delay-200 ${
          servicesObserver.isIntersecting 
            ? 'animate-reveal-fade opacity-100' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <Services />
      </div>
      <div 
        ref={aboutObserver.ref}
        className={`transition-all duration-1000 delay-400 ${
          aboutObserver.isIntersecting 
            ? 'animate-reveal-fade opacity-100' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <About />
      </div>
      <div 
        ref={teamObserver.ref}
        className={`transition-all duration-1000 delay-500 ${
          teamObserver.isIntersecting 
            ? 'animate-reveal-fade opacity-100' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <Team />
      </div>
      <div 
        ref={contactObserver.ref}
        className={`transition-all duration-1000 delay-600 ${
          contactObserver.isIntersecting 
            ? 'animate-reveal-fade opacity-100' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <Contact />
      </div>
      <div 
        ref={footerObserver.ref}
        className={`transition-all duration-1000 delay-800 ${
          footerObserver.isIntersecting 
            ? 'animate-reveal-fade opacity-100' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Index;