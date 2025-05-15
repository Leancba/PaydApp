import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationRef } from '@helpers/navigation';
import MainStack from './src/navigation';
import { hideSplashScreen } from '@helpers/options';

const Main = () => {

  useEffect(() => {
    hideSplashScreen(); 
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#000"/> 
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
