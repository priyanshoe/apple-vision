function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}loco();

// playing video on scroll
gsap.to(".page1 video", {
  scrollTrigger:{
    trigger:'.page1 video',
    scroller:'.main',
    start:'top -5%',
    scrub:1,
  },
  scale:1,
  onStart:()=>{
    document.querySelector('.page1 video').play();
  }  
})


// pin page 1
gsap.to('.page1', {
  scrollTrigger:{
    trigger:'.page1',
    scroller:'.main',
    pin:true,
  }
})

// getting heading vanish
gsap.to('.heading', {
  scrollTrigger:{
    trigger:'.heading',
    scroller:'.main',
    start:'top 55%',
    end:'bottom 25%',
    scrub:2,
  },
  opacity:0,
  y:-200
})




// scrolling heading over the video 
var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'.page2',
    scroller:'.main',
    scrub:1,
    pin:true
  }
})

tl2.to('.page2 h1',{
  top:'-15%'
}) 


var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:'.page3',
    scroller:'.main',
    scrub:1,
    pin:true
  }
})

tl3.to('.page3 h1', {
  top:'-20%'
})

var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:'.page4',
    scroller:'.main',
    scrub:1,
    pin:true
  }
})

tl4.to('.page4 h1', {
  top:'-20%'
})

var tl5 = gsap.timeline({
  scrollTrigger:{
    trigger:'.page5',
    scroller:'.main',
    scrub:1,
    pin:true
  }
})

tl5.to('.page5 h1', {
  top:'-20%'
})