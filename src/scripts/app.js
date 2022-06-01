import gsap from 'gsap';

import ScrollTrigger from 'gsap/ScrollTrigger'; //importer le gsap 
gsap.registerPlugin(ScrollTrigger); //dire qu'on veut utiliser ce gsap



if(window.matchMedia('(max-width: 767px)').matches){
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


if(window.matchMedia('(min-width: 768px)').matches){
    const tl2 = gsap.timeline({ defaults: {duration: 3}});
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
        x: 1000,
        duration: 0.6,
    }, "="); 
}


//Slider
//Inspiré par https://www.w3schools.com/howto/howto_js_slideshow.asp et modifié
var slideIndex = 1;
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