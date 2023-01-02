/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Text, View} from 'react-native';
const Stack = createNativeStackNavigator();
import welcome from './ui/welcome';
import profile from './ui/profile';
import AppStatusBar from './logic/AppStatusBar';
const App = () => {
  const THEME_COLOR = '#3be012';
  const hideHeader = {headerShown: false,headerMode: 'none'};
  return (
    <>
    <AppStatusBar backgroundColor={THEME_COLOR}/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={welcome}
          options={hideHeader} />
        <Stack.Screen name="Profile" component={profile} options={hideHeader}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};


export default App;
