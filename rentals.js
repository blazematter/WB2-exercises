
let charter = 15
let vanCost = 250
let people = 38 


let split = Math.ceil(people/charter);

let moneySplit = (split * vanCost) / people;

console.log(moneySplit);
// split shows how many charters there will be