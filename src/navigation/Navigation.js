import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../modules/SplashScreen';
import LoginScreen from '../modules/LoginScreen';
import InfoScreen from '../modules/InfoScreen';
import LoginWhite from '../modules/LoginWhite';
import TabNavigation from '../modules/TabNavigation';
import SideMenu from '../modules/Todo/sideMenu/SideMenu'
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/FontAwesome';
import ToDo from '../modules/Todo/Todo';
import DetailScreen from '../modules/Todo/DetailScreen';
import SignupScreen from '../modules/SignupScreen';
import {useSelector} from 'react-redux';
export default function App() {
  const userState = useSelector(state => state.AuthReducer.isUserLoggedIn);
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  
  // function asd() {
    //   return (
    //     <Tab.Navigator
    //     screenOptions={({ route }) => ({
    //           tabBarIcon: ({ focused, color, size }) => {
    //             let iconName;
    //             if (route.name === 'Home') {
    //               iconName = focused
    //                 ? 'lock' : 'lock';
    //             } else if (route.name === 'Settings') {
    //               iconName = focused ? 'cog' : 'cog';
    //             }
    //             // You can return any component that you like here!
    //             return <Icon name={iconName} size={size} color={color} />;
    //           },
    //         })}
    //         tabBarOptions={{
    //           activeTintColor: 'tomato',
    //           inactiveTintColor: 'gray',
    //         }}
    //       >
    //       <Tab.Screen name="TabNavigation" component={TabNavigation} />
    //       <Tab.Screen name="InfoScreen" component={InfoScreen} />
    //         <Tab.Screen name="LoginScreen" component={LoginScreen} />
    //         <Tab.Screen name="LoginWhite" component={LoginWhite} />
    //     </Tab.Navigator>
    //   );
    // }
   
  // }
  function drawer() {
    
      return (
           <Drawer.Navigator
           drawerContent={ props => <SideMenu {...props} /> }>  
            <Drawer.Screen name="LoginScreen" component={ToDo} />
            <Drawer.Screen name="InfoScreen" component={InfoScreen} />
          </Drawer.Navigator>
      );

    
  }
  
  
  return (
    <NavigationContainer>
      


      <Stack.Navigator headerMode="false">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Todo" component={drawer} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="LoginWhite" component={LoginWhite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
