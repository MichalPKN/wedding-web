if (document.querySelector(".c-harmonogram")) {
    gsap.from(".c-harmonogram__title", {
        scrollTrigger: {
            trigger: ".c-harmonogram__title",
            start: "center center",
            pin: true,
            end: "max"
        },
    })

    let mm = gsap.matchMedia();
    mm.add({
        isDesktop: `(min-width: 953px)`,
        isMobile: `(max-width: 952px)`,
    }, (context) => {
        let { isDesktop, isMobile } = context.conditions;
        if (isDesktop) {
            gsap.from(".c-harmonogram__timesWrapper", {
                y: "15vw",
                ease: "power1.in",
                scrollTrigger: {
                    trigger: ".c-harmonogram__title",
                    start: "center 90%",
                    end: "center center",
                    scrub: 0.2,
                }
            })
        }

    })

}