const responseImages = {
    thinking: "assets/monkey-waiting.webp", 
    correct: "assets/clever.webp",
    wrong: "assets/monkey-tricked-you.webp"
} ;

const riddles = [
    { riddle: "The more I appear the less you see!!", answer:"Darkness" },
    { riddle: "People buy me to eat but never eat me...", answer:"Plate"},
    { riddle: "Easy to open but hard to close!", answer:"Egg"}
] ;

let currentRiddleIndex = 0;

//display the first question when the page loads

window.onload = function() {
    displayRiddle();
} ;

function displayRiddle() {
    const riddleSlot = document.getElementById("riddleSlot") ;
    riddleSlot.innerHTML = riddles[currentRiddleIndex].riddle ;
}

function submitResponse() {
    const userAnswer = document.getElementById("userAnser").value.trim().toLowerCase();
    const correctAnswer = riddles[currentRiddleIndex].answer.toLowerCase();
    const monkeyTalks = document.getElementById("monkeyTalks");

    showImage(); 
    monkeyTalks.innerHTML = "Monkey is thinking..."
    //simulate the processing delay i.e the thinking state
}


