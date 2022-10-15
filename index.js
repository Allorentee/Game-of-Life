import {
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './modules/data-Base.js';

import { gameOfLife } from './board.js';

console.log(aliveDataBaseNeighbours(gameOfLife));
console.log(deathDataBaseNeighbours(gameOfLife));
console.table(gameOfLife);
