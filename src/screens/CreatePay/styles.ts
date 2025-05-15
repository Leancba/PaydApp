import { StyleSheet } from 'react-native';
import { colors } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.background,
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:40
  },
  input: {
    marginBottom: 16,
    fontSize: 40,
  },
  amountInput: {
    backgroundColor: 'transparent',
  },
  amountInputContent: {
    fontSize: 40,
    fontFamily: 'Mulish-Bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
  conceptLabel: {
    color: colors.primary,
    marginTop: 20,
  },
  conceptInput: {
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  conceptCounter: {
    marginTop: 5,
    color: colors.grey,
    textAlign:'right',
  },
  enabledButton: {
    marginTop: 8,
    backgroundColor: '#035AC5',
    height: 56,
    justifyContent: 'center',
  },
   disabledButton: {
    marginTop: 8,
    backgroundColor: colors.blue6,
    height: 56,
    justifyContent: 'center',
  },
  disabledButtonLabel: {
    color: colors.blue3,
  },
   enabledButtonLabel: {
    color: '#FFFFFF',
  },
  currencySymbol: {
    fontSize: 40,
    color: '#C0CCDA',
    marginRight: 5,
  },
});
