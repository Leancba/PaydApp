import { useTheme as usePaperTheme } from 'react-native-paper';

export const useAppTheme = () => {
  const theme = usePaperTheme();

  return {
    colors: theme.colors,
    fonts: theme.fonts
  };
};
