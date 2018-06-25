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


function setGameElements(){
	switch(gameState){
		case 'started':
				newGameBtn.style.display = 'none';
				pickElem.style.display = 'flex';
				resultsElem.style.display = 'flex';
			break;
		case 'ended':
				newGameBtn.style.display = 'block';
				newGameBtn.innerText = 'Play again';
		case 'notStarted':
		default:
			newGameBtn.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none'
			result.classList.remove ("winner");
			result.innerHTML = 'Let\'s play!';
			playerPickElem.innerHTML = '';
			computerPickElem.innerHTML = '';	
	}
}

function newGame(){
	player.name = prompt('Please, enter your name', 'Player');
	if(player.name){
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		playerName.innerHTML = player.name;
		setGamePoints();
	}
}

function playerPick(playerPick){
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

function getComputerPick(){
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick){
	result.innerHTML = '';
	var winnerIs = 'player';

	if (playerPick == computerPick){
		winnerIs = 'none'; // remis
		result.innerHTML = 'Draw!';
	} else if(
		(computerPick == 'rock' && playerPick == 'scissors') ||
		(computerPick == 'scissors' && playerPick == 'paper') ||
		(computerPick == 'paper' && playerPick == 'rock')){
		winnerIs = 'computer';
	} ;

	if (winnerIs == 'player'){
		result.innerHTML = player.name + ' win!';
		player.score++;
	} else if (winnerIs == 'computer'){
		result.innerHTML = 'Computer win!';
		computer.score++;
	} 
	setGamePoints();
	setGameElements();
	checkWinner();
}

function setGamePoints(){
	playerPoints.innerHTML = player.score;
	computerPoints.innerHTML = computer.score;
}

function checkWinner(){
	if(player.score === 5){
		result.innerHTML = player.name + ' win the game!!!';
		result.classList.add ("winner");
		gameState = 'ended';
		setTimeout(function(){alert(player.name + ' win the game!!!')},300);
		setTimeout(setGameElements,500);


	} else if(computer.score === 5){
		result.innerHTML = 'Computer win the game!!!';
		result.classList.add ("winner");
		gameState = 'ended';
		setTimeout(function(){alert('Computer win the game!!!')},300)
		setTimeout(setGameElements,500);
}
}







