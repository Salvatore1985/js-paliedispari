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
const resultWordElement = document.getElementById("result-word");



myBtnTextElement.addEventListener("click", function () {
  /**recpero il valore dell'input text */
  let myBtnTextValue = myTextElement.value;

  if (isWordPalindroma(myBtnTextValue)) {
    resultWordElement += `La parola ${myBtnTextValue} è palindroma`
  }
  resultWordElement += `La parola ${myBtnTextValue} non è palindroma`

});
/**
 * Funzione isWordPalindroma
 * @param {*} word //Parola inserita 
 * @returns //true
 */
function isWordPalindroma(word) {
  word.split("");
  /*creo una array dove inserisco la parola inserita nell'input*/
  const wordArray = [];

  wordArray.reverse();
  console.log(word.split("").reverse().join("").toString());
  if (word === (word.split("").reverse().join("").toString())) {

    return true
  }
  return false
}


