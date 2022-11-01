import React, { useState,useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function Details({route, navigation}) { 
	
	onPress = () => {
		navigation.navigate('HomeScreen', {})
    }
	const{itemId} = route.params;	
	const [isLoading, setIsloading] = useState(true);
	const [evi, setEvi] = useState(null);
	const [fallo, setFallo] = useState(null);
	
	useEffect(() => {
		console.log("http://192.168.0.14:8080/api/documento/"  + itemId);
		fetch("http://192.168.0.14:8080/api/documento/"  + itemId)
			.then((response) => response.json())
				.then((evidencia) => {
						console.log(evidencia);
						setEvi(evidencia.tipo_fichero);
						setIsloading(false);
				})
			.catch((error) => {
				setFallo("No se puede obtener respuesta del servidor");
				console.log("Error en la llamada: " && error);
			})	
	},[]);
	
	if(fallo){
		return(
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		  <Text>Error: {fallo}</Text>		  
		  <Button
			title="Volver"
			onPress={this.onPress}
		  />
		</View>
		);
	}
	if(isLoading){
		return(
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		  <Text>Buscando: {JSON.stringify(itemId)}</Text>
		  
		</View>
		);
	}
	return (	
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		  <Text>Elemento a buscar: {JSON.stringify(itemId)}</Text>
		  <Text>Documento: {evi}</Text>
		  <Button
			title="Volver"
			onPress={this.onPress}
		  />
		</View>
	);

}


export default Details;