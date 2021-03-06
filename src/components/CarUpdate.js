import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import CarForm from './CarForm';
import { carUpdate, carSave, carDelete } from '../actions';
import { CardSection, Button, Confirm } from './common';

class CarUpdate extends Component {
    state = { showModal: false };
    componentWillMount() {
        _.each(this.props.car, (value, prop) => {
            this.props.carUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const {
            name,
            summerTyres,
            winterTyres,
            techCheck,
            maint,
            citizenInsuranse,
            carInsurance
        } = this.props;

        this.props.carSave({
            name,
            summerTyres,
            winterTyres,
            techCheck,
            maint,
            citizenInsuranse,
            carInsurance,
            uid: this.props.car.uid
        });
    }


    onAccept() {
        const { uid } = this.props.car;
        this.props.carDelete({ uid });
    }

    onDecline() {
        this.setState({ showModal: false });
    }


    render() {
        return (
            <View style={styles.card}>
                <CarForm />
                <View>
                    <CardSection >
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save Changes
                    </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                            Delete Car
                    </Button>
                    </CardSection>
                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you sure you want to delete this?
                </Confirm>
                </View>
            </View>
        );
    }
}

const styles = {
    card: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
};

const mapStateToProps = (state) => {
    const {
        name,
        summerTyres,
        winterTyres,
        techCheck,
        maint,
        citizenInsuranse,
        carInsurance
     } = state.carForm;

    return {
        name,
        summerTyres,
        winterTyres,
        techCheck,
        maint,
        citizenInsuranse,
        carInsurance
    };
};

export default connect(mapStateToProps, { carUpdate, carSave, carDelete })(CarUpdate);

