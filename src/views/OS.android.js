import React from 'react'
import { StyleSheet, View, Text, Image, Platform } from 'react-native'

export const OS = () => {
    return (
        <View style={styles.container}>
            <Text>¡Bienvenido a la pantalla OS para dispositivos Android!</Text>
            <Text>Version: {Platform.Version}</Text>
            <Image style={styles.images} source={{uri:"https://picsum.photos/100/100"}}/>
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
      height: 50,
      width: 50,
      borderRadius: 25,
      margin: 100,
    }
});