import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CheckCircle2, FileDown, Send } from "lucide-react";
import { toast } from "sonner";
import Collaborators from "@/components/cfp/Collaborators";

const editors = [
  { name: "Hafiz Muhammad Attaullah", role: "Faculty of Computing and Informatics", org: "Universiti Telekom, Multimedia University, Cyberjaya, Malaysia", initials: "HA" },
  { name: "Dr. Inam Ullah Khan", role: "Faculty of Computing and Informatics", org: "Universiti Telekom, Multimedia University, Cyberjaya, Malaysia", initials: "IUK" },
  { name: "Prof. Dr. Al Sakib Khan Pathan", role: "Department of Computer Science and Engineering", org: "United International University (UIU), Dhaka, Bangladesh", initials: "ASK" },
  { name: "Prof. Keshav Kaushik", role: "SSCSE", org: "Sharda University, India", initials: "KK" },
  { name: "Dr. Ahthasham Sajid", role: "Faculty of Computing and Informatics", org: "Universiti Telekom, Multimedia University, Cyberjaya, Malaysia", initials: "AS" },
];

const topics: string[] = [
  "The Evolution of UAV Networks and Their Role in Modern Communication",
  "Fundamentals of UAV Network Architecture and Design",
  "Communication Protocols for UAV Networks: Bridging Air and Ground",
  "Emerging Technologies Shaping UAV Communication",
  "Cybersecurity in UAV Networks: Protecting the Skies",
  "Latency, Scalability, and Fault Tolerance: Key Challenges in UAV Network Design",
  "The Integration of 5G, 6G, IoT, and AI for Enhanced UAV Connectivity",
  "Machine Learning for Optimizing UAV Network Performance and Security",
  "Securing UAV Communications: Encryption, Trust, and Intrusion Detection",
  "Blockchain as a Security Solution for UAV Networks",
  "Edge Computing in UAV Networks: Enhancing Real-Time Data Processing",
  "Real-World Applications: UAV Networks in Disaster Management and Surveillance",
  "The Role of UAV Networks in Smart Cities and Urban Management",
  "Autonomous UAV Networks: The Next Frontier in Communication and Security",
  "Regulatory Challenges in UAV Network Security",
  "Future Trends in UAV Communication: From 6G to Quantum Networks",
  "Innovations in UAV Swarm Communication: Collective Intelligence and Security",
  "Cyber Resilience in UAV Networks: Responding to Emerging Threats",
  "Scalable UAV Networks: Solutions for Large-Scale Deployments",
  "The Global Landscape of UAV Network Security: International Perspectives"
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
      editor: editors.map((e) => ({ "@type": "Person", name: e.name, affiliation: e.org })),
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
          <span className="text-lg font-bold tracking-wide">Call for Publications</span>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#scope" className="hover:text-foreground transition-colors">Aim & Scope</a>
            <a href="#topics" className="hover:text-foreground transition-colors">Topics</a>
            <a href="#editors" className="hover:text-foreground transition-colors">Editors</a>
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
          <Card className="border-border border-2 bg-cyber-surface/60 backdrop-blur animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">List of Topics (include but not limited to)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="news-columns column-rule [list-style:disc] pl-5">
                {topics.map((t) => (
                  <li key={t} className="mb-2 text-sm text-foreground/90">
                    {t}
                  </li>
                ))}
              </ul>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {editors.map((e) => (
                  <div key={e.name} className="group rounded-lg border-4 border-border bg-background/50 p-4 transition-all duration-300 hover:shadow-blink hover-scale">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{e.initials || initialsFor(e.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{e.name}</p>
                        <p className="text-xs text-muted-foreground">{e.role} • {e.org}</p>
                      </div>
                    </div>
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
            <div className="flex gap-3">
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