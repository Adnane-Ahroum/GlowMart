import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import LogoButton from '../components/LogoButton'
import TextWithLine from '../components/TextWithLine'
import BtnPrimary from '../components/BtnPrimary'
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from 'react-native-google-signin'

// GoogleSignin.configure({
//   webClientId: '976472020197-r1jbjhbohp1un8dt085sub1elb2h5gtj.apps.googleusercontent.com',
// });



const window = Dimensions.get('window')
const screen = Dimensions.get('screen')



 const signInViaGoogle = async () => {
  // // Check if your device supports Google Play
  // await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // // Get the users ID token
  // const { idToken } = await GoogleSignin.signIn();

  // // Create a Google credential with the token
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // // Sign-in the user with the credential
  // return auth().signInWithCredential(googleCredential);
}


export default function SocialLogin({props,navigation}) {
  const [dimensions, setDimensions] = React.useState({ window, screen })


  
  const { width, height } = dimensions.window

  const isLandscape = width > height

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/socialloginheaderimage.png')}
        style={isLandscape ? styles.headerImageLandscape : styles.headerImagePortrait}
      />
      <Text style={isLandscape ? styles.textLandscape : styles.textPortrait}>Lets Do This!</Text>
      <LogoButton src={require('../assets/images/Ln_logo.png')} text="Continue with LinkedIn" onPress={()=>{navigation.navigate("BottomTabs")}}/>
      <LogoButton src={require('../assets/images/Google_logo.png')} text="Continue with Google" onPress={()=>{navigation.navigate("BottomTabs")}}/>
      <TextWithLine text="or" />
      <BtnPrimary text="Sign in with password" onPress={() => navigation.navigate('Signin')}/>
      <View style={styles.notAccountView}>
        <Text style={styles.bottomText}>Don't have account? </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={{ ...styles.bottomText, color: '#246BFD' }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    padding: 20,
  },
  headerImagePortrait: {
    width: '100%',
    height: 200,
  },
  headerImageLandscape: {
    width: '100%',
    height: 120,
  },
  textPortrait: {
    fontFamily: 'ReemKufiInk-Regular',
    fontStyle: 'normal',
    fontSize: 32,
    lineHeight: 40,
    color: '#000000',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    marginTop: 20,
    textAlign: 'center',
  },
  textLandscape: {
    fontFamily: 'ReemKufiInk-Regular',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    marginTop: 10,
    textAlign: 'center',
  },
  notAccountView: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    padding: 5,
    flexDirection: 'row',
  },
  bottomText : {
    fontSize : 16,
    fontFamily : 'Inter-Regular',
}
});