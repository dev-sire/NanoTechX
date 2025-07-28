import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Hero content animations
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(".service-card",
      {
        opacity: 0,
        y: 20, // Small vertical rise
        filter: "blur(20px) brightness(1.5)", // Stronger initial blur, slight brightness for "glitch" feel
        // clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", // Optional: reveal from bottom
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px) brightness(1)", // Clear and normal brightness
        // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Optional: reveal from bottom
        duration: 1.2,
        stagger: 0.25, // Slightly increased stagger
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 70%",
          end: "bottom 30%",
          // markers: true, // For debugging
        }
      }
    );
    // Services header animation
    gsap.fromTo(".services-header", 
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
        }
      }
    );

    // About section animations - slide from different directions
    gsap.fromTo(".about-content", 
      { opacity: 0, x: -100, rotateY: 15 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".about-stats", 
      { opacity: 0, x: 100, rotateY: -15 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(".about-value-card", 
      { opacity: 0, y: 80, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-values",
          start: "top 80%",
        }
      }
    );

    // Contact section animations - bounce effect
    gsap.fromTo(".contact-item", 
      { opacity: 0, scale: 0.5, rotation: 10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
        }
      }
    );

    // Footer animation with wave effect
    gsap.fromTo(".footer-content", 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "footer",
          start: "top 90%",
        }
      }
    );

    // General fade-in animations for any element with fade-in class
    gsap.fromTo(".fade-in-up", 
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fade-in-up",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".fade-in-left", 
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fade-in-left",
          start: "top 85%",
        }
      }
    );

    gsap.fromTo(".fade-in-right", 
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fade-in-right",
          start: "top 85%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};