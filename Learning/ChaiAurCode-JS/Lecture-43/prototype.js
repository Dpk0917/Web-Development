let name="Deepak       ";
console.log(name.length);
// console.log(name.trim().length);
console.log(name.truelength);

let myheros=["shaktiman", "nagraj", "doga", "daredevil"];

let heropower={
    "shaktiman": "fly",
    "nagraj": "snake",
    "doga": "dog",
    "daredevil": "martial arts",

    getShaktimanPower: function(){
        console.log(`Shaktiman's power is ${this.shaktiman}`);
    }
};

Object.prototype.deepak=function(){
    console.log(`Deepak's power`);
}

heropower.deepak();
