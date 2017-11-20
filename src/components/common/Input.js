import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				underlineColorAndroid='transparent' //android
				autoCorrect={false} //ios
			/>
		</View>
	);
};

const styles = {
	inputStyle: {		
		marginLeft: 11,
		borderWidth: 1,
		borderColor: '#252626',
		textAlign: 'center',
		color: '#252626',	
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 17,
		flex: 1
	},
	labelStyle: {
		
		fontSize: 17,
		paddingLeft: 20,
		flex: 1,
		color: '#252626',
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
