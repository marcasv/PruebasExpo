import React from 'react'
import { HomeSub1 } from './HomeSub1';
import { HomeSub2 } from './HomeSub2';
import { HomeSub3 } from './HomeSub3';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const Home = ({navigation}) => {
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home_Sub1" component={HomeSub1} />
          <Drawer.Screen name="Home_Sub2" component={HomeSub2} />
          <Drawer.Screen name="Home_Sub3" component={HomeSub3} />
        </Drawer.Navigator>
        
    );
}