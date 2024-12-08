function spillView(){
    app.innerHTML = /*html*/`
        <div id="mainDiv">
            <span class="tamagotchiNavn">${model.tamagotchi.navn}</span>
            <div class="sliders">
                <div class="slider">Cleanliness: <span id="cleanVal">${model.tamagotchi.cleanlinessValue}</span>%</div>
                <div class="slider">Playfulness: <span id="playVal">${model.tamagotchi.entertainedValue}</span>%</div>
                <div class="slider">Hunger: <span id="hungerVal">${model.tamagotchi.hungerValue}</span> %</div>
            </div>
            <div id="handlingsBoks">
            <button onclick="clean()" class="knapp">Clean</button>
            <button onclick="play()" class="knapp">Play</button>
            <button onclick="hunger()" class="knapp">Feed</button>
            </div>
            <div>
                <img id="bilde" class="tamagotchiBilde" src="./Assets/images/95c.png">
            </div>
        </div>
    `;
}