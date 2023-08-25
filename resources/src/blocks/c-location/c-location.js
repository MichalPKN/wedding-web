if (document.querySelector(".c-location")) {
    window.addEventListener('load', () => {

        gsap.from(".c-location__backg", {
            scrollTrigger: {
                trigger: ".c-location",
                scrub: 0.2,
                end: "bottom bottom"
            },
            scaleX:0, scaleY:0
        });
        gsap.from(".c-location .container", {
            scrollTrigger: {
                trigger: ".c-location__headline",
                scrub: 0,
                end: "+=200", // ?
                markers: true
            },
            y: "15vh", 
            ease: "power1.out"
        });
    })
}