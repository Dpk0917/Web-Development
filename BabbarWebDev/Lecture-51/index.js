let mydiv=document.querySelector("#mydiv");

let newElement=document.createElement("h1");
newElement.innerText="This is my heading";
// mydiv.insertAdjacentElement('afterbegin',newElement);
mydiv.insertAdjacentElement('beforebegin',newElement);
// mydiv.insertAdjacentElement('afterend',newElement);
// mydiv.insertAdjacentElement('beforeend',newElement);

let parent=document.querySelector('#mydiv');
let child=document.querySelector('#fpara');

parent.removeChild(child);