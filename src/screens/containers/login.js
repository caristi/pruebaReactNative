import React,{Component} from 'react';
import { View, Text, Button } from 'react-native';

class Login extends Component {

  handlePress = () => {
    this.props.navigation.navigate('Inicio')
  }

  render() {
    return (
      <View>
        <Text>Estoy en la pagina de Login</Text>
        <Button
          title="Ir al Inicio"
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

export default Login;