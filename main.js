let count = 0;
const maxCount = 5;

const intervalId = setInterval(()=> {
    count++;
    console.log(`${count}` );
    if (count >= maxCount){
        clearInterval(intervalId);
    }
}, 1000) ;



document.addEventListener("DOMContentLoaded", function () {

    const box = document.querySelector(".box");
    let position = 0;
    let size = 50 ;
    const maxPosition = 500;

    const intervalId = setInterval(() => {
        position += 10;
        size += 2;
        box.style.left= position + "px" ;
        box.style.width = size + "px" ;
        box.style.height = size + "px" ;
        
        if (position === maxPosition){
            clearInterval(intervalId);
        }
        
    },100);
}) ;


let score = 0;
let timeLeft = 10;
let gameInterval;

document.getElementById("start").addEventListener("click", startGame);
document.getElementById("target").addEventListener("click", increaseScore);

function startGame() {
    score = 0;
    timeLeft = 10;
    document.getElementById("score").textContent = score;
    document.getElementById("time").textContent = timeLeft;
    document.getElementById("gameArea").style.display = "block";
    gameInterval = setInterval(updateTime, 1000);
}

function updateTime() {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(gameInterval);
        document.getElementById("gameArea").innerHTML = "Гру завершено!";
    }
}

function increaseScore() {
    score++;
    document.querySelector(".score").textContent = score;
}

document.querySelector(".setTime").addEventListener("click", function() {
    let time = parseInt(document.querySelector(".timeInput").value);
    let message = document.querySelector(".message");
    
    if (isNaN(time) || time <= 0) {
        message.textContent = "Будь ласка, введіть коректний час";
        return
    }
    message.textContent = `Таймер запущено на ${time} секунд`;
    
    setTimeout(()=> {

        console.log("Час вийшов")
    }, time * 1000);
} );