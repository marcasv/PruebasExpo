import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'

export const HomeSub1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Esta es la subvista 1 de Home.</Text>
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