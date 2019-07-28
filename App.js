import React, {Component} from "react";
import { createStackNavigator,createAppContainer } from "react-navigation";

import Inicio from './src/screens/containers/inicio';
import Login from './src/screens/containers/login';
import Evento from './src/screens/containers/evento';

const AppNavigator = createStackNavigator({
  Inicio:{screen:Inicio},
  Login:{screen:Login},
  Evento:{screen:Evento},
});

export default createAppContainer(AppNavigator);