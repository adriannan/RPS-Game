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

var newGameBtn = document.getElementById("newGame"),
	pickElem = document.getElementById("playerPickElement"),
	resultsElem = document.getElementById("resultsElement");
var playerPickRock = document.getElementById("playerPickRock"),
	playerPickPaper = document.getElementById("playerPickPaper"),
	playerPickScissors = document.getElementById("playerPickScissors");
var badge = document.querySelectorAll(".badge");
var btnRock = document.getElementById("btnRock"),
	btnPaper = document.getElementById("btnPaper"),
	btnScissors = document.getElementById("btnScissors");

var gameState = 'notStarted', //started //ended
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};
var playerPoints = document.getElementById("playerPoints"),
	playerName = document.getElementById("playerName"),
	computerPoints = document.getElementById("computerPoints");
var playerPickElem = document.getElementById('playerPick'),
	computerPickElem = document.getElementById('computerPick'),
	result = document.getElementById('result');


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
});
playerPickScissors.addEventListener('mouseenter', function() {
		btnScissors.classList.add ("pickElem");
});
playerPickScissors.addEventListener('mouseleave', function() {
		btnScissors.classList.remove ("pickElem");
});

playerPickRock.addEventListener('click', function(){playerPick('rock')});
playerPickPaper.addEventListener('click', function(){playerPick('paper')});
playerPickScissors.addEventListener('click', function(){playerPick('scissors')});


// function setGameElements(){
// 	if(gameState=='started'){
// 		newGameBtn.display = 'none';
// 		pickElem.display = 'flex';
// 		resultsElem.display = 'flex'
// 	} else if(gameState=='ended'){
// 		newGameBtn.innerText = 'Try again';
// 	} else if(gameState=='notStarted') {
// 		newGameBtn.display = 'block';
// 		pickElem.display = 'none';
// 		resultsElem.display = 'none'

// 	}
// }

function setGameElements(){
	switch(gameState){
		case 'started':
				newGameBtn.style.display = 'none';
				pickElem.style.display = 'flex';
				resultsElem.style.display = 'flex';
			break;
		case 'ended':
				newGameBtn.innerText = 'Play again';
			break;
		case 'notStarted':
		default:
			newGameBtn.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none'
	}
}

function newGame(){
	player.name = prompt('Please, enter your name', 'Player');
	if(player.name){
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		playerName.innerHTML = player.name;
		//setGamePoints(); // function hasn't been created yet
	}
}

function playerPick(playerPick){
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

}

function getComputerPick(){
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}














