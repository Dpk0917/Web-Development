const marvel_heros=["thor","IronMan","Spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const newMarvel=marvel_heros.concat(dc_heros);
console.log(newMarvel);

const all_new_Heros=[...marvel_heros, ...dc_heros];
// console.log(all_new_Heros);

const another_array=[1,2,[3,[4,5]],6];
const real_another_array=another_array.flat(Infinity);

console.log(real_another_array);


console.log(Array.isArray("Deepak"));
console.log(Array.from("Deepak"));

console.log(Array.from({name:"deepak"}));  //Interesting case


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));