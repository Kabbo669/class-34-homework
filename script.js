let welcomeHeading = document.querySelector(".welcomeHeading");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let purple = document.querySelector(".purple");
let goldenrod = document.querySelector(".goldenrod");
let cyan = document.querySelector(".cyan");
let black = document.querySelector(".black");
let wheat = document.querySelector(".wheat");

red.addEventListener("click", function(){
  welcomeHeading.style.background = "red"
  welcomeHeading.style.color = "yellow";
})

blue.addEventListener("click", function(){
  welcomeHeading.style.background = "blue";
  welcomeHeading.style.color = "pink";
})

green.addEventListener("click", function(){
  welcomeHeading.style.background = "green";
  welcomeHeading.style.color = "gold";
})

yellow.addEventListener("click", function(){
  welcomeHeading.style.background = "yellow";
  welcomeHeading.style.color = "black";
})

purple.addEventListener("click", function(){
  welcomeHeading.style.background = "purple";
  welcomeHeading.style.color = "white";
})

goldenrod.addEventListener("click", function(){
  welcomeHeading.style.background = "goldenrod";
  welcomeHeading.style.color = "green";
})

cyan.addEventListener("click", function(){
  welcomeHeading.style.background = "cyan"
  welcomeHeading.style.color = "red";
})

black.addEventListener("click", function(){
  welcomeHeading.style.background = "black"
  welcomeHeading.style.color = "white";
})

wheat.addEventListener("click", function(){
welcomeHeading.style.background = "wheat"
welcomeHeading.style.color = "purple";
})