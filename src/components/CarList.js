import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, ImageBackground } from 'react-native';
import { carsFetch } from '../actions';
import { Card } from './common';
import ListItem from './ListItem';

class CarList extends Component {
    componentWillMount() {
        this.props.carsFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ cars }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(cars);
    }

    renderRow(car) {
        return <ListItem car={car} />;
    }

    render() {
        return (
            <ImageBackground
              style={styles.imageBackground}
              source={require('../images/bgLong.png')}
            >          
            <Card>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </Card> 
            </ImageBackground>       
        );
    }
}

const styles = {
    imageBackground: {
       flex: 1,
       width: null,
       height: null,
       resizeMode: 'contain'
    }
};

const mapstateToProps = state => {
    const cars = _.map(state.cars, (val, uid) => {
        return { ...val, uid };
    });
    return { cars };
};

export default connect(mapstateToProps, { carsFetch })(CarList);
