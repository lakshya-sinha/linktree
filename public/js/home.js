// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0); 

let cursor = document.querySelector("#cursor")
window.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.pageX,
    y: e.pageY,
    duration: 0.3,
    ease: "power2.out"
  });
});
let h1= document.querySelector(".pf-container h1");
gsap.from(h1, {
})
gsap.timeline()
  .from(".pf-container h1", { 
  translateY: "-20px",
  opacity: 0.8,
  duration: 0.4,ease: "power1.out" })
  .from(".pf-container p", { 
  translateY: "-20px",
  opacity: 0.8,
  duration: 0.4, ease: "power1.out" })
  .from(".pf-button-wrapper", { 
  translateY: "-20px",
  opacity: 0.8,
  duration: 0.4,ease: "power1.out" });
