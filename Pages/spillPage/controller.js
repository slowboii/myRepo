let cleanVal = model.tamagotchi.cleanlinessValue;
let playVal = model.tamagotchi.entertainedValue;
let hungerVal = model.tamagotchi.hungerValue;


const states = {
    normal: "./Assets/images/Pepe-normal.png",
    neon: "./Assets/images/Pepe-Neon.png",
    redeyes: "./Assets/images/Pepe-redeyes.png",
    lighter: "./Assets/images/Pepe-Lighter.png",
    crying: "./Assets/images/Pepe-crying.png",
};

function updateMood() {
    const bilde = document.getElementById('bilde');
    
    if (hungerVal < 3 || playVal < 3 || cleanVal < 3) {
        bilde.src = states.crying;
        return;
    } else if (hungerVal < 20 || playVal < 20 || cleanVal < 20) {
        bilde.src = states.lighter;
    } else if (hungerVal < 30 || playVal < 30 || cleanVal < 30) {
        bilde.src = states.redeyes;
    } else if (hungerVal < 50 || playVal < 50 || cleanVal < 50) {
        bilde.src = states.crying;
    } else if (hungerVal >= 80 && playVal >= 80 && cleanVal >= 80) {
        bilde.src = states.normal;
    } else {
        bilde.src = states.normal;
    }
}

let gameInterval;

function startGame() {
    let isGameRunning = true;

    gameInterval = setInterval(() => {
        updateMood();
        
        cleanVal = Math.max((0, cleanVal - 0.15).toFixed(1));
        hungerVal = Math.max((0, hungerVal - 0.2).toFixed(1));
        playVal = Math.max((0, playVal - 0.35).toFixed(1));

        model.tamagotchi.cleanlinessValue = cleanVal;
        model.tamagotchi.hungerValue = hungerVal;
        model.tamagotchi.entertainedValue = playVal;

        document.getElementById('cleanVal').innerHTML = cleanVal;
        document.getElementById('hungerVal').innerHTML = hungerVal;
        document.getElementById('playVal').innerHTML = playVal;
        
        if (hungerVal <= 0 || playVal <= 0 || cleanVal <= 0) {
            gameOver();
            clearInterval(gameInterval);
            model.tamagotchi.cleanlinessValue = 100;
            model.tamagotchi.hungerValue = 100;
            model.tamagotchi.entertainedValue = 100;
        }
    }, 50);
}

function gameOver() {
    isGameRunning = false;
    model.app.currentPage = 'gameOverPage';
    updateView();
}

function hunger() {
    hungerVal = Math.min(100, hungerVal + 7);
    model.tamagotchi.hungerValue = hungerVal;
    updateMood();
}

function play() {
    playVal = Math.min(100, playVal + 7);
    model.tamagotchi.entertainedValue = playVal;
    updateMood();
}

function clean() {
    cleanVal = Math.min(100, cleanVal + 7);
    model.tamagotchi.cleanlinessValue = cleanVal;
    updateMood();
}