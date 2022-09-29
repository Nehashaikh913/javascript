// const allbtn=document.querySelectorAll(".question-btn")
// allbtn.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//        const hello=(e.currentTarget.parentElement.parentElement);
//        hello.classList.toggle("show-text");
//     })
// })



// const questions=document.querySelectorAll(".question")
// questions.forEach(function(hello){
//     const btn=hello.querySelector(".question-btn")
//     btn.addEventListener("click",function(){

//         questions.forEach(function(item){
//             if(item!==hello){
//                 item.classList.remove("show-text")
//             }
//         })


//         hello.classList.toggle("show-text")
//     })
// })


const questions=document.querySelectorAll(".question")

questions.forEach(hello => {
    const btn=hello.querySelector(".question-btn")
    $(btn).click(function(){
        questions.forEach(item=>{
            if(item !==hello){
                $(item).removeClass("show-text");
            }
        })
        $(hello).toggleClass("show-text");
      });
      
});