//$('h3').hide();

gsap.from("h3", {
        duration: 2, y: -80, opacity:0
        });

gsap.registerPlugin(ScrollTrigger);
//
//ScrollTrigger.saveStyles(".mobile, .desktop");

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".main_vdo",
    //markers:true,
    //start:'top 80%',
    start: '400px top',
    //end:'top 30%',
    scrub:2 //start-end
  }
});

tl.from(".title_box",{y:-50, duration:10, opacity:0})
  .from(".b_grid1",{y:100, duration:10, opacity:0})
  .from(".b_grid2",{y:100, duration:10, opacity:0})
  .from(".b_grid3",{y:100, duration:10, opacity:0})