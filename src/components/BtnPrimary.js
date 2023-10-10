import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';

export default function BtnPrimary({text, onPress}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const buttonWidth = windowWidth * 0.8;
  const buttonHeight = windowHeight * 0.06;
  const fontSize = windowWidth * 0.045;

  return (
    <TouchableOpacity
      style={[styles.container, {width: buttonWidth, height: buttonHeight}]}
      onPress={onPress}>
      <Text style={[styles.text, {fontSize: fontSize}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#246BFD',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical : 20
  },
  text: {
    fontFamily: 'Inter-Bold',
    color: '#ffffff',
    // fontWeight: '700',
  },
});
