gsap.registerPlugin(ScrollTrigger)


   const lenis = new Lenis({
  duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'both',
    gestureDirection: 'both',
    lerp: 0.05,
    smooth: 2,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
    autoResize: true,
})
  
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0) 



const prlxSection = document.querySelectorAll(".prlx-section")

prlxSection.forEach(e=>{
  const prlxImg  = e.querySelector(".prlx-item")
  const prlxTl = gsap.timeline({
    scrollTrigger: {
        trigger:e,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
    }
})
  const yHeight = prlxImg.offsetHeight - e.offsetHeight 

  prlxTl.fromTo(prlxImg,{y:-yHeight},{
    y:0,
    ease:"none"
  })
})


const thrlax = gsap.timeline({
    scrollTrigger: {
        trigger:".trigger",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      
     }
})
       thrlax.to(".thrlax1",{
          y:-155,
          ease:"none"
       }).to(".thrlax2",{
          y:-250,
          ease:"none"
       },0)

let currentScroll = 0
let isScrolling  = true
let tween = gsap.to(".marquee",{xPercent:-100,ease:"linear",repeat:-1,duration:13}).totalProgress(0.5)
window.addEventListener("scroll",() => {
  if (window.pageYOffset > currentScroll) {
    isScrolling = true
  } else{
    isScrolling = false
  }
  gsap.to(tween,{
    timeScale:isScrolling ? 1 : -1
  })
  currentScroll = window.pageYOffset
})

const clipTop = document.querySelectorAll(".clippath")

clipTop.forEach(e=>{
   
const cliplax = gsap.timeline({
    scrollTrigger: {
        trigger:e,
        start: "top bottom",
        end: "bottom top",
       scrub:true
     }
})
const clip1 = e.querySelector(".clip1")
const clip2 = document.querySelector(".clip2")

   
     cliplax.to(clip1,{
   ease:"none",
        y:-65
     }).to(clip2,{
   ease:"none",
        y:-100
     },0)
})


       const races = document.querySelector(".horizontal-scroll")
function getScrollAmount(){
    let racesWidth = races.scrollWidth
    return -(racesWidth-window.innerWidth)

}
let skewEl = races.querySelectorAll("h2")
const slider = gsap.to(races,{
    x:getScrollAmount,
    duration:5,ease:"none",
  

})

ScrollTrigger.create({
    trigger:".racesWrapper",
    start:"top  20%",
    end:()=> `+=${getScrollAmount()*-1}`,
    pin:true,
    scrub:1,
    invalidateOnRefresh:true,
    animation:slider,
  
})
