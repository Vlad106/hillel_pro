'use strict';


function g() {
    for (let i = 0; i < arr.length; i++) {
        var a = 1;
        let b = 2;
        const c = 3;

        console.log(a);
        console.log(b); // Available cuz function g an owner for variables a, b and c
        console.log(c);
    }
    console.log(a); // Available but undefined , cuz var depend of function and goes up of function
    console.log(b); // Unavailable (Error) , cuz variables b and c depend of cycle for and work only at this cycle
    console.log(c);
}
g()