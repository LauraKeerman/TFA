//gsap. config({nullTargetWarn:false});

import ScrollTrigger from 'gsap/ScrollTrigger'; //importer le gsap 
gsap.registerPlugin(ScrollTrigger); //dire qu'on veut utiliser ce gsap
import gsap from 'gsap';


//Copyright
let date = new Date();
let year = date.getFullYear();

let yr = document.querySelector(".copyright");
yr.innerText = year;


//Slider
//Inspiré par https://www.w3schools.com/howto/howto_js_slideshow.asp et modifié
var slideIndex = 1;
const slideExist = document.querySelector(".slideshow__container");
showSlides(slideIndex);

let prevButton = document.querySelector(".slideshow__prev");
if(prevButton){
    prevButton.addEventListener('click', () => {
        plusSlides(-1);
    });
}

let nextButton = document.querySelector(".slideshow__next");
if(nextButton){
    nextButton.addEventListener('click', () => {
        plusSlides(1);
    });
}

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    if(slideExist){
        var slides = document.querySelectorAll(".slideshow__slides");
        if (n > slides.length) {
            slideIndex = 1;
        } 
    
        if (n < 1) {
            slideIndex = slides.length;
        }
    
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("hide");
        }
    
        slides[slideIndex-1].classList.remove("hide"); 
    }
}



/*ANIMATIONS DESKTOP*/
//Timeline
const gsapExist = document.querySelector(".h1-intro");
const gsapExist2 = document.querySelector(".p-intro");
const gsapExist3 = document.querySelector(".img-intro");


if(window.matchMedia('(min-width: 768px)').matches){
    if(gsapExist && gsapExist2 && gsapExist3){
        const tl2 = gsap.timeline({ defaults: {duration: 3}});

        tl2.from('.h1-intro', {
            x: -1000,
            duration: 0.7,
            stagger: 0.5,
        });

        tl2.from('.p-intro', {
            x: -1000,
            duration: 0.6,
        }, "-=0.3"); 


        tl2.from('.img-intro', {
            x: 1000,
            duration: 0.6,
        }, "="); 
    }
}


//ScrollTrigger 
const gsapExist4 = document.querySelector(".callToAction-left");
const gsapExist5 = document.querySelector(".callToAction-right");

if(window.matchMedia('(min-width: 768px)').matches){
    if(gsapExist4 && gsapExist5){
        gsap.from(".callToAction-right", {
            x: 200,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".callToAction-right",
                start: 'top bottom',
                toggleActions: 'play none none none',
            }
        });

        gsap.from(".callToAction-left", {
            x: -200,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".callToAction-left",
                start: 'top bottom',
                toggleActions: 'play none none none',
            }
        });
    }
}


const gsapExist6 = document.querySelector(".callToAction2-left");
const gsapExist7 = document.querySelector(".callToAction2-right");


//ScrollTrigger 
if(window.matchMedia('(min-width: 768px)').matches){
    if(gsapExist6 && gsapExist7){
        gsap.from(".callToAction2-right", {
            x: 200,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".callToAction2-right",
                start: 'top bottom',
                toggleActions: 'play none none none',
            }
        });

        gsap.from(".callToAction2-left", {
            x: -200,
            opacity: 0,
            duration: 0.3,
            scrollTrigger: {
                trigger: ".callToAction2-left",
                start: 'top bottom',
                toggleActions: 'play none none none',
            }
        });
    }
}


/*ANIMATION MOBILE*/
//Timeline
const gsapExist8 = document.querySelector(".h1-intro");
const gsapExist9 = document.querySelector(".p-intro");
const gsapExist10 = document.querySelector(".img-intro");


if(window.matchMedia('(max-width: 767px)').matches){
    if(gsapExist8 && gsapExist9 && gsapExist10){
        const tl = gsap.timeline({ defaults: {duration: 3}});
        tl.from('.h1-intro', {
            x: -1000,
            duration: 0.7,
            stagger: 0.5,
        });

        tl.from('.p-intro', {
            x: -1000,
            duration: 0.6,
        }, "-=0.3"); 

        tl.from('.img-intro', {
            x: -1000,
            duration: 0.6,
        }, "-=0.3"); 
    }
}





//ScrollTrigger 
const gsapExist11 = document.querySelector(".callToAction-right");

if(window.matchMedia('(max-width: 767px)').matches){
    if(gsapExist11){
        gsap.from(".callToAction-right", {
            rotation: -20,
            duration: 1,
            scrollTrigger: {
                trigger: ".callToAction-right",
                start: 'top bottom',
                toggleActions: 'play play play play',
            }
        });
    }
}


const gsapExist12 = document.querySelector(".callToAction2-left");
const gsapExist13 = document.querySelector(".callToAction2-right");

if(window.matchMedia('(max-width: 767px)').matches){
    if(gsapExist12 && gsapExist13){
        gsap.from(".callToAction2-right", {
            x: 200,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".callToAction2-right",
                start: 'top bottom',
                toggleActions: 'play none none none',
            }
        });

        gsap.from(".callToAction2-left", {
            x: 200,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".callToAction2-left",
                start: 'top bottom',
                toggleActions: 'play none none none',
            }
        });
    }
}