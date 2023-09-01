var crsr = document.querySelector("#cursor")

function circleFollower() {
    window.addEventListener(`mousemove`,function(dets){
        document.querySelector(`#cursor`).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
    });
}   

function circleFollowerB() {
    window.addEventListener(`mousemove`,function(dets){
        document.querySelector(`#cursorb`).style.transform = `translate(${dets.clientX - 225}px,${dets.clientY - 225}px)`;
    });
}

circleFollower();

circleFollowerB();

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.height = "80px";
        crsr.style.width = "80px";
        elem.style.color = "#95C11E";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent"; 
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        elem.style.color = "#fff";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})

var btnall = document.querySelectorAll("#right .button");
btnall.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.height = "80px";
        crsr.style.width = "80px";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent"; 
        elem.style.backgroundColor = "#a3d421"; 
        var hthree = elem.querySelector("h3");
        hthree.style.color = "black";

    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
        elem.style.backgroundColor = "transparent";
        var hthree = elem.querySelector("h3");
        hthree.style.color = "#fff";

    })
})

var gola = document.querySelectorAll(".cards");
gola.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.height = "80px";
        crsr.style.width = "80px";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";

    })
})



var img = document.querySelectorAll(".elem");
img.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.height = "80px";
        crsr.style.width = "80px";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mousemove",function(){
        crsr.style.height = "80px";
        crsr.style.width = "80px";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";

    })
})

document.addEventListener("DOMContentLoaded", function () {
    const elem = document.querySelectorAll(".elem");
    const h1 = document.querySelector("#page4 h1");

    elem.forEach(function (el) {
        el.addEventListener("mouseover", function () {
            h1.style.webkitTextStroke = "2px #95C11E";
    });
    })
    elem.forEach(function (el) {
        el.addEventListener("mouseout", function () {
            h1.style.webkitTextStroke = "1px #fff";
    });
    })
});


var fimg = document.querySelector("#f1 img");
fimg.addEventListener("mouseover", function () {
    crsr.style.height = "80px";
    crsr.style.width = "80px";
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
})
fimg.addEventListener("mouseleave", function () {
    crsr.style.height = "25px";
    crsr.style.width = "25px";
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
})


var foot2h3 = document.querySelectorAll("#f2 h3");
foot2h3.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.height = "80px";
        crsr.style.width = "80px";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
        ele.style.color = "#fff";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
        ele.style.color = "black";

    })
})

var foot3h4 = document.querySelectorAll("#f3 h3");
foot3h4.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        crsr.style.height = "80px";
        crsr.style.width = "80px";
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";
        ele.style.color = "#fff";
    })
    ele.addEventListener("mouseleave",function(){
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
        ele.style.color = "black";

    })
})


var f4h3 = document.querySelector("#f4 h3");
f4h3.addEventListener("mouseover", function () {
    crsr.style.height = "80px";
    crsr.style.width = "80px";
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent";
    f4h3.style.color = "#fff";
})
f4h3.addEventListener("mouseleave", function () {
    crsr.style.height = "25px";
    crsr.style.width = "25px";
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
    f4h3.style.color = "black";
})

function deskAnim(){
    gsap.to("#nav",{
        backgroundColor : "#000",
        height : "150px",
        duration : 0.5,
        scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            start:"top -9%",
            end:"top -10%",
            scrub: 1,
        }
    
    })  
    
    gsap.to("#main",{
        backgroundColor: "#000",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            start:"top -20%",
            end:"top -70%",
            scrub:2,
    
        }
    })
    
    gsap.from("#about-us img, #about-us-in",{
        y:90,
        opacity:0,
        duration:1,
        stagger:0.4,
        scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            start:"top 80%",
            end:"top 50%",
            scrub:2,
        }
    })
    
    gsap.from(".cards",{
        scale:0.8,
        opacity:0,
        duration:0.5,
        stagger:0.1,
        scrollTrigger:{
            trigger:".cards",
            scroller:"body",
            start:"top 90%",
            end:"top 68%",
            scrub:2,
        }
    })
    
    
    
    gsap.from("#colon1",{
        y:-50,
        x:-50,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 50%",
            end:"top 45%",
            scrub:3,
        }
    })
    gsap.from("#colon2",{
        y:50,
        x:50,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 50%",
            end:"top 45%",
            scrub:3,
        }
    })
    gsap.from("#page4 h1",{
        y:50,
        scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"body",
            start:"top 80%",
            // marker:true,
            end:"top 70%",
            scrub:2,
        }
    }) 

}

function mobileAnim(){
    gsap.to("#nav-mobi",{
        backgroundColor : "#000",
        height : "90px",
        duration : 0.5,
        scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            start:"top -9%",
            end:"top -10%",
            scrub: 1,
        }
    
    })  
    
    gsap.to("#main",{
        backgroundColor: "#000",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            start:"top -5%",
            end:"top -20%",
            scrub:2,
    
        }
    })
    
    gsap.from("#about-us img, #about-us-in",{
        y:90,
        opacity:0,
        duration:1,
        stagger:0.4,
        scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            start:"top 90%",
            end:"top 50%",
            scrub:2,
        }
    })
    
    gsap.from(".cards",{
        scale:0.8,
        opacity:0,
        duration:0.5,
        stagger:0.1,
        scrollTrigger:{
            trigger:".cards",
            scroller:"body",
            start:"top 90%",
            end:"top 68%",
            scrub:2,
        }
    })
    
    
    
    gsap.from("#colon1",{
        y:-50,
        x:-50,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 70%",
            end:"top 65%",
            scrub:3,
        }
    })
    gsap.from("#colon2",{
        y:50,
        x:50,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 80%",
            end:"top 70%",
            scrub:3,
        }
    })
    gsap.from("#page4 h1",{
        y:22,
        scrollTrigger:{
            trigger:"#page4 h1",
            scroller:"body",
            start:"top 80%",
            marker:true,
            end:"top 70%",
            scrub:2,
        }
    })    
}

function applyAnim(){
    if(window.innerWidth <= 768){
        mobileAnim();
    }
    else{
        deskAnim();
    }
}

applyAnim();

window.addEventListener("resize",applyAnim);
