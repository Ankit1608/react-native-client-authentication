import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Login from './Pages/login';
import Signup from './Pages/singup';
import Home from './Pages/home';
import Bye from './Pages/bye';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function Routes() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Loginstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="bye" component={Bye} />
    </Stack.Navigator>
  );
  const Signupstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="bye" component={Bye} />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Loginstack}
          options={{
            title: 'Login',
          }}
        />
        <Tab.Screen
          name="Signup"
          component={Signupstack}
          options={{
            title: 'Signup',
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Tab.Screen
          name="Bye"
          component={Bye}
          options={{
            title: 'Bye',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Slideshow = () => (
//   <Stack.Navigator
//     screenOptions={{
//       headerShown: false,
//     }}>
//     <Stack.Screen name="login" component={Login} />
//     <Stack.Screen name="signup" component={Signup} />
//     <Stack.Screen name="home" component={Home} />
//     <Stack.Screen name="bye" component={Bye} />
//   </Stack.Navigator>  );

//  <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Order"
//           component={login}
//           options={{
//             title: 'Login',
//           }}
//         />
//         <Tab.Screen
//           name="Order"
//           component={signup}
//           options={{
//             title: 'Signup',
//           }}
//         />
//         <Tab.Screen
//           name="Order"
//           component={home}
//           options={{
//             title: 'Home',
//           }}
//         />
//         <Tab.Screen
//           name="Order"
//           component={bye}
//           options={{
//             title: 'Bye',
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
