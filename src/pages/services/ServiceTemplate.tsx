import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useCursorGlowTrail } from "@/hooks/useCursorGlowTrial";
import Footer from "@/components/Footer";

interface ServiceTemplateProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  seo: { title: string; description: string; slug: string };
  features: string[];
  serviceId: string;
  // Optional customization props
  featuresTitle?: string;
  approachTitle?: string;
  approachSteps?: Array<{ title: string; description: string }>;
  secondarySection?: { title: string; items: string[]; columns?: 1 | 2 | 3 };
}

const ServiceTemplate = ({ icon: Icon, title, subtitle, seo, features, serviceId, featuresTitle, approachTitle, approachSteps, secondarySection }: ServiceTemplateProps) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = seo.title;

    const ensureMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    // Meta description & canonical
    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDesc.setAttribute("name", "description");
    metaDesc.setAttribute("content", seo.description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    linkCanonical.setAttribute("href", window.location.href);
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);

    // OG/Twitter
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: seo.title });
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: seo.description });
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: window.location.href });
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: seo.title });
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: seo.description });

    // Structured data
    const ldId = `ld-service-${serviceId}`;
    const existing = document.getElementById(ldId);
    if (existing) existing.remove();
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description: seo.description,
      provider: { "@type": "Organization", name: "NanoTechX" },
      areaServed: "Global",
      serviceType: title,
      url: window.location.href,
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      ld.remove();
    };
  }, [seo.description, seo.title, serviceId, title]);

  const containerRef = useRef<HTMLDivElement>(null);
  const glowStyle = useCursorGlowTrail({
    count: 5,
    radius: 350,
    intensity: 0.19,
    targetRef: containerRef,
});

  // Section customization with sensible defaults
  const featTitle = featuresTitle ?? "What you get";
  const approachT = approachTitle ?? "Our Approach";
  const steps =
    approachSteps ?? [
      { title: "Discovery", description: "Align on scope, environment, and success criteria." },
      { title: "Execute", description: "Hands-on work with continuous updates and checkpoints." },
      { title: "Deliver", description: "Clear findings, prioritized actions, and optional retest." },
    ];
  const secondary =
    secondarySection ?? {
      title: "Sample Deliverables",
      items: [
        "Executive summary with risk overview",
        "Detailed findings with CVSS-like severity",
        "Actionable remediation plan and timelines",
      ],
      columns: 3 as 1 | 2 | 3,
    };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast(`${title}: thanks! Our team will contact you shortly.`);
  };

  return (
    <div ref={containerRef} className="relative pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Cursor trail glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-[background] duration-100"
          style={{
            backgroundImage: glowStyle.backgroundImage,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
          }}
        />
        {/* Subtle cyber grid and blobs */}
        <div className="absolute inset-0 cyber-grid opacity-30" />
        <div className="absolute -top-20 -right-24 h-80 w-80 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, hsl(var(--cyber-green)/0.35), transparent 60%)' }} />
        <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, hsl(var(--cyber-green-dark)/0.35), transparent 60%)' }} />
      </div>

      <header className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-14 h-14 rounded-lg bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow animate-scale-in">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-6">
          <Card className="border-border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">{featTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Card className="border-border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">{approachT}</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {steps.map((s) => (
                  <li key={s.title} className="relative rounded-md p-4 border bg-background/40">
                    <p className="text-sm font-medium">{s.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Card className="border-border bg-card/60 backdrop-blur supports-[backdrop-filter]:bg-card/60 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl">{secondary.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul
                className={`grid grid-cols-1 ${secondary.columns === 2 ? 'sm:grid-cols-2' : secondary.columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-1'} gap-3`}
              >
                {secondary.items.map((item) => (
                  <li key={item} className="rounded-md p-4 border bg-background/40 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="quote" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          <Card className="border-border bg-cyber-surface/60 backdrop-blur animate-enter">
            <CardHeader>
              <CardTitle className="text-xl">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Name</label>
                  <Input name="name" required placeholder="Your full name" className="mt-1" />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <Input name="email" type="email" required placeholder="name@company.com" className="mt-1" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Company</label>
                  <Input name="company" placeholder="Company / Organization" className="mt-1" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">What do you need help with?</label>
                  <Textarea name="message" required placeholder={`I’m interested in ${title}. Share timelines, scope, and any compliance needs...`} className="mt-1" rows={5} />
                </div>
                <div className="sm:col-span-2 flex items-center justify-end gap-3">
                  <Button variant="cyber-outline" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Back to Top
                  </Button>
                  <Button variant="cyber" type="submit">Submit Request</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceTemplate;