import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/MainNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationRef } from './src/helpers';

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <MainStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Main;
