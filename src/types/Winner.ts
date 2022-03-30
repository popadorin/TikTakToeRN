import {SquareValue} from './SquareValue';
import {BoardLine} from './BoardLine';

export interface Winner {
  line: BoardLine;
  type: SquareValue;
}
