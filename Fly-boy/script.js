// using this as a ref -https://www.w3schools.com/graphics/game_controllers.asp

let block = document.getElementById("obsticle");
let hole = document.getElementById("hole");
const player = document.getElementById("heroShip");
let moveby = 10;




hole.addEventListener ("animationiteration", () => {
    var random = -((Math.random() * 450) + 150);
    hole.style.top = random + "px";

});

/*setInterval (function(){
    let pcTop = 
    parseInt(window.getComputedStyle(pc).getPropertyValue("top"));
    pc.style.top = (pcTop + 3) + "px"
},10);*/


window.addEventListener('load', ()=> {
    player.style.left = 0;
    player.style.top = 0;

});

window.addEventListener('keyup', (e)=> {
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










