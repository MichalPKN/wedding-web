if (document.querySelector(".c-location")) {
    gsap.from(".c-location__backg", {
        scrollTrigger: {
            trigger: ".c-location",
            scrub: 0.2,
            start: "40% bottom",
            end: "bottom bottom"
        },
        scale:0
    })
}