import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export const SecondView = () => {
    return (
        <View style={styles.container}>
            <Text>Esta es la vista Second de la app de pruebas de React Native con Expo.</Text>
            <Image style={styles.images} source={{uri:"https://picsum.photos/400/400"}}/>
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
      height: 200,
      width: 200,
      borderRadius: 100,
      margin: 100,
    }
  });