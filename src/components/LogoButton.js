import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

export default function LogoButton(props) {
  const windowWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      style={[styles.container, { width: windowWidth * 0.9 }]}
      onPress ={props.onPress}
    >
      <Image source={props.src} />
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    marginHorizontal: 20,
  },
});
