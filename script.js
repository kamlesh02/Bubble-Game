var timer=60;
var score=0;
var hitrandom_number=0;

// eventBubbling()-->jispe click karnge wo element par event raise hoga, 
// aur event lister na milne par event element ke parent par listner dhundhega , 
// waha v na milne par  event parent ke parent ke parent par listner dhundhega 

function increaseScore(){
    score+=10;
    document.querySelector("#score-value").textContent=score;
}

function getNewHit(){
    hitrandom_number=Math.floor(Math.random()*10);
    document.querySelector("#hit-value").textContent=hitrandom_number;
}

function makeBubble(){
    var clutter="";
    for(var i=1;i<=75;i++){
        var random_number= Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${random_number}</div>`;
    }
    document.querySelector(".box-bottom").innerHTML=clutter;
}

function runTimer(){
    var timerInterval=setInterval(function(){
        if(timer>0){ 
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector(".box-bottom").innerHTML=`<h1>Game Over!</h1>`;
        }
        
    },1000)
}

document.querySelector(".box-bottom").addEventListener("click",function(details){
    var clickedNumber=Number(details.target.textContent);
    if(clickedNumber===hitrandom_number){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTimer();
getNewHit();