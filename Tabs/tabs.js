const btns=document.querySelectorAll(".tab-btn");
const about=document.querySelector(".about");
const content=document.querySelectorAll(".content")

    about.addEventListener("click",function(event){
        const id=event.target.dataset.id;
        if(id){
            btns.forEach(function(btn){
                btn.classList.remove("active")
                event.target.classList.add("active")
            })
            content.forEach(function(item){
                item.classList.remove("active")
            })
            const element=document.getElementById(id)
            element.classList.add("active")
        }
    })

































