import React,{Component} from 'react';
import{
    View,
    Text,
    Button,
    FlatList,
}from 'react-native';

class Inicio extends Component{

  constructor(props){
    super(props);
    this.state = {
      loading:false,
      pokemon:[],
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }
  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () =>{
    this.setState({loading:true})

    fetch(this.state.url)
    .then(res => res.json())
    .then(res => {

        this.setState({
          pokemon : res.results,
            url: res.next,
            loading:false
        })
    });
  }

  handlePress = () => {
    this.props.navigation.navigate('Evento')
  }

      render() {

        if(this.state.loading){

          return (
            <View>
              <Text> DESCARGANDO CONEXION A API </Text>
            </View>
          );

        }

        return (
          <View>
            <Text>Estoy en la pagina de Inicio con su nombre {this.props.navigation.getParam('text')} </Text>
            <Button title="ir a evento"
                    onPress={this.handlePress}/>
            <Text>--</Text>        
            <Text>Cargada datos de API</Text>

            <FlatList 
              data={this.state.pokemon}
              renderItem={
                ({item}) => <Text>{item.name}</Text>
              }
            />
          </View>
        );
      }
}

export default Inicio;
