function gameOverView() {
   app.innerHTML = /*html*/ `
      <h1 id="gameOverText">Game Over</h1>
      <button onclick="backToStart()" id="gameOverButton">Return to start</button>
   `;
}

function backToStart() {
   location.reload();
}