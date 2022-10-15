import {
    gameOfLife,
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './modules/data-Base.js';

console.log(aliveDataBaseNeighbours(gameOfLife));
console.log(deathDataBaseNeighbours(gameOfLife));
console.table(gameOfLife);
