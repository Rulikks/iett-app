import React, { useEffect, useRef } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen.js';
import MainScreen from './MainScreen.js';

const Stack = createStackNavigator();

const App = () => {
  const navigationRef = useRef(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigationRef.current.navigate('Main');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );  
};

export default App;
