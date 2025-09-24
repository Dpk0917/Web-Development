// //dates

// let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());

// console.log(typeof mydate);


// let mycreateDate=new Date(2025, 9, 2);
// console.log(mycreateDate.toDateString());
// console.log(mycreateDate.toLocaleString());

// let mycreateDate=new Date("2025-09-08");


// let mytimeStamp = Date.now();
// console.log(mytimeStamp);

// console.log(Math.floor(Date.now()));

let newdate=new Date();
console.log(newdate);
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday: "long",
})