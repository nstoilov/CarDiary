import React, { Component } from 'react';
import { View } from 'react-native';
// todo import { ListView } from 'react-native';
import { CardSection } from './common';
// todo import { carsFetch } from '../actions';
import ListItem from './ListItem';
import CarForm from './CarForm';


class CarList extends Component {

    render() {
        return (
            <View>
                <CardSection>
                    <ListItem />
                </CardSection>
                <CardSection>
                    <ListItem />
                </CardSection>
            </View>
        );
    }
}


export default CarList;
