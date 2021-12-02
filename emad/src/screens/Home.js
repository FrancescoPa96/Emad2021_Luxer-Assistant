import React, { Component } from 'react';
import {Platform } from 'react-native'
import {CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import AddUser from './customer/AddUser';
import Catalog from './shop/Catalog';
import Category from './shop/Category';
import Cart from './shop/Cart';
import Communication from './shop/Communication';
import Login from './user/Login';
import ProductPage from './shop/ProductPage';
import ScanQR from './shop/ScanQR';
import SearchUser from './customer/SearchUser';
import Settings from './user/Settings';
import UserHome from './user/UserHome';
import CustomerPage from './customer/CustomerPage';
const Stack = createStackNavigator();


const Home = ({ navigation }) => {
  if (Platform.OS === "ios") {
    var CardStyleEffect = CardStyleInterpolators.forVerticalIOS;
  } else {
    var CardStyleEffect = CardStyleInterpolators.forRevealFromBottomAndroid;
  }

  return (
    <Stack.Navigator initialRouteName="UserHome" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="AddUser" component={AddUser} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Catalog" component={Catalog} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Category" component={Category} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Cart" component={Cart} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Communication" component={Communication} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="CustomerPage" component={CustomerPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Settings" component={Settings} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="Login" component={Login} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ProductPage" component={ProductPage} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="ScanQR" component={ScanQR} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="SearchUser" component={SearchUser} options={{cardStyleInterpolator: CardStyleEffect}}/>
      <Stack.Screen name="UserHome"component={UserHome} options={{cardStyleInterpolator: CardStyleEffect}}/>
    </Stack.Navigator>
  );
};



export default Home;