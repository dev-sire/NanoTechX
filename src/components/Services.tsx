import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, GraduationCap, Landmark, ShieldCheck, Bug, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "VAPT (Vulnerability Assessment & Pen Testing)",
      description:
        "Identify and validate vulnerabilities across your apps, network, and cloud with expert-led assessment and clear remediation.",
      features: [
        "Automated + Manual Testing",
        "Web, Mobile, APIs, Cloud",
        "Network & Wi-Fi Security",
        "Remediation Guidance",
      ],
      href: "/services/vapt",
    },
    {
      icon: Landmark,
      title: "GRC (Governance, Risk & Compliance)",
      description:
        "Align security with business through pragmatic governance, risk registers, and compliance programs (ISO 27001, SOC 2, GDPR).",
      features: [
        "Policy & Control Frameworks",
        "Risk Registers & KPIs",
        "ISO 27001, SOC 2, GDPR",
        "Audit Readiness",
      ],
      href: "/services/grc",
    },
    {
      icon: Activity,
      title: "Cyber Risk Assessments",
      description:
        "Quantify and prioritize cyber risk using threat-led assessments, heatmaps, and actionable mitigation roadmaps.",
      features: [
        "Threat Modeling",
        "Likelihood/Impact Scoring",
        "Risk Heatmaps",
        "Mitigation Roadmaps",
      ],
      href: "/services/risk-assessments",
    },
    {
      icon: GraduationCap,
      title: "Corporate Cybersecurity Training",
      description:
        "Role-based programs, workshops and simulations that build a security-first culture across your organization.",
      features: [
        "Role-based Tracks",
        "Secure Coding for Devs",
        "Phishing Simulations",
        "Hands-on Labs",
      ],
      href: "/services/corporate-training",
    },
    {
      icon: Bug,
      title: "Malware Detection & Response",
      description:
        "Proactive detection, analysis, and containment of malware across endpoints and cloud.",
      features: [
        "EDR Deployment & Tuning",
        "Threat Hunting",
        "Sandbox Analysis",
        "IOC/IOA Engineering",
      ],
      href: "/services/malware-detection",
    },
    {
      icon: BookOpen,
      title: "Undergraduate Guidance & Consulting",
      description:
        "Personalized mentoring, projects, and career guidance for students in cybersecurity and tech.",
      features: [
        "Resume & LinkedIn Review",
        "Project Roadmaps",
        "CTF & Lab Guidance",
        "Interview Prep",
      ],
      href: "/services/undergraduate-guidance",
    },
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
                  <Button asChild variant="cyber-ghost" size="sm" className="w-full">
                    <Link to={service.href} aria-label={`Learn more about ${service.title}`}>Learn More</Link>
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