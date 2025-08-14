import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, FileDown, Send } from "lucide-react";
import { toast } from "sonner";
import Collaborators from "@/components/cfp/Collaborators";

const editors = [
  { 
    name: "Hafiz Muhammad Attaullah",
    position: "Cyber Security Researcher",
    affiliation: "Faculty of Computing and Informatics, Multimedia University, Malaysia",
    initials: "HMA"
  },
  { 
    name: "Dr. Inam Ullah Khan",
    position: "Post Doctoral Researcher",
    affiliation: "Faculty of Computing and Informatics, Multimedia University, Malaysia",
    initials: "IK"
  },
  { 
    name: "Dr. Keshav Kaushik",
    position: "Professor",
    affiliation: "Center for Cyber Security and Cryptology, Sharda School of Computer Science & Engineering, Sharda University, Greater Noida, Uttar Pradesh, India",
    initials: "KK"
  },
  { 
    name: "Dr. Al-Sakib Khan Pathan",
    position: "Professor",
    affiliation: "Department of Computer Science and Engineering, United International University, Bangladesh",
    initials: "AKP"
  },
  { 
    name: "Dr. Ahthasham Sajid",
    position: "Associate Professor",
    affiliation: "Center for Cyber Security and Cryptology, Sharda School of Computer Science & Engineering, Sharda University, Greater Noida, Uttar Pradesh, India",
    initials: "KK"
  },
];

const editorsInfo = [
  {
    name: "Hafiz Muhammad Attaullah",
    biography: "Hafiz Muhammad Attaullah is a Cybersecurity Advocate and Red Team researcher, currently pursuing a Ph.D. in Computing at Multimedia University, Malaysia. He holds a Bachelor's in Telecommunication Engineering and a Master's in Cybersecurity from NED University of Engineering and Technology, Pakistan. Hafiz has developed four patented cybersecurity products funded by national innovation programs. He is an Offensive Security Head at NanoTechx, specializing in SecOps, UAV network security, and the use of machine learning in cybersecurity. He has extensive experience conducting penetration testing for multinational firms. An active member of IEEE, Hafiz has won international awards, including the Microsoft Imagine Cup Regional Championship."
  },
  {
    name: "Dr. Inam Ullah Khan",
    biography: "Dr. Inam Ullah Khan is a Postdoctoral Research Fellow at Multimedia University, Malaysia, with expertise in Artificial Intelligence, UAV networks, Machine Learning, and Intrusion Detection Systems. He is the founder of AI-Explain Your Science (AI-EYS) and a Senior Member of IEEE. Dr. Khan holds a Ph.D. and M.S. in Electronics Engineering and a Bachelor's in Computer Science. He has authored over 100 publications, edited around 20 books, and served on technical committees for international conferences. He has lectured globally and is a mentor at Impact Xcelerator, Spain. Dr. Khan's research bridges AI, cybersecurity, and wireless communication."
  },
  {
    name: "Dr. Keshav Kaushik",
    biography: "Dr. Keshav Kaushik is a renowned cybersecurity and digital forensics expert, currently serving as an Associate Professor at the Center for Cyber Security and Cryptology, Sharda School of Computer Science & Engineering, Sharda University, Greater Noida, India. A key member of the Cybersecurity Centre of Excellence, he has been recognized among the World's Top 2% Scientists by Stanford University and Elsevier (2024). With over 170 publications, including 30+ peer-reviewed journal articles and 60+ Scopus-indexed conference papers, he is a prolific researcher and author of 40+ books and 30 book chapters. Dr. Kaushik holds 15 granted patents and has contributed extensively to AI-driven security and forensic technologies. He has held editorial roles in prestigious journals, including Guest Editor for the IEEE Journal of Biomedical and Health Informatics and Associate Editor for multiple Scopus-indexed journals. A Certified Ethical Hacker, ISO/IEC 27001:2013 Lead Auditor, and IBM Cybersecurity Analyst, he is a member of IEEE, IAENG, and Vice-Chairperson of the Meerut ACM Chapter. His impactful talks and training sessions have advanced cybersecurity education nationwide, earning accolades from AICTE, ISRO, and the Uttarakhand Police. With a strong academic foundation and continuous innovation, Dr. Kaushik remains a leading figure in cybersecurity research and education."
  },
  {
    name: "Prof. Dr. Al-Sakib Khan Pathan",
    biography: "Dr. Al-Sakib Khan Pathan is a Professor at United International University, Bangladesh, specializing in network security, cloud computing, and wireless sensor networks. He received his Ph.D. in Computer Engineering from Kyung Hee University, South Korea. Dr. Pathan has authored or edited 36 books and published extensively in leading journals. His contributions to cybersecurity earned him the IEEE Outstanding Leadership Award. He has been recognized four times among the top 2% of scientists worldwide by Stanford University and actively contributes as an editor and TPC member for international journals and conferences."
  },
  {
    name: "Dr. Ahthasham Sajid",
    biography: "Dr. Ahthasham Sajid is an Assistant Professor in the Department of Cyber Security at Riphah Institute of Systems Engineering, Pakistan. He received his Ph.D. in Computer Science from SZABIST, Islamabad. His research interests include Wireless Sensor Networks, VANETs, MANETs, and Cybersecurity. Dr. Sajid has published over 40 articles in SCI/Scopus-indexed journals and conference proceedings. He has supervised several MS and Ph.D. theses and regularly reviews for international journals such as IEEE Access and Wiley. Dr. Sajid has been awarded for excellence in teaching and research throughout his academic career."
  },
];

const bookParts = [
  {
    title: "Part I: Fundamentals",
    chapters: [
      "Chapter 1 - The Evolution of UAV Networks and Their Role in Modern Communication",
      "Chapter 2 - Fundamentals of UAV Network Architecture and Design",
      "Chapter 3 - UAV Hardware Fundamentals and Network Integration"
    ]
  },
  {
    title: "Part II: Architecture, Protocols, Scalability, and Control",
    chapters: [
      "Chapter 4 - Communication Protocols for UAV Networks: Bridging Air and Ground",
      "Chapter 5 - Latency, Scalability, and Fault Tolerance: Key Challenges in UAV Network Design",
      "Chapter 6 - Scalable UAV Networks: Solutions for Large-Scale Deployments",
      "Chapter 7 - Autonomous UAV Networks: The Next Frontier in Communication and Security",
    ]
  },
  {
    title: "Part III: Security and Privacy",
    chapters: [
      "Chapter 8 - Cybersecurity in UAV Networks: Protecting the Skies",
      "Chapter 9 - Securing UAV Communications: Encryption, Trust, and Intrusion Detection",
      "Chapter 10 - Blockchain as a Security Solution for UAV Networks",
      "Chapter 11 - Cyber Resilience in UAV Networks: Responding to Emerging Threats",
      "Chapter 12 - Regulatory Challenges in UAV Network Security",
      "Chapter 13 - The Global Landscape of UAV Network Security: International Perspectives",
    ]
  },
  {
    title: "Part IV: Emerging Technologies, Edge Computing, and Machine Learning",
    chapters: [
      "Chapter 14 - The Integration of 5G, IoT, and AI for Enhanced UAV Connectivity",
      "Chapter 15 - Machine Learning for Optimizing UAV Network Performance and Security",
      "Chapter 16 - Edge Computing in UAV Networks: Enhancing Real-Time Data Processing",
      "Chapter 17 - Innovations in UAV Swarm Communication: Collective Intelligence and Security",
      "Chapter 18 - Future Trends in UAV Communication: From 6G to Quantum Networks"
    ]
  },
  {
    title: "Part V: Real-World Applications",
    chapters: [
      "Chapter 19 - Real-World Applications: UAV Networks in Disaster Management and Surveillance",
      "Chapter 20 - The Role of UAV Networks in Smart Cities and Urban Management",
      "Chapter 21 - Application-Specific UAV Communication System Design",
    ]
  },
  {
    title: "Part VI: Cross-Cutting Themes and Practical Implementations",
    chapters: [
      "Chapter 22 - Flying Ad-hoc Networks (FANETs) and Software Defined Networking (SDN) for UAV Communication",
      "Chapter 23 - Environmental Sustainability and Energy Efficiency in UAV Networks",
      "Chapter 24 - Cross-Cutting Themes: Regulation, Ethics, and Emerging Technology Intersections",
      "Chapter 25 - Simulation Frameworks, Algorithms, and Code Implementations for UAV Communication and Security",
    ]
  }
];

const bookTitle = "Communication in UAV Networks: Design, Challenges, and Security Implications";

const CallForPublications = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const newTitle = "Call for Publications | UAV Networks (Scopus)";
    const newDesc =
      "Contribute Scopus-indexed chapters to Communication in UAV Networks: design, challenges, and security implications.";
    document.title = newTitle;
    document.body.classList.add("bw-theme");

    const prevFavicon = document.querySelector('link[rel="icon"]');
    const prevFaviconHref = prevFavicon?.getAttribute("href");

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    metaDesc.setAttribute("content", newDesc);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const metaLink = document.querySelector('link[rel="icon"]') || document.createElement("link");
    metaLink.setAttribute("rel", "icon");
    metaLink.setAttribute("href", "/analysis.ico");
    if (!metaLink.parentNode) document.head.appendChild(metaLink);

    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    linkCanonical.setAttribute("href", window.location.href);
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);

    // Open Graph & Twitter tags to avoid default site meta
    const ensureMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };
    ensureMeta('meta[property="og:title"]', { property: "og:title", content: newTitle });
    ensureMeta('meta[property="og:description"]', { property: "og:description", content: newDesc });
    ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: window.location.href });
    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary" });
    ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: newTitle });
    ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: newDesc });
    const ldJson = document.createElement("script");
    ldJson.type = "application/ld+json";
    ldJson.id = "ld-call-for-publications";
    const data = {
      "@context": "https://schema.org",
      "@type": "Book",
      name: bookTitle,
      description:
        "Scopus-indexed edited volume inviting chapter submissions on UAV networks communication, design, challenges and security.",
      editor: editors.map((e) => ({ "@type": "Person", name: e.name, affiliation: e.affiliation })),
      potentialAction: {
        "@type": "CreateAction",
        name: "Submit Chapter",
        target: window.location.href,
      },
    };
    ldJson.text = JSON.stringify(data);
    // Remove old if exists
    const existing = document.getElementById("ld-call-for-publications");
    if (existing) existing.remove();
    document.head.appendChild(ldJson);

    return () => {
      document.title = prevTitle;
      if (prevFavicon && prevFaviconHref) {
        metaLink.setAttribute("href", prevFaviconHref);
      } else {
        metaLink.remove();
      }
      ldJson.remove();
      document.body.classList.remove("bw-theme");
    };
  }, []);

  const onPoster = () => toast("Poster will be available soon.");
  const onSubmit = () => toast("Submission portal coming soon.");

  const initialsFor = useMemo(() => (name: string) => {
    const parts = name.split(" ");
    return parts.map((p) => p[0]).join("").slice(0, 2).toUpperCase();
  }, []);
  const dateline = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="relative pt-24 paper-texture">{/* offset for fixed local navbar */}
      {/* Minimal monochrome top bar (page-specific) */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-6xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-md font-bold tracking-wide">Call for Publications</span>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#scope" className="hover:text-foreground transition-colors">Aim & Scope</a>
              <a href="#topics" className="hover:text-foreground transition-colors">Topics</a>
              <a href="#editors" className="hover:text-foreground transition-colors">Editors</a>
              <a href="#biography" className="hover:text-foreground transition-colors">Biography</a>
            </nav>
        </div>
      </div>
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="paper-fold" />
        <div className="halftone-corner halftone-top-left" />
        <div className="halftone-corner halftone-bottom-right" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(1px_1px_at_1px_1px,hsl(var(--foreground)/0.8)_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <header className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="animate-fade-in">
            <div className="text-center ornament-divider pb-4">
              <h2 className="masthead-title news-serif text-3xl sm:text-4xl tracking-[0.08em]">UAV Networks Bulletin</h2>
              <p className="dateline text-xs mt-1">Vol. 1 • No. 1 — {dateline}</p>
            </div>
            <span className="inline-block rounded border border-border bg-cyber-surface px-3 py-1 text-[11px] tracking-wide text-muted-foreground">Scopus Indexed Edited Volume</span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight news-serif">
              Call for Publications
            </h1>
            <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl">
              Inviting high-quality chapters for our upcoming book titled:
            </p>
            <p className="mt-2 text-lg sm:text-xl font-semibold text-foreground news-serif">{bookTitle}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="cyber" onClick={onPoster} aria-label="Download poster">
                <FileDown className="mr-2" /> Download Poster
              </Button>
              <Button variant="cyber-outline" onClick={onSubmit} aria-label="Submit chapter">
                <Send className="mr-2" /> Submit Chapter
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Aim & Scope */}
        <section id="scope" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-border border-2 bg-cyber-surface/60 backdrop-blur supports-[backdrop-filter]:bg-cyber-surface/60 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Aim & Scope</CardTitle>
            </CardHeader>
            <CardContent className="text-sm sm:text-base text-muted-foreground">
              <p className="drop-cap">
                This edited book focuses on end-to-end communication aspects of Unmanned Aerial Vehicle (UAV) networks,
                covering architectures, protocols, mobility, reliability, security and privacy. We welcome
                contributions that advance theory, propose novel designs, demonstrate empirical evaluations, or
                showcase practical deployments across civil, industrial and defense contexts.
              </p>
              <div className="pull-quote mt-4">
                “From resilient swarm routing to zero-trust security, we’re curating practical, peer-reviewed advances for real-world UAV systems.”
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Topics */}
        <section id="topics" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Card className="border-border bg-cyber-surface/60 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Book Structure: 6 Parts, 15 Chapters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {bookParts.map((part, index) => (
                  <div key={index} className="border-l-2 border-border pl-4">
                    <h3 className="font-semibold text-foreground mb-3 news-serif">{part.title}</h3>
                    <ul className="space-y-2 [list-style:disc] pl-5">
                      {part.chapters.map((chapter, chapterIndex) => (
                        <li key={chapterIndex} className="text-sm text-foreground/90">
                          {chapter}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Editors */}
        <section id="editors" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-border border-2 bg-cyber-surface/60 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Editors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {editors.map((e) => (
                  <div key={e.name} className="group rounded-lg border-4 border-border bg-background/50 p-6 transition-all duration-300 hover:shadow-blink">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg font-semibold">{e.initials || initialsFor(e.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground news-serif">{e.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium mb-2">{e.position}</p>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p><span className="font-medium">Affiliation:</span> {e.affiliation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Author/Editors' Biography */}
        <section id="biography" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-border bg-cyber-surface/60 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Author/Editors&apos; Biography</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {editorsInfo.map((editor, index) => (
                  <div key={index} className="border-l-2 border-border pl-6">
                    <h3 className="font-semibold text-lg text-foreground news-serif mb-3">{editor.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed drop-cap">
                      {editor.biography}
                    </p>
                    {index < editorsInfo.length - 1 && <div className="newspaper-rule mt-6" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Collaborators */}
        <Collaborators />

        {/* Bottom CTA */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-cyber-surface p-5 animate-fade-in">
            <div>
              <h2 className="text-lg font-semibold">Ready to contribute?</h2>
              <p className="text-sm text-muted-foreground">Submit your Scopus-ready chapter to be part of this edited volume.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <Button variant="cyber-outline" onClick={onPoster} aria-label="Download poster bottom">
                <FileDown className="mr-2" /> Download Poster
              </Button>
              <Button variant="cyber" onClick={onSubmit} aria-label="Submit chapter bottom">
                <Send className="mr-2" /> Submit Chapter
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CallForPublications;