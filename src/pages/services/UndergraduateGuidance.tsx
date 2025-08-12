import ServiceTemplate from "./ServiceTemplate";
import { BookOpen } from "lucide-react";

const UndergraduateGuidance = () => (
  <ServiceTemplate
    icon={BookOpen}
    title="Undergraduate Guidance & Consulting"
    subtitle="Personalized mentoring for students pursuing cybersecurity and tech careers."
    seo={{
      title: "Undergraduate Guidance & Consulting | NanoTechX",
      description:
        "Mentorship, project roadmaps, research guidance, and interview prep to accelerate your cybersecurity journey.",
      slug: "/services/undergraduate-guidance",
    }}
    features={[
      "Resume & LinkedIn review",
      "Project/portfolio planning",
      "CTF & lab roadmaps",
      "Research/publication guidance",
      "Interview preparation",
      "Semester planning",
    ]}
    secondarySection={{
      title: "Mentorship Tracks",
      items: [
        "Foundations: networking, OS, and security basics",
        "Offensive security: web, mobile, and labs",
        "Defensive/Blue Team: SOC, SIEM, detection engineering",
        "Research & publications: CFPs, writing, and presentations",
        "Career and interview prep",
        "Capstone/project guidance",
      ],
      columns: 3,
    }}
    serviceId="undergraduate-guidance"
  />
);

export default UndergraduateGuidance;