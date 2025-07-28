import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cyber.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CodeMatrix = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const chars = "01";
    const fontSize = 10;
    let columns: number;
    let drops: number[];
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };
    
    const draw = () => {
      ctx.fillStyle = "rgba(26, 31, 44, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = "#76c245";
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    // GSAP animations
    const tl = gsap.timeline();
    
    tl.fromTo(contentRef.current.children[0], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(contentRef.current.children[1], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(contentRef.current.children[2], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(contentRef.current.children[3], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    );

    // Scroll-triggered animations for stats
    gsap.fromTo(".stat-item", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <CodeMatrix />

      {/* Content */}
      <div className="relative z-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyber-surface/90 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cybersecurity | Innovation | Protection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Securing Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            NanoTechx provides innovative cybersecurity solutions to protect businesses and 
            individuals from evolving cyber threats. Stay secure in the digital world with 
            our advanced protection technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="cyber" size="lg" className="group">
              Secure Your Business
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cyber-outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="stats-container grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="stat-item flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Businesses Protected</div>
              </div>
            </div>
            <div className="stat-item flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Threat Detection</div>
              </div>
            </div>
            <div className="stat-item flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-secondary/5 rounded-full blur-2xl" />
    </section>
  );
};

export default Hero;