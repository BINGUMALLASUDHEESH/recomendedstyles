import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import WelcomeScreen from './Pages/WelcomeScreen';
import HairColorOption from './Pages/HairColorOption';
import EyeColorOption from './Pages/EyeColorOption';
import UnderToneColor from './Pages/UnderToneColor';
import ColorAnalysisResult from './Pages/ColorAnalysisResult';
import InspirationScreen from './Pages/InspirationScreen';
import OutfitScreen from './Pages/OutfitScreen';
import OutfitDetailsScreen1 from './OutfitDetailsScreen1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OutfitDetailsScreen1'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

         <Stack.Screen
          name="HairColorOption"
          component={HairColorOption}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="EyeColorOption"
          component={EyeColorOption}
          options={{ headerShown: false }}
        />

   <Stack.Screen
          name="UnderToneColor"
          component={UnderToneColor}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="ColorAnalysisResult"
          component={ColorAnalysisResult}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InspirationScreen"
          component={InspirationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OutfitScreen"
          component={OutfitScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="OutfitDetailsScreen1"
          component={OutfitDetailsScreen1}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
