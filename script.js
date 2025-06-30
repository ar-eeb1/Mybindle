var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);


gsap.from('.blob , .donate-now', {
    scale: 1.1,
    duration: 2,
    repeat: -1,
    yoyo: true
});


tl.from('.nav', {
    y: -130,
    delay: 0.4
});

tl.from('.intro h1', {
    x: -1030,
    stagger: 0.3
});

tl.from(".intro p", {
    opacity: 0,
    y: 30,
    duration: 0.5,
    ease: "power2.out"
});

tl.from(".button.get-start", {
    scale: 0,
    opacity: 0,
    duration: 0.3,
    ease: "back.out(5)"
});

gsap.from(".section-two .feature-box", {
  scrollTrigger: {
    trigger: ".features",      
    start: "top 80%",           
    toggleActions: "play none none none"
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2
});


gsap.from(".section-two-content .mobile-mockup-two", {
  scrollTrigger: {
    trigger: ".ibc",      
    start: "top 80%",           
    toggleActions: "play none none none"
  },
  y: 100,
  scale:0.1,
  duration: 1,
  ease: "power4.out",
});

gsap.from(".section-two-content", {
  scrollTrigger: {
    trigger: ".mobile-mockup-two",      
    start: "top 80%",           
    toggleActions: "play none none none"
  },
  y: 100,
  opacity:0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2
});

gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",      
    start: "top 80%",           
    toggleActions: "play none none none"
  },
  y: 100,
  opacity:0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2
}); 

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".card",      
    start: "top 80%",           
    toggleActions: "play none none none"
  },
  y: -100,
  opacity:0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.5
}); 


ScrollTrigger.refresh();
