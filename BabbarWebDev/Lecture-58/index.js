
let name="deepak";
function outer() {
    // let name="babbar"; 
    function inner(){
        // let name="singh";
        console.log(name);
    }
    inner();
}
outer();