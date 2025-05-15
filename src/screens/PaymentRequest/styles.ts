import { StyleSheet } from 'react-native';
import { colors } from '@constants/colors';

const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: colors.background,
	},
	card: {
		borderRadius: 12,
		marginBottom: 16,
		alignItems: 'center',
		backgroundColor: '#F9FAFC',
	},
	cardContent: {
		alignItems: 'center',
		flexDirection: 'column',
	},
	robotIcon: {
		backgroundColor: '#E4EEFC',
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
		marginTop: 4,
		color: '#7A8CA5',
	},
	linkRow: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 12,
	},
	linkInput: {
		flex: 1,
		backgroundColor: 'transparent',
		height: 45,
		marginRight: 8,
	},
	iconButtonQR: {
		height: 56,
		width: 56,
		borderRadius: 8,
	},
	textInputTransparent: {
		backgroundColor: 'transparent',
		flex: 1,
		maxHeight: 56,
		fontFamily: 'Mulish-Bold',
	},
	textInputContent: {
		fontFamily: 'Mulish-Regular',
		color:'#002859'
	},
	textInputContentShifted: {
		fontFamily: 'Mulish-Regular',
		marginLeft: 130,
	},
	whatsappPrefixButton: {
		position: 'absolute',
		left: 40,
	},
	sendButton: {
		borderRadius: 8,
		backgroundColor: '#035AC5',
		position: 'absolute',
		right: 10,
	},
	newRequestButton: {
		borderRadius: 8,
		backgroundColor: '#F9FAFC',
		width:'100%',
		height:56,
		alignItems:'center',
		justifyContent:'center',
		flexDirection: 'row-reverse',
	},
	newRequestLabel: {
		color: '#035AC5',
	},
	inputContainer:{ flex: 1, marginVertical:20 }
});

export default styles;
