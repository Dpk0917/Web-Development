// const coding=['js','rb','py','java','cpp']; 

// const values=coding.forEach((items)=> {
//     console.log(items);
//     return items;
// })

// console.log(values);

const myNum=[1,2,3,4,5,6,7,8,9,10];

// const newNum=myNum.filter((num) => { return num>4}
// )


// const newNum=[];

// myNum.forEach((num)=>{
//     if(num>4){
//         newNum.push(num);
//     }  
// })
// console.log(newNum);


const myTotal=myNum.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval;
},0);

console.log(myTotal);