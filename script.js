// Import GSAP and ScrollTrigger
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to animate all divs
function animateAllDivs() {
  // Select all divs
  const divs = document.querySelectorAll('div');

  // Loop through each div and apply animation
  divs.forEach((div, index) => {
    gsap.from(div, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: div,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', animateAllDivs);
