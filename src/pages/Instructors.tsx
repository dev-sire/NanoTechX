import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GulIqbal from "@/assets/gul-iqbal.jpg";
import WaqasKarim from "@/assets/waqas-karim.jpg";
import IftikharJaved from "@/assets/iftikhar-javed.jpg";
import InamUllah from "@/assets/inam-sir.jpg"
import HafizMuhammadAttaullah from "@/assets/sir-attaullah.jpg";
import AmanShahid from "@/assets/my-profile.jpg";

const Instructors = () => {

  const instructors = [
    {
      id: 1,
      name: "Muhammad Gul Iqbal",
      designation: "Cyber Security Analyst | Cisco Instructor",
      company: "Government of Pakistan",
      image: GulIqbal,
      linkedin: "https://www.linkedin.com/in/guliqbal/"
    },
    {
      id: 2,
      name: "Waqas Karim",
      designation: "CCIE | Cisco & Cyber Security consultant",
      company: "Vodafone",
      image: WaqasKarim,
      linkedin: "https://www.linkedin.com/in/waqaskarim/"
    },
    {
      id: 3,
      name: "Iftikhar A. Javed",
      designation: "Network Engineer & Scrum Master",
      company: "TDC Denmark",
      image: IftikharJaved,
      linkedin: "https://www.linkedin.com/in/iftikharjaved/"
    },
    {
      id: 4,
      name: "Ameer Hamza",
      designation: "Assistant Director Cyber Security",
      company: "Pakistan Telecommunication Authority (PTA)",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://www.linkedin.com/in/ameer-hamza-153271325/"
    },
    {
      id: 5,
      name: "Inam Ullah Khan",
      designation: "Assistant Professor (AI), Founder-AI-Explain You Science (AIEYS)",
      company: "Air University, Islamabad",
      image: InamUllah,
      linkedin: "https://www.linkedin.com/in/inam-ullah-khan-770b1174/"
    },
    {
      id: 6,
      name: "Hafiz Muhammad Attaullah",
      designation: "Founder | Lecturer | Master Trainer",
      company: "NanoTechX | MAJU | Cisco",
      image: HafizMuhammadAttaullah,
      linkedin: "https://www.linkedin.com/in/attaullahshafiq10/"
    },
    {
      id: 7,
      name: "Aman Shahid",
      designation: "Cyber Security Student",
      company: "DUET",
      image: AmanShahid,
      linkedin: "https://www.linkedin.com/in/aman-shahid-32708a2b7/"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full opacity-5 animate-float" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-secondary to-primary rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-gradient-to-tr from-primary/10 to-transparent rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-primary/5 rounded-full animate-glow" />
      </div>

      <Navbar />

      <main className="pt-20">
        {/* Header Section */}
        <section className="py-16 bg-gradient-to-br from-background via-background to-primary/10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-4 mb-8 animate-fade-in">
              <Link to="/tech-tayari">
                <Button variant="cyber-ghost" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Tech Tayari
                </Button>
              </Link>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
                Our Expert Instructors
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Meet the industry professionals and academic experts who are leading our Tech Tayari initiative,
                bringing years of experience and cutting-edge knowledge to our students.
              </p>
            </div>
          </div>
        </section>

        {/* Instructors Grid */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Instructors;