import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';

const {width} = Dimensions.get('screen');
const SIZE = width * 0.9;

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.bigQuadran} />
      <View style={style.mediumQuadran} />
      <View style={style.smallQuadran} />
      <View style={style.mover}>
        <View style={style.hours} />
      </View>
      <View style={style.mover}>
        <View style={style.minutes} />
      </View>
      <View style={style.mover}>
        <View style={style.seconds} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mover: {
    position: 'absolute',
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  hours: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '35%',
    marginTop: '15%',
    width: 4,
    borderRadius: 4,
  },
  minutes: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: '45%',
    marginTop: '5%',
    width: 3,
    borderRadius: 3,
  },
  seconds: {
    position: 'absolute',
    backgroundColor: 'rgba(227,71,134,1)',
    height: '50%',
    width: 2,
    borderRadius: 2,
  },
  bigQuadran: {},
  mediumQuadran: {},
  smallQuadran: {},
});

export default App;
