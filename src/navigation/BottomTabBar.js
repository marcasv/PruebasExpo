import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../views/Home';
import { SecondView } from '../views/SecondView';
import { ThirdView } from '../views/ThirdView';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { OS } from '../views/OS';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();
let icon;
if(Platform.OS == "android"){
    icon = "android";
}else{
    icon = "apple-ios";
}
export const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name = "Home" 
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name = "Second" 
                component={SecondView}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name = "Third" 
                component={ThirdView}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name = "OS" 
                component={OS}
                options={{
                    tabBarLabel: 'OS',
                    tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name={icon} color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}