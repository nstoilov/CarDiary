import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        console.log('row is pressed');
        Actions.CarUpdate({ car: this.props.car });
    }
    render() {
        const { name } = this.props.car;
        return (         
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View>  
            <CardSection 
                style={{ 
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderColor: '#ddd'
                 }}
            >
                <Text style={{ fontSize: 18 }}>
                    {name}
                </Text>
            </CardSection>      
            </View>
            </TouchableWithoutFeedback>      
        );
    }
}

export default ListItem;

