import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Board} from '../Board';
import {calculateWinner} from './calculateWinner';
import {SquareValue, Winner} from '../../types';

export const TikTakToe = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<Winner | null>(null);

  useEffect(() => {
    const winnerValue = calculateWinner(squares);
    if (winnerValue) {
      setWinner(winnerValue);
    }
  }, [squares]);

  const handleClick = (squareIndex: number) => {
    const tempSquares = [...squares];
    if (squares[squareIndex] || winner) {
      return;
    }
    tempSquares[squareIndex] = xIsNext ? 'X' : 'O';
    setSquares(tempSquares);
    setXIsNext(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <Board
        winnerLine={winner?.line}
        squares={squares}
        onClick={squareIndex => handleClick(squareIndex)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
