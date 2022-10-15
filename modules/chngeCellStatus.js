import { gameOfLife } from './board.js';
import {
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './data-Base.js';

export const changingCellStatus = (board) => {
    const dataDeathItems = deathDataBaseNeighbours(board);
    const dataAliveItems = aliveDataBaseNeighbours(board);
    const board2 = board;
    dataDeathItems.forEach((deathItem) => {
        if (deathItem.countN === 3) {
            board2[deathItem.r][deathItem.c] = 1;
        }
    });
    dataAliveItems.forEach((aliveItem) => {
        if (aliveItem.countN < 2) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
        if (aliveItem.countN > 3) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
    });
    return board2;
};

console.table(changingCellStatus(gameOfLife));
