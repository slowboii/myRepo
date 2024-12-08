function startSpill(){
    let navnInput = document.getElementById('navnInput').value;
    model.input.startPage.navn = navnInput;
    model.tamagotchi.navn = navnInput;
    model.app.currentPage = "spillPage";
    updateView();
    startGame();
}
