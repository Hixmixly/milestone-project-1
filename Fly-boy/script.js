// using this as a ref -https://www.w3schools.com/graphics/game_controllers.asp

var block = document.getElementById("obsticle");
var hole = document.getElementById("hole");

hole.addEventListener ("animationiteration", () => {
    var random = -((Math.random() * 450) + 150);
    hole.style.top = random + "px";

});
