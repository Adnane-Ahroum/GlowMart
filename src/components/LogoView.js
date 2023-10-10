import {TouchableOpacity, StyleSheet, Image} from 'react-native'
import React from 'react'

export default function LogoView (props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={props.src} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // corresponds to the blur radius
    shadowColor: '#DADADA', // corresponds to the shadow color
    shadowOffset: {width: 0, height: 1}, // corresponds to the x and y offset
    shadowOpacity: 0.25, // corresponds to the alpha of the shadow color
    borderRadius: 5,
  },
})
