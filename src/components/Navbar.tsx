import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import nanotechxlogo from "@/assets/nanotechx.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", routePath: "/", hashId: "" },
    { name: "Services", routePath: "/", hashId: "services" },
    { name: "About", routePath: "/", hashId: "about" },
    { name: "Tech Tayari", routePath: "/tech-tayari", hashId: "" },
    { name: "Contact", routePath: "/", hashId: "contact" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMenuOpen(false); // Close mobile menu

    let targetUrl = item.routePath;
    if (item.hashId) {
      targetUrl += `#${item.hashId}`;
    }
    navigate(targetUrl);
  };

  const isActive = (itemRoutePath: string, itemHashId: string) => {
    const pathMatches = location.pathname === itemRoutePath;
    const hashMatches = itemHashId === "" ? location.hash === "" : location.hash === `#${itemHashId}`;
    return pathMatches && hashMatches;
  };

  // EFFECT FOR SMOOTH SCROLLING TO HASH SECTIONS
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Get the ID without '#'
      const element = document.getElementById(id);

      if (element) {
        // Use a small delay to ensure the DOM is fully rendered after navigation
        const scrollTimeout = setTimeout(() => {
          const navbarHeight = 64; // Adjust this if your actual navbar height is different
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight - 10; // 10px extra padding

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100); // 100ms delay, adjust as needed

        return () => clearTimeout(scrollTimeout); // Cleanup the timeout
      }
    } else if (location.pathname === "/" && location.hash === "") {
        // Optional: Ensure Home scrolls to top if no hash is present
        // This acts as a fallback or a specific "Home" scroll.
        // Be mindful if you have a separate ScrollToTop component also doing this.
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);


  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={nanotechxlogo} alt="logo" className="h-[42px] w-[35px]" />
            <span className="text-xl font-bold text-[#3ab54a]">
              NanoTechX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              // Use Link for all nav items for better SEO and accessibility
              // and let handleNavClick manage the scrolling behavior
              <Link
                key={item.name}
                to={item.routePath + (item.hashId ? `#${item.hashId}` : '')} // Build full path for Link
                onClick={(e) => { // Use onClick on Link to handle custom scrolling
                  e.preventDefault(); // Prevent default Link behavior
                  handleNavClick(item); // Call your custom handler
                }}
                className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                  isActive(item.routePath, item.hashId) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="cyber" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.routePath + (item.hashId ? `#${item.hashId}` : '')}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default Link behavior
                    handleNavClick(item); // Call your custom handler
                  }}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-primary text-left ${
                    isActive(item.routePath, item.hashId) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="cyber" size="sm" className="w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;