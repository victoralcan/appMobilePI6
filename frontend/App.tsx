import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';
import { Provider } from 'react-redux';
import initStore from './src/config/store';
import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const store = initStore();

  return (
    <>
      <Provider store={store}>
        <Routes />
        <StatusBar style="light" />
      </Provider>
    </>
  );
}
