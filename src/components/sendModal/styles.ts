import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#1ED6EB66',
    borderRadius: 99,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#002859',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#647184',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#035AC5',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default styles