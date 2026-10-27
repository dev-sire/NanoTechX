import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Clock, Award, BookOpen, Linkedin, ArrowRight, Rocket, CheckCircle2, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import ciscoTechImage from "@/assets/cisco-tech.jpg";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import {
  REGISTRATION,
  COURSE_TBA,
  tracks,
  instructors,
  partnerLogos,
} from "@/data/techtayari2";

const TechTayari2 = () => {
  const partnersObserver = useIntersectionObserver({ threshold: 0.2 });
  const isMobile = useIsMobile();

  const handleRegister = () => {
    if (REGISTRATION.isOpen && REGISTRATION.url) {
      window.open(REGISTRATION.url, "_blank");
      return;
    }
    toast("Registrations are coming soon!", {
      description: "Stay tuned. We'll announce when Tech Tayari 2.0 registrations open.",
    });
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
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <div className="animate-float fade-in-5 inline-flex items-center gap-2 bg-cyber-surface border border-primary/20 rounded-full px-6 py-3">
                <Award className="h-5 w-5 text-primary animate-glow" />
                <span className="text-sm font-medium text-primary">NanoTechx × Cisco Partnership</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
                </span>
                <span className="text-sm font-medium text-primary">Registrations Opening Soon</span>
              </div>
            </div>

            <h1 className="animate-reveal-blur [animation-delay:300ms] opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Tech Tayari 2.0
              </span>
            </h1>

            <p className="animate-reveal-blur [animation-delay:600ms] opacity-0 text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive Cisco courses across 6 domains to prepare you for the future of technology.
              From AI to Cybersecurity, master the skills that matter.
            </p>

            {/* Stats */}
            <div className="animate-reveal-blur [animation-delay:900ms] opacity-0 grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Learning Tracks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{instructors.length}</div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-primary mb-2">Soon</div>
                <div className="text-sm text-muted-foreground">Registrations Open</div>
              </div>
            </div>

            <Button
              variant="cyber"
              size={isMobile ? "sm" : "lg"}
              onClick={handleRegister}
              className="animate-reveal-blur [animation-delay:1200ms] opacity-0 group text-lg px-4 md:px-8 py-4 h-auto"
            >
              Register Now - Start Your Journey
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="animate-reveal-blur [animation-delay:1500ms] opacity-0 text-sm text-muted-foreground mt-4">
              Registrations opening soon • Stay tuned for announcements
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
              Course listings for this edition will be announced soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track) => {
              const IconComponent = track.icon;
              const allTBA = track.courses.every((c) => c.type === COURSE_TBA);
              return (
                <Card key={track.id} className="fade-in-up group hover:shadow-cyber transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
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
                        {allTBA ? "Courses to be announced" : `${track.courses.length} Courses`}
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
              Learn from instructors who bring hands-on experience and cutting-edge knowledge to our program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={instructor.id} className="group hover:shadow-glow transition-all duration-500 hover:scale-105 bg-gradient-to-br from-card via-card to-card/80 border-2 border-primary/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="text-center relative z-10">
                    <div className="relative mx-auto mb-4 w-24 h-24">
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
                Instructors Page
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Tech Tayari */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in-up text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Tech Tayari 2.0?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Industry Certified", text: "Earn globally recognized Cisco certifications that employers value" },
              { icon: Users, title: "Expert Guidance", text: "Learn from industry experts with hands-on experience" },
              { icon: Clock, title: "Flexible Learning", text: "Self-paced and instructor-led options to fit your schedule" },
              { icon: BookOpen, title: "Practical Skills", text: "Hands-on labs and real-world projects to build expertise" },
            ].map((feature) => (
              <div key={feature.title} className="fade-in-up text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous edition teaser */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border/50 bg-cyber-surface/50 p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold">Tech Tayari 1.0 was a success</h3>
                <p className="text-sm text-muted-foreground">
                  See how the first edition went in our archive.
                </p>
              </div>
            </div>
            <Link to="/tech-tayari">
              <Button variant="cyber-outline" size="sm" className="group">
                View 1.0 Archive
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
            Registrations for Tech Tayari 2.0 are opening soon. Get ready to start your journey in
            cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cyber" size="lg" onClick={handleRegister} className="group">
              <Bell className="mr-2 h-5 w-5" />
              Register Now
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

export default TechTayari2;
