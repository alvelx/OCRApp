import React from 'react'
// import { Provider } from 'react-native-paper'
import { Provider } from 'react-redux';
import { store } from './store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
} from './src/screens'

// Context API
import Auth from "./context/Auth";
import Toast, { BaseToast } from "react-native-toast-message";

const Stack = createStackNavigator()

export default function App() {
  // toaster config
  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: "#7000FF" }}
        text1Style={{ fontSize: 18, marginBottom: 5 }}
        text2Style={{ fontSize: 16 }}
      />
    ),
  };

  return (
    <Auth>
      {/* <Provider theme={theme}> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </Stack.Navigator>
          <Toast config={toastConfig} />
        </NavigationContainer>
      </Provider>
    </Auth>
  )
}