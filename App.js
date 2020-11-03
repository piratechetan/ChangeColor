/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomcolor, setrandomcolor] = useState('rgb(32, 0, 126)');

  const changeit = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setrandomcolor(color);
  };

  const resetit = () => {
    let resetColor = 'rgb(7, 7, 8)';

    setrandomcolor(resetColor);
  };

  return (
    <>
      <StatusBar backgroundColor={randomcolor} />
      <View style={[Styles.container, {backgroundColor: `${randomcolor}`}]}>
        <TouchableOpacity onPress={changeit}>
          <Text style={Styles.text}>TAP ME!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetit}>
          <Text style={Styles.text1}>Reset</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 200,
  },
  text: {
    color: 'black',
    backgroundColor: '#fc9d03',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 60,
    fontSize: 20,
  },
  text1: {
    color: 'black',
    backgroundColor: '#fc9d03',
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 60,
    fontSize: 20,
    marginTop: 30,
  },
});
