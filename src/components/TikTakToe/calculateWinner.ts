import {SquareIndex, BoardLine, SquareValue, Winner} from '../../types';

export function calculateWinner(squares: SquareValue[]): Winner | null {
  const lines: BoardLine[] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i: SquareIndex = 0; i < lines.length; i++) {
    const line = lines[i];
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {type: squares[a], line};
    }
  }
  return null;
}
