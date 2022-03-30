import React from 'react';
import CloseSvg from '../../assets/images/close.svg';
import CircleSvg from '../../assets/images/circle.svg';
import {SquareValue} from '../../types';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

interface Props {
  isWinner: boolean;
  value: SquareValue;
  onClick: () => void;
}

export const Square = ({onClick, value, isWinner = false}: Props) => {
  const svgProps = {
    width: 40,
    height: 40,
    strokeWidth: 3,
  };
  const winnerStyles = isWinner
    ? {
        backgroundColor: '#0336FF',
      }
    : {};
  const radius = 35;

  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={{...styles.container, ...winnerStyles}}>
        {value === 'X' && <CloseSvg {...svgProps} />}
        {value === 'O' && (
          <CircleSvg {...svgProps} width={radius} height={radius} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 7,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 20,
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
