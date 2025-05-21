import { hamOne } from "./hamone.js";
import { hamTwo } from "./hamone.js";

let a =10;
let b=20;

console.log(hamTwo(a,b));

const button = document.querySelector('#button');
button.addEventListener("click", hamOne);
console.log(hamOne);
