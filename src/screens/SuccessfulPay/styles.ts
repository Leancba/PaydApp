import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    color: '#002859',
    fontFamily: 'Mulish-Bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#647184',
    fontFamily: 'Mulish-Regular',
    textAlign: 'center',
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  finishButton: {
    backgroundColor: '#F9FAFC',
    width: '100%',
  },
  buttonLabel: {
    fontFamily: 'Mulish-SemiBold',
    color: '#035AC5',
    fontSize: 16,
  },
});

export default styles;
