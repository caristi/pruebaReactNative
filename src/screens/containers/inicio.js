import React,{Component} from 'react';
import{
    View,
    Text,
    Button,
}from 'react-native';

class Inicio extends Component{

  handlePress = () => {
    this.props.navigation.navigate('Evento')
  }

      render() {
        return (
          <View>
            <Text>Estoy en la pagina de Inicio con su nombre {this.props.navigation.getParam('text')} </Text>
            <Button title="ir a evento"
            onPress={this.handlePress}/>
          </View>
        );
      }
}

export default Inicio;
