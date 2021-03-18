
// const a = {
//     a: 10,
//     b: function (){
//         (()=> {
//             debugger;
//             console.log(this.a);
//         })()
//     }
// }
// a.b()


function test() {
    let a = 10;
    let b = 20;
    let c = 30;
    return function(myVaribale) {
        eval(`console.log(${myVaribale})`)
    }
}

const test2 = test();

test2('c')