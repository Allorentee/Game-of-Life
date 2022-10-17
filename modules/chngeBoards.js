import { changingCellStatus } from './chngeCellStatus.js';

export const boardLoop = (board) => {
    console.table(board);
    board = changingCellStatus(board);
};
