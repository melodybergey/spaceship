import{gsap}from"gsap";import{GSDevTools}from"gsap/GSDevTools";import{MotionPathPlugin}from"gsap/MotionPathPlugin";gsap.registerPlugin(GSDevTools,MotionPathPlugin);let ready=e=>{"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)};ready((()=>{let e=gsap.timeline({id:"main"}),a=gsap.timeline({paused:!0});function o(){gsap.set(".smoke",{display:"block"}),console.log("SHOW TIME"),gsap.set(".flames",{display:"block"}),a.to("#left-blue",{duration:.25,scaleY:.25,yoyo:!0,repeat:-1},"flames").to("#left-dark-blue",{duration:.15,scaleY:.15,yoyo:!0,repeat:-1},"flames").to("#right-blue",{duration:.25,scaleY:.25,yoyo:!0,repeat:-1},"flames").to("#right-dark-blue",{duration:.15,scaleY:.15,yoyo:!0,repeat:-1},"flames"),a.play()}init(),gsap.set("#svg-container",{visibility:"visible"}),e.add(fadeInTL()).add(zoomTL(),"-=4").add(function(){let e=gsap.timeline();return e.to("#Rocket",{duration:5,motionPath:{path:"#Line",align:"#Line",alignOrigin:[0,0]}}),e}(),"-=6").add(function(){let e=gsap.timeline();return e.to("#space-ship",{duration:.15,rotation:-10,ease:"none"}).to("#space-ship",{duration:.15,rotation:10,yoyo:!0,repeat:10,ease:"none"}).to("#space-ship",{duration:.15,rotation:0,ease:"none",onComplete:o}).from("#smoke-1",{duration:3.5,y:"+=150",scale:.75,alpha:.5,ease:"power3.in"},"upAndAway").from("#smoke-2",{duration:4,y:"+=150",scale:.75,alpha:.5,ease:"power3.in"},"upAndAway").to("#space-ship",{duration:5,y:"-=700",scale:.5,ease:"power3.in"},"upAndAway").to("#clouds",{duration:5,y:"+=700",ease:"power3.in"},"upAndAway").to("#front",{duration:5,y:"+=600",ease:"power3.in"},"upAndAway").to("#middle",{duration:5,y:"+=500",ease:"power3.in"},"upAndAway").from("#space",{duration:5,alpha:0,ease:"power3.in"},"upAndAway"),e}()).add(function(){let e=gsap.timeline();return e.to("#space-ship",{duration:15,motionPath:{path:"#flightPath",align:"#flightPath",alignOrigin:[.5,.5],autoRotate:90},ease:"power4.out"}).to("#moon",{alpha:1}),e}(),"target")}));