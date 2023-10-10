import {View, TextInput, Image, StyleSheet,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'

export default function LogoInput (props) {
  const {src, placeholder, imageRight,secureEntry} = props
  const [imageFlag,setImageFlag] = useState(secureEntry)
  const src2 = imageFlag
    ? require('../assets/images/eye-close.png')
    : require('../assets/images/eye-open.png')

  return (
    <View style={styles.container}>
      <Image source={src} style={{marginRight: 10, width: 24, height: 24}} />
      <TextInput
        style={{marginLeft: 10, width: 200}}
        placeholder={placeholder}
        secureTextEntry={imageFlag}
      />
      {imageRight && (
        <TouchableOpacity onPress={()=>imageFlag ? setImageFlag(false):setImageFlag(true)}>
          <Image
            source={src2}
            style={{marginLeft: 10, width: 24, height: 24}}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    //backgroundColor: 'orange',
    width: 280,
    height: 50,
    alignItems: 'center',
    // paddingHorizontal: 1,
    borderBottomColor: '#969595',
    borderBottomWidth: 1,
  },
})
