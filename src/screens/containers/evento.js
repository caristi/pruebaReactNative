import React,{Component} from 'react';
import{View, Text, Button}from 'react-native';

class Evento extends Component{

  handlePress = () => {
    this.props.navigation.navigate('Login')
  }

      render() {
        return (
          <View>
            <Text>Estoy en la pantalla de Evento 10</Text>
            <Button title="ir a Login"
               onPress={this.handlePress}/>
          </View>
        );
      }
}

export default Evento;
