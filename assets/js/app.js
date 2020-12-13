const navSlide =() =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('li');


   
    burger.addEventListener('click', ()=>{
        
        //toggle nav
        nav.classList.toggle('nav-active');
        
        //navlink animation
        navLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation ="";
            } else {
            link.style.animation = `navLinksFade 0.5s forwards ${index / 6 + 0.35}s`;
            }                
        });

        //burger animation
        burger.classList.toggle('toggle');

    });    
    
}

navSlide();


//nav color background change on scroll

const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const logo = document.querySelector('.logo');


const heroOptions={
    rootMargin: "-280px 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(function(
    entries,
    heroObserver
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');
            logo.style.display="none";            
               
        } else{
            header.classList.remove('nav-scrolled');
            logo.style.display="flex";
        };
    })
},
heroOptions);

heroObserver.observe(hero);

//gsap animations

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".hero",
        start:"center bottom"
    }
})
tl.from("header", {opacity:0, duration:2})
.from("li", {x:100, duration: 1, stagger: 0.25}, "-0.7")
.from(".hero_text", {y: 50, opacity: 0, duration: 1}, "0.5")


let tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#domownicy",
        start:"250px bottom"        
    }
})
tl1.from(".text-container-left", {x:-20 , opacity:0, duration:1})
.from(".text_left img", {x:20, opacity:0, duration: 1}, "-0.5")

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#siedlisko",
        start:"250px bottom"
    }
})
tl2.from(".text-container-right", {x:20 , opacity:0, duration:1})
.from(".text_right img", {x:-20, opacity:0, duration: 1}, "-0.5")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#offer",
        start:"200px bottom"        
    }
})
tl3.from(".offer-container", {y:20 , opacity:0, duration:0.8, stagger: 1})


let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".rezerwacja",
        start:"center bottom"
    }
})
tl4.from(".rezerwacja-wrapper h1", {x:20 , opacity:0, duration:1})
.from(".rezerwacja-wrapper h2", {y:20, opacity:0, duration: 0.8, stagger:0.5}, "-0.1")
