import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Homescreen from './Screens/Homescreen';
import Mapscreen from './Screens/Mapscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  
  const Stack = createStackNavigator();
  
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name='Homescreen' component={Homescreen} options={{headerShown: false}}/>
            <Stack.Screen name='Mapscreen' component={Mapscreen} />
          </Stack.Navigator>

          
          
        </SafeAreaProvider>
      </NavigationContainer>
      
    </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
