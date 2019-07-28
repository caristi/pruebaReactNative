import React,{Component} from 'react';
import{View, Text, Button,WebView,Linking}from 'react-native';

class Evento extends Component{

  handlePress = () => {
    this.props.navigation.navigate('Login')
  }

      render() {

        const uri = 'http://sanluisgonzaga.edu.co/';

        return (
          <View>
            <Text>Estoy en la pantalla de Evento 10</Text>
            <Button title="ir a Login"
               onPress={this.handlePress}/>

              <Button title='Ir a Web de Colegio' onPress={ ()=> Linking.openURL(uri) } />

          </View>
          
          
        );
      }
}

export default Evento;
