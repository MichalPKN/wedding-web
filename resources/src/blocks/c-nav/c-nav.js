if (document.querySelector(".c-nav")) {
    window.addEventListener('load', () => {
        document.querySelector(".c-nav").classList.remove('--loader-prepare');
        gsap.from(".c-nav", {x:-120, opacity:0, ease: "power2.out", duration:1.3, delay:1});
    })
}