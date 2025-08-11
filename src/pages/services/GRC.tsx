import ServiceTemplate from "./ServiceTemplate";
import { Landmark } from "lucide-react";

const GRC = () => (
  <ServiceTemplate
    icon={Landmark}
    title="GRC (Governance, Risk & Compliance)"
    subtitle="Operationalize governance, manage risk registers, and achieve certifications without bureaucracy."
    seo={{
      title: "GRC Consulting | NanoTechX",
      description:
        "Pragmatic governance, risk management and compliance programs: ISO 27001, SOC 2, GDPR and more.",
      slug: "/services/grc",
    }}
    features={[
      "Policy & control frameworks",
      "Risk registers & KRIs/KPIs",
      "ISO 27001, SOC 2, GDPR",
      "Internal audits & readiness",
      "Evidence collection workflows",
      "Awareness & training",
    ]}
    serviceId="grc"
  />
);

export default GRC;