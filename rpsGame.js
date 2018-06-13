// var newGameBtn = document.getElementById("newGame");
// var playerPickRock = document.getElementById("playerPickRock")
// var badge = document.querySelectorAll(".badge");
// var btnn = document.getElementById("btn");

// newGameBtn.addEventListener('click', newGame);

// // playerPickRock.addEventListener('mouseover', function() {
// // 	.btn
// // });



// for(i=0; i<badge.length; i++){
// 	badge[i].addEventListener("mousedown", function(){
// 		btnn.classList.add ("pickElem");
// 	});
// 	badge[i].addEventListener("mouseup", function(){
// 		btnn.classList.remove ("pickElem");
// 	});
// }



var newGameBtn = document.getElementById("newGame");
var playerPickRock = document.getElementById("playerPickRock")
var playerPickPaper = document.getElementById("playerPickPaper")
var playerPickScissors = document.getElementById("playerPickScissors")
var badge = document.querySelectorAll(".badge");
var btnRock = document.getElementById("btnRock");
var btnPaper = document.getElementById("btnPaper");
var btnScissors = document.getElementById("btnScissors");

newGameBtn.addEventListener('click', newGame);

playerPickRock.addEventListener('mouseenter', function() {
		btnRock.classList.add ("pickElem");
});
playerPickRock.addEventListener('mouseleave', function() {
		btnRock.classList.remove ("pickElem");
});
playerPickPaper.addEventListener('mouseenter', function() {
		btnPaper.classList.add ("pickElem");
});
playerPickPaper.addEventListener('mouseleave', function() {
		btnPaper.classList.remove ("pickElem");
})
;playerPickScissors.addEventListener('mouseenter', function() {
		btnScissors.classList.add ("pickElem");
});
playerPickScissors.addEventListener('mouseleave', function() {
		btnScissors.classList.remove ("pickElem");
});

