const gameOfLife = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

function AliveItems(r, c, countN) {
    this.r = r;
    this.c = c;
    this.countN = countN;
}

const countingAliveNeightbours = (array) => {
    let arrayAliveObjects = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === 1) {
                let count = 0;
                if (array[i - 1][j] === 1) count++;
                if (array[i + 1][j] === 1) count++;
                if (array[i][j - 1] === 1) count++;
                if (array[i][j + 1] === 1) count++;
                if (array[i - 1][j - 1] === 1) count++;
                arrayAliveObjects.push(new AliveItems(i, j, count));
            }
        }
    }
    return arrayAliveObjects;
};

console.log(countingAliveNeightbours(gameOfLife));

// if (array[i][j] === 0) {
//     let count = 0;
//     if (array[i - 1][j] === 1) count++;
//     if (array[i + 1][j] === 1) count++;
//     if (array[i][j - 1] === 1) count++;
//     if (array[i][j + 1] === 1) count++;
//     if (array[i - 1][j - 1] === 1) count++;
//     if (array[i - 1][j + 1] === 1) count++;
//     if (array[i + 1][j - 1] === 1) count++;
//     if (array[i + 1][j + 1] === 1) count++;
//     arrayDeathObjets.push(new AliveItems(i, j, count));
// }
