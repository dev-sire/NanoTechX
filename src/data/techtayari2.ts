import {
  Brain,
  Shield,
  Network,
  Code,
  Database,
  Server,
  type LucideIcon,
} from "lucide-react";
import acmLogo from "@/assets/acm_sigsac.png";
import acmBahriaLogo from "@/assets/acm_bahria.png";
import ciscoLogo from "@/assets/cisco_logo.png";
import ciscoCommunityLogo from "@/assets/cisco_community.jpg";
import TechHiearchy from "@/assets/Tech_Hiearchy.jpg";
import MarketSmile from "@/assets/market_smiling.jpg";
import HafizMuhammadAttaullah from "@/assets/sir-attaullah.jpg";
import AmanShahid from "@/assets/Profile.png";

/* ------------------------------------------------------------------ *
 *  TECH TAYARI 2.0 — EDIT CONTENT HERE
 *  Everything on /tech-tayari-2 (and the current instructors shown on
 *  /instructors) is driven by this file.
 * ------------------------------------------------------------------ */

/* ---------- 1. REGISTRATION ----------
 * While `isOpen` is false, every "Register Now" button shows a
 * "coming soon" toast. When registrations open: set `isOpen: true`
 * and paste the form link into `url`.
 */
export const REGISTRATION = {
  isOpen: true,
  url: "https://docs.google.com/forms/d/e/1FAIpQLSdOj9cr4uRjOh6tkmYzZhzZI9tWv69SNoHOblpqTQ727X1c_g/viewform?usp=dialog",
};

/* ---------- 2. COURSES & TRACKS ----------
 * The 6 tracks are fixed; replace the placeholder courses in each one.
 *   name: course title as it should appear on the site
 *   type: badge text, e.g. "SP/IL", "IL", "FREE" (same style as 1.0)
 * Add or remove lines freely — the card adjusts automatically.
 * While every course in a track is still "TBA", the card shows
 * "Courses to be announced" instead of a course count.
 */
export const COURSE_TBA = "TBA";

export interface Course {
  name: string;
  type: string;
}

export interface Track {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  courses: Course[];
}

export const tracks: Track[] = [
  {
    id: "ai",
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Master the fundamentals of AI and modern technologies",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    courses: [
      { name: "AI Technical Practitioner Foundations", type: "IL" },
      { name: "Optimizing Generative AI for Technical Work", type: "IL" },
      { name: "Advanced Generative AI Skills", type: "IL" },
    ],
  },
  {
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    description: "Learn to protect and secure digital infrastructure",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    courses: [
      { name: "Industrial Cybersecurity Essentials", type: "IL" },
      { name: "CyberOps Associates", type: "IL" },
      { name: "Introduction to Splunk", type: "IL" },
      { name: "SOC Essentials: Investigating with Splunk", type: "IL" },
    ],
  },
  {
    id: "networking",
    icon: Network,
    title: "Networking",
    description: "Build expertise in network infrastructure and IoT",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    courses: [
      { name: "Industrial Networking Essentials", type: "IL" },
      { name: "CCNA: Introduction to Networking", type: "IL" },
      { name: "CCNA: Switching, Routing, and Wireless Essentials", type: "IL" },
      { name: "CCNA: Enterprise Networking, Security, and Automation", type: "IL" },
    ],
  },
  {
    id: "programming",
    icon: Code,
    title: "Programming",
    description: "Master programming languages and development skills",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    courses: [
      { name: "Python Essentials 1", type: "IL" },
      { name: "Python Essentials 2", type: "IL" },
      { name: "Javascript Essentials 1", type: "IL" },
      { name: "Javascript Essentials 2", type: "IL" },
    ],
  },
  {
    id: "data-science",
    icon: Database,
    title: "Data Science",
    description: "Analyze data and extract meaningful insights",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    courses: [
      { name: "Data Analytics Essentials", type: "IL" },
      { name: "Introduction to Data Science", type: "IL" },
      { name: "Data and Tools for Defense Analysts", type: "IL" },
    ],
  },
  {
    id: "devnet",
    icon: Server,
    title: "DevNet Associate",
    description: "Learn network automation and programmability",
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    courses: [

      { name: "DevNet Associate", type: "IL" },
    ],
  },
];

/* ---------- 3. INSTRUCTORS ---------- */
export interface Instructor {
  id: number;
  name: string;
  designation: string;
  company: string;
  image: string;
  linkedin: string;
}

export const instructors: Instructor[] = [
  {
    id: 1,
    name: "Hafiz Muhammad Attaullah",
    designation: "Senior Cyber security Consultant and Master Trainer",
    company: "NanoTechX | Cisco",
    image: HafizMuhammadAttaullah,
    linkedin: "https://www.linkedin.com/in/attaullahshafiq10/",
  },
  {
    id: 2,
    name: "Aman Shahid",
    designation: "Accredited Instructor",
    company: "Cisco Networking Academy",
    image: AmanShahid,
    linkedin: "https://www.linkedin.com/in/aman-shahid-32708a2b7/",
  },
];

/* ---------- 4. STRATEGIC ALLIANCES ----------
 * Same as 1.0 for now. Add / remove entries as alliances change.
 */
export const partnerLogos = [
  { logo: acmLogo, name: "ACM SIGSAC DUET" },
  { logo: acmBahriaLogo, name: "ACM Bahria University" },
  { logo: ciscoLogo, name: "Cisco Networking Academy" },
  { logo: ciscoCommunityLogo, name: "Cisco Community Pakistan" },
  { logo: TechHiearchy, name: "Tech Hiearchy" },
  { logo: MarketSmile, name: "Market Smiling" },
];
