// //code 1
// const t1=performance.now();

// for(let i=0;i<100;i++){
//     let para=document.createElement("p");
//     para.innerText="This is para "+i;
//     document.body.appendChild(para);
// }

// const t2=performance.now();
// console.log("Time taken to execute the loop is "+(t2-t1));


// //code 2
// const t3=performance.now();
// let mydiv=document.createElement("div");

// for(let i=0;i<=100;i++){
//     let para=document.createElement("p");
//     para.innerText="This is para "+i;
//     mydiv.appendChild(para);
// }

// document.body.appendChild(mydiv);
// const t4=performance.now();
// console.log("Time taken to execute the loop is "+(t4-t3));


//bnestcode
let fragment=document.createDocumentFragment();

for(let i=0;i<=10000;i++){
    let para=document.createElement("p");
    para.innerText="This is para "+i;

    //no reflow and repaint
    fragment.appendChild(para);
}

//only one reflow and repaint
document.body.appendChild(fragment);