const modalbtn1=document.querySelector(".btn")
const modalbtn2=document.querySelector(".close-btn")
const modalopen=document.querySelector(".modal-overlay")

modalbtn1.addEventListener("click",function(){
    $(modalopen).addClass("open-modal")
})
modalbtn2.addEventListener("click",function(){
    $(modalopen).removeClass("open-modal")
})