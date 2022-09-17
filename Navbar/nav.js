const btn=document.querySelector(".nav-toggle");
const links=document.querySelector(".links")
btn.addEventListener("click",function(){

    // jquery
    $('.links').toggleClass("show-links")
    // javascript
    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }
    // else{
    //     links.classList.add("show-links")
    // }
    // oneline java-toggle
    // links.classList.toggle("show-links")
})