import { View, Text, StyleSheet } from 'react-native';

const TextWithLine = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    line: {
      flex: 1,
      height: 2,
      backgroundColor: '#000000',
      opacity : 0.2
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color : '#000000',
      opacity : 0.5,
      fontFamily : 'Inter-Regular',
      marginHorizontal: 10,
    },
  });

export default TextWithLine;