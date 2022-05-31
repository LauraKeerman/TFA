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