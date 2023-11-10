let randomNumber1 = Math.floor((Math.random()*6)+1);
let randomNumber2 = Math.floor((Math.random()*6)+1);
let image = document.getElementsByTagName("img");
image[0].src = `./images/dice${randomNumber1}.png`;
image[1].src = `./images/dice${randomNumber2}.png`;
let result = document.querySelector("h1");
if(randomNumber1 === randomNumber2){
    result.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2){
    result.innerHTML = "Player1 Wins 🚩";   
} else {
    result.innerHTML = "🚩 Player2 Wins ";
}