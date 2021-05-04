//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

//register Plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin);

//**** SELECT ELEMENTS without jQuery ****\\

// jQuery, all instances of .box
//$(".box");

// first instance of .box
//document.querySelector(".box");

// all instances of .box
//document.querySelectorAll(".box");
//example:
//let someBox = document.querySelector("#box");


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  //Variables
  let mainTL = gsap.timeline({id:"main"});
  let flamesTL = gsap.timeline({paused:true});



  //*********** spaceshipTL ****************

  function spaceshipTL(){
    let tl = gsap.timeline();

    tl.to("#Rocket", {duration: 5, motionPath: {path: "#Line", align: "#Line", alignOrigin: [0,0]}});

    //tl END

    return tl;

  }
  // function spaceshipTL(){
  //   let tl = gsap.timeline();

  //   tl.from("#space-ship",{y:"+=500", duration:0.5})
  //   .from("#shadow",{alpha:0, duration:0.5})
  //   .from("#cone",{alpha:0, duration:0.5})
  //   .from("#window",{scale:0, duration:0.5})
  //   .from("#window-bg",{alpha:0, duration:0.5})
  //   .from("#window-glass",{alpha:0, duration:0.5})
  //   .from("#window-bars",{alpha:0, duration:0.5})

  //   .from("#eng-middle-left",{alpha:0, duration:0.25},"mid-eng-1")
  //   //.from("#left-mid-bone",{scale:0, duration:0.25},"mid-eng-2")
  //   .to("#eng-middle-left",{rotation:0, duration:0.25},"mid-eng-3")
  //   .from("#eng-middle-right",{alpha:0, duration:0.25},"mid-eng-1")
  //   //.from("#right-mid-bone",{scale:0, duration:0.25},"mid-eng-2")
  //   .to("#eng-middle-right",{rotation:0, duration:0.25},"mid-eng-3")

  //   .from("#eng-left",{alpha:0, duration:0.25},"eng-1")
  //   //.from("#left-bone",{scale:0, duration:0.25},"eng-2")
  //   .to("#eng-left",{rotation:0, duration:0.25},"eng-3")
  //   .from("#eng-right",{alpha:0, duration:0.25},"eng-1")
  //   //.from("#right-bone",{scale:0, duration:0.25},"eng-2")
  //   .to("#eng-right",{rotation:0, duration:0.25},"eng-3")
  //   .from("#eng-left-bottom",{y:"-=20", duration:0.5})
  //   .from("#eng-right-bottom",{y:"-=20", duration:0.5},"-=0.25")
  //   .to("#space-ship",{y:"+=320", duration:2, ease: "bounce.out"})

  //   ;//tl END

  //   return tl;

  // }

  //*********** liftOffTL ****************

  function liftOffTL(){
    let tl = gsap.timeline();

    tl.to("#space-ship",{duration:0.15, rotation:-10,ease:"none"})
    .to("#space-ship",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
    .to("#space-ship",{duration:0.15, rotation:0,ease:"none", onComplete:controlFlames})
    .from("#smoke-1",{duration:3.5, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
    .from("#smoke-2",{duration:4, y:"+=150", scale:.75, alpha:0.5, ease: "power3.in"},'upAndAway')
    .to("#space-ship",{duration:5, y:"-=700", scale:0.5, ease: "power3.in"},"upAndAway")
    .to("#clouds",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
    .to("#front",{duration:5, y:"+=600", ease: "power3.in"},'upAndAway')
    .to("#middle",{duration:5, y:"+=500", ease: "power3.in"},'upAndAway')
    .from("#space",{duration:5,alpha:0, ease: "power3.in"},'upAndAway')

    ;//tl END

    return tl;

  }

  //*********** flightTL ****************
  function flightTL(){
    let tl = gsap.timeline();

    tl.to("#space-ship", {
      duration:15,
      motionPath:{
        path:"#flightPath",
        align:"#flightPath",
        alignOrigin:[0.5, 0.5],
        autoRotate:90
        // start: 0.1,
        // end: 0.5,
      },
      ease:"power4.out"


    })
    .to("#moon", {alpha:1});

    ;//tl END

    return tl;

  }


//*********** moonLandingTL ****************


//*********** flame functions DO NOT INCLUDE IN MAIN TL ****************

function callBackTest(){

  console.log("hello");

}

function controlFlames(){

  showSmoke();

  console.log('SHOW TIME');
  gsap.set(".flames",{display:"block"});

  flamesTL.to("#left-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
  .to("#left-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")
  .to("#right-blue",{duration:0.25, scaleY:.25,yoyo:true, repeat:-1},"flames")
  .to("#right-dark-blue",{duration:0.15, scaleY:.15,yoyo:true, repeat:-1},"flames")

  flamesTL.play()
}

function showSmoke(){
  gsap.set(".smoke",{display:"block"});
}


//1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(fadeInTL())
.add(zoomTL(),"-=4")
.add(spaceshipTL(),"-=6")
.add(liftOffTL())
.add(flightTL(),"target")

;//tl END

//mainTL.play("target");



});//ready END