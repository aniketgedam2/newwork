
const p = 2000;
const time = 5;
const rate = .08;
const n = 12;

const amount = p*(Math.pow((1+(rate/n)),(n*time)));
const intrest = amount - p;
console.log(intrest);
