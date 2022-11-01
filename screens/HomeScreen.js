import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, Input} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function HomeScreen({navigation}) {
	
	const [name, setName] = useState("0")

	function updateName(e) {
	setName(e.value);
	alert('Actualizado ', {name});
	}			
				
	  return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Documento a buscar: </Text>
			<TextInput  placeholder={name} onChangeText={newText => setName(newText)} style={ [ styles.textInput ] } />
			<Button title="Buscar" onPress={() => navigation.navigate('Details',{itemId : name})} />
		</View>
	  );
	
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  textInput : {
    height : 40, marginLeft : 10, width : "80%", marginBottom : 20,
    /* Branch on platform type for different styling. */
    ...Platform.select({
      ios : {
        marginTop : 4, paddingLeft : 10, borderRadius : 8,
        borderColor : "#DDDDDD", borderWidth : 2
      },
      android : {borderColor : "#DDDDDD", borderWidth : 2 }
    })
  }
})

export default HomeScreen;