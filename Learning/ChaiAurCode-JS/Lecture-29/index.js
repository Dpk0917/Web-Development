const arr=[1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting="hello world";
// for (const great of greeting) {
//     console.log(`Each characters are : ${great}`);
// }

//map

//unique values
//no duplicates will be there 

// const map=new Map();
// map.set('IN',"India");
// map.set('USA',"United states of america");
// map.set('Fr',"france");
// map.set('IN',"India");

// console.log(map);

// for (const [key,values] of map) {
    // console.log(key ,'->',values);
// }

// const myObject={
//     game1:'NFS',
//     game2:'Spiderman'
// }

// for(const [key,value] of myObject){
//     console.log(key ,'->',values);
// }

const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`
//     );
// }

const progamming=['js','rb','py','java','cpp'];

for(const key in progamming){
    // console.log(progamming[key]);
}

// const map=new Map();
// map.set('IN',"India");
// map.set('USA',"United states of america");
// map.set('Fr',"france");
// map.set('IN',"India");

// for (const key in map) {
//     console.log(map); //not work cuz it is not itratable 
    
// }


const coding=['js','rb','py','java','cpp'];

// coding.forEach( function(index) {
//     console.log(index);
// })

// coding.forEach((items) => {
//     console.log(items)
// })

// function printall(items){
//     console.log(items);
// }

// coding.forEach(printall);

const name = [
    {
        languagename: 'Cpp',
        languagesymbol: 'C++'
    },
    {
        languagename: 'JavaScript',
        languagesymbol: 'JS'
    },
    {
        languagename: 'Python',
        languagesymbol: 'Py'
    }
];

name.forEach((items) => {
    console.log(items.languagename);
})