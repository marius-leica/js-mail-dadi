// # Extra Bonus

// Creiamo un array chiedendo all’utente quanti elementi dovrà contenere e generando tanti numeri interi casuali quanti sono gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull’input dell’utente?
// Super Extra Bonus: chiedere all’utente anche quanti elementi vanno estratti dal fondo dell’array.

// # Consigli del giorno:

// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”

// creriamo il promt utente che sceglie il numero
const userArray = prompt("Inserisci la lunghezza desiderata");
const userDisplayNumbers = prompt("Quanti ne vuoi vedere?");

// creiamo l'array vuoto
const createArray = [];
createArray.length = parseInt(userArray); // dicciamo che l'array avra la lenght scelta nel prompt

const userChoice = [];
userChoice.value = parseInt(userDisplayNumbers);
console.log("Da mostrare gli ultimi " + userChoice.value);

const persArray = document.getElementById("pers-array");
// console.log(persArray);
console.log("La lunghezza scelta " + createArray.length);
const screnResult = document.getElementById("pers-array");

for (let i = 0; i < createArray.length; i++) {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
  createArray[i] = randomNumber;
  console.log(createArray[i]);
  if (i >= createArray.length - userChoice.value && i < createArray.length) {
    screnResult.innerHTML += createArray[i] + ", ";
  }
}
