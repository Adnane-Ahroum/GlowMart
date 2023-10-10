import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';

const RememberMeButton = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handlePress = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.icon}>
        <Image
          source={rememberMe ? require('../assets/images/checked.png') : require('../assets/images/unchecked.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>Remember Me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical : 20,
    // backgroundColor : "orange",
    width : "100%",
    paddingHorizontal : 20
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight : 500
  },
});

export default RememberMeButton;
