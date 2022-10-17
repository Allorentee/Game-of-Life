import {
    aliveDataBaseNeighbours,
    deathDataBaseNeighbours,
} from './data-Base.js';

describe('testing countingAliveNeighbours', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            aliveDataBaseNeighbours(notArray);
        }).toThrow();
    });
});

describe('testing deathDataBaseNeighbours', () => {
    test('if element entered into function is not an array, it should throw an error', () => {
        const notArray = 'pepe';
        expect(() => {
            deathDataBaseNeighbours(notArray);
        }).toThrow();
    });
});
