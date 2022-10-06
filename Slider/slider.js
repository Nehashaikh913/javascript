const slides = document.querySelectorAll(".slide");
const nextBtn = $(".nextBtn");
const prevBtn = $(".prevBtn");
$(prevBtn).hide();
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
$(nextBtn).click( function(){
  counter++;
  carousel();
});

$(prevBtn).click( function(){
  counter--;
  carousel();
});

function carousel() {
  console.log(counter)
console.log(slides.length-1);
  if (counter < slides.length - 1) {
    $(nextBtn).show();
  } else {
    $(nextBtn).hide();
  }
  if (counter > 0) {
    $(prevBtn).show();
  } else {
    $(prevBtn).hide();
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}



