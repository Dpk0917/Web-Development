// const tinderUser= new Object();  //singleton 

const { EmailAddress } = require("@clerk/nextjs/server");

const tinderUser={};  //non singleton object

tinderUser.id="125478";
tinderUser.name ="deepak";
tinderUser.isloggedin=false;
// console.log(tinderUser);

const regularname={
    EmailAddress: "deepaksingh@gmail.com",
    fullname:{
        userName:{
            first:"Deepak",
            lastname: "Singh",
        }
    }

}

// console.log(regularname.fullname.userName);

const name1={
    1:"a",
    2:"b",
}

const name2={
    3:"c",
    4:"d",
}

// const name= Object.assign(name1,name2);

// const name=Object.assign({},name1,name2);  //optional parameter(which means it is a good practice)
// console.log(name);

const name={...name1,...name2};
// console.log(name);

const user=[
    {id:1,
    EmailAddress:"haha@gmail.com"
    },
    {id:1,
    EmailAddress:"haha@gmail.com"
    },
    {id:1,
    EmailAddress:"haha@gmail.com"
    },
    {id:1,
    EmailAddress:"haha@gmail.com"
    },
    {id:1,
    EmailAddress:"haha@gmail.com"
    }
]
    
// console.log(user[1].EmailAddress);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));


const course={
    coursename:"js in hindi",
    price:"777",
    courseInstructor:"hitesh",
}

// console.log(course.courseInstructor);   access krne ka 1 tareeka 

// const {courseInstructor}=course; 

const {courseInstructor:deepak}=course;

console.log(deepak);
