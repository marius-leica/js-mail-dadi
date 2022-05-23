// creiamo le const che contengono i nostri 6 numneri

const randomUserNumber1 = Math.floor(Math.random() * 6) + 1;
const randomUserNumber2 = Math.floor(Math.random() * 6) + 1;
const randomUserNumber3 = Math.floor(Math.random() * 6) + 1;
const randomUserNumber4 = Math.floor(Math.random() * 6) + 1;
const randomUserNumber5 = Math.floor(Math.random() * 6) + 1;
const randomUserNumber6 = Math.floor(Math.random() * 6) + 1;

// creiamo l'array che contengono i nostri 6 numeri
const userNumbers = [
  randomUserNumber1,
  randomUserNumber2,
  randomUserNumber3,
  randomUserNumber4,
  randomUserNumber5,
  randomUserNumber6,
];

// constanti che ci portano agli elementi dove verrano poi inseriti in HTML
const userResults = document.getElementById("user-numbers");
const userTotal = document.getElementById("user-score");

// funzione che stampa i numeri dell'utente
for (let i = 0; i < userNumbers.length; i++) {
  console.log(userNumbers[i]);
  userResults.innerHTML += "<br>" + userNumbers[i] + " " + "<br>";
}
// totale e stampa
let userScore =
  userNumbers[0] +
  userNumbers[1] +
  userNumbers[2] +
  userNumbers[3] +
  userNumbers[4] +
  userNumbers[5];
console.log(userScore);
userTotal.innerHTML += ": " + userScore;

// facciamo la stessa cosa con i numeri del pc

const randomAiNumber1 = Math.floor(Math.random() * 6) + 1;
const randomAiNumber2 = Math.floor(Math.random() * 6) + 1;
const randomAiNumber3 = Math.floor(Math.random() * 6) + 1;
const randomAiNumber4 = Math.floor(Math.random() * 6) + 1;
const randomAiNumber5 = Math.floor(Math.random() * 6) + 1;
const randomAiNumber6 = Math.floor(Math.random() * 6) + 1;

const aiNumbers = [
  randomAiNumber1,
  randomAiNumber2,
  randomAiNumber3,
  randomAiNumber4,
  randomAiNumber5,
  randomAiNumber6,
];

const aiResults = document.getElementById("ai-numbers");
const aiTotal = document.getElementById("ai-score");

for (let i = 0; i < aiNumbers.length; i++) {
  console.log(aiNumbers[i]);
  aiResults.innerHTML += "<br>" + aiNumbers[i] + " " + "<br>";
}
let aiScore =
  aiNumbers[0] +
  aiNumbers[1] +
  aiNumbers[2] +
  aiNumbers[3] +
  aiNumbers[4] +
  aiNumbers[5];
console.log(aiScore);
aiTotal.innerHTML += ": " + aiScore;

// confronto dei resultati e allert vincitore

if (userScore > aiScore) {
  alert("Hai vinto!");
} else if (userScore < aiScore) {
  alert("Hai perso!");
} else {
  alert("Pareggio!");
}
