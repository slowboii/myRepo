let cleanVal = model.tamagotchi.cleanlinessValue;
let playVal = model.tamagotchi.entertainedValue;
let hungerVal = model.tamagotchi.hungerValue;
startGame();

const states = {
    normal: "./Assets/images/95c.png",
    content: "./Assets/images/95c-smokedup.png",
    muzzleflash: "./Assets/images/95c-Muzzleflash.png",
    angry: "./Assets/images/95c-gun.png",
    deadly: "./Assets/images/95c-redeyes-gun.png",
    hungry: "./Assets/images/95c-rolling.png",
    happy: "./Assets/images/95c-rolling-smoking.png"
}
//document.getElementById('bilde').src = states.normal;

function updateMood(){
    const bilde = document.getElementById('bilde');
    if(hungerVal < 3 || playVal < 3 || cleanVal < 3){
    bilde.src = states.muzzleflash;
    return;
    }else if(hungerVal < 20 || playVal < 20 || cleanVal < 20){
        bilde.src = states.deadly;
    }else if(hungerVal < 30 || playVal < 30 || cleanVal < 30){
        bilde.src = states.angry;
    }else if(hungerVal < 50 || playVal < 50 || cleanVal < 50){
        bilde.src = states.hungry;
    }else if(hungerVal >= 80 && playVal >= 80 && cleanVal >= 80){
        bilde.src = states.happy;
    }else{
        bilde.src = states.content;
    }
}

let isGameRunning = true;
let gameInterval;

function startGame(){
    gameInterval = setInterval(() => {
        updateMood();
        
        cleanVal = Math.max(0, cleanVal -= 0.15).toFixed(1);
        hungerVal = Math.max(0, hungerVal -= 0.2).toFixed(1);
        playVal = Math.max(0, playVal -= 0.35).toFixed(1);

        document.getElementById('cleanVal').innerHTML = cleanVal;
        document.getElementById('hungerVal').innerHTML = hungerVal;
        document.getElementById('playVal').innerHTML = playVal;
        
        if (hungerVal <= 0 || playVal <= 0 || cleanVal  <= 0) {
            gameOver();
            clearInterval();
        }
    }, 150); 
    
    function gameOver(){
        isGameRunning = false;
        model.app.currentPage = 'gameOverPage';
        model.tamagotchi.cleanlinessValue = 100;
        model.tamagotchi.hungerValue = 100;
        model.tamagotchi.entertainedValueValue = 100;
        updateView();
    }
}
    function hunger(){

    hungerVal = Math.min(101, hungerVal + 7);
    updateMood();
}

function play(){

    playVal = Math.min(101, playVal + 7);
    updateMood();
}
function clean(){

    cleanVal = Math.min(101, cleanVal + 7);
    updateMood();
}

