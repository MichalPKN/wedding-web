if (document.querySelector(".c-hero")) {
    window.addEventListener('load', () => {
        document.querySelector(".c-hero .container").classList.remove('--loader-prepare');
        let tl = gsap.timeline();
        tl.from(".c-hero__headline", {y: window.innerWidth > 952 ? 200/1920*100 + "vw" : 100, opacity:0, ease: "power2.out", duration:1.4});
        tl.from(".c-hero__date", {y:window.innerWidth > 952 ? 50/1920*100 + "vw" : 30, opacity:0, ease: "power2.out", duration:1.3}, "<1.1");
        tl.from(".c-hero__leaves", {y:window.innerWidth > 952 ? 50/1920*100 + "vw" : 30, opacity:0, ease: "power2.out", duration:1.3}, "<");
        tl.from(".c-hero__photo1", {y:window.innerWidth > 952 ? 200/1920*100 + "vw" : 100, opacity:0, ease: "power2.out", duration:1.3}, "<");
        tl.from(".c-hero__photo2", {y:window.innerWidth > 952 ? 200/1920*100 + "vw" : 100, opacity:0, ease: "power2.out", duration:1.3}, "<");

        gsap.to(".c-hero__imgWrap1", {
            y:"-15%", 
            scrollTrigger: {
                trigger:".c-hero",
                scrub:0.4,
                start: "top top",
                end: "bottom top",
                markers: true
            }
        });

        gsap.to(".c-hero__imgWrap2", {
            y:"-30%", 
            scrollTrigger: {
                trigger:".c-hero",
                scrub:0.4,
                start: "top top",
                end: "bottom top",
                markers: true
            }
        });

        if(window.innerWidth < 953) {
            tl.from(".c-hero__title", {"--y-offset":"-310%", ease: "power2.out", duration:1.3}, "<");
        }else{
            tl.from(".c-hero__title", {"--x-offset":"165%", ease: "power2.out", duration:1.3}, "<");
        }
        
    })
}