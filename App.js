import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const App = () => {
  
  return (
  <View style={styles.fondo}>
    <Text style={styles.letras}>Hola Coders!</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  fondo:{
    backgroundColor:"black",
    flex:1,
    flexDirection:'row' ,
    justifyContent:"center", 
      
  },
  letras:{
    color: '#FFF',
    fontSize: 22,   
  },
});

export default App;
