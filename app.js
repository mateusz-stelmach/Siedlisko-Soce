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

    //animate links in nav
    
}

navSlide();


//nav color background change on scroll

const header = document.querySelector('header');
const hero = document.querySelector('.hero');

const heroOptions={
    rootMargin: "-170px 0px 0px 0px"
};

const heroObserver = new IntersectionObserver(function(
    entries,
    heroObserver
){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            header.classList.add('nav-scrolled');   
        } else{
            header.classList.remove('nav-scrolled');
        };
    })
},
heroOptions);

heroObserver.observe(hero);

