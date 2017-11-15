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
		color: '#252626', //red
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		flex: 1
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
		color: '#252626', //blue
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

export { Input };
