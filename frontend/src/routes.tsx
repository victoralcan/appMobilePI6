import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, SimpleLineIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './styles/colors';

import Home from './pages/Home';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
        tabBarOptions={{
            style: {
                height: 60,
                backgroundColor: colors.white,
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
            activeTintColor: colors.primary
        }}
    >
      <Screen name="Home" component={Home} options={{
          tabBarIcon: ({ size, focused }) => {
              return (
                  <AntDesign
                    name="home"
                    size={size}
                    color={focused ? colors.primary : colors.black}
                  />
              )
          }
      }}/>
      <Screen name="Disciplinas" component={View} options={{
          tabBarIcon: ({ size, focused }) => {
              return (
                  <SimpleLineIcons
                    name="graduation"
                    size={size}
                    color={focused ? colors.primary : colors.black}
                  />
              )
          }
      }}/>
      <Screen name="Atividades" component={View} options={{
          tabBarIcon: ({ size, focused }) => {
              return (
                  <AntDesign
                    name="edit"
                    size={size}
                    color={focused ? colors.primary : colors.black}
                  />
              )
          }
      }}/>
      <Screen name="Notas" component={View} options={{
          tabBarIcon: ({ size, focused }) => {
              return (
                  <MaterialCommunityIcons
                    name="format-annotation-plus"
                    size={size}
                    color={focused ? colors.primary : colors.black}
                  />
              )
          }
      }}/>
      <Screen name="Pessoas" component={View} options={{
          tabBarIcon: ({ size, focused }) => {
              return (
                  <SimpleLineIcons
                    name="people"
                    size={size}
                    color={focused ? colors.primary : colors.black}
                  />
              )
          }
      }}/>
    </Navigator>
  </NavigationContainer>
);

export default Routes;
