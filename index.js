import { gameOfCells } from './modules/board.js';
import { boardLoop } from './modules/chngeBoards.js';

setInterval(() => {
    boardLoop(gameOfCells);
}, 1000);
