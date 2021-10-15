module.exports = function(obj) {
    const calc = {
        value: null,
        execute() {
            return this.value;
        }
    }
    const objEnt = Object.entries(obj);
    for(let i = 0; i < objEnt.length; i++) {
        calc[objEnt[i][0]] = (...arguments) => {
            if(calc.value === null) {
                calc.value = objEnt[i][1](...arguments);
            } else {
                calc.value = objEnt[i][1](calc.value, ...arguments);
            }
            return calc;
        }
    }

    return calc;
}