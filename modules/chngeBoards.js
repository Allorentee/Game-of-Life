import { changingCellStatus } from './chngeCellStatus.js';

export const boardLoop = (board) => {
    for (let i = 0; i < 1; i++) {
        console.table(board);
        board = changingCellStatus(board);
        continue;
    }
};
