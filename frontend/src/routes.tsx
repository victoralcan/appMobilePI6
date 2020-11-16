import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import colors from './styles/colors';

import Home from './pages/Home';
import Disciplinas from './pages/Disciplinas';
import Atividades from './pages/Atividades';
import Notas from './pages/Notas';
import Pessoas from './pages/Pessoas';
import Login from './pages/Login';

const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createStackNavigator();

const Routes: React.FC = () => (

  <NavigationContainer>
    <Stack.Navigator
      headerMode='none'>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="LoggedIn"
        component={LoggedRoutes}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const LoggedRoutes: React.FC = () => (
  <Navigator
    tabBarOptions={{
      style: {
        height: 70,
        backgroundColor: colors.back,
        borderTopWidth: 0,

      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: 'roboto_400',
        fontSize: 11,
        marginTop: 8,
      },
      inactiveTintColor: colors.black,
      activeTintColor: colors.white
    }}
  >
    <Screen name="Home" component={Home} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <AntDesign
            name="home"
            size={size}
            color={focused ? colors.white : colors.black}
          />
        )
      }
    }}/>
    <Screen name="Disciplinas" component={Disciplinas} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <SimpleLineIcons
            name="graduation"
            size={size}
            color={focused ? colors.white : colors.black}
          />
        )
      }
    }}/>
    <Screen name="Atividades" component={Atividades} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <AntDesign
            name="edit"
            size={size}
            color={focused ? colors.white : colors.black}
          />
        )
      }
    }}/>
    <Screen name="Notas" component={Notas} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <MaterialCommunityIcons
            name="format-annotation-plus"
            size={size}
            color={focused ? colors.white : colors.black}
          />
        )
      }
    }}/>
    <Screen name="Pessoas" component={Pessoas} options={{
      tabBarIcon: ({ size, focused }) => {
        return (
          <SimpleLineIcons
            name="people"
            size={size}
            color={focused ? colors.white : colors.black}
          />
        )
      }
    }}/>
  </Navigator>
);

export default Routes;
