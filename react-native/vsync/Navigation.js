import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';
function Navigation(){
    const Stack = createStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}

                />
                <Stack.Screen
                    name="room"
                    component={MeetingRoom}
                    options={{
                        title: 'Start a meeting',
                        headerStyle:{
                            backgroundColor:"#1c1c1c"
                        },
                        headerTintColor:"white"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation