import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import CarForm from './CarForm';

class CarCreate extends Component {

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

        this.props.carCreate({
            name,
            summerTyres,
            winterTyres,
            techCheck,
            maint,
            citizenInsuranse,
            carInsurance
        });
    }

    render() {
        return (
            <Card>
                <CarForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

            </Card>

        );
    }
}


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

export default connect(mapStateToProps, {
    carCreate
})(CarCreate);
