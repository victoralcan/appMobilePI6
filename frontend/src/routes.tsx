import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import Login from './pages/Login';
import { IRootState } from "./shared/reducers";
import colors from "./styles/colors";
import Disciplinas from "./pages/Disciplinas";
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import Mural from "./pages/Mural";
import Atividades from "./pages/Atividades";
import Notas from "./pages/Notas";

// Página desativada
import Pessoas from "./pages/Pessoas";

const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createStackNavigator();

interface IRouterProps extends StateProps, DispatchProps {
}

const Routes: (props: IRouterProps) => JSX.Element = (props: IRouterProps) => {
  const LoggedRoutes: React.FC = () => (
    <Navigator
      tabBarOptions={{
        style: {
          height: 70,
          backgroundColor: colors.primary,
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
      initialRouteName="Mural"
    >
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
      <Screen name="Mural" component={Mural} options={{
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
      {/* <Screen name="Pessoas" component={Pessoas} options={{
        tabBarIcon: ({ size, focused }) => {
          return (
            <SimpleLineIcons
              name="people"
              size={size}
              color={focused ? colors.white : colors.black}
            />
          )
        }
      }}/> */}
    </Navigator>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'>
        {props.isAuthenticated ? props.selectedCourse.name ?
          <Stack.Screen
            name="LoggedIn"
            component={LoggedRoutes}
          />
          :
          <Stack.Screen
            name="Disciplinas"
            component={Disciplinas}
          />
          : <Stack.Screen
            name="Login"
            component={Login}
          />}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const mapStateToProps = ({ authentication, courses }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  selectedCourse: courses.selectedCourse
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
