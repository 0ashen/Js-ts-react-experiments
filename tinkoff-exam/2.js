let readline = require('readline');

let rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

let lineCounter = 0;
let lakeP;
let villageCount;


rl.on('line', function (data) {
    if (lineCounter === 0) {
        const lakePAndVillageCount = data.split(' ').map(el => Number(el));
        lakeP = lakePAndVillageCount[0];
        villageCount = lakePAndVillageCount[1];

        // Гуардим пользовательский ввод
        if (lakePAndVillageCount.length !== 2) {
            console.error(`Количество данных отличается от требуемого, вы ввели: «${data}»`);
            process.exit(0);
        }
        if (!lakePAndVillageCount.every(el => typeof (el) === 'number' && !isNaN(el))) {
            console.error(`Данные должны быть числами, вы ввели: «${data}»`);
            process.exit(0);
        }
        if (!(lakeP >= 2 && lakeP <= Math.pow(10, 6) && villageCount >= 2 && villageCount <= 2 * Math.pow(10, 5))) {
            console.error(`Данные должны быть в диапозоне: 2⩽K⩽10^6, 2⩽N⩽2⋅10^5`);
            process.exit(0);
        }

        lineCounter++;
        return;
    }

    if (lineCounter === 1) {
        const distanceBetweenVillages = data.split(' ').map(el => Number(el));

        // Гуардим пользовательский ввод
        if (distanceBetweenVillages.length !== villageCount) {
            console.error(`
                Количество деревень отличается,
                от фактически переданных расстояний между
                ними: «${distanceBetweenVillages}» и «${villageCount}»
                `);
            process.exit(0);
        }
        if (!distanceBetweenVillages.every(el => typeof (el) === 'number' && !isNaN(el))) {
            console.error(`Данные должны быть числами, вы ввели: «${data}»`);
            process.exit(0);
        }

        console.log(lakeP - getMaxDistanceBetweenVillages(distanceBetweenVillages, lakeP));
        process.exit(0);
    }
});

function getMaxDistanceBetweenVillages(arr, P) {
    let result = 0;

    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] - arr[i - 1] > result) {
            result = arr[i] - arr[i - 1];
        }
    }
    const distanceBetweenFirstAndLastVillage = arr[0] + (P - arr[arr.length - 1]);
    if (distanceBetweenFirstAndLastVillage > result) {
        result = distanceBetweenFirstAndLastVillage;
    }

    return result;
}


rl.on('close', function () {
    process.exit(0);
});