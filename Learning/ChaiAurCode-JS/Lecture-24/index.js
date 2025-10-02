// immediately invoked function expression 

(function chai(){

    //named iife
    console.log("DB CONNECTED");
})();

( function aurcode() {
    console.log(`DB Connected tooo`);
} )( );


( (name) => {
    console.log(`DB Connected tooooo ${name}`);
} )("Deepak")