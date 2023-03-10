import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/component/Home';
import Detail from './src/component/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
         >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default App