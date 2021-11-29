function test() {
    const variable1 = 10;
    return setInterval(()=> {
        eval('(() => function test2() {debugger; return variable1})()')
    }, 10000)
}
console.log(test()())