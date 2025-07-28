import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyber-bg border-t border-border/50">
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                NanoTechx
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              NanoTechx is a cybersecurity startup focused on providing innovative solutions 
              to protect businesses and individuals from cyber threats in the digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-cyber-surface rounded-lg hover:bg-cyber-surface-hover transition-colors">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 bg-cyber-surface rounded-lg hover:bg-cyber-surface-hover transition-colors">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a href="#" className="p-2 bg-cyber-surface rounded-lg hover:bg-cyber-surface-hover transition-colors">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <Link to="/tech-tayari" className="text-muted-foreground hover:text-primary transition-colors">
                  Tech Tayari
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Security Assessment
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Penetration Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Training & Education
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Security Products
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">contact@nanotechx.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">123 Cyber Street, Tech City</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 NanoTechx. All rights reserved. | Protecting your digital future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;