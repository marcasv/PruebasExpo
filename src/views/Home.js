import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Esta es la vista de Home de la app de pruebas de React Native con Expo.</Text>
            <Image style={styles.images} source={{uri:"https://picsum.photos/300/300"}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    images: {
      height: 300,
      width: 300,
      borderRadius: 150,
      margin: 100,
    }
  });