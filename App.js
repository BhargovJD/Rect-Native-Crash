import React from 'react';
import {View} from 'react-native';
import ArrayMap from './components/ArrayMap';
import Calculator from './components/Calculator';
import Condition from './components/Condition';
import FlatLists from './components/FlatLists';
import Flex from './components/Flex';
import HelloWorld from './components/HelloWorld';
import Img from './components/Img';
import Input from './components/Input';
import JokesApp from './components/JokesApp';
import Models from './components/Models';
import Home from './components/pages/Home';
import Profile from './components/Profile';
import PullRefresh from './components/PullRefresh';
import ScrollViews from './components/ScrollViews';
import State from './components/State';
import Style from './components/Style';
import Texts from './components/Texts';
import Touchable from './components/Touchable';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './components/pages/About';


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    // <View>
    //   <HelloWorld/>
    //   <Profile name="Bhargov" address="Guwahati"/>
    //   <Profile name="Jack" address="London"/>
    //   <Style/>
    //   <Condition/>
    //   <ArrayMap/>
    //   <State/>
    //   <Texts/>
    //   <Img/>
    //   <Touchable/>
    //   <FlatLists/>
    //   <PullRefresh/>
    //   <ScrollViews/>
    //   <Input/>
    //   <Calculator/>
    //   <Models/>
    //   <Flex/>
    //   <JokesApp/>
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}


