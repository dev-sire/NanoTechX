import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, ExternalLink, Clock, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import heroBanner from "@/assets/emea-hero-banner.png";

const LearnAThon = () => {
  const { toast } = useToast();

  useEffect(() => {
    // SEO optimization
    document.title = "EMEA Cisco Networking Academy Cup 2025 - Learn-a-thon";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Join the 2026 EMEA Cisco Networking Academy Cup Learn-a-thon in partnership with Real Madrid. Develop valuable skills and compete for amazing prizes.");
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", `${window.location.origin}/learn-a-thon`);
    }

    // Structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "EMEA Cisco Networking Academy Cup 2025 - Learn-a-thon",
      "description": "A region-wide networking competition in partnership with Real Madrid",
      "startDate": "2026-01-12",
      "endDate": "2026-03-08",
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
    };
  }, []);

  const handleRegistration = () => {
    toast({
      title: "Registration",
      description: "Please read the terms and conditions before registering your course.",
    });
  };

  const benefitCards = [
    {
      icon: "🏆",
      title: "Length of Learn-A-Thon",
      description: "Participate in the learn-a-thon from 12 January until 8 March 2026."
    },
    {
      icon: "✨",
      title: "Benefits",
      description: "These courses collectively equip learners with essential knowledge and skills to understand and address cybersecurity threats, leverage artificial intelligence responsibly, support digital transformation through IoT, maintain digital safety, and build strong networking capabilities."
    },
    {
      icon: "🎯",
      title: "In-Demand Skills",
      description: "Foundational networking knowledge, security expertise, and emerging technology competencies are essential skills to keep pace with rapid technological changes, including the integration of AI in networking and cybersecurity."
    },
    {
      icon: "📚",
      title: "Courses",
      description: "Multiple activities and quizzes engage students and reinforce learning.",
      courses: [
        { name: "Introduction to Cybersecurity", url: "https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US" },
        { name: "Introduction to Modern AI", url: "https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=en-US" },
        { name: "Introduction to IoT and Digital Transformation", url: "https://www.netacad.com/courses/introduction-iot?courseLang=en-US" },
        { name: "Digital Safety and Security Awareness", url: "https://www.netacad.com/courses/digital-safety-security?courseLang=en-US" },
        { name: "Networking Basics", url: "https://www.netacad.com/courses/networking-basics?courseLang=en-US" },
        { name: "Industrial Networking Essentials", url: "https://www.netacad.com/courses/industrial-networking-essentials?courseLang=en-US" },
        { name: "Networking Technician Career Path Exam", url: "https://www.netacad.com/exams/network-technician-pathway?courseLang=en-US" }
      ]
    },
    {
      icon: "🆓",
      title: "Free to join",
      description: "The cost to join the learn-a-thon is free."
    },
    {
      icon: "📊",
      title: "Level",
      description: "Beginner."
    }
  ];

  const timelineEvents = [
    { date: "9 October 2025", event: "Registration Opens" },
    { date: "12 January 2026", event: "Learn-A-Thon Begins" },
    { date: "8 March 2026", event: "Learn-A-Thon Concludes" },
    { date: "23 March 2026", event: "Winners Announced" },
    { date: "16 April 2026", event: "Capture the Flag-Regional Groups Phase" },
    { date: "17 April 2026", event: "Capture the Flag-Grand Finale" },
    { date: "17 May 2026", event: "Learn-A-Thon Experience Badges Issued" }
  ];

  const joinSteps = [
    { step: 1, description: "Host an 8-week event virtually or at your educational institute." },
    { step: 2, description: "Assign a dedicated instructor to manage the learn-a-thon who will read the terms and conditions and set up the course." },
    { step: 3, description: "Dedicated instructor to set up the eligible course on NetAcad.com using the required naming convention as stated in the terms and conditions." },
    { step: 4, description: "Dedicated instructor to complete registration form to sign up their academy and course to participate in the learn-a-thon." },
    { step: 5, description: "Dedicated instructor to enroll students/share link to the course on NetAcad.com." },
    { step: 6, description: "Allocate an on-site lab facility with internet connection, if applicable. Encourage students to complete the courses and earn a digital badge." },
    { step: 7, description: "All students who complete and pass the eligible course will earn a digital badge to share on social media platforms." },
    { step: 8, description: "Have the highest accumulated points per the terms and conditions and you'll be in the running to win some great prizes." }
  ];

  const ctfTimeline = [
    { date: "23 March 2026", event: "Qualifying Academies Announced" },
    { date: "5 April 2026", event: "Team Registration Closes" },
    { date: "16 April 2026", event: "Regional Groups Phase" },
    { date: "17 April 2026", event: "EMEA Final Cup" },
    { date: "17 April 2026", event: "Winners Announced" },
    { date: "17 May 2026", event: "Capture the Flag Participant Badges and Certificates Issued" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Cisco-themed Navbar for this page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D96CC] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-white text-xl font-bold">NanoTechX x Cisco Networking Academy</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-gray-200 transition-colors">Home</a>
              <a href="/instructors" className="text-white hover:text-gray-200 transition-colors">Instructors</a>
              <a href="/team" className="text-white hover:text-gray-200 transition-colors">Team</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Banner */}
      <section className="pt-16">
        <img src={heroBanner} alt="EMEA Cisco Networking Academy Cup" className="w-full" />
      </section>

      {/* Orange Header Bar */}
      <section className="bg-[#F58025] text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            EMEA Cisco Networking Academy Cup 2025 PHASE 1: LEARN-A-THON
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg mb-6 text-gray-800">
              We are thrilled to announce the launch of an exciting new initiative that brings together the worlds of technology and sports: the <strong className="text-[#0D96CC]">2026 EMEA Cisco Networking Academy Cup</strong>, in partnership with Real Madrid!
            </p>
            <p className="text-base mb-6 text-gray-700">
              This groundbreaking competition is open to Cisco Networking Academy instructors, students, and academies across Europe, the Middle East, Africa, and CIS. The Cup is designed to develop valuable skills, encourage collaboration, and spark innovation, all while offering a unique experience and the opportunity to win fantastic prizes.
            </p>
            <p className="text-base mb-6 text-gray-700">
              To help you promote the event at your academy, additional information and marketing assets are available in the sections below on this website.
            </p>
            <p className="text-base font-semibold text-gray-800">
              Register today to get started!
            </p>
            <div className="mt-8">
              <Button onClick={handleRegistration} size="lg" className="bg-[#F58025] hover:bg-[#e07520] text-white shadow-lg hover:shadow-xl transition-all">
                REGISTER NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EMEA NetAcad Cup Learn-a-thon */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-[#0D96CC]">EMEA NetAcad Cup Learn-a-thon</h2>
          <p className="text-lg mb-4 text-gray-800">
            Our goal is to make this the largest competition in Networking Academy history, connecting participants from Norway to South Africa, and from Ireland to Kazakhstan!
          </p>
          <p className="text-lg text-gray-800">
            Join us and help make this an unforgettable experience for the Cisco Networking Academy community!
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#0D96CC]">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitCards.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all hover:-translate-y-1 border-t-4 border-[#0D96CC] bg-white">
                <CardHeader>
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl mb-4 text-gray-800">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{benefit.description}</p>
                  {benefit.courses && (
                    <div className="space-y-2 text-left">
                      {benefit.courses.map((course, idx) => (
                        <a
                          key={idx}
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm text-[#0D96CC] hover:text-[#F58025] hover:underline transition-colors"
                        >
                          {course.name}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Incentives */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-[#0D96CC]">Incentives for Students</h2>
          <div className="space-y-6 text-base">
            <div className="flex items-start bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-lg">
              <Award className="w-8 h-8 mr-4 text-[#F58025] flex-shrink-0 mt-1" />
              <span className="text-gray-800">Students who participate in the learn-a-thon and pass any eligible course exam with a 70% or above will be awarded the respective course digital badge.</span>
            </div>
            <div className="flex items-start bg-gradient-to-r from-orange-50 to-transparent p-6 rounded-lg">
              <Award className="w-8 h-8 mr-4 text-[#F58025] flex-shrink-0 mt-1" />
              <span className="text-gray-800">Students that participate in the learn-a-thon will receive a Cisco learn-a-thon experience digital badge.</span>
            </div>
            <p className="text-sm text-gray-600 mt-6 p-4 bg-gray-50 rounded-lg">
              A Cisco digital badge is an emblem distinguishing an achievement that can be shared and validated digitally on LinkedIn, X, Facebook, Xing, via Email, shared link; embed code into web page or blog.
            </p>
            <p className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
              After the learn-a-thon, encourage students to continue to complete the participating courses. The CCST Networking exam certification is an excellent steppingstone for learners to validate their skills and then continue to associate-level certifications like CCNA or CyberOps Associate.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-br from-[#0D96CC] to-[#0a7a9e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Event Timeline</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                      <p className="font-bold text-lg text-[#0D96CC] mb-2">{event.date}</p>
                      <p className="text-gray-700">{event.event}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 bg-[#F58025] rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-[#0D96CC]">Awards & Recognition</h2>
          <div className="space-y-6 text-base">
            <div className="p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg border-l-4 border-[#F58025]">
              <p className="text-gray-800">
                Cisco branded prizes will be awarded to the Top 20 academies per region with the highest score of student participants, student completions and badges awarded.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg border-l-4 border-[#0D96CC]">
              <p className="text-gray-800">
                The Top 3 academies per country will be invited to participate in the EMEA Cisco Networking Academy Cup – Capture the Flag.
              </p>
            </div>
            <p className="text-sm italic text-gray-600 p-4 bg-gray-50 rounded-lg">
              In the event of a tie, the academy that achieved the highest points at the earliest time will be awarded the prize. Only one prize per academy will be awarded.
            </p>
          </div>
        </div>
      </section>

      {/* How Academies Join */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-[#0D96CC]">How to Join</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {joinSteps.map((step) => (
              <div key={step.step} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0D96CC] to-[#0a7a9e] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.step}
                </div>
                <p className="text-sm text-gray-700 pt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#0D96CC]">Registration</h2>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-10 rounded-xl shadow-xl">
            <p className="text-base mb-6 text-gray-800">
              This learn-a-thon is open to Cisco Networking Academies who can coordinate the event virtually or on campus. To participate, read the terms and conditions and then register your course here.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded">
              <p className="text-sm font-semibold text-gray-800">
                If you are creating multiple courses for this competition, each individual course must be registered separately
              </p>
            </div>
            <div className="text-center">
              <Button onClick={handleRegistration} size="lg" className="bg-[#F58025] hover:bg-[#e07520] text-white shadow-lg hover:shadow-xl transition-all px-12 py-6 text-lg">
                REGISTER NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#0D96CC]">Marketing Materials</h2>
          <p className="text-base mb-12 text-center text-gray-700">Download these files to promote the learn-a-thon in your academy.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Infographic', 'Email', 'Social', 'TriFold'].map((item) => (
              <div key={item} className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border-t-4 border-[#F58025]">
                <Download className="w-16 h-16 mx-auto mb-4 text-[#0D96CC]" />
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 2: CTF */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-[#0D96CC]">Phase 2: Capture the Flag</h2>
          <p className="text-base mb-6 text-gray-800">
            The three highest-scoring academies from each participating country will qualify for Phase 2: EMEA Cisco Networking Academy Cup – Capture the Flag. Each qualifying academy will select a team of four students to represent them and compete in the event, which begins on April 16, 2026.
          </p>
          <p className="text-base mb-12 text-gray-800">
            The challenge will feature exclusive content developed in partnership with Real Madrid and Cisco, highlighting the digital transformation of the Santiago Bernabeu stadium. The Capture the Flag tournament, using the Real Madrid Learning Collection, will consist of two phases and focus on three key areas: digital signage, WiFi 6, and network infrastructure.
          </p>
          
          <h3 className="text-3xl font-bold mb-8 text-[#0D96CC]">CTF Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {ctfTimeline.map((event, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-lg shadow hover:shadow-lg transition-all">
                <Calendar className="w-10 h-10 text-[#0D96CC] flex-shrink-0" />
                <div>
                  <p className="font-bold text-gray-800">{event.date}</p>
                  <p className="text-gray-600 text-sm">{event.event}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-8 text-[#0D96CC]">Grand Prize</h3>
          <div className="bg-gradient-to-r from-[#0D96CC] to-[#0a7a9e] text-white p-10 rounded-xl mb-6 shadow-2xl">
            <p className="text-2xl font-bold mb-4">🏆 EMEA Cisco Networking Academy Cup Winner</p>
            <p className="text-lg mb-6">
              5 VIP tickets to La Liga match + 5 tickets to an exclusive Technical tour of the Bernabeu
            </p>
            <p className="text-sm opacity-90">
              *Winners are responsible for all costs associated with travel, meals and lodging accommodations, etc.
            </p>
          </div>
          <p className="text-base text-gray-800 p-4 bg-gray-50 rounded-lg">
            Prizes will be awarded to the Top 38 teams.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0D96CC] to-[#0a7a9e] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Accelerate Your Career with Cisco</h2>
          <p className="text-lg mb-8 opacity-95">
            Cisco Networking Academy is an IT skills-to-jobs program offering digital skills training through strong public-private partnerships, high-quality curriculum, and inclusive workforce development programs.
          </p>
          <Button size="lg" className="bg-[#F58025] hover:bg-[#e07520] text-white shadow-xl hover:shadow-2xl transition-all">
            <ExternalLink className="w-5 h-5 mr-2" />
            Visit Cisco Networking Academy
          </Button>
        </div>
      </section>

      {/* Custom Footer for Learn-a-thon page */}
      <footer className="bg-[#1a1a1a] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#0D96CC]">About</h3>
              <p className="text-sm text-gray-300">
                EMEA Cisco Networking Academy Cup 2025 - Empowering the next generation of tech professionals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#0D96CC]">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#registration" className="text-gray-300 hover:text-[#F58025] transition-colors">Register</a></li>
                <li><a href="/" className="text-gray-300 hover:text-[#F58025] transition-colors">Home</a></li>
                <li><a href="/instructors" className="text-gray-300 hover:text-[#F58025] transition-colors">Instructors</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#0D96CC]">Contact</h3>
              <p className="text-sm text-gray-300">
                For questions about the Learn-a-thon, please contact your regional Cisco Networking Academy representative.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm text-gray-400">© 2025 Cisco Networking Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnAThon;