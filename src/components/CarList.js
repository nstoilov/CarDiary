import React, { Component } from 'react';
// todo import { ListView } from 'react-native';
import { Card } from './common';
// todo import { carsFetch } from '../actions';
import ListItem from './ListItem';

class CarList extends Component {
    render() {
        return (
            <Card>
                <ListItem />
                <ListItem />
            </Card>

        );
    }
}


export default CarList;
