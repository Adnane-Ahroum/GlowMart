import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {auth} from '../../firebaseConfig';
import {useNavigation} from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();
  console.log(auth.currentUser.displayName);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{auth.currentUser.displayName}</Text>
      <Text style={styles.email}>{auth.currentUser.email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          auth.signOut();
          navigation.navigate('Signin');
        }}>
        <FontAwesomeIcon icon={faSignOutAlt} size={24} color="#fff" />
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    marginHorizontal: 30,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
  },
});
