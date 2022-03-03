/**
 * Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */


//* PRENDO L'ELEMENTO DAL DOM TRAMITE ID
const myTextElement = document.getElementById("my-text");
const myBtnTextElement = document.getElementById("my-btn-text");


myBtnTextElement.addEventListener("click", function () {
  /**recpero il valore dell'input text */
  let myBtnTextValue = myTextElement.value;
  console.log(myBtnTextValue);

  myBtnTextValue.split("");
  console.log(myBtnTextValue.split(""));

  /*creo una array dove inserisco la parola inserita nell'input*/
  const textArray = [];

  textArray.reverse();
  console.log(myBtnTextValue.split("").reverse().join("").toString());

});
