//1. Regular/declaration  function
// berlaku hoisting
function sayHello(name){
    console.log("Hello", name);
}
// sayHello();


//2. Anonymous function
function sayHello2(name){
    console.log('Hello', name());
}

sayHello2(function (){
    return "JOHN";
})


//3. Expression function
// fungsi tanpa nama yang di assign ke dalam variabel
const sayEnigma = function (){
    return "Hello, Enigma"
}

console.log(sayEnigma());

//4. Arrow function
const arrowFunction = () => "1"
const hasil = arrowFunction();
console.log(hasil)

const testFn = (fn) => {
    console.log("1")
    console.log("2")
    if(typeof fn == "function")
        fn()
    else
        console.log(fn)
    fn()
    console.log("3")
    console.log("4")
}

// 5. iife

    (function(name) {
        console.log("iife function", name);
    })("enigma");