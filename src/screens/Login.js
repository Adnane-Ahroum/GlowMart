import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import {auth} from '../../firebaseConfig';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        navigation.navigate('BottomTabs');
      }
    });
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/user.png')}
        style={styles.headerImage}
      />
      <Text style={styles.text}>Login to Your Account</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          {/* <MaterialIcons name="email" size={24} color="black" /> */}
          <Image
            source={require('../assets/images/email.png')}
            style={{
              position: 'absolute',
              transform: [{translateY: 15}, {translateX: -30}],
            }}
          />
          <TextInput
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            style={{
              width: '100%',
              borderBottomColor: '#000',
              borderBottomWidth: 1,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          {/* <MaterialIcons name="email" size={24} color="black" /> */}
          <Image
            source={require('../assets/images/lock.png')}
            style={{
              position: 'absolute',
              transform: [{translateY: 15}, {translateX: -30}],
            }}
          />
          <TextInput
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            style={{
              width: '100%',
              borderBottomColor: '#000',
              borderBottomWidth: 1,
            }}
          />
        </View>

        <View>
          <Pressable
            style={{
              width: 300,
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#226bfd',
              borderRadius: 90,
            }}
            onPress={() => {
              handleLogin();
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                padding: 10,
                fontFamily: 'Inter-Bold',
              }}>
              Log in
            </Text>
          </Pressable>
        </View>
        {/* <View style={styles.alreadyAccountView}>
          <Text style={styles.bottomText}>Don’t have account? </Text>
        </View> */}
        <View>
          <Pressable
            style={{
              width: 300,
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#226bfd',
              borderRadius: 90,
            }}
            onPress={() => {
              props.navigation.navigate('Signup');
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                padding: 10,
                fontFamily: 'Inter-Bold',
              }}>
              Sign up
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerImage: {
    width: width * 0.4,
    height: width * 0.4,
    marginTop: width * 0.08,
  },
  text: {
    fontFamily: 'ReemKufiInk-Regular',
    fontStyle: 'normal',
    fontSize: width * 0.08,
    lineHeight: width * 0.1,
    color: '#000000',
    textShadowOffset: {width: 0, height: width * 0.01},
    textShadowRadius: width * 0.01,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    marginTop: width * 0.08,
  },
  alreadyAccountView: {
    width: width * 0.8,
    height: width * 0.15,
    justifyContent: 'center',
    padding: width * 0.03,
    flexDirection: 'row',
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  socialSignupContainer: {
    flexDirection: 'row',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexGrow: 1,
    paddingBottom: width * 0.1,
  },
});

export default Login;
