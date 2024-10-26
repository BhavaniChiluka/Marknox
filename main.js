// Animate elements with GSAP
gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
gsap.from("#home h1", { duration: 1.5, x: -100, opacity: 0 });
gsap.from("#home p", { duration: 1.5, x: 100, opacity: 0, delay: 0.5 });
gsap.from(".project", { 
    scrollTrigger: ".project", 
    duration: 1, 
    y: 50, 
    opacity: 0, 
    stagger: 0.2 
});
