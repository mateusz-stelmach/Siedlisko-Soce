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
tl.from("header", {opacity:0, duration:2}, "3")
.from(".nav-items li", {x:75, opacity:0 , duration: 1.5, stagger: 0.15}, "2")
.from(".hero_text", {y: 50, opacity: 0, duration: 1.5}, "3")


let tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#domownicy",
        start:"250px bottom"        
    }
})
tl1.from(".domownicy-text-gsap", {x:-20 , opacity:0, duration:1})
.from(".domownicy-img-gsap", {x:20, opacity:0, duration: 1}, "-0.5")

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#siedlisko",
        start:"250px bottom"
    }
})
tl2.from(".siedlisko-text-gsap", {x:20 , opacity:0, duration:1})
.from(".siedlisko-img-gsap", {x:-20, opacity:0, duration: 1}, "-0.5")

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#kuchnia",
        start:"200px bottom"
    }
})
tl3.from(".kuchnia-text-gsap", {x:20 , opacity:0, duration:1})
.from(".kuchnia-img-gsap", {x:-20, opacity:0, duration: 1}, "-0.5")

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".udogodnienia",
        start:"150px bottom"        
    }
})
tl4.from(".udogodnienia-wrapper li", {y:20 , opacity:0, duration:0.5, stagger: 0.15})


let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger:"#price",
        start:"200px bottom"        
    }
})
tl5.from(".price-container", {y:20 , opacity:0, duration:0.8, stagger: 1})


let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger:"#book",
        start:"center bottom"
    }
})
tl6.from(".rezerwacja-wrapper h1", {x:20 , opacity:0, duration:1})
.from(".rezerwacja-wrapper h2", {y:20, opacity:0, duration: 1, stagger:0.8}, "-0.1")
