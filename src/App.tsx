import React from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {TikTakToe} from './components/TikTakToe';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./assets/images/logo.png')}
        resizeMode={'contain'}
        style={styles.logo}
      />
      <TikTakToe />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0266',
    position: 'relative',
  },
  logo: {
    width: 16,
    height: 63,
    position: 'absolute',
    left: 20,
    top: 20,
  },
});

export default App;
