const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const colorbtn = document.getElementById("btn");
const color = document.querySelector(".color");

function getcolor() {
    const randomNumber = (Math.floor(Math.random() * colors.length))
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
}