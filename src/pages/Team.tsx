import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Twitter, Mail, MapPin, Award, Users, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useCursorGlowTrail } from "@/hooks/useCursorGlowTrial";

const Team = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const cursorGlow = useCursorGlowTrail({ 
    count: 5,
    radius: 350,
    intensity: 0.19,
  });

  // Floating binary animation effect
  useEffect(() => {
    const createBinaryParticle = () => {
      const particle = document.createElement('div');
      particle.textContent = Math.random() > 0.5 ? '1' : '0';
      particle.className = 'fixed text-primary/20 text-xs font-mono pointer-events-none z-0 animate-float';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '-20px';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 20000);
    };

    const interval = setInterval(createBinaryParticle, 3000);
    return () => clearInterval(interval);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      role: "Chief Security Officer",
      category: "leadership",
      specialty: "Threat Intelligence & Research",
      location: "San Francisco, CA",
      experience: "15+ years",
      image: "/api/placeholder/200/200",
      bio: "Dr. Chen leads our cybersecurity strategy with over 15 years of experience in threat intelligence and security research. She holds a Ph.D. in Computer Science from Stanford and has published over 50 papers on cybersecurity.",
      achievements: ["CISSP Certified", "DEF CON Speaker", "Forbes 30 Under 30"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah.chen@nanotechx.com"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Senior Penetration Tester",
      category: "security",
      specialty: "Web Application Security",
      location: "Austin, TX",
      experience: "12+ years",
      image: "/api/placeholder/200/200",
      bio: "Marcus is our lead penetration tester specializing in web application security and advanced exploitation techniques. He's certified in OSCP, OSCE, and holds multiple industry certifications.",
      achievements: ["OSCP Certified", "Bug Bounty Hunter", "Black Hat Trainer"],
      social: {
        linkedin: "#",
        github: "#",
        email: "marcus.rodriguez@nanotechx.com"
      }
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "GRC Specialist",
      category: "compliance",
      specialty: "Governance, Risk & Compliance",
      location: "New York, NY",
      experience: "10+ years",
      image: "/api/placeholder/200/200",
      bio: "Priya specializes in governance, risk management, and compliance frameworks. She helps organizations achieve and maintain certifications including ISO 27001, SOC 2, and GDPR compliance.",
      achievements: ["ISO 27001 Lead Auditor", "CISA Certified", "Risk Management Expert"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "priya.patel@nanotechx.com"
      }
    },
    {
      id: 4,
      name: "Alex Kim",
      role: "Malware Analyst",
      category: "security",
      specialty: "Reverse Engineering & Malware Analysis",
      location: "Seattle, WA",
      experience: "8+ years",
      image: "/api/placeholder/200/200",
      bio: "Alex is our lead malware analyst with expertise in reverse engineering, threat hunting, and advanced persistent threats. He develops custom detection tools and signatures for our clients.",
      achievements: ["GCIH Certified", "Malware Research Awards", "Open Source Contributor"],
      social: {
        linkedin: "#",
        github: "#",
        email: "alex.kim@nanotechx.com"
      }
    },
    {
      id: 5,
      name: "Dr. Michael Thompson",
      role: "Research Director",
      category: "research",
      specialty: "AI Security & Cryptography",
      location: "Boston, MA",
      experience: "20+ years",
      image: "/api/placeholder/200/200",
      bio: "Dr. Thompson leads our research initiatives in AI security and cryptographic solutions. He has extensive experience in academia and industry, focusing on next-generation security technologies.",
      achievements: ["MIT PhD", "IEEE Fellow", "50+ Publications"],
      social: {
        linkedin: "#",
        github: "#",
        email: "michael.thompson@nanotechx.com"
      }
    },
    {
      id: 6,
      name: "Elena Volkov",
      role: "Cloud Security Architect",
      category: "security",
      specialty: "Cloud Infrastructure Security",
      location: "Denver, CO",
      experience: "11+ years",
      image: "/api/placeholder/200/200",
      bio: "Elena designs and implements secure cloud architectures for enterprise clients. She specializes in AWS, Azure, and GCP security, with expertise in container security and DevSecOps.",
      achievements: ["AWS Security Certified", "CCSP Certified", "Cloud Security Expert"],
      social: {
        linkedin: "#",
        github: "#",
        email: "elena.volkov@nanotechx.com"
      }
    }
  ];

  const categories = [
    { id: "all", name: "All Team", icon: Users },
    { id: "leadership", name: "Leadership", icon: Award },
    { id: "security", name: "Security", icon: Users },
    { id: "compliance", name: "Compliance", icon: Users },
    { id: "research", name: "Research", icon: Users }
  ];

  const filteredMembers = activeCategory === "all" 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-bright relative overflow-hidden">
      {/* Cursor Glow Effect */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 opacity-60"
        style={cursorGlow}
      />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* Header Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="outline" className="text-sm bg-primary/10 border-primary/30">
              <Users className="w-4 h-4 mr-2" />
              Meet Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold">
              The <span className="bg-gradient-primary bg-clip-text text-transparent">Experts</span> Behind
              <br />Your Security
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of cybersecurity professionals brings together decades of experience 
              in threat intelligence, penetration testing, compliance, and cutting-edge research.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "cyber" : "cyber-ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <Card 
                key={member.id}
                className="group cursor-pointer border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-cyber transform-gpu hover:-translate-y-3"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fade-in 0.8s ease-out forwards'
                }}
              >
                <CardHeader className="relative overflow-hidden">
                  {/* Avatar with Glow */}
                  <div className="relative mb-4 mx-auto">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <Avatar className="w-24 h-24 border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-300 relative z-10">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <CardTitle className="text-center group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {member.role}
                  </CardDescription>
                  
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    <Badge variant="outline" className="text-xs group-hover:border-primary/60 transition-colors">
                      {member.specialty}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1 text-primary/60" />
                      {member.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1 text-primary/60" />
                      {member.experience}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-primary">Key Achievements</h4>
                    <div className="flex flex-wrap gap-1">
                      {member.achievements.map((achievement, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 pt-4 border-t border-border/30">
                    {member.social.linkedin && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-primary">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-primary">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-primary">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.email && (
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:text-primary">
                        <Mail className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark border-t border-border/50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're always looking for talented cybersecurity professionals to join our mission 
            of making the digital world more secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg">
              View Open Positions
            </Button>
            <Button variant="cyber-outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-primary/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </section>
    </div>
  );
};

export default Team;