import{gsap}from"gsap";import{GSDevTools}from"gsap/GSDevTools";import{MotionPathPlugin}from"gsap/MotionPathPlugin";gsap.registerPlugin(GSDevTools,MotionPathPlugin);let ready=i=>{"loading"!=document.readyState?i():document.addEventListener("DOMContentLoaded",i)};ready((()=>{let i=gsap.timeline({id:"main"});gsap.timeline({paused:!0});init(),gsap.set("#svg-container",{visibility:"visible"}),i.add(fadeInTL()).add(zoomTL(),"-=4").add(function(){let i=gsap.timeline();return i.to("#Rocket",{duration:7,motionPath:{path:"#Line",align:"#Line",alignOrigin:[0,0]}}),i}(),"-=6").add(liftOffTL()).add(flightTL(),"target")}));