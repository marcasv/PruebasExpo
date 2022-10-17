import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'

export const ProfileSub_3 = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>Esta es la subvista 3 de Profile.</Text>
            <Text>Mis parámetros son: {route.params.names[0] + ", " + route.params.names[1] + ", " + route.params.names[2]}</Text>
            <Image style={styles.images} source={{uri:"https://picsum.photos/500/500"}}/>
            <Button style={styles.buttons}
                onPress={() =>
                    navigation.goBack()
                }
                title="Go back"
            />
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
    },
});