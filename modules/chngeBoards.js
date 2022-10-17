import { changingCellStatus } from './chngeCellStatus.js';

export const boardLoop = (board) => {
    console.clear();
    console.table(board);
    changingCellStatus(board);
};
