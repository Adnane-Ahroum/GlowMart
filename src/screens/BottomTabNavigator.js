import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import {StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faShoppingCart, faUser} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

// ...
const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = faHome;
            } else if (route.name === 'Cart') {
              iconName = faShoppingCart;
            } else if (route.name === 'Profile') {
              iconName = faUser;
            }
  
            return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#eee',
            borderTopWidth: 1,
            paddingTop: 5,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  };
  // ...
  

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    paddingTop: 5,
  },
});

export default BottomTabNavigator;
