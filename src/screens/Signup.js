import React from 'react';
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
} from 'react-native';
import LogoInput from '../components/LogoInput';
import TextWithLine from '../components/TextWithLine';
import BtnPrimary from '../components/BtnPrimary';
import LogoView from '../components/LogoView';
import RememberMeButton from '../components/RememberMeButton';
import {auth} from '../../firebaseConfig';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

function Signup(props) {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passtoconfirm, setPasstoconfirm] = React.useState('');
  const [name, setName] = React.useState('');
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async userCredentials => {
        const user = userCredentials.user;
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        console.log('Signed up with:', user.email);
      })
      .catch(error => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/user.png')}
        style={styles.headerImage}
      />
      <Text style={styles.text}>Create a new account</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          {/* <MaterialIcons name="email" size={24} color="black" /> */}
          <Image
            source={require('../assets/images/eye-open.png')}
            style={{
              position: 'absolute',
              transform: [{translateY: 15}, {translateX: -30}],
            }}
          />
          <TextInput
            placeholder="Full name"
            onChangeText={text => setName(text)}
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
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
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
            placeholder="Confirm password"
            secureTextEntry={true}
            onChangeText={text => setPasstoconfirm(text)}
            style={{
              width: '100%',
              borderBottomColor: '#000',
              borderBottomWidth: 1,
            }}
          />
        </View>
        {passtoconfirm !== password ? (
          <Text style={{color: 'red'}}>Password does not match</Text>
        ) : null}
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
              handleSignup();
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

export default Signup;
