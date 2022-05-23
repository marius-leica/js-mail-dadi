// Creare un array con un numero a piacere di elementi.

const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const screnResult = document.getElementById("last-five");

// Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
for (let i = 0; i < myArray.length; i++) {
  if (i >= myArray.length - 5 && i < myArray.length) {
    console.log(myArray[i]);
    screnResult.innerHTML += myArray[i] + ", ";
  }
}

// Attenzione #1: quanti elementi minimo dovrà contenere l’array?
// Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene.
