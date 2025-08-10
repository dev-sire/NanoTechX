import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const collaborators = [
  { name: "Institute A", logo: "/placeholder.svg" },
  { name: "University B", logo: "/placeholder.svg" },
  { name: "Research Lab C", logo: "/placeholder.svg" },
  { name: "Tech Institute D", logo: "/placeholder.svg" },
  { name: "Academia E", logo: "/placeholder.svg" },
  { name: "Center F", logo: "/placeholder.svg" },
];

export default function Collaborators() {
  return (
    <section id="collaborators" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <Card className="border-border border-2 bg-cyber-surface/60 backdrop-blur animate-fade-in">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Our Collaborators</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {collaborators.map((c) => (
              <div key={c.name} className="flex items-center justify-center p-4 rounded-md border border-border bg-background/40">
                <img
                  src={c.logo}
                  width={160}
                  height={64}
                  loading="lazy"
                  alt={`${c.name} logo - UAV networks collaborators`}
                  className="h-10 sm:h-12 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}