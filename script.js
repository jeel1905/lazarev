function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,

      // for tablet smooth
      tablet: { smooth: true },

      // for mobile
      smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length
              ? locoScroll.scrollTo(value, 0, 0)
              : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      }
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function loadingAnimation() {

  var tl = gsap.timeline()
  tl.from("#page1", {
      opacity: 0,
      duration: 0.2,
      delay: 0.2
  })
  tl.from("#page1", {
      transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
      borderRadius: "150px",
      duration: 2,
      ease: "expo.out"
  })
  tl.from("nav", {
      opacity: 0,
      delay: -0.2
  })
  tl.from("#page1 h1, #page1 p, #page1 div", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
  })
}

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.5,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
function page2Animation(){
var rightElems= document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){

    // elem.childNodes[3].style.opacity=1
    gsap.to(elem.childNodes[3],{
      opacity:1,
      scale:1
    })
    })
  elem.addEventListener("mouseleave",function(){ 
    gsap.to(elem.childNodes[3],{
      opacity:0,
      scale:0
    })  })
  elem.addEventListener("mousemove",function(dets){
    gsap.to(elem.childNodes[3],{
      x:dets.x-elem.getBoundingClientRect().x-90,
      y:dets.y-elem.getBoundingClientRect().y-215
    })
  })
})}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center")
  var video = document.querySelector("#page3 video")

  page3Center.addEventListener("click", function () {
      video.play()
      gsap.to(video, {
          transform: "scaleX(1) scaleY(1)",
          opacity: 1,
          borderRadius: 0
      })
  })
  video.addEventListener("click", function () {
      video.pause()
      gsap.to(video, {
          transform: "scaleX(0.7) scaleY(0)",
          opacity: 0,
          borderRadius: "30px"
      })
  })
  }
 
  function page4video(){
    var sections = document.querySelectorAll(".sec-right")
  sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
          elem.childNodes[3].style.opacity=1
          elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
          elem.childNodes[3].style.opacity=1
          elem.childNodes[3].load()
    })
  })
  }
  function page5animation(){
  var video1=document.querySelector(".right1")
  video1.addEventListener("mouseenter",function(){
    video1.childNodes[5].style.height="100%"
    })
  video1.addEventListener("mouseleave",function(){
    video1.childNodes[5].style.height="75%"
    })
  var video2=document.querySelector(".right2")
  video2.addEventListener("mouseenter",function(){
    video2.childNodes[5].style.height="100%"
    })
  video2.addEventListener("mouseleave",function(){
    video2.childNodes[5].style.height="75%"
    })
  }
// function page6animation(){
//   document.getElementById("toggleicon").addEventListener("click", function () {
//     const icon = this;
//     if (icon.classList.contains("ri-arrow-up-s-line")) {
//       icon.classList.replace("ri-arrow-up-s-line", "ri-arrow-down-s-line");
//     } else {
//       icon.classList.replace("ri-arrow-down-s-line", "ri-arrow-up-s-line");
//     }
//   });}
  // function page6button(){
  //   const btn = document.querySelector(".clientBtn");
  // let prevScroll = window.scrollY;

  // window.addEventListener("scroll", () => {
  //   let currentScroll = window.scrollY;

  //   if (currentScroll > prevScroll) {
  //     // scrolling down
  //     btn.classList.add("fixed");
  //     btn.classList.remove('unfixed');
  //   } else {
  //     // scrolling up
  //     btn.classList.remove("fixed");
  //     btn.classList.add('unfixed');
  //   }
  //   setTimeout(() => {
  //     button.classList.remove('unfixed');
  //   }, 300);


  //   prevScroll = currentScroll;
  // });
  // }

  function page7Animations() {
    gsap.from("#btm7-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
  
locomotiveAnimation();

navAnimation();

page2Animation();

page3VideoAnimation();

page4video();

page5animation();

// page6button();
  // page6animation();



page7Animations();   

loadingAnimation();