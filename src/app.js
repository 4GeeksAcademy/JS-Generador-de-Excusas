/* eslint-disable*/
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Declaramos los arrays:
let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  //generamos un numero aleatorio y lo multiplicamos por la longitud de cada array
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  //creamos una variable cuyo valor es la concatenacion de los numeros generados en las anteriores variables
  let excusa =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  console.log(excusa);

  //seleccionamos el ID del párrafo que deseamos cambiar
  let texto = document.getElementById("excuse");
  texto.textContent = excusa;
};
