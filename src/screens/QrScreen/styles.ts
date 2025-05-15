// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#035AC5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#002859',
    marginLeft: 8,
    fontFamily: 'Mulish-Regular',
  },
  infoBox: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#EAF3FF',
  },
  iconCircle: {
    backgroundColor: '#035AC566',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    borderRadius: 99,
  },
  qrWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  priceText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish-Bold',
    fontSize: 26,
    marginVertical: 24,
  },
  subtitleText: {
    color: '#FFFFFF',
    width: '100%',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Mulish-Regular',
  },
});

export default styles;
