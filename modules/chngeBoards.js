import { gameOfLife } from './board.js';
import { changingCellStatus } from './chngeCellStatus.js';
import {
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './data-Base.js';

export const boardLoop = (board) => {
    for (let i = 0; i < 10; i++) {
        let centinel = true;

        if (centinel) {
            const board3 = changingCellStatus(board);
            let dataBaseAlive = aliveDataBaseNeighbours(board3);
            let dataBaseDeath = deathDataBaseNeighbours(board3);
            changingCellStatus(board3, dataBaseAlive, dataBaseDeath);
            centinel = false;
            console.table(
                changingCellStatus(board3, dataBaseAlive, dataBaseDeath)
            );
        }
        if (!centinel) {
            const board2 = changingCellStatus(board);
            let dataBaseAlive = aliveDataBaseNeighbours(board2);
            let dataBaseDeath = deathDataBaseNeighbours(board2);
            changingCellStatus(board2, dataBaseAlive, dataBaseDeath);
            centinel = true;
            console.table(
                changingCellStatus(board2, dataBaseAlive, dataBaseDeath)
            );
            setTimeout(
                console.table(
                    changingCellStatus(board2, dataBaseAlive, dataBaseDeath)
                ),
                500
            );
        }
    }
};

boardLoop(gameOfLife);
