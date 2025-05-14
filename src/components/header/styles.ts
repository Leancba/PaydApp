import { StyleSheet } from 'react-native';
import { Colors } from '@constants/colors';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    height: 56,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  title: {
    fontFamily: 'Mulish-Bold',
    color: Colors.primary,
    fontSize: 18,
  },
  currencyLabel: {
    fontFamily: 'Mulish-Bold',
    color: Colors.primary,
    fontSize: 12,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    width: 40,
    backgroundColor: Colors.backgroundIcon,
  },
  currencyButton: {
    position: 'absolute',
    right: 10,
    width: 70,
    backgroundColor: Colors.backgroundIcon,
  },
  contentButton :{ flexDirection: 'row-reverse' }
});

export default styles;
