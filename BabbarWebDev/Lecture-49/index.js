// console.log('Deepak');

// let obj={
//     age: 25,
//     wt: 70,
//     ht: 175
// };

// console.log(obj);

// obj.nationality='Indian';
// console.log(obj);

// let src={
//     age: 25,
//     wt: 70,
//     ht: 175
// }

// let data={
//     ...src
// }

// // let data=src; // Shallow copy

// src.age=30;

// console.log(src);
// console.log(data);




// let src={
//     age: 25,
//     wt: 70,
//     ht: 175
// }

// let src2={
//     name: "John"
// }
// let dest=Object.assign({}, src, src2);

// src.age=30;
// console.log(src);
// console.log(dest);





let dest2={};


let src={
    age: 25,
    wt: 70,
    ht: 175
}
// clonning
for(let key in src){
    dest2[key]=src[key];
}
src.age=30;
console.log(src);
console.log(dest2);