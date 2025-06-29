/document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    const formData = {
      data: {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
      }
    };

    fetch("https://sheetdb.io/api/v1/r0dgo4bd7v77f", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch(error => {
      alert("Something went wrong!");
      console.error(error);
    });
  });
</ Initialize a new Lenis instance for smooth scrolling
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

