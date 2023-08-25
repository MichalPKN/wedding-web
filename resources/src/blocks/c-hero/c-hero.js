if (document.querySelector(".c-hero")) {
    window.addEventListener('load', () => {
        document.querySelector(".c-hero .container").classList.remove('--loader-prepare');
        let tl = gsap.timeline();
        tl.from(".c-hero__headline", {y:300, opacity:0, ease: "power2.out", duration:1.3}, "hlfirst");
        tl.from(".c-hero__date", {y:50, opacity:0, ease: "power2.out", duration:1.1}, "<1");
        tl.from(".c-hero__leaves", {y:50, opacity:0, ease: "power2.out", duration:1.1}, "<");
        tl.from(".c-hero__photo1", {y:250, opacity:0, ease: "power2.out", duration:1.1}, "<");
        tl.from(".c-hero__photo2", {y:250, opacity:0, ease: "power2.out", duration:1.1}, "<");
        if(window.innerWidth <= 952){
            tl.from(".c-hero__title", {y:-100, ease: "power2.out", duration:1.1}, "<");
        }else{
            tl.from(".c-hero__title", {x:250, ease: "power2.out", duration:1.1}, "<");
        }
    })
}