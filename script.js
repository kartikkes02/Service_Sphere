gsap.to(".navbar",{
    backgroundColor:"orange",
    duration:1,
    height:"80px",
    scrollTrigger:{
        trigger:".nav",
        scroll:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
       scrub:1

    }
})
