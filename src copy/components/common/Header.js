import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
		);
};
const styles = {
	viewStyle: {
		backgroundColor: '#EEEEEE',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#b7b7b7',
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

export { Header };
