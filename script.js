// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // GSAP animations

  // Slide the logo from left (slower)
  gsap.from(".logo", {
    x: "-100%", // Start from off-screen to the left
    opacity: 0, // Start with 0 opacity
    duration: 1.5, // Slower duration for a smoother effect
    ease: "power2.out", // Smooth ease-out effect
  });

  // Drop the menu items one by one (staggered)
  gsap.from(".menue ul li", {
    y: "-100%", // Start from off-screen above
    opacity: 0, // Start with 0 opacity
    duration: 1, // Duration of each menu item drop
    delay: 1.5, // Delay until logo animation finishes
    ease: "power2.out", // Smooth ease-out effect
    stagger: 0.2, // Delay between each menu item (one drops after another)
  });

  gsap.registerPlugin(ScrollTrigger);

  // Hero text rises from the bottom on scroll
  gsap.from(".hero-text", {
    y: "100%", // Start off-screen below
    opacity: 0, // Start with 0 opacity for a fade-in effect
    duration: 1.5, // Slower duration for smoother animation
    ease: "power2.out", // Smooth ease-out effect
    scrollTrigger: {
      trigger: ".hero", // Trigger the animation when the .hero section comes into view
      start: "top 80%", // Start the animation when the top of the hero section is at 80% of the viewport height
      toggleActions: "play none none none", // Only play the animation once on scroll
    },
  });

  // Tab image rises from the bottom on scroll (slightly delayed)
  gsap.from(".tab-img", {
    y: "100%", // Start off-screen below
    opacity: 0, // Start with 0 opacity for a fade-in effect
    duration: 1.5, // Same duration as the text for synchronization
    ease: "power2.out", // Smooth ease-out effect
    delay: 0.3, // Slight delay so the text appears first
    scrollTrigger: {
      trigger: ".hero", // Trigger the animation when the .hero section comes into view
      start: "top 80%", // Start when the hero section reaches 80% of the viewport height
      toggleActions: "play none none none", // Only play once on scroll
    },
  });

  // GSAP ScrollTrigger registration

  // Slide about-text from the right on scroll
  gsap.from(".about-text", {
    x: "100%", // Start off-screen to the right
    opacity: 0, // Start with 0 opacity
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 90%", // Start when the top of the section is at 90% of the viewport
      toggleActions: "play none none none",
    },
  });

  gsap.from(".about-img", {
    x: "-100%", // Start off-screen to the left
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".headline", {
    y: "-100%", // Start off-screen above
    opacity: 0, // Start with 0 opacity for a fade-in effect
    duration: 1.2, // Duration for a smooth animation
    ease: "power2.out", // Smooth ease-out effect
    scrollTrigger: {
      trigger: ".headline", // Trigger the animation when the headline comes into view
      start: "top 80%", // Start the animation when the top of the headline is at 80% of the viewport
      toggleActions: "play none none none", // Only play once on scroll
    },
  });

  // Fade in each card with scrolling
  gsap.from(".card", {
    opacity: 0, // Start from 0 opacity (invisible)
    y: 50, // Slight rise up animation
    duration: 1.2, // Smooth animation duration
    stagger: 0.3, // Delay between each card's animation (staggered effect)
    ease: "power2.out", // Smooth ease-out effect
    scrollTrigger: {
      trigger: ".card-section", // Trigger the animation when the card-section comes into view
      start: "top 80%", // Start when the card-section reaches 80% of the viewport
      toggleActions: "play none none none", // Only play once on scroll
    },
  });
  gsap.from(".headline h1", {
    y: "-50%", // Start from off-screen above
    opacity: 0, // Start with 0 opacity
    duration: 1, // Duration of each menu item drop
    delay: 1.5, // Delay until logo animation finishes
    ease: "power2.out", // Smooth ease-out effect
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".headline",
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".portfolio-header ul li", {
    y: "-100%", // Start from off-screen above
    opacity: 0, // Start with 0 opacity
    duration: 1, // Duration of each menu item drop
    delay: 3.2, // Delay until logo animation finishes
    ease: "power2.out", // Smooth ease-out effect
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".profile .cards", {
    y: "20%", // Start from off-screen above
    opacity: 0, // Start with 0 opacity
    duration: 1, // Duration of each menu item drop
    delay: 2.5, // Delay until logo animation finishes
    ease: "power2.out", // Smooth ease-out effect
    stagger: 1.2,
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".scroller", {
    y: "-100%", // Start from off-screen above
    opacity: 0, // Start with 0 opacity
    duration: 1, // Duration of each menu item drop
    delay: 2.5, // Delay until logo animation finishes
    ease: "power2.out", // Smooth ease-out effect
    stagger: 1.2,
    scrollTrigger: {
      trigger: ".headline",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});

const Hamburger = document.getElementById("hamburger");
const Sliders = document.getElementsByClassName("slider")[0]; // Notice 'Sliders' (plural) since this is a collection
const Cross = document.getElementById("cross");
Hamburger.addEventListener("click", function () {
  console.log("click");

  Sliders.classList.toggle("active");
});

Cross.addEventListener("click", function () {
  Sliders.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.getElementById("scroller");
  const images = scroller.children;
  for (let i = 0; i < images.length; i++) {
    const clone = images[i].cloneNode(true);
    scroller.appendChild(clone);
  }
});
