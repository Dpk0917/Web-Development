// document.getElementById('owl').onclick=function(){
//     alert("owl clicked");
// }

// document.getElementById('images').addEventListener('click', function(e) {
//     console.log("image clicked");
// }, false);

// document.getElementById('owl').addEventListener('click', function(e) {
//     console.log("owl clicked");
// }, false);  //by default false hota hai

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("image clicked");
  },
  true
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    e.stopPropagation();
  },
  true
); //by default false hota hai

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    console.log("google clicked");
    
})

document.querySelector("#images").addEventListener('click', function(e){
    console.log(e.target.tagName);
    let removeIt=e.target.tagName;
    if(removeIt!='IMG') return;
    //removeIt.remove();    
    // removeIt.parentNode.removeChild(removeIt);
})





// type , timestamp , defaultPrevented
// EventTarget, toElement, srcElement, currentTarget
//clientX, clientY, pageX, pageY, screenX, screenY
//altkey, ctrlKey, shiftKey, metaKey

//attachEvent()
// jQuery-on
