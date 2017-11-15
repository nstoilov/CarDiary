import React, { Component } from 'react';
import { Text } from 'react-native';
// import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        return (           
            <CardSection 
                style={{ 
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderColor: '#ddd'
                 }}
            >
                <Text style={{ fontSize: 18 }}>
                    List Item
                </Text>
            </CardSection>            
        );
    }
}

export default ListItem;

