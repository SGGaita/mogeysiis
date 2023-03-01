import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen'
import { Login, Home, Notices, Feedback, Protection, Proposal, AnonymousReporting, Ewallet, FoodDistribution, Information } from './src/screens/index'
import {routes} from './src/constants'

const Stack = createNativeStackNavigator();




const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }} initialRouteName="Home">
        <Stack.Screen name={routes.LOGIN} component={Login} />
        <Stack.Screen name={routes.HOME} component={Home} />
        <Stack.screen name={routes.NOTICE} component={Notices}/>
        <Stack.screen name={routes.FEEDBACK} component={Feedback}/>
        <Stack.screen name={routes.PROTECTION} component={Protection}/>
        <Stack.screen name={routes.PROPOSAL_DEVELOPMENT} component={Proposal}/>
        <Stack.screen name={routes.ANONYMOUS_REPORTING} component={AnonymousReporting}/>
        <Stack.screen name={routes.EWALLET} component={Ewallet}/>
        <Stack.screen name={routes.FOOD_DISTRIBUTION} component={FoodDistribution}/>
        <Stack.screen name={routes.INFORMATION} component={Information}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;
