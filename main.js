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

    const box = document.querySelector(".animated-box");
    let position = 0;
    let size = 50 ;
    const maxPosition = window.innerWidth - 50;
    const intervalId = setInterval(() => {
        position += 10;
        size += 2;
        box.style.left= position + "px" ;
        box.style.width = size + "px" ;
        box.style.height = size + "px" ;
        
        if (position >= maxPosition){
            clearInterval(intervalId);
        }
        
    },100);
}) ;
