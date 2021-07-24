
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll(".img1")[0];
image1.setAttribute("src",randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
randomImage = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll(".img2")[0];
image2.setAttribute("src",randomImage);

if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "🚩Play 1 wins!";
}
else {
    document.querySelector("h1").innerText = "Player 2 wins!🚩";
}
