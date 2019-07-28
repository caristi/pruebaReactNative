import React, { Component } from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';

//import Navigator in our project
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book 
    FirstPage: { screen: FirstPage }, 
    //First entry by default be our first screen 
    //if we do not define initialRouteName
    SecondPage: { screen: SecondPage }, 
  },
  {
    initialRouteName: 'FirstPage',
  }
);

export default createAppContainer(App);