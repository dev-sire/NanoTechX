import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ExternalLink, Users, Clock, Award, BookOpen, Code, Shield, Network, Brain, Database, Server, Zap, Rocket, Globe, Cpu, Monitor, Wifi, Star, Target, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ciscoTechImage from "@/assets/cisco-tech.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import acmLogo from "@/assets/acm_sigsac.png";
import acmBahriaLogo from "@/assets/acm_bahria.png"
import aieysLogo from "@/assets/aieys.jpg";
import ciscoLogo from "@/assets/cisco_logo.png";
import ciscoCommunityLogo from "@/assets/cisco_community.jpg"
import GulIqbal from "@/assets/gul-iqbal.jpg";
import WaqasKarim from "@/assets/waqas-karim.jpg";
import IftikharJaved from "@/assets/iftikhar-javed.jpg";
import TechHiearchy from "@/assets/Tech_Hiearchy.jpg"

const TechTayari = () => {

  const partnersObserver = useIntersectionObserver({ threshold: 0.2 });

  const partnerLogos = [
    { logo: acmLogo, name: "ACM SIGSAC DUET" },
    { logo: acmBahriaLogo, name: "ACM Bahria University" },
    { logo: aieysLogo, name: "AI Explains You Science" },
    { logo: ciscoLogo, name: "Cisco Networking Academy" },
    { logo: ciscoCommunityLogo, name: "Cisco Community Pakistan" },
    { logo: TechHiearchy, name: "Tech Hiearchy" }
  ];
  

  const isMobile = useIsMobile();
  
  const tracks = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Master the fundamentals of AI and modern technologies",
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      courses: [
        { name: "Introduction to Modern AI", type: "SP/IL" },
        { name: "AI Fundamentals with IBM SkillsBuild", type: "FREE" },
        { name: "[Beta] Data Science Essentials with Python", type: "SP/IL" }
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Learn to protect and secure digital infrastructure",
      color: "bg-red-500/10 text-red-400 border-red-500/20",
      courses: [
        { name: "Introduction to Cybersecurity", type: "SP/IL" },
        { name: "Cybersecurity Essentials", type: "IL" },
        { name: "Ethical Hacker", type: "SP/IL" },
        { name: "Endpoint Security", type: "SP/IL" },
        { name: "Network Defense", type: "SP/IL" },
        { name: "Cyber Threat Management", type: "SP/IL" },
        { name: "CyberOps Associate", type: "IL" }
      ]
    },
    {
      icon: Network,
      title: "Networking",
      description: "Build expertise in network infrastructure and IoT",
      color: "bg-green-500/10 text-green-400 border-green-500/20",
      courses: [
        { name: "Networking Basics", type: "SP" },
        { name: "Networking Essentials", type: "IL" },
        { name: "Introduction to IoT and Digital Transformation", type: "SP/IL" },
        { name: "CCNA: Introduction to Networks (ITN)", type: "IL" },
        { name: "CCNA: Switching, Routing, and Wireless Essentials (SRWE)", type: "IL" },
        { name: "CCNA: Enterprise Networking, Security, and Automation (ENSA)", type: "IL" }
      ]
    },
    {
      icon: Code,
      title: "Programming",
      description: "Master programming languages and development skills",
      color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      courses: [
        { name: "Python Essentials 1", type: "SP/IL" },
        { name: "Python Essentials 2", type: "SP/IL" },
        { name: "JavaScript Essentials 1", type: "SP/IL - FREE" },
        { name: "JavaScript Essentials 2", type: "SP/IL" }
      ]
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Analyze data and extract meaningful insights",
      color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      courses: [
        { name: "Introduction to Data Science", type: "SP/IL" },
        { name: "Data Analytics Essentials", type: "SP/IL" },
        { name: "[Beta] Data Science Essentials with Python", type: "SP/IL" }
      ]
    },
    {
      icon: Server,
      title: "DevNet Associate",
      description: "Learn network automation and programmability",
      color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      courses: [
        { name: "DevNet Associate", type: "IL" }
      ]
    }
  ];

  const handleRegister = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdk7Sqwa_v4LGyYtWyRds7UAchfGL1BFNTBMTCKh1yxk0QGoQ/viewform?usp=header", "_blank");
  };

  const handleDownloadPoster = () => {
    const link = document.createElement('a');
    link.href = '/Poster.pdf';
    link.download = 'Poster';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero">
          <img 
            src={ciscoTechImage} 
            alt="Cisco Technology" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="hero-content text-center">
            {/* Partnership Badge */}
            <div className="animate-float fade-in-5 inline-flex items-center gap-2 bg-cyber-surface border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Award className="h-5 w-5 text-primary animate-glow" />
              <span className="text-sm font-medium text-primary">NanoTechx × Cisco Partnership</span>
            </div>

            {/* Main Heading */}
            <h1 className="animate-reveal-blur [animation-delay:300ms] opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tech Tayari 1.0
              </span>
            </h1>

            <p className="animate-reveal-blur [animation-delay:600ms] opacity-0 text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive Cisco courses across 6 domains to prepare you for the future of technology. 
              From AI to Cybersecurity, master the skills that matter.
            </p>

            {/* Stats */}
            <div className="animate-reveal-blur [animation-delay:900ms] opacity-0 grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Learning Tracks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Courses Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Industry Relevant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Career Growth</div>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              variant="cyber" 
              size={isMobile ? "sm" : "lg"}
              onClick={handleRegister}
              className="animate-reveal-blur [animation-delay:1200ms] opacity-0 group text-lg px-4 md:px-8 py-4 h-auto"
            >
              Register Now - Start Your Journey
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="animate-reveal-blur [animation-delay:1500ms] opacity-0 text-sm text-muted-foreground mt-4">
              Limited seats available • Earn a Free Digital Badge • Industry certification
            </p>
          </div>
        </div>
      </section>

      {/* Partners and Collaborators */}
      <section
        ref={partnersObserver.ref}
        className="py-20 bg-cyber-surface/30 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${partnersObserver.isIntersecting
                ? 'animate-reveal-fade opacity-100'
                : 'opacity-0 translate-y-10'
              }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Strategic Alliances</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working alongside leading societies and organizations to bring you the best technology education experience.
            </p>
          </div>

          {/* Infinite Carousel */}
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-slide-infinite">
              {[...Array(2)].flatMap((_, i) =>
                partnerLogos.map((partner, index) => (
                  <div
                    key={`${i}-${index}`}
                    className="group transition-transform duration-300 cursor-pointer px-4 flex-shrink-0"
                  >
                    <div className="w-48 sm:w-60 aspect-[3/2] bg-card border border-border/50 rounded-xl flex flex-col items-center justify-center p-4 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                      <div className="relative w-full h-20 mb-3 overflow-visible">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-20 bg-cyber-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Learning Track</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore six comprehensive domains designed to build expertise in cutting-edge technologies. 
              Each track offers industry-recognized Cisco certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <Card key={index} className="fade-in-up group hover:shadow-cyber transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border ${track.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {track.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {track.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {track.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="flex items-center justify-between p-2 bg-cyber-surface/50 rounded-lg">
                          <span className="text-sm font-medium">{course.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {course.type}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {track.courses.length} Courses
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Learn at your own pace
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Instructors */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              Meet Our Expert Instructors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Learn from industry professionals and academic experts who bring years of experience 
              and cutting-edge knowledge to our program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Muhammad Gul Iqbal",
                designation: "Cyber Security Analyst | Cisco Instructor",
                company: "Government of Pakistan",
                image: GulIqbal,
                linkedin: "https://www.linkedin.com/in/guliqbal/"
              },
              {
                name: "Waqas Karim",
                designation: "CCIE | Cisco & Cyber Security consultant",
                company: "Vodafone",
                image: WaqasKarim,
                linkedin: "https://www.linkedin.com/in/waqaskarim/"
              },
              {
                name: "Iftikhar A. Javed",
                designation: "Network Engineer & Scrum Master",
                company: "TDC Denmark",
                image: IftikharJaved,
                linkedin: "https://www.linkedin.com/in/iftikharjaved/"
              },
              {
                name: "Ameer Hamza",
                designation: "Assistant Director Cyber Security",
                company: "Pakistan Telecommunication Authority (PTA)",
                image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=face",
                linkedin: "https://www.linkedin.com/in/ameer-hamza-153271325/"
              }
            ].map((instructor, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card via-card to-card/80 border-2 border-primary/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-center relative z-10">
                    <div className="relative mx-auto mb-4 w-20 h-20">
                      <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                      <img
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-full h-full rounded-full object-cover relative z-10 border-2 border-border/20 group-hover:border-primary/30 transition-colors duration-300"
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">{instructor.name}</h3>
                    <p className="text-sm text-primary font-medium mb-1">{instructor.designation}</p>
                    <p className="text-sm text-muted-foreground mb-4">{instructor.company}</p>
                    
                    <a
                      href={instructor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="h-4 w-4" />
                      View Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/instructors">
              <Button variant="cyber-outline" size="lg" className="group">
                See All Instructors
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Tayari 1.0?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in-left text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Industry Certified</h3>
              <p className="text-sm text-muted-foreground">
                Earn globally recognized Cisco certifications that employers value
              </p>
            </div>

            <div className="fade-in-up text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Learn from industry experts with hands-on experience
              </p>
            </div>

            <div className="fade-in-up text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Learning</h3>
              <p className="text-sm text-muted-foreground">
                Self-paced and instructor-led options to fit your schedule
              </p>
            </div>

            <div className="fade-in-right text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practical Skills</h3>
              <p className="text-sm text-muted-foreground">
                Hands-on labs and real-world projects to build expertise
              </p>
            </div>
          </div>

          {/* Additional Features Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="fade-in-left text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Weekly Live Sessions</h3>
              <p className="text-sm text-muted-foreground">
                Join 2-hour expert-led online classes every week for interactive learning
              </p>
            </div>

            <div className="fade-in-right text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Industry Expert Webinars</h3>
              <p className="text-sm text-muted-foreground">
                Attend free webinars with industry leaders discussing various tech domains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-dark">
        <div className="fade-in-up max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of professionals who have advanced their careers through Tech Tayari 1.0. 
            Start your journey in cutting-edge technology today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cyber" 
              size="lg" 
              onClick={handleRegister}
              className="group"
            >
              Register Now
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cyber-outline" size="lg" onClick={handleDownloadPoster}>
              Download Poster
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Questions? Contact us at <span className="text-primary">techtayari@nanotechx.org</span>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TechTayari;