window.addEventListener('load', init);


//Global Variables

let time = 7;
let score = 0;
let isPlaying;

const inputWord = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Array of Words..

const words = [
'startup', 'entrepreneur', 'operations',
'marketing', 'finance', 'venture', 'seed',
'product', 'mvp', 'engineering', 'sales', 'market',
'accelerator', 'technology', 'branding', 'founder','pivot','traction',
'investor', 'capital', 'silicon', 'funding'];


//Initalize Game Function
function init(){
	showWord(words);
	inputWord.addEventListener('input', startMatch);
	setInterval(counter, 1000);
	setInterval(checkState, 50);
}



function startMatch(){

	if(matcher()) {

		isPlaying = true;
		time = time + 1;
		showWord(words);
		inputWord.value = '';
		score++;

	}

	if(score === -1) {

		scoreDisplay.innerHTML = 0;

	} else

	{

		scoreDisplay.innerHTML = score;
	}

}


function matcher() {

	if(inputWord.value === currentWord.innerHTML)
			{
				message.innerHTML = 'Correct!';
				return true;			
			} else
			{
				message.innerHTML = 'false';
				return false;
			}


}



//Pick & Show Random Word
function showWord(words) {
	//generates random index
	const randIndex = Math.floor(Math.random() * words.length);
	//output random word
	currentWord.innerHTML = words[randIndex];

}


function counter(){
	//Assure that time is not run out
	if (time > 0) {
		time--;
	} else if (time === 0) {
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;

}


function checkState() {

	if(!isPlaying && time === 0) {
			message.innerHTML = 'Game Over';
			score = -1;
	}



}


















