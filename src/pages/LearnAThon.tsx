import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Award, ExternalLink, Signal, BookA, Sparkle, TrophyIcon, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBanner from "@/assets/emea-hero-banner.png";
import nanotechxlogo from "@/assets/nano_techx_logo.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import CollaboratorsSection from "@/components/learnathon/CollaboratorsSection";

const LearnAThon = () => {

  useEffect(() => {
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

  const benefitCards = [
    {
      icon: "🏆",
      title: "Length of Learn-A-Thon",
      description: "Participate in the learn-a-thon from 12 January until 8 March 2026."
    },
    {
      icon: <Sparkle className="w-12 h-12 text-[#ffd700]" />,
      title: "Benefits",
      description: "These courses collectively equip learners with essential knowledge and skills to understand and address cybersecurity threats, leverage artificial intelligence responsibly, support digital transformation through IoT, maintain digital safety, and build strong networking capabilities."
    },
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: "In-Demand Skills",
      description: "Foundational networking knowledge, security expertise, and emerging technology competencies are essential skills to keep pace with rapid technological changes, including the integration of AI in networking and cybersecurity."
    },
    {
      icon: <BookA className="w-12 h-12 text-[#0D96CC]" />,
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
      description: "The cost to join this comprehensive learn-a-thon is completely free, making essential cybersecurity, AI, and networking skills accessible to everyone. This investment in your future is free of financial barriers, encouraging broad participation from all who wish to enhance their digital competencies and career prospects."
    },
    {
      icon: <Signal className="w-12 h-12 text-[#0D96CC]" />,
      title: "Level",
      description: "This entire learn-a-thon is perfectly suited for those with little to no prior experience in networking, cybersecurity, or AI. The course materials are designed to establish a solid foundation, gradually introducing key concepts and technical skills in an easy-to-digest format."
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

  const handleRegistration = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSc7bu7vke9WMDzeoTJ6--5hw0BzkyXPByMoBnaOo-kMphcHtg/viewform?usp=dialog");
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Glassmorphism Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] backdrop-blur-2xl border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png" alt="cisco logo" />
              </div>
              <span className="text-black font-bold text-xl">X</span>
              <div className="w-14 h-14 flex items-center justify-center">
                <img src={nanotechxlogo} alt="nanotechx logo" />
              </div>
            </div>
            <div className="hidden md:flex space-x-1">
              <a href="/" className="px-4 py-2 text-black hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm border border-transparent hover:border-white/30">Home</a>
              <a href="/instructors" className="px-4 py-2 text-black hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm border border-transparent hover:border-white/30">Instructors</a>
              <a href="/team" className="px-4 py-2 text-black hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm border border-transparent hover:border-white/30">Team</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Banner */}
      <section className="pt-20">
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
              Registrations are now open! Click the button below to register your course and join the learn-a-thon.
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

      {/* Benefits Grid with Network Topology Background */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Network Topology SVG Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="#0D96CC" className="animate-pulse" />
                <circle cx="180" cy="40" r="3" fill="#F58025" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="100" cy="100" r="3" fill="#0D96CC" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <circle cx="60" cy="160" r="3" fill="#F58025" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                <circle cx="160" cy="180" r="3" fill="#0D96CC" className="animate-pulse" style={{ animationDelay: '2s' }} />
                <line x1="20" y1="20" x2="180" y2="40" stroke="#0D96CC" strokeWidth="0.5" opacity="0.5" />
                <line x1="180" y1="40" x2="100" y2="100" stroke="#0D96CC" strokeWidth="0.5" opacity="0.5" />
                <line x1="100" y1="100" x2="60" y2="160" stroke="#F58025" strokeWidth="0.5" opacity="0.5" />
                <line x1="60" y1="160" x2="160" y2="180" stroke="#F58025" strokeWidth="0.5" opacity="0.5" />
                <line x1="20" y1="20" x2="100" y2="100" stroke="#0D96CC" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-black mb-4 text-center bg-gradient-to-r from-[#0D96CC] via-white to-[#F58025] bg-clip-text text-transparent drop-shadow-2xl" style={{ fontFamily: 'monospace' }}>
            PROGRAM OVERVIEW
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#0D96CC] to-[#F58025] mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitCards.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-[0_0_30px_rgba(13,150,204,0.5)] transition-all duration-500 hover:-translate-y-2 border border-[#0D96CC]/30 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/80 hover:border-[#F58025] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">{benefit.icon}</div>
                  <CardTitle className="text-xl mb-4 text-white font-bold tracking-wide">{benefit.title}</CardTitle>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-[#0D96CC] to-[#F58025] mx-auto rounded-full"></div>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                  {benefit.courses && (
                    <div className="space-y-2 text-left bg-slate-900/50 p-4 rounded-lg border border-[#0D96CC]/20">
                      {benefit.courses.map((course, idx) => (
                        <a
                          key={idx}
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-sm hover:text-[#F58025] hover:pl-2 transition-all duration-200 border-l-2 border-transparent hover:border-[#F58025] pl-2"
                        >
                          → {course.name}
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
            <p className="text-base text-gray-600 mt-6 p-4 bg-gray-50 rounded-lg">
              A Cisco digital badge is an emblem distinguishing an achievement that can be shared and validated digitally on LinkedIn, X, Facebook, Xing, via Email, shared link; embed code into web page or blog.
            </p>
            <p className="text-base text-gray-600 p-4 bg-gray-50 rounded-lg">
              After the learn-a-thon, encourage students to continue to complete the participating courses. The CCST Networking exam certification is an excellent steppingstone for learners to validate their skills and then continue to associate-level certifications like CCNA or CyberOps Associate.
            </p>
          </div>
        </div>
      </section>

      {/* Creative Timeline with Hexagons */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(#0D96CC 1px, transparent 1px), linear-gradient(90deg, #0D96CC 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2
            className="text-4xl sm:text-5xl font-black mb-4 text-center bg-gradient-to-r from-[#F58025] via-white to-[#0D96CC] bg-clip-text text-transparent"
            style={{ fontFamily: 'monospace' }}
          >
            EVENT TIMELINE
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#F58025] to-[#0D96CC] mx-auto mb-16 rounded-full"></div>

          <div className="relative">
            {/* Vertical glowing line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0D96CC] via-[#F58025] to-[#0D96CC] shadow-[0_0_20px_rgba(13,150,204,0.8)]"></div>

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between animate-fade-in flex-col sm:flex-row ${
                    index % 2 !== 0 ? 'sm:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Event Card */}
                  <div
                    className={`w-full sm:w-5/12 mb-8 sm:mb-0 ${
                      index % 2 === 0 ? 'sm:text-right sm:pr-12' : 'sm:text-left sm:pl-12'
                    }`}
                  >
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0D96CC] to-[#F58025] rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-lg border border-[#0D96CC]/50 hover:border-[#F58025] transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,128,37,0.3)] transform hover:-translate-y-2">
                        <p
                          className="font-black text-xl sm:text-2xl mb-2 sm:mb-3 text-transparent bg-gradient-to-r from-[#0D96CC] to-[#F58025] bg-clip-text"
                          style={{ fontFamily: 'monospace' }}
                        >
                          {event.date}
                        </p>
                        <div
                          className="h-0.5 w-16 sm:w-20 bg-gradient-to-r from-[#0D96CC] to-[#F58025] mb-3 rounded-full"
                          style={{ marginLeft: index % 2 === 0 ? 'auto' : '0' }}
                        ></div>
                        <p className="text-white text-base sm:text-lg font-medium">
                          {event.event}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hexagon Marker */}
                  <div className="w-full sm:w-2/12 flex justify-center relative z-20 mb-6 sm:mb-0">
                    <div className="relative group">
                      <div className="absolute inset-0 animate-pulse">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          className="drop-shadow-[0_0_15px_rgba(245,128,37,0.8)]"
                        >
                          <polygon
                            points="24,2 44,14 44,34 24,46 4,34 4,14"
                            fill="url(#hexGradient)"
                            stroke="#fff"
                            strokeWidth="2"
                          />
                          <defs>
                            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{ stopColor: '#0D96CC', stopOpacity: 1 }} />
                              <stop offset="100%" style={{ stopColor: '#F58025', stopOpacity: 1 }} />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <svg width="48" height="48" viewBox="0 0 48 48" className="relative">
                        <polygon
                          points="24,2 44,14 44,34 24,46 4,34 4,14"
                          fill="url(#hexGradient)"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                        <text
                          x="24"
                          y="28"
                          textAnchor="middle"
                          fill="white"
                          fontSize="14"
                          fontWeight="bold"
                          style={{ fontFamily: 'monospace' }}
                        >
                          {index + 1}
                        </text>
                      </svg>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden sm:block sm:w-5/12"></div>
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
            <p className="text-base italic text-gray-600 p-4 bg-gray-50 rounded-lg">
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
                <p className="text-base text-gray-700 pt-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CollaboratorsSection />

      {/* Registration */}
      <section id="registration" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center text-[#0D96CC]">Registration</h2>
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-10 rounded-xl shadow-xl">
            <p className="text-base mb-6 text-gray-800">
              This learn-a-thon is open to Cisco Networking Academies who can coordinate the event virtually or on campus. To participate, read the terms and conditions and then register your course here.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded">
              {/* <p className="text-base font-semibold text-gray-800">
                If you are creating multiple courses for this competition, each individual course must be registered separately
              </p> */}
              <p className="text-base font-semibold text-gray-800">
                Registrations are now open. Hurry up and secure your spot!
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

      {/* Phase 2: CTF - Enhanced with Hackathon Feel */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Tech grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#F58025 1px, transparent 1px), linear-gradient(90deg, #F58025 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-black mb-6 text-center bg-gradient-to-r from-[#F58025] via-white to-[#0D96CC] bg-clip-text text-transparent" style={{ fontFamily: 'monospace' }}>
            PHASE 2: CAPTURE THE FLAG
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#F58025] to-[#0D96CC] mx-auto mb-12 rounded-full"></div>
          
          <div className="space-y-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-[#0D96CC]/30 p-8 rounded-xl">
              <p className="text-base text-gray-200 leading-relaxed">
                The three highest-scoring academies from each participating country will qualify for Phase 2: EMEA Cisco Networking Academy Cup – Capture the Flag. Each qualifying academy will select a team of four students to represent them and compete in the event, which begins on April 16, 2026.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-[#F58025]/30 p-8 rounded-xl">
              <p className="text-base text-gray-200 leading-relaxed">
                The challenge will feature exclusive content developed in partnership with Real Madrid and Cisco, highlighting the digital transformation of the Santiago Bernabeu stadium. The Capture the Flag tournament, using the Real Madrid Learning Collection, will consist of two phases and focus on three key areas: digital signage, WiFi 6, and network infrastructure.
              </p>
            </div>
          </div>
          
          <h3 className="text-4xl font-black mb-10 text-center text-transparent bg-gradient-to-r from-[#0D96CC] to-[#F58025] bg-clip-text" style={{ fontFamily: 'monospace' }}>CTF TIMELINE</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {ctfTimeline.map((event, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D96CC] to-[#F58025] rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative flex items-start space-x-4 p-6 bg-slate-800 border border-[#0D96CC]/30 rounded-xl hover:border-[#F58025] transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,128,37,0.3)]">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0D96CC] to-[#F58025] rounded-lg flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-black text-[#0D96CC] mb-1" style={{ fontFamily: 'monospace' }}>{event.date}</p>
                    <p className="text-gray-300 text-base">{event.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-4xl font-black mb-10 text-center text-transparent bg-gradient-to-r from-[#F58025] to-[#0D96CC] bg-clip-text" style={{ fontFamily: 'monospace' }}>GRAND PRIZE</h3>
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F58025] to-[#0D96CC] rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-[#F58025] text-white p-12 rounded-2xl shadow-2xl">
              <div className="text-center space-y-6">
                <p className="flex items-center justify-center"><TrophyIcon className="w-14 h-14 text-[#F58025]" /></p>
                <p className="text-3xl font-black bg-gradient-to-r from-[#F58025] to-[#0D96CC] bg-clip-text text-transparent" style={{ fontFamily: 'monospace' }}>
                  EMEA CUP WINNER
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-[#F58025] to-[#0D96CC] mx-auto rounded-full"></div>
                <p className="text-xl font-semibold text-gray-200">
                  5 VIP tickets to La Liga match + 5 tickets to an exclusive Technical tour of the Bernabeu
                </p>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-base text-gray-400 italic">
                    *Winners are responsible for all costs associated with travel, meals and lodging accommodations, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-[#0D96CC]/30 p-6 rounded-xl text-center">
            <p className="text-base text-gray-200 font-semibold">
              Prizes will be awarded to the <span className="text-[#F58025] font-black">Top 38 teams</span>
            </p>
          </div>
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

      {/* Custom Cisco-themed Footer with Glassmorphism */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-[#0D96CC] to-slate-900 text-white py-16 overflow-hidden">
        {/* Network pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#fff" />
                <circle cx="90" cy="20" r="2" fill="#F58025" />
                <circle cx="50" cy="50" r="2" fill="#fff" />
                <line x1="10" y1="10" x2="90" y2="20" stroke="#fff" strokeWidth="0.5" />
                <line x1="90" y1="20" x2="50" y2="50" stroke="#F58025" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-network)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white bg-gradient-to-r from-[#0D96CC] to-[#F58025] bg-clip-text" style={{ fontFamily: 'monospace' }}>ABOUT</h3>
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#0D96CC] to-[#F58025] rounded-full"></div>
                <p className="text-base text-gray-300 leading-relaxed">
                  EMEA Cisco Networking Academy Cup 2025 - Empowering the next generation of tech professionals through innovation and collaboration.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white bg-gradient-to-r from-[#0D96CC] to-[#F58025] bg-clip-text" style={{ fontFamily: 'monospace' }}>QUICK LINKS</h3>
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#0D96CC] to-[#F58025] rounded-full"></div>
                <ul className="space-y-3 text-base">
                  <li><a href="#registration" className="text-gray-300 hover:text-[#F58025] transition-all hover:pl-2 block">→ Register</a></li>
                  <li><a href="/" className="text-gray-300 hover:text-[#F58025] transition-all hover:pl-2 block">→ Home</a></li>
                  <li><a href="/instructors" className="text-gray-300 hover:text-[#F58025] transition-all hover:pl-2 block">→ Instructors</a></li>
                  <li><a href="/team" className="text-gray-300 hover:text-[#F58025] transition-all hover:pl-2 block">→ Team</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white bg-gradient-to-r from-[#0D96CC] to-[#F58025] bg-clip-text" style={{ fontFamily: 'monospace' }}>CONTACT</h3>
                <div className="h-0.5 w-16 bg-gradient-to-r from-[#0D96CC] to-[#F58025] rounded-full"></div>
                <p className="text-base text-gray-300 leading-relaxed">
                  For questions about the Learn-a-thon, please contact your regional Cisco Networking Academy representative.
                </p>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 mt-8 text-center">
              <p className="text-base text-gray-300 font-mono">© 2025 Cisco Networking Academy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearnAThon;