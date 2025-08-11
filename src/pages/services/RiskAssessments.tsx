import ServiceTemplate from "./ServiceTemplate";
import { Activity } from "lucide-react";

const RiskAssessments = () => (
  <ServiceTemplate
    icon={Activity}
    title="Cyber Risk Assessments"
    subtitle="Quantify and prioritize risk with threat-led analysis, heatmaps and actionable roadmaps."
    seo={{
      title: "Cyber Risk Assessments | NanoTechX",
      description:
        "Threat modeling, likelihood/impact scoring and mitigation roadmaps to reduce cyber risk where it matters.",
      slug: "/services/risk-assessments",
    }}
    features={[
      "Asset discovery & scoping",
      "Threat modeling",
      "Vulnerability & control mapping",
      "Likelihood/impact scoring",
      "Risk heatmaps & dashboards",
      "Prioritized mitigation roadmap",
    ]}
    serviceId="risk-assessments"
  />
);

export default RiskAssessments;