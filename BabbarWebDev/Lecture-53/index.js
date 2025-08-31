// function changeText() {
//     let paragraph = document.querySelector('p');
//     paragraph.textContent = 'Hello JavaScript';
// }

// let paragraph = document.querySelector('p');
// paragraph.addEventListener('click', changeText); 

// let anchortag = document.getElementById('anchor');
// anchortag.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchortag.textContent = 'Clicked';
// });

let paragraphs = document.querySelectorAll('p'); // gives NodeList of all <p>

function alertText(event) {
    alert("You are on " + event.target.textContent);
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('click', alertText);
}
