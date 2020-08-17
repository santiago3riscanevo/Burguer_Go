const navslide = () => {
    const burguer = document.querySelector(".nav_burguer")
    const nav = document.querySelector(".nav_active")
    const navlinks = document.querySelectorAll(".nav_active li")

    // const menuBurguer = document.querySelectorAll('nav_burguer > ')

    burguer.addEventListener('click', ()=>{
        //toggle Nav
        nav.classList.toggle('active');

        //Animated links
        navlinks.forEach((link,index)=>{
            if(link.style.animation ){
                link.style.animation  = ``;
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
                
            }
        })

        //burguer menu
        burguer.classList.toggle("toggle")
    })

}

export default navslide;