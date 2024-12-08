function startView(){
    app.innerHTML = /*html */`
        <div class="startView">
            <div class="startContent">
                <span class="title">Tamagotchi</span>
                <input type="text" id="navnInput" placeholder="      Name">
                <button onclick="startSpill()" class="startKnapp">Start Game</button>
            </div>
        </div>
    `;
}

