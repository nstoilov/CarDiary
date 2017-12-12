import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onRowPress() {
        Actions.carUpdate({ car: this.props.car });
    }
    render() {
        const { name } = this.props.car;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection style={styles.cardSectionStyle}>
                        <Text style={styles.textStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    cardSectionStyle: {
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#00bcd4'
    },
    textStyle: {
        fontFamily: 'permanentmarker',
        color: '#00bcd4',
        fontSize: 30
    }
};

export default ListItem;

