import React from 'react'
import { StyleSheet, View, Text, Image, Platform } from 'react-native'

export const SecondView = () => {
    let os = "";
    if(Platform.OS == "android" ){
      os = "Soy un dispositivo Android"
    }
    if(Platform.OS == "ios"){
      os = "Soy un dispositivo iOS"
    }
    let version;
    Platform.select({
      ios: () => version = "Soy un iOS versión " + Platform.Version,
      android: () => version = "Soy un Android de la API " + Platform.Version
    })();

    return (
        <View style={styles.container}>
            <Text>¡{os}!</Text>
            <Text>{version}</Text>
            <Image style={styles.images} source={{uri:"https://picsum.photos/500/500"}}/>
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
      height: 100,
      width: 100,
      borderRadius: 50,
      margin: 100,
    }
});