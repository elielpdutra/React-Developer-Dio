// for(let i = 1; i < 10; i++) {
//     console.log('valor', i);
// }

// let x = 1;
// while(x <= 10) {
//     console.log(`${x} x 5 = ${x * 5}`);
//     x++;
// }

// const valores = [1,2,3,4,5,6,7,8,9,10];

// valores.forEach((value) => {
//     console.log(`${value} x 5 = ${value * 5}`);
// });

const valores = [1,2,3,4,5,6,7,8,9,10];

const resultado = valores.map((value) => {
    return value * 5;
});

console.log(resultado);