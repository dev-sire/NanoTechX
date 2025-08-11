import ServiceTemplate from "./ServiceTemplate";
import { ShieldCheck } from "lucide-react";

const VAPT = () => (
  <ServiceTemplate
    icon={ShieldCheck}
    title="VAPT (Vulnerability Assessment & Pen Testing)"
    subtitle="Combine automated scanning with expert-led manual exploitation to uncover what matters — and fix it fast."
    seo={{
      title: "VAPT Services | NanoTechX",
      description:
        "Identify and validate vulnerabilities across apps, networks and cloud with expert VAPT and clear remediation steps.",
      slug: "/services/vapt",
    }}
    features={[
      "Automated + Manual Testing",
      "Web/Mobile/API & Cloud",
      "Network & Wi-Fi Security",
      "Credentials & MFA Testing (as scoped)",
      "Clear, prioritized reports",
      "Free retest on fixes",
    ]}
    serviceId="vapt"
  />
);

export default VAPT;