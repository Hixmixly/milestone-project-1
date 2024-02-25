// using this as a ref -https://www.w3schools.com/graphics/game_controllers.asp

let arena = document.getElementById("canvas");
let block = document.getElementById("obsticle");
let hole = document.getElementById("hole");
const player = document.getElementById("heroShip");
let flying = 0;


hole.addEventListener ("animationiteration", () => {
    var random = -((Math.random() * 450) + 150);
    hole.style.top = random + "px";

});

setInterval (function(){
    let playerTop = 
    parseInt(window.getComputedStyle(player).getPropertyValue("top"));
   if (jumpling == 0) {
      player.style.top = (playerTop + 3) + "px";
   }
  
}, 10);

function fly (){
    flying = 1;
    let flyCount = 0;
    let flyInterval = setInterval(function(){
        let playerTop =
        parseInt(window.getComputedStyle(player).getPropertyValue("top"));
       if((playerTop > 5)&&(counter<15)){
            player.style.top = (playerTop -6) + "px";
        }
       
        if(flyCount > 15){
            clearInterval(flyInterval);
            flying=0;
            flyCount=0;
        }
    flyCount ++;
    }, 10);
}



addEventListener ('keydown', ({keyCode}) => {
        switch (keyCode) {
            case 37:
                console.log('left')
                break

            case 38:
                console.log('up')
                break  
                
            case 39:
                 console.log('right')
                break
                    
            case 40:
                console.log('down')
                break
        }
})
//38 up, 39 right, 40 down, 37 left

document.addEventListener("keyDown", e => {
    
})










