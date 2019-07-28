import React,{Component} from 'react';
import { View, Text, Button,TextInput} from 'react-native';

class Login extends Component {

  state = {text: ""};

  handlePress = () => {
    this.props.navigation.navigate('Inicio', { text: this.state.text})
  }

  render() {
    return (
      <View>
        <Text>Estoy en la pagina de Login</Text>
        <TextInput onChangeText={text => this.setState({text})}/>
        <Button
          title="Ir al Inicio"
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

export default Login;