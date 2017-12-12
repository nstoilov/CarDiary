import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ButtonGrad = () => {
  return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                HI
            </Text>
        </LinearGradient>
  );
};

const styles = {
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      }
};

export { ButtonGrad };
