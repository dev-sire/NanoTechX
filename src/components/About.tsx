import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To help businesses and individuals stay safe and secure in the increasingly digital world. We believe everyone deserves protection from cyber threats."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We use advanced technologies and techniques to detect and prevent cyber threats, constantly updating our solutions to stay ahead."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We build long-term relationships with our customers, working closely to ensure their online assets and data remain secure."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions and services, maintaining our position as a trusted cybersecurity partner."
    }
  ];

  return (
    <section id="about" className="about-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">NanoTechx</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded by a team of experienced cybersecurity experts, NanoTechx is a cybersecurity startup 
            that focuses on providing innovative solutions to protect businesses and individuals from cyber threats.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="about-content">
            <h3 className="text-2xl font-bold mb-6">Protecting Your Digital World</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At NanoTechx, we understand that cybersecurity is not just about technology—it's about 
                protecting what matters most to you and your business. Our comprehensive approach combines 
                cutting-edge technology with human expertise to deliver unmatched protection.
              </p>
              <p>
                We offer a complete range of cybersecurity services, from assessments and consulting to 
                advanced security products and training programs. Our team stays at the forefront of 
                cybersecurity trends to ensure our clients are always protected against the latest threats.
              </p>
              <p>
                Whether you're a small business looking to establish basic security measures or a large 
                enterprise requiring comprehensive cyber defense strategies, we have the expertise and 
                solutions to meet your needs.
              </p>
            </div>
            <Button variant="cyber" className="mt-6">
              Learn More About Us
            </Button>
          </div>

          <div className="about-stats relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-primary p-6 rounded-lg text-center text-primary-foreground">
                  <div className="text-3xl font-bold">6+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="bg-cyber-surface p-6 rounded-lg text-center border border-border/50">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-cyber-surface p-6 rounded-lg text-center border border-border/50">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div className="bg-gradient-primary p-6 rounded-lg text-center text-primary-foreground">
                  <div className="text-3xl font-bold">99%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="about-values grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="about-value-card text-center group hover:shadow-cyber transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;