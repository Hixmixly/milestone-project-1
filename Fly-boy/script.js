// using this as a ref -https://www.w3schools.com/graphics/game_controllers.asp

const hero = document.getElementById('heroShip')
const gameArea = document.getElementById('canvas')

const hero{
window.addEventListener ('keydown', function (e){
    gameArea.key = e.keyCode;

})

window.addEventListener ('keyup', function (e) {
    gameArea.key = false;
})


myGamePiece.speedX = 0;
myGamePiece.speedY = 0;
if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
}