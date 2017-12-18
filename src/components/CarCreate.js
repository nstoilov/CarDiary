import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { carUpdate, carCreate, formReset } from '../actions';
import { CardSection, Button } from './common';
import CarForm from './CarForm';

class CarCreate extends Component {

    componentWillMount() {
        this.props.formReset();
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
            <View style={styles.card}>
  
                <CarForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
       
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

export default connect(mapStateToProps, {
    carUpdate, carCreate, formReset
})(CarCreate);
