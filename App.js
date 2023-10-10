import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SocialLogin from './src/screens/SocialLogin';
import OnboardingScreen from './src/components/OnboardingScreen';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Login';
import BottomTabNavigator from './src/screens/BottomTabNavigator';
import ProductDetail from './src/screens/ProductDetail';
import {CartProvider} from './src/screens/CartContext';
import TotalBillScreen from './src/screens/TotalBillScreen';
import AllProductsScreen from './src/screens/AllProductsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#343541" barStyle="light-content" />
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="OnboardingScreen"
            component={OnboardingScreen}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTabs"
            component={BottomTabNavigator}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ProductDetail"
            component={ProductDetail}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="TotalBillScreen"
            component={TotalBillScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="AllProductsScreen"
            component={AllProductsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
