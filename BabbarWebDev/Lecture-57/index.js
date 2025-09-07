// async function getData(){
//     setTimeout(function(){
//         console.log("Hello Everyone");
//     },3000);
// }

// getData();

// async function getData(){

//     //get request-async
//     let response = await fetch("https://api.github.com/users");
//     let data = await response.json();
//     console.log(response);
// }
// getData();

//scenario 1    
//prepare url/api endpoint ->sync
//awaits //fetch the data ->async
//process the data ->sync

cons myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myRequest = new Request("https://api.github.com/users", {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
});

async function getData(){
    try{
        const response = await fetch(myRequest);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}