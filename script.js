gsap.to("#nav", {
    backgroundColor: "#000",
    duration : 0.8,
    height : "12.5%",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start : "10%",
        end : "12%",
        scrub : 1
    }
})
var crs = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
    crs.style.left = dets.x - 7.5 + "px" 
    crs.style.top = dets.y - 7.5 + "px" 
})
// var crm = document.querySelector("#bigcursor")
// document.addEventListener("mousemove", function(dets){
//     crm.style.left = dets.x - 250 + "px" 
//     crm.style.top = dets.y - 250 + "px" 
// })

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "10%",
        end : "30%",
        scrub : 2
    }
})