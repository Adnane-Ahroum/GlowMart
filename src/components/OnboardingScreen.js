import {Image} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen({navigation}) {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Signin')}
      onDone={() => navigation.navigate('Signin')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/obsimage1.png')} />,
          title: 'Welcome to GlowMart!',
          subtitle:
            "Brighten up your world with our wide range of lights! From chic and modern to rustic and vintage, we've got everything you need to light up your space and enhance your home decor.",
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/obsimage2.png')} />,
          title: 'Discover Your Perfect Light',
          subtitle:
            ' With Luminous, finding your perfect light is easy! Browse our collection of lamps, pendant lights, chandeliers, and more to find the style that matches your taste and complements your space.',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/images/obsimage3.png')} />,
          title: 'Shop with Confidence',
          subtitle:
            'At Luminous, we pride ourselves on our quality products and excellent customer service. With easy checkout and hassle-free returns, you can shop with confidence and find the perfect light for your home!',
        },
      ]}
    />
  );
}
