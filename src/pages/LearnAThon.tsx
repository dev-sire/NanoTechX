import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Trophy, Calendar, Users, Award, ExternalLink, MapPin, Clock, BookOpen, Target, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const LearnAThon = () => {
  const { toast } = useToast();

  useEffect(() => {
    // Apply Cisco theme
    document.body.classList.add('cisco-theme');
    
    // SEO optimization
    document.title = "EMEA Cyber Cup 2026 - Learn-a-thon | Cisco Networking Academy";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join the EMEA Cyber Cup 2026 Learn-a-thon - a region-wide competition in collaboration with Real Madrid CF. Develop networking skills and compete for exclusive experiences.");
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", `${window.location.origin}/learn-a-thon`);
    }

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "EMEA Cyber Cup 2026 - Learn-a-thon",
      "description": "A region-wide networking competition in collaboration with Real Madrid CF",
      "startDate": "2025-10-01",
      "endDate": "2026-07-31",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
      "organizer": {
        "@type": "Organization",
        "name": "Cisco Networking Academy",
        "url": "https://www.netacad.com"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      document.body.classList.remove('cisco-theme');
    };
  }, []);

  const handleRegistration = () => {
    toast({
      title: "Registration Opening Soon!",
      description: "Registration will open in September 2025. We'll notify you when applications are available.",
    });
  };

  const timelineEvents = [
    { date: "August 2025", event: "Pre-Campaign Launch", status: "upcoming" },
    { date: "September 2025", event: "Registration Opens", status: "upcoming" },
    { date: "October 2025", event: "Learn-a-thon Competition", status: "upcoming" },
    { date: "July 2026", event: "Capture the Flag Final", status: "upcoming" },
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Real Madrid Learning Collection",
      description: "Exclusive content created in collaboration with Real Madrid showcasing the digital transformation of Santiago Bernabéu stadium."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Networking Focus",
      description: "Content focused on digital signage, WiFi 6, and network infrastructure with CCST Networking level challenges."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Exclusive Rewards",
      description: "Winners receive VIP access to La Liga matches and technical visits to the Santiago Bernabéu stadium."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Region-wide Competition",
      description: "First EMEA-wide competition designed to impact maximum number of students in digital skills and networking."
    }
  ];

  const rules = [
    "Participants must be enrolled in Cisco Networking Academy programs",
    "Competition level is set at CCST Networking certification standard",
    "Teams will compete in regional phases before advancing to EMEA finals",
    "All submissions must be completed within the designated timeframes",
    "Fair play and academic integrity policies strictly enforced",
    "Participants must have access to required networking simulation tools",
    "Registration is limited and will be processed on first-come, first-served basis"
  ];

  const rewards = [
    {
      title: "Grand Prize Winners",
      description: "VIP access to La Liga match + Technical stadium visit + Official certificates"
    },
    {
      title: "Regional Champions",
      description: "Cisco networking equipment + Real Madrid merchandise + Certification vouchers"
    },
    {
      title: "All Participants",
      description: "Digital badges + Learning completion certificates + Access to exclusive content"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-4 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png" 
                  alt="Cisco Academy" 
                  className="h-12 w-auto"
                />
                <X className="h-6 w-6 text-primary-foreground/60" />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/200px-Real_Madrid_CF.svg.png" 
                  alt="Real Madrid CF" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
            
            <Badge variant="outline" className="mb-4 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10">
              <Calendar className="w-4 h-4 mr-2" />
              EMEA Competition 2025-2026
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              EMEA Cyber Cup 2026
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
              Learn-a-thon
            </p>
            
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto mb-8">
              Join the first region-wide EMEA competition combining networking education with the excitement of football. 
              Developed in collaboration with Real Madrid CF to showcase digital transformation in sports.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold" onClick={handleRegistration}>
                <Award className="w-5 h-5 mr-2" />
                Register for Competition
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary hover:bg-primary-foreground/10">
                <ExternalLink className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Overview */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Competition Overview</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A 2-phase competition designed to impact the maximum number of students in digital skills and networking content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Competition Timeline</h2>
            <p className="text-lg text-muted-foreground">
              Key dates and milestones for the EMEA Cyber Cup 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineEvents.map((event, index) => (
              <Card key={index} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{event.date}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.event}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules and Regulations */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rules & Regulations</h2>
            <p className="text-lg text-muted-foreground">
              Essential guidelines for participation in the Learn-a-thon competition
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Competition Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-sm font-semibold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rewards & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Exclusive prizes and opportunities await the winners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rewards.map((reward, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{reward.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {reward.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Compete?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Registration opens in September 2025. Be part of the first EMEA-wide networking competition 
            and showcase your skills on an international stage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold" onClick={handleRegistration}>
              <Users className="w-5 h-5 mr-2" />
              Join the Competition
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary hover:bg-primary-foreground/10">
              <MapPin className="w-5 h-5 mr-2" />
              Find Your Academy
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70 mt-6">
            © 2025 Cisco and/or its affiliates. All rights reserved.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearnAThon;