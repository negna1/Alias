import React from 'react'; // get the React object from the react module
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FinalScreen from './Screens/FinalsScreen'
import HomeScreen from './Screens/Home';
import DurationScreen from './Screens/Duration';
import TeamsScreen from './Screens/Teams';
import StartGameScreen from './Screens/StartGame';
import ResultScreen from './Screens/ResultScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Duration" component={DurationScreen} />
      <Stack.Screen name="Teams" component={TeamsScreen} />
      <Stack.Screen name="Start Game" component={StartGameScreen} />
      <Stack.Screen name="Result" component={ResultScreen} />
      <Stack.Screen name="Final Screen" component={FinalScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
