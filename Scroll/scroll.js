const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear();
const navtoggle=document.querySelector(".nav-toggle")
const linkscontainer=document.querySelector(".links-container")
const links=document.querySelector(".links")


navtoggle.addEventListener("click",function(){
    // basic toggle of height
    // linkscontainer.classList.toggle("show-links")

    // dynamic height toggle
    const containerheight=linkscontainer.getBoundingClientRect().height;
    const linksheight=links.getBoundingClientRect().height;

    if(containerheight===0){
        linkscontainer.style.height=`${linksheight}px`
    }
   else{
    linkscontainer.style.height=0;
   }
})

const navbar=document.getElementById("nav");
const Toplink=document.querySelector(".top-link")
window.addEventListener("scroll",function(){
    const scrollheight=(window.pageYOffset)
    // console.log(scrollheight)
    const navbarheight=navbar.getBoundingClientRect().height;
    // console.log(navbarheight)
    if(scrollheight>navbarheight){
        navbar.classList.add("fixed-nav")
        Toplink.classList.add("show-link")
    }
    else{
        navbar.classList.remove("fixed-nav")
        Toplink.classList.remove("show-link")
    }
    })

    function ScrollToTop(){
        window.scrollTo({ top: 0, behavior:"smooth" });
    }


    const scrolllink=document.querySelectorAll(".scroll-link")
    scrolllink.forEach(function(item){
        item.addEventListener("click",function(e){
            e.preventDefault();
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element=document.getElementById(id);
            const navbarheight=navbar.getBoundingClientRect().height;
            const containerheight=linkscontainer.getBoundingClientRect().height;
            const fixednav = navbar.classList.contains("fixed-nav");
            let position=element.offsetTop-navbarheight;
            if(!fixednav){
                position=position-navbarheight
            }
            if(navbarheight>82){
                position=position+containerheight
            }
            window.scrollTo({
                left:0,
                top:position,
            })
            linkscontainer.style.height=0;
        })
    })