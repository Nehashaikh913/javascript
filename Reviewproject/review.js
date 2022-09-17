// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

  const author=document.getElementById("author");
  const job=document.getElementById("job");
  const text=document.getElementById("info");
  const personimg=document.getElementById("person-img")
  const prevBtn=document.querySelector(".prev-btn");
  const nextBtn=document.querySelector(".next-btn");
  const randomBtn=document.querySelector(".random-btn");

  let currentItem=0
  $(document).ready(function(){
    showperson(currentItem)
  })

  function showperson(person){
    const item=reviews[person]
    personimg.src=item.img
     job.textContent=item.job
   author.textContent=item.name
     text.textContent=item.text
  }

  nextBtn.addEventListener("click",function(){
    currentItem++
    if(currentItem>reviews.length-1){
      currentItem=0
    }
    showperson(currentItem);
  })

  prevBtn.addEventListener("click",function(){
    currentItem--
    if(currentItem<0){
      currentItem=reviews.length-1
    }
    showperson(currentItem);
  })


  randomBtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*reviews.length)
    showperson(currentItem)
  })

//   // 
//   const sectionCenter = document.querySelector(".section-center")
// const filterbtns = document.querySelectorAll(".filter-btn")

// filterbtns.forEach(function (btn) {
//   btn.addEventListener("click", function (event) {
//     const data = (event.currentTarget.dataset.id)
//     const maindata = menu.filter(function (hell) {
//       if (hell.maindata == data) {
//         return (hell)
//       }
//     })
//     if(data=="all"){
//       displayMenuItem(menu)
//     }
//     else{
//       displayMenuItem(maindata)
//     }
//   })
// })

// function displayMenuItem(menuitem) {
//   let displayMenu = menuitem.map(function (item) {
//     // console.log(item)
//     return `<article class="menu-item">
//       <img src=${item.img} class="photo" alt=${item.title} />
//       <div class="item-info">
//           <header>
//               <h4>${item.title}</h4>
//               <h4 class=${item.price}>$15</h4>
//           </header>
//           <p class="item-text">${item.desc}</p>
//       </div>
//   </article>`
//   })
//   displayMenu = displayMenu.join('')
//   sectionCenter.innerHTML = displayMenu
// }
// $(document).ready(function () {
//   // console.log(sectionCenter)
//   displayMenuItem(menu)
// })