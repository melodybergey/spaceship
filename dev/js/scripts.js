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
  // let flamesTL = gsap.timeline({paused:true});




  //*********** spaceshipTL ****************

  function spaceshipTL(){
    let tl = gsap.timeline();

    tl.to("#Rocket", {
      duration: 7, 
      motionPath: {
      path: "#Line", align: "#Line", alignOrigin: [0.5,0.5]}});

    //tl END

    return tl;

  }


//1. set initial properties
// init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(spaceshipTL())
// .add(zoomTL(),"-=4")
// .add(spaceshipTL(),"-=6")
// .add(liftOffTL())
// .add(flightTL(),"target")

// ;//tl END

//mainTL.play("target");



});//ready END
