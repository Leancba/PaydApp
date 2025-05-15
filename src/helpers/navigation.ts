import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from '@interfaces/navigation';

export const navigationRef = createNavigationContainerRef<MainStackParamList>();

export const navigate = {
  to: (name: string) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name as any);
    }
  },
  goBack: () => {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
      navigationRef.goBack();
    }
  },
  reset: (...args: Parameters<typeof navigationRef.reset>) => {
    if (navigationRef.isReady()) {
      navigationRef.reset(...args);
    }
  },
};

export const Stack = createNativeStackNavigator<MainStackParamList>();


