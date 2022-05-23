// creazione array con lista utenti che possono accedere al sito

const usersList = [
  "nigna@gmail.com",
  "pinta@gmail.com",
  "santamaria@gmail.com",
  "raffaello@gmail.com",
  "michelangelo@gmail.com",
  "donatello@gmail.com",
  "davinci@gmail.com",
];

// prompt per inserire email utente corente
const userMail = prompt("Enter your email");
let loggedIn;
// ciclo per verificare se l'utente è nella lista
for (i = 0; i < usersList.length; i++) {
  if (userMail === usersList[i]) {
    // se è nella lista allora loggedIn ha un valore è nn è più undefined
    loggedIn = [i];
  }
}
// stampiamo il risultato
if (loggedIn === undefined) {
  alert("You are not logged in");
} else {
  alert("You are logged in");
}
