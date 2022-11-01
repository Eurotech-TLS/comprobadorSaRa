// comprobadorSara

import * as React from 'react';
import  { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './screens/Details';
import HomeScreen from './screens/HomeScreen';
import {EuroContext} from './EuroContext';

// Nombre de la plataforma en la que corre la App
// en minúsculas para normalizarlas y usar en el código

const platformOS = Platform.OS.toLowerCase();
console.log ("-------------------------------------------------");
console.log("Iniciando en  ${platformOS}");

  
const Stack = createStackNavigator();

function App(){
	
	
	  return (
		
		<NavigationContainer>
		  <Stack.Navigator>
			<Stack.Screen 
				name="HomeScreen" 
				component={HomeScreen} 
				options={{title:'Comprobador'}}/>
			<Stack.Screen 
				name="Details" 
				component={Details} 
				options={{title:'Details'}}/>
		  </Stack.Navigator>
		</NavigationContainer>
	  );
	
}

export default App;
