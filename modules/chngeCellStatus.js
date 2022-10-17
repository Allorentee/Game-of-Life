import {
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './data-Base.js';

export const changingCellStatus = (board) => {
    let bdm = deathDataBaseNeighbours(board);
    let bdv = aliveDataBaseNeighbours(board);
    const board2 = board;
    bdm.forEach((deathItem) => {
        if (deathItem.countN === 3) {
            board2[deathItem.r][deathItem.c] = '💥';
        }
    });
    bdv.forEach((aliveItem) => {
        if (aliveItem.countN < 2) board2[aliveItem.r][aliveItem.c] = '🌕';
        if (aliveItem.countN > 3) board2[aliveItem.r][aliveItem.c] = '🌕';
    });
    return board2;
};
