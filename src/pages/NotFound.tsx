import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShieldAlert, ArrowLeft, Terminal, Zap } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* 404 with glowing effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 text-9xl font-bold text-primary/20 blur-sm animate-pulse">
            404
          </div>
          <h1 className="relative text-9xl font-bold text-primary animate-glow">
            404
          </h1>
        </div>

        {/* Icon with animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-ping"></div>
            <ShieldAlert className="relative w-24 h-24 text-primary animate-pulse" />
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Access <span className="text-primary">Denied</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            The requested page has been encrypted or moved to a secure location
          </p>
          <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm">
            <Terminal className="w-4 h-4" />
            <span className="animate-pulse">Error: {location.pathname} - Resource not found</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => window.location.href = '/'}
            className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-slide-infinite"></div>
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Return to Base
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="group border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Go Back
          </Button>
        </div>

        {/* Matrix-style code animation */}
        <div className="mt-12 relative">
          <div className="text-xs font-mono text-primary/40 leading-relaxed animate-fade-in">
            <div className="animate-pulse" style={{ animationDelay: "0.5s" }}>
              &gt; Initializing security protocols...
            </div>
            <div className="animate-pulse" style={{ animationDelay: "1s" }}>
              &gt; Scanning network perimeter...
            </div>
            <div className="animate-pulse" style={{ animationDelay: "1.5s" }}>
              &gt; Redirecting to secure channel...
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  );
};

export default NotFound;