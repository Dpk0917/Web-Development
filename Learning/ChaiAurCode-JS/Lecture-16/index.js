//singleton

const { buildClerkJsScriptAttributes } = require("@clerk/clerk-react/internal");
const { EmailAddress } = require("@clerk/nextjs/server");




// /object interval

// Object.create

const mysim=Symbol("Deepak");
 
const jsUser={
    name: "Histesh",   
    "Filmy Sim ": "Deepak",
    [age]: 18,
    mysim:"Deepak",
    location: "delhi",                                                      
    EmailAddress:"Deepak@gmail.com",
    Lastday: ["monday","Friday"]
}

console.log(jsUser.EmailAddress);
console.log(jsUser["EmailAddress"]);
                      
