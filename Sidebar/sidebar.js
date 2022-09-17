const togglebtn=document.querySelector(".sidebar-toggle")
const sidebar=document.querySelector(".sidebar");
const closebtn=document.querySelector(".close-btn")
togglebtn.addEventListener("click",function(){
    $(".sidebar").toggleClass("show-sidebar")
})
closebtn.addEventListener("click",function(){
    $(".sidebar").removeClass("show-sidebar")
})