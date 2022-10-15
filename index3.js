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
                    (array[i - 1][j] === 0 && array[i + 1][j] === 0) ||
                    (array[i][j - 1] === 0 && array[i][j + 1] === 0)
                ) {
                    array[i][j] = 0;
                }
            }
        }
    }
    return array;
};

console.log(killTheCell(gameOfLife));
/*gameOfLife.forEach = (animal) => {
    if ((array[animal] = 0)) {
        [animal] = 1;
    }
};
console.log(killTheCell[i]);*/

/*const arr1 = [0, 0, 0];
const arr2 = [0, 1, 0];
function compare(arr1, arr2) {
    if (!arr1 || !arr2) return;
    let result;
    arr1.forEach((cell1) =>
        arr2.forEach((cell2) => {
            if (cell1 !== cell2) {
                result = false;
            } else {
                result = true;
            }
        })
    );
    return result;
}
console.log(arr1, arr2);
compare(arr1, arr2);*/
