import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { ProfileSub_1 } from './ProfileSub1';
import { ProfileSub_2 } from './ProfileSub2';
import { ProfileSub_3 } from './ProfileSub3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ThirdView = ({navigation}) => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="ProfileSub_1" component={ProfileSub_1} />
        <Stack.Screen name="ProfileSub_2" component={ProfileSub_2} />
        <Stack.Screen name="ProfileSub_3" component={ProfileSub_3} />
      </Stack.Navigator>
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