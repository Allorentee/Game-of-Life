const gameOfLife = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

const killTheCell = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === 1) {
                if (
                    array[i - 1][j] === 0 &&
                    array[i + 1][j] === 0 &&
                    array[i][j - 1] === 0 &&
                    array[i][j + 1] === 0
                ) {
                    array[i][j] = 0;
                }
            }
        }
    }
    return array;
};

// const cellAlive = (array2) => {
//     for (let i = 0; i < array2.length; i++) {
//         for (let j = 0; j < array2[i].length; j++) {
//             if (array2[i][j] === 1) {
//                 if (
//                     (array2[i - 1][j] === 1 && array2[i + 1][j] === 1)(
//                         array2[i][j - 1] === 1 && array2[i][j + 1] === 1
//                     )
//                 ) {
//                     array2[i][j] = 1;
//                 }
//             }
//         }
//     }
//     return array2;
// };
//console.log(killTheCell(gameOfLife));
console.log(killTheCell(gameOfLife));
/*gameOfLife.forEach = (animal) => {
    if ((array[animal] = 0)) {
        [animal] = 1;
    }
};*/
