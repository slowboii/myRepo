function updateView(){
    let page = model.app.currentPage;

    if(page === "startPage"){
        startView();
    }else if(page === "spillPage"){
        spillView();
    }else if(page === "gameOverPage"){
        gameOverView();
    }
}