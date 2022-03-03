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
let resultWordElement = document.getElementById("result-word");



myBtnTextElement.addEventListener("click", function () {
  /**recpero il valore dell'input text */
  let myBtnTextValue = myTextElement.value;
  if (isWordPalindroma(myBtnTextValue)) {

    resultWordElement.innerHTML = `La parola ${myBtnTextValue} è palindroma`
  } else {

    resultWordElement.innerHTML = `La parola ${myBtnTextValue} non è palindroma`
  }

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


/**

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

//* PRENDO L'ELEMENTO DAL DOM TRAMITE ID
const unserNumberElement = document.getElementById("user-number");
const myBtnNumberElement = document.getElementById("my-btn-number");
const userSelectElement = document.getElementById("userselect");
let resultNumberElement = document.getElementById("result-number");

let cpuNumberRandom = numberRandom(1, 5);
/**
 * Funzione numeri random
 * @param {number} min il valore minimo
 * @param {number} max il valore massimo
 * @returns 
 */
function numberRandom(min, max) {
  /* let numRan = Math.floor(Math.random() * (max - min + 1) + min); */
  /*  console.log("Il numero della funzione random è", numRan); */
  let numRan = 6;
  return numRan;
}


myBtnNumberElement.addEventListener("click", function () {

  let cpuNumberRandom = numberRandom(1, 5)

  let userNumberValue = parseInt(unserNumberElement.value);
  let userSelectValue = userSelectElement.value;
  console.log("L'utente ha scelto", userSelectValue);
  let sum = userNumberValue + cpuNumberRandom;
  console.log(userNumberValue, cpuNumberRandom + " somma " + sum);

  const message = `il numero Cpu è ${cpuNumberRandom} il numero User è ${userNumberValue}
la somma è ${sum} ed è`

  if ((userSelectValue === "even") && isEven(sum)) {
    console.log(isEven(sum));
    console.log("hai Vinto");
    resultNumberElement.innerHTML = `${message} pari
        <h1>Hai Vinto</h1>`
  } else if ((userSelectValue === "even") && isEven(!sum)) {
    console.log(isEven(!sum));
    console.log("hai Perso");
    resultNumberElement.innerHTML = `${message} dispari
    <h1>Hai Perso </h1>`
  } else if ((userSelectValue === "odd") && isEven(sum)) {
    console.log("hai Perso");
    resultNumberElement.innerHTML = `${message} dispari
    <h1>Hai Perso </h1>`
  } else if ((userSelectValue === "odd") && isEven(!sum)) {
    console.log("hai Perso");
    resultNumberElement.innerHTML = `${message} dispari
    <h1>Hai Vinto </h1>`
  }

});






/**
 * Funzione stabilisce se la somma dei due numeri è pari o dispari 
 * @param {*} user //Inserisce il numero Utente
 * @param {*} cpu // numero Cpu
 */
function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
  return false
};