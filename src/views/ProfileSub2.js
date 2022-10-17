import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'

export const ProfileSub_2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Esta es la subvista 2 de Profile.</Text>
            <Image style={styles.images} source={{uri:"https://picsum.photos/500/500"}}/>
           <View style = {styles.buttons}>
                <Button
                    onPress={() =>
                        navigation.navigate('ProfileSub_3', { names: ['Brent', 'Satya', 'Michaś'] })
                    }
                    title="Go to ProfileSub_3"
                />
           </View>
            <View>
                <Button
                    onPress={() =>
                        navigation.goBack()
                    }
                    title="Go back"
                />
            </View>
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
    buttons: {
        margin: 40,
    }
});