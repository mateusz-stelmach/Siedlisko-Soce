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