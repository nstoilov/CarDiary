import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontFamily: 'permanentmarker',
    alignSelf: 'center',
    color: '#fff',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#00bcd4',
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5
  }
};

export { Button };
