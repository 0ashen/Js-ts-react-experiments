let readline = require('readline');

let rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let lineCounter = 0;
let countDataLines;


rl.on('line', function (data) {
    if (lineCounter === 0) {
        countDataLines = +data;
        // Гуардим пользовательский ввод
        if (typeof countDataLines !== 'number' || isNaN(countDataLines)) {
            console.error(`Количество наборов данных должно быть числом, вы ввели:  «${data}»`);
            process.exit(0);
        }
        lineCounter++;
        return;
    }
    // Гуардим пользовательский ввод
    if (data.length < 1) {
        console.error(`Количество наборов данных должно быть в диапозоне: 1⩽T⩽100`);
        process.exit(0);
    }
    if (lineCounter > 0) {
        checkString(data)
    }
    if (lineCounter >= countDataLines) {
        process.exit(0);
    }
});

function checkString(line) {
    const lettersRepeatCounter = {}

    for (let i = 0; i < line.length; i++) {
        if (!lettersRepeatCounter[line[i]]) lettersRepeatCounter[line[i]] = 0;
        lettersRepeatCounter[line[i]]++;
    }

    const values = Object.values(lettersRepeatCounter);

    if (values.length > 2) {
        console.log('No');
        return;
    }

    // если бы нам нужно было использовать на больших обьемах данных
    // мы могли бы сравниват по ключам массива два символа,
    // но у «every» когнитивная сложность ниже

    if (values.every(el => el === 2)) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

rl.on('close', function () {
    process.exit(0);
});