import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, Users, Cpu, AlertTriangle, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Cybersecurity Assessments",
      description: "Comprehensive security assessments, penetration testing, consulting and audits to identify vulnerabilities and risks in your network, systems and web applications.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Risk Analysis", "Security Consulting"]
    },
    {
      icon: Users,
      title: "Training & Education",
      description: "Cybersecurity training and education programs for your employees and stakeholders to build a security-aware culture.",
      features: ["Security Awareness", "Phishing Simulation", "Best Practices", "Compliance Training"]
    },
    {
      icon: Cpu,
      title: "Security Products",
      description: "Advanced cybersecurity products including automation-based pentesting, firewalls, antivirus software, and intrusion detection systems.",
      features: ["Automated Pentesting", "Advanced Firewalls", "Endpoint Protection", "SIEM Solutions"]
    },
    {
      icon: Award,
      title: "Industry Solutions",
      description: "Customized cybersecurity solutions for specific industries such as healthcare, finance, and government sectors.",
      features: ["Healthcare Security", "Financial Compliance", "Government Standards", "Custom Solutions"]
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection",
      description: "Real-time threat monitoring and incident response services to protect against evolving cyber threats.",
      features: ["24/7 Monitoring", "Incident Response", "Threat Intelligence", "Forensic Analysis"]
    },
    {
      icon: Shield,
      title: "Compliance & Audit",
      description: "Ensure your organization meets industry standards and regulatory requirements with our compliance services.",
      features: ["Regulatory Compliance", "Security Audits", "Policy Development", "Risk Management"]
    }
  ];

  return (
    <section id="services" className="services-section py-20 bg-cyber-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="services-header text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions designed to protect your digital assets 
            and ensure your business stays secure against evolving threats.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="service-card group hover:shadow-cyber transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="cyber-ghost" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-dark p-8 rounded-2xl border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Business?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get a comprehensive security assessment and protect your organization from cyber threats today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cyber" size="lg">
                Get Free Assessment
              </Button>
              <Button variant="cyber-outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;