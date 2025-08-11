import ServiceTemplate from "./ServiceTemplate";
import { GraduationCap } from "lucide-react";

const CorporateTraining = () => (
  <ServiceTemplate
    icon={GraduationCap}
    title="Corporate Cybersecurity Training"
    subtitle="Role-based training, workshops and simulations that build a resilient, security-first culture."
    seo={{
      title: "Corporate Cybersecurity Training | NanoTechX",
      description:
        "Role-based tracks, executive briefings, secure coding for developers and phishing simulations with hands-on labs.",
      slug: "/services/corporate-training",
    }}
    features={[
      "Role-based learning paths",
      "Executive briefings",
      "Secure coding for developers",
      "Phishing simulations",
      "Labs & hands-on exercises",
      "Certification prep options",
    ]}
    serviceId="corporate-training"
  />
);

export default CorporateTraining;