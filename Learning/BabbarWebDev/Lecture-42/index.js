let names = ["Deepak", "Ankit", "Sahil", "Aman", "Rohit"];
console.log(names);

let name = `Deepak
Ankit the great
Sahil the great`;
console.log(name);

let haha = new String("Deepak"); // String object
console.log(haha);

let opt1 = "Deepak";
let opt2 = "Sim";

let finalans = `${opt1} and ${opt2}`;
console.log(finalans);

console.log(opt1.length);
console.log(opt1.toUpperCase());
console.log(opt1.toLowerCase());

let ans = opt1.concat(" ", opt2);
console.log(ans);

let str = "Babbbar";
console.log(str.indexOf("b"));       // case-sensitive search
console.log(str.lastIndexOf("b"));   // finds last 'b'

console.log(str.substring(4, 7));    // bar

let str2 = "hello ji \"kaise\" ho sare";
console.log(str2);  
console.log(str2.replace("ji", "bhai"));

// Joining words with colon
console.log(str2.split(" ").join(":"));

// Splitting into words
console.log(str2.split(" "));
console.log(str2.split(" ")[0]); // first word

console.log(str2.split(" ")[1]); // second word