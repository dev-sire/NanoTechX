import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
{
      id: 1,
      name: "Sadia",
      role: "Head of HR",
      category: "leadership",
      specialty: "Business Development & HR",
      location: "Karachi, Pakistan",
      experience: "5+ years",
      image: "/api/placeholder/200/200",
      bio: "Sadia leads our HR strategy with over 5 years of experience in talent acquisition and employee engagement.",
      achievements: ["Virtual University Pakistan"],
      social: {
        linkedin: "https://www.linkedin.com/in/sadia-atta-6ab194314/",
        twitter: "#",
        email: "sadia.atta@nanotechx.org"
      }
    },
    {
      id: 2,
      name: "Umm e Farwa",
      role: "Head, R&D Department",
      category: "Research",
      specialty: "Web Application Security",
      location: "Karachi, Pakistan",
      experience: "5+ years",
      image: "/api/placeholder/200/200",
      bio: "Umm e Farwa is our lead penetration tester specializing in web application security and advanced exploitation techniques. She's certified in OSCP, OSCE, and holds multiple industry certifications.",
      achievements: ["OSCP Certified", "Bug Bounty Hunter", "Black Hat Trainer"],
      social: {
        linkedin: "#",
        github: "#",
        email: "umm.e.farwa@nanotechx.org"
      }
    },
    {
      id: 3,
      name: "Muhammad Gul Iqbal",
      role: "Senior Consultant, Cybersecurity",
      category: "Cybersecurity",
      specialty: "Consulting & Compliance",
      location: "Karachi, Pakistan",
      experience: "6+ years",
      image: "/api/placeholder/200/200",
      bio: "Gul Iqbal specializes in governance, risk management, and compliance frameworks. He helps organizations achieve and maintain certifications including ISO 27001, SOC 2, and GDPR compliance.",
      achievements: ["ISO 27001 Lead Auditor", "CISA Certified", "Risk Management Expert"],
      social: {
        linkedin: "https://www.linkedin.com/in/guliqbal/",
        twitter: "#",
        email: "muhammad.gul.iqbal@nanotechx.org"
      }
    },
    {
      id: 4,
      name: "Muhammad Shoaib",
      role: "Penetration Tester Engineer",
      category: "Red Team",
      specialty: "Vulnerability Research & Exploitation",
      location: "Karachi, Pakistan",
      experience: "5+ years",
      image: "/api/placeholder/200/200",
      bio: "Muhammad Shoaib is our lead penetration tester with expertise in vulnerability research, exploitation, and red teaming. He develops and executes advanced attack simulations to help clients strengthen their security posture.",
      achievements: ["GCIH Certified", "Malware Research Awards", "Open Source Contributor"],
      social: {
        linkedin: "#",
        github: "#",
        email: "muhammad.shoaib@nanotechx.org"
      }
    },
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 -right-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our cybersecurity professionals bring decades of combined experience 
            to protect your business from evolving threats.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className={`group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-cyber transform-gpu hover:-translate-y-2 ${
                hoveredMember === index ? 'ring-2 ring-primary/30' : ''
              }`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.6s ease-out forwards'
              }}
            >
              <CardContent className="p-6 text-center">
                {/* Avatar with Glow Effect */}
                <div className="relative mb-4">
                  <div className={`absolute inset-0 bg-gradient-primary rounded-full blur-md transition-opacity duration-300 ${
                    hoveredMember === index ? 'opacity-30' : 'opacity-0'
                  }`}></div>
                  <Avatar className="w-20 h-20 mx-auto relative z-10 border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-300">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-lg font-semibold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Floating Social Icons */}
                  <div className={`absolute -top-2 -right-2 flex gap-1 transition-all duration-300 ${
                    hoveredMember === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}>
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                        <Linkedin className="w-3 h-3 text-primary" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                        <Github className="w-3 h-3 text-primary" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors">
                        <Twitter className="w-3 h-3 text-primary" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <Badge variant="outline" className="text-xs group-hover:border-primary/60 transition-colors">
                    {member.specialty}
                  </Badge>
                </div>

                {/* Bio with Animation */}
                <div className={`mt-4 transition-all duration-300 overflow-hidden ${
                  hoveredMember === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-xs text-muted-foreground">{member.bio}</p>
                </div>

                {/* Pulse Animation for Active Card */}
                {hoveredMember === index && (
                  <div className="absolute inset-0 border border-primary/30 rounded-lg animate-pulse"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild variant="cyber" size="lg" className="group">
            <Link to="/team" className="flex items-center gap-2">
              View Full Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;