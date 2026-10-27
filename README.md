# NanoTechX Website

### Project Description

This repository hosts the official website for **NanoTechX**, a cutting-edge cybersecurity startup dedicated to safeguarding businesses and individuals from the evolving landscape of digital threats. Our mission is to secure your digital future by combining innovative technology with deep human expertise, offering robust and reliable protection.

<hr />

The NanoTechX website serves as the primary online presence, providing comprehensive information about our services and our commitment to cybersecurity excellence. It acts as a hub for potential clients to learn about our offerings, which include:

- **Vulnerability Assessment & Penetration Testing (VAPT):** Identifying and mitigating security weaknesses before they can be exploited.
 
- **Governance, Risk & Compliance (GRC):** Helping organizations adhere to industry regulations and best practices.

- **Cyber Risk Assessments:** Evaluating potential cyber threats and their impact on your operations.

- **Corporate Cybersecurity Training:** Empowering your team with the knowledge to combat cyber risks.

- **Malware Detection & Response:** Proactive and reactive solutions to protect against malicious software.

We are committed to building long-term relationships with our clients, delivering tailored, high-quality cybersecurity solutions to ensure peace of mind in an increasingly digital world.

<hr />

### Features

- **Responsive Design:** Optimized for seamless viewing across various devices (desktop, tablet, mobile).
- **Intuitive Navigation:** Easy-to-use interface powered by React Router for smooth page transitions.
- **Dynamic UI/UX:** Enhanced user experience through smooth animations and interactive elements powered by GSAP.
- **Service Showcase:** Detailed sections explaining NanoTechX's core cybersecurity offerings.
- **Modern Aesthetics:** Clean, professional, and visually appealing design crafted with Tailwind CSS and Shadcn UI components.

<hr />

### Technologies Used

This website is built with a modern and robust stack to ensure performance, maintainability, and a great user experience,

- **TypeScript:** For type-safe code and improved development experience.
- **React:** A declarative, component-based JavaScript library for building user interfaces.
- **React Router:** For client-side routing and navigation.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development and highly customizable designs.
- **GSAP (GreenSock Animation Platform):** For high-performance, professional-grade web animations.
- **Shadcn UI:** Beautifully designed reusable components.
- **Vite:** A fast build tool for modern web projects.

And various other supporting libraries for specific functionalities.

<hr />

### Project Structure

```
📦 NanoTechX
├─ .gitignore
├─ README.md
├─ bun.lockb
├─ components.json
├─ eslint.config.js
├─ index.html
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ .htaccess
│  ├─ Poster.pdf
│  ├─ analysis.ico
│  ├─ favicon.ico
│  ├─ placeholder.svg
│  └─ robots.txt
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ Tech_Hiearchy.jpg
│  │  ├─ acm_bahria.png
│  │  ├─ acm_sigsac.png
│  │  ├─ aieys.jpg
│  │  ├─ cisco-tech.jpg
│  │  ├─ cisco_community.jpg
│  │  ├─ cisco_logo.png
│  │  ├─ gul-iqbal.jpg
│  │  ├─ iftikhar-javed.jpg
│  │  ├─ inam-sir.jpg
│  │  ├─ market_smiling.jpg
│  │  ├─ Profile.png
│  │  ├─ nano_techx_logo.png
│  │  ├─ sir-attaullah.jpg
│  │  └─ waqas-karim.jpg
│  ├─ components
│  │  ├─ About.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ ScrollToTop.tsx
│  │  ├─ Services.tsx
│  │  ├─ Team.tsx
│  │  ├─ cfp
│  │  │  └─ Collaborators.tsx
│  │  └─ ui
│  │     ├─ accordion.tsx
│  │     ├─ alert-dialog.tsx
│  │     ├─ alert.tsx
│  │     ├─ aspect-ratio.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ breadcrumb.tsx
│  │     ├─ button.tsx
│  │     ├─ calendar.tsx
│  │     ├─ card.tsx
│  │     ├─ carousel.tsx
│  │     ├─ chart.tsx
│  │     ├─ checkbox.tsx
│  │     ├─ collapsible.tsx
│  │     ├─ command.tsx
│  │     ├─ context-menu.tsx
│  │     ├─ dialog.tsx
│  │     ├─ drawer.tsx
│  │     ├─ dropdown-menu.tsx
│  │     ├─ form.tsx
│  │     ├─ hover-card.tsx
│  │     ├─ input-otp.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ menubar.tsx
│  │     ├─ navigation-menu.tsx
│  │     ├─ pagination.tsx
│  │     ├─ popover.tsx
│  │     ├─ progress.tsx
│  │     ├─ radio-group.tsx
│  │     ├─ resizable.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ sheet.tsx
│  │     ├─ sidebar.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ slider.tsx
│  │     ├─ sonner.tsx
│  │     ├─ switch.tsx
│  │     ├─ table.tsx
│  │     ├─ tabs.tsx
│  │     ├─ textarea.tsx
│  │     ├─ toast.tsx
│  │     ├─ toaster.tsx
│  │     ├─ toggle-group.tsx
│  │     ├─ toggle.tsx
│  │     ├─ tooltip.tsx
│  │     └─ use-toast.ts
│  ├─ hooks
│  │  ├─ use-mobile.tsx
│  │  ├─ use-toast.ts
│  │  ├─ useCursorGlowTrial.ts
│  │  └─ useIntersectionObserver.tsx
│  ├─ index.css
│  ├─ lib
│  │  └─ utils.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ CallForPublications.tsx
│  │  ├─ Index.tsx
│  │  ├─ Instructors.tsx
│  │  ├─ NotFound.tsx
│  │  ├─ Team.tsx
│  │  ├─ TechTayari.tsx
│  │  └─ services
│  │     ├─ CorporateTraining.tsx
│  │     ├─ GRC.tsx
│  │     ├─ MalwareDetection.tsx
│  │     ├─ RiskAssessments.tsx
│  │     ├─ ServiceTemplate.tsx
│  │     ├─ UndergraduateGuidance.tsx
│  │     └─ VAPT.tsx
│  └─ vite-env.d.ts
├─ tailwind.config.ts
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

### Project Status

This project is currently under active development. As the sole developer, I am continuously working on new features, refining existing ones, and ensuring the website meets the high standards of NanoTechX. Expect regular updates and improvements!

<hr />

### Contact

For any inquiries or feedback regarding the website, feel free to reach out:

Your GitHub Profile: https://github.com/dev-sire

Email: shahidamaan2019@gmail.com

<hr />

### License

This project is licensed under the MIT License - see the LICENSE file for details.