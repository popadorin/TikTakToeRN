import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Square} from '../Square';
import {SquareIndex, BoardLine, SquareValue} from '../../types';

interface Props {
  squares: SquareValue[];
  onClick: (squareIndex: SquareIndex) => void;
  winnerLine?: BoardLine;
}

export const Board = ({squares, onClick, winnerLine}: Props) => {
  const renderSquare = (index: SquareIndex) => (
    <Square
      isWinner={!!winnerLine?.includes(index)}
      value={squares[index]}
      onClick={() => onClick(index)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </View>
      <View style={{...styles.row}}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </View>
      <View style={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
