// using this as a ref -https://www.w3schools.com/graphics/game_controllers.asp

let arena = document.getElementById("canvas");
let block = document.getElementById("obsticle");
let hole = document.getElementById("hole");
const player = document.getElementById("heroShip");
let myScore = document.getElementById("score");
let moveby = 15;


/*score, using Game Score ref from W3*/ 
function canvas () {
    myScore = ('20px', 'Helvetica', 'black')
}

/* ref https://www.youtube.com/watch?v=3SsYZDJdeXk&t=357s*/ 
hole.addEventListener ("animationiteration", () => {
    var random = -((Math.random() * 450) + 150);
    hole.style.top = random + "px";

});



/*player movement*/ 
//38 up, 39 right, 40 down, 37 left
window.addEventListener('load', ()=> {
    player.style.left = 0;
    player.style.top = 0;

});

window.addEventListener('keydown', (e)=> {
    switch (e.key) {
        case 'ArrowLeft':
            player.style.left = parseInt(player.style.left) - moveby + 'px';
            break; 
        case 'ArrowRight':
            player.style.left = parseInt(player.style.left) + moveby + 'px';
            break; 
        case 'ArrowUp':
            player.style.top = parseInt(player.style.top) - moveby + 'px';
            break; 
        case 'ArrowDown':
            player.style.top = parseInt(player.style.top) + moveby + 'px';
            break; 
    }
});






