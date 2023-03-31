// Scope
// Area / Wilayah

//1. Global
const example = "example";

console.log(this.example);

function test() {
    console.log(example)
}
test()
//2. Local
function test2(){
    const name ="global"
    // console.log(example)

    return function test3(){
        const name = "test3"
        return function test4(){
            const name = "test4";
            console.log(name)
        }
    }
}

const resultTest2 = test2();
const resultTest3 = resultTest2();

resultTest3();
//3. Blok

const age = 33;
if (true){
    const age = 44
    if (true)

        console.log("age:   ",age)
}