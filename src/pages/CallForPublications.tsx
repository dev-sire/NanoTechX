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

const bookTitle = "Unmanned Aerial Vehicle Networks: Communications and Cybersecurity Challenges";

const CallForPublications = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const newTitle = "Call for Book Chapters | Unmanned Aerial Vehicle Networks: Communications and Cybersecurity Challenges";
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
    <div className="relative pt-24 paper-texture bg-gradient-to-br from-background via-muted/30 to-background">{/* offset for fixed local navbar */}
      {/* Minimal monochrome top bar (page-specific) */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-6xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="text-md font-bold tracking-wide">Call for Book Chapters</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#scope" className="hover:text-foreground transition-colors">Aim & Scope</a>
            <a href="#topics" className="hover:text-foreground transition-colors">Topics</a>
            <a href="#editors" className="hover:text-foreground transition-colors">Editors</a>
            <a href="#biography" className="hover:text-foreground transition-colors">Biography</a>
            <a href="#rules" className="hover:text-foreground transition-colors">Rules</a>
          </nav>
        </div>
      </div>
      {/* Enhanced newspaper-themed decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="paper-fold" />
        <div className="halftone-corner halftone-top-left" />
        <div className="halftone-corner halftone-bottom-right" />
        {/* Multiple layered newspaper textures */}
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(1px_1px_at_1px_1px,hsl(var(--foreground)/0.8)_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,transparent_0%,hsl(var(--muted-foreground)/0.3)_50%,transparent_100%)] [background-size:200px_1px]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,hsl(var(--muted-foreground)/0.5)_35px,hsl(var(--muted-foreground)/0.5)_36px)]" />
        {/* Aged paper effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_20%_30%,hsl(var(--muted-foreground)/0.6)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,hsl(var(--muted-foreground)/0.4)_0%,transparent_50%)]" />
      </div>

      <header className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="animate-fade-in">
            <div className="text-center mb-6">
              <span className="inline-block rounded border border-border bg-muted/50 px-3 py-1 text-[11px] tracking-wide text-muted-foreground">Scopus Indexed Edited Volume</span>
              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight news-serif ink-shadow">
                Call for Book Chapters
              </h1>
              <p className="mt-3 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Inviting high-quality chapters for our upcoming book titled:
              </p>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-foreground news-serif">{bookTitle}</p>

              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Button variant="cyber" onClick={onPoster} aria-label="Download poster">
                  <FileDown className="mr-2" /> Download Poster
                </Button>
                <Button variant="cyber-outline" onClick={onSubmit} aria-label="Submit chapter">
                  <Send className="mr-2" /> Submit Chapter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Aim & Scope */}
        <section id="scope" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-border bg-cyber-surface/60 backdrop-blur supports-[backdrop-filter]:bg-cyber-surface/60 animate-fade-in">
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
                “From resilient swarm routing to zero-trust security, we're curating practical, peer-reviewed advances for real-world UAV systems.”
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Topics */}
        <section id="topics" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Card className="border-border bg-cyber-surface/60 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Tentative Book Structure (6 Parts, 25 Chapters)</CardTitle>
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
          <Card className="border-border bg-cyber-surface/60 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Editors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {editors.map((e) => (
                  <div key={e.name} className="group rounded-lg border border-border bg-background/50 p-6 transition-all duration-300 hover:shadow-glow">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg font-semibold">{e.initials || initialsFor(e.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground news-serif">{e.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium mb-2">{e.position}</p>
                        <div className="space-y-1 text-xs text-muted-foreground">
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

        {/* Rules and Regulations */}
        <section id="rules" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <Card className="border-border bg-cyber-surface/60 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl news-serif ink-shadow">Rules and Regulations</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">Guidelines for chapter submission and publication requirements</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground news-serif flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Submission Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground [list-style:disc] pl-5">
                      <li>Submit <span className="font-semibold">original material only;</span> plagiarism or previously published work is not accepted.</li>
                      <li>Provide <span className="font-semibold">written permissions</span> for any third-party content (tables, figures, images, text excerpts). Permission costs must be covered by the author.</li>
                      <li>Each chapter must include an abstract (150-200 words).</li>
                      <li>Manuscripts should be prepared in the format specified <span className="font-semibold">by the publisher</span> (details provided upon acceptance).</li>
                      <li>All illustrations must be <span className="font-semibold">original electronic files</span>, with proper captions and <span className="font-semibold">alternative text (Alt Text)</span> for accessibility.</li>
                      <li>Proof corrections must be returned promptly within the publisher's timeline. Delays will be treated as approval.</li>
                      <li>Submissions that fail to meet deadlines or quality standards may be rejected.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground news-serif flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Author Qualifications
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground [list-style:disc] pl-5">
                      <li>Authors must have the <span className="font-semibold">right and authority</span> to submit the work.</li>
                      <li>Submissions must not be under <span className="font-semibold">consideration by any other publisher.</span></li>
                      <li>Work should not directly <span className="font-semibold">compete with existing publications</span> under the same publisher.</li>
                      <li>Authors are expected to have <span className="font-semibold">academic or professional expertise</span> in the subject area.</li>
                    </ul>
                  </div>
                </div>

                <div className="newspaper-rule my-6" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground news-serif flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Review & Editing Process
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground [list-style:disc] pl-5">
                      <li>All chapters will undergo <span className="font-semibold">editorial review</span> for originality, technical accuracy, and relevance.</li>
                      <li>The publisher reserves the right to <span className="font-semibold">edit manuscripts</span> for style, grammar, punctuation, and formatting.</li>
                      <li>Proofs will be sent to the lead contributor for corrections. Authors must submit changes within the given deadline.</li>
                      <li>Excessive corrections (over 10% of the original typesetting cost) may be charged to the author/editor.</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground news-serif flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      Important Deadlines
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground [list-style:disc] pl-5">
                      <li><strong>Abstract Submission:</strong> TBD</li>
                      <li><strong>Full Chapter Deadline:</strong> TBD</li>
                      <li><strong>Review Completion:</strong> TBD</li>
                      <li><strong>Final Revision:</strong> TBD</li>
                      <li><strong>Publication Target:</strong> TBD</li>
                      <li><strong>No extensions</strong> beyond stated deadlines</li>
                    </ul>
                  </div>
                </div>

                <div className="newspaper-rule my-6" />

                <div className="bg-muted/30 border border-border/50 rounded-lg">
                  <h3 className="font-semibold text-foreground news-serif mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    Publication Ethics & Copyright
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground [list-style:disc] pl-5">
                    <li>Submissions must be <span className="font-semibold">free from plagiarism, libel, or defamatory material.</span></li>
                    <li>Authors must avoid <span className="font-semibold">violations of copyright, privacy, or proprietary rights.</span></li>
                    <li>Data, results, and references must be <span className="font-semibold">accurate and properly cited.</span></li>
                    <li>If errors or ethical concerns are identified after submission, authors must <span className="font-semibold">cooperate with corrections or withdrawal.</span></li>
                    <li>Copyright of each chapter remains with the <span className="font-semibold">author(s).</span></li>
                    <li>However, authors grant the publisher an <span className="font-semibold">exclusive license</span> to reproduce, publish, distribute, and sell the work in any format worldwide.</li>
                    <li>The publisher has the right to <span className="font-semibold">translate, adapt, and create derivative works.</span></li>
                    <li>Authors may reuse their own content for teaching, academic publications, or presentations, with appropriate credit to the publisher.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

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