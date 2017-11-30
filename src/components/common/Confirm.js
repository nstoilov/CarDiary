import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, dialogStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={() => { }}
        >
            <View style={containerStyle}>     
            <View style={dialogStyle}>  
                <CardSection>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>    
                </View>            
            </View>
        </Modal>
    );
};

const styles = {
    dialogStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        marginLeft: 10,
        marginBottom: 30,
        marginRight: 10,
        borderRadius: 2
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    buttonStyle: {
        flexDirection: 'row',
        flex: 1,

    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'flex-end',
    }
};

export { Confirm };
