import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    alignItems: 'center',
    justifyContent:'center',
    padding:16,
    backgroundColor: '#F9FAFC',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 8,
  },
  title: {
    fontSize: 14,
    marginTop: 8,
    color: '#4D5D72',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#035AC5',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 8,
    color: '#7A8CA5',
    width:'100%',
    textAlign:'center'
  },
});

export default styles