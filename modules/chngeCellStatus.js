import {
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './data-Base.js';

export const changingCellStatus = (board, bdv, bdm) => {
    bdm = deathDataBaseNeighbours(board);
    bdv = aliveDataBaseNeighbours(board);
    const board2 = board;
    bdm.forEach((deathItem) => {
        if (deathItem.countN === 3) {
            board2[deathItem.r][deathItem.c] = 1;
        }
    });
    bdv.forEach((aliveItem) => {
        if (aliveItem.countN < 2) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
        if (aliveItem.countN > 3) {
            board2[aliveItem.r][aliveItem.c] = 0;
        }
    });
    return board2;
};
