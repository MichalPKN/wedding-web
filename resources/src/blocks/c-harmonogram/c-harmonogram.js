if (document.querySelector(".c-harmonogram")) {
    window.addEventListener('load', () => {
        gsap.from(".c-harmonogram__title", {
            scrollTrigger: {
                trigger: ".c-harmonogram__title",
                start: "center center",
                pin: true,
                end: "max"
            },
        });
    })
}