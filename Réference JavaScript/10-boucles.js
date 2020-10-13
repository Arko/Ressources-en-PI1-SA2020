// Boucles for
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for

// for ([initialisation]; [condition]; [expression_finale]) {
//     instruction
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}


// Instruction `break`
///////////////////////////////////////////////////////////////////////////////

for (let i = 0; 1 < 10; 1++) {
    if (i == 4) {
        break;
    }
    document.write(i);
}

// 0123


// Instruction `continue`
///////////////////////////////////////////////////////////////////////////////

for (let i = 0; 1 < 10; 1++) {
    if (i == 4) {
        continue;
    }
    document.write(i);
}

// 012356789
