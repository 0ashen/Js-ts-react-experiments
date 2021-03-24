
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


// function test() {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     return function(myVaribale) {
//         eval(`console.log(${myVaribale})`)
//     }
// }
//
// const test2 = test();
//
// test2('c')

function sum() {
    return [...arguments].reduce((acc,cur) => acc += cur, 0)
}

Number.prototype.add = function() {
    console.log(sum(this, arguments), 'asdf ')
  return sum(this, arguments)
}

function summator() {
    return arguments.length > 0 ? sum(...arguments) : 0
}
console.log(summator(1,2,3), 'summator(1,2,3)')
console.log(summator(1,2,3).add(5), 'add(5)')