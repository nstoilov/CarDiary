import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle } = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				autoCapitalize='sentences'
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				placeholderTextColor='#444444'
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
				underlineColorAndroid='transparent'
				autoCorrect={false}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {

		marginLeft: 20,
		marginRight: 20,
		borderBottomWidth: 1,
		borderColor: '#252626',
		textAlign: 'center',
		color: '#444444',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 17,
		flex: 2
	},
	labelStyle: {
		fontSize: 17,
		paddingLeft: 20,
		flex: 3,
		color: '#444444',
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
