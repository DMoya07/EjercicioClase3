import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

const estilos=StyleSheet.create({
  pregunta:{
    color: '#D5EEBB',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '25px',
    padding: '10px'
  },

  respuesta:{
    color: '#E7E0C9',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '25px',
    padding: '10px'
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={estilos.pregunta}>Nombre</Text><Text style={estilos.respuesta}>David Enrique Moya</Text><br></br>
      <Text style={estilos.pregunta}>Carnet</Text><Text style={estilos.respuesta}>MA170877</Text><br></br>
      <Text style={estilos.pregunta}>Pasatiempo</Text><Text style={estilos.respuesta}>Jugar Videojuegos</Text><br></br>
      <Text style={estilos.pregunta}>Lenguaje de Programación Favorito</Text><Text style={estilos.respuesta}>PHP</Text><br></br>
      <Text style={estilos.pregunta}>Película Favorita</Text>
      <StatusBar style="auto" />
      <Image
      style={{width: 300, height: 300}}
      
      source={require('./assets/BTTF.jpg') }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B7AA1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
