gsap.registerPlugin(ScrollTrigger)

const imagen = document.querySelectorAll('imagen-loca').offsetHeight;
// gsap.to(".izquierda", {
//     x: -50,
//     duration: 3,
//     scrollTrigger: ".izquierda"
// })

gsap.to(".acomodar", {

    duration: 3,
    scrollTrigger: {
        trigger: ".acomodar",
        start: "top 100%",
        end: "top 80%",

        // pin: true,
        // pinSpacing: false,
        markers: true,
        toggleClass: "pelotica",
        toggleActions: "restart none none none"
    }
})

gsap.to(".mov-izq", {
    duration: 3,
    scrollTrigger: {
        trigger: ".mov-izq",
        start: "top 12%",
        end: "top 0%",
        // markers: true,
        toggleClass: "mov-izqu",
        toggleActions: "restart none none none"
    }
})

gsap.to(".mov-der", {
    duration: 3,
    scrollTrigger: {
        trigger: ".mov-der",
        start: "top 12%",
        end: "top 0%",
        // scrub: true,
        // markers: true,
        toggleClass: "mov-dere",
        toggleActions: "restart none none none"
    }
})

gsap.to(".izquierda", {
    // x: -60,
    duration: 3,
    scrollTrigger: {
        trigger: ".izquierda",
        start: "top 80%",
        end: "top 10%",
        // markers: true,
        toggleClass: "red",
        toggleActions: "restart pause resume complete"
    }
})

gsap.to(".derecha", {
    x: 15,
    duration: 3,
    scrollTrigger: {
        trigger: ".derecha",
        start: "top 80%",
        end: "top 10%",
        scrub: true,
        // markers: true,
        toggleClass: "red",
        toggleActions: "restart pause resume complete"
    }
})

gsap.to(".imagen-loca", {
    x: -800,
    duration: 3,
    scrollTrigger: {
        trigger: ".imagen-loca",
        start: "top 80%",
        end: "top 30%",
        scrub: 4,
        // markers: true,
        // toggleClass: "bg-danger",
        toggleActions: "restart none none none",
        pin: true,
        pinSpacing: true
    }
})

gsap.to(".jou", {
    y: -80,
    duration: 3,
    scrollTrigger: {
        trigger: ".jou",
        start: "top 80%",
        end: "top 10%",
        scrub: 4,
        // markers: true,
        // toggleClass: "bg-danger",
        toggleActions: "restart none none none"
    }
})

// gsap.to(".fondo-desaparece", {
//     duration: 10,
//     scrollTrigger: {
//         trigger: ".fondo-desaparece",
//         start: "top 80%",
//         end: "top 30%",
//         scrub: 4,
//         markers: true,
//         toggleClass: "bg-dark",
//         toggleActions: "restart none none none",
//         pin: true,
//         pinSpacing: true
//     }
// })