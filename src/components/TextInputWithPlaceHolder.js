import { TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function TextInputWithPlaceHolder({placeholder,name,setName}) {
  return (
    <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={name}
    onChangeText={setName}
  />
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
      }
})