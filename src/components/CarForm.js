import React, { Component } from 'react';
import { Text, View, DatePickerAndroid } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { carUpdate } from '../actions';
import { CardSection, Input, Card } from './common';

class CarForm extends Component {
    async renderDatePicker() {
        const { action } = await DatePickerAndroid.open({
            date: new Date(),
            mode: 'spinner'
        });
        if (action === DatePickerAndroid.dismissedAction) {
            return;
        }
    }

    render() {
        return (
            <View>                
                <CardSection style={{ marginTop: 10 }}>
                    <Input
                        label="Name"
                        placeholder="Enter a name"
                        value={this.props.name}
                        onChangeText={value => this.props.carUpdate({ prop: 'name', value })}
                    />
                </CardSection>
                <CardSection style={styles.containerStyle}>
                    <Text style={styles.nameStyle}>Techinal Inspection</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.techCheck}
                        mode="date"
                        placeholder="Pick a date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={dateCustomStyles}
                        onDateChange={date => this.props.carUpdate({ prop: 'techCheck', value: date })}
                    />
                </CardSection>
                <CardSection style={styles.containerStyle}>
                    <Text style={styles.nameStyle}>Maintenance</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.maint}
                        mode="date"
                        placeholder="Pick a date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={dateCustomStyles}
                        onDateChange={date => this.props.carUpdate({ prop: 'maint', value: date })}
                    />
                </CardSection>
                <CardSection style={styles.containerStyle}>
                    <Text style={styles.nameStyle}>Citizen Insurance</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.citizenInsuranse}
                        mode="date"
                        placeholder="Pick a date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={dateCustomStyles}
                        onDateChange={date => this.props.carUpdate({ prop: 'citizenInsuranse', value: date })}
                    />

                </CardSection>
                <CardSection style={styles.containerStyle}>
                    <Text style={styles.nameStyle}>Car Insurance</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.carInsurance}
                        mode="date"
                        placeholder="Pick a date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={dateCustomStyles}
                        onDateChange={date => this.props.carUpdate({ prop: 'carInsurance', value: date })}
                    />
                </CardSection>
                <CardSection style={styles.containerStyle}>
                    <Text style={styles.nameStyle}>Winter Tyres</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.winterTyres}
                        mode="date"
                        placeholder="Pick a date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={dateCustomStyles}
                        onDateChange={date => this.props.carUpdate({ prop: 'winterTyres', value: date })}
                    />
                </CardSection>
                <CardSection style={styles.containerStyle}>
                    <Text style={styles.nameStyle}>Summer Tyres</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.summerTyres}
                        mode="date"
                        placeholder="Pick a date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}
                        customStyles={dateCustomStyles}
                        onDateChange={date => this.props.carUpdate({ prop: 'summerTyres', value: date })}
                    />
                </CardSection>            
            </View>
        );
    }
}

const styles = {
    nameStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20,
        color: '#252626',
        alignItems: 'center'

    },
    dateStyle: {
        flex: 1
    },
    containerStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
};

const dateCustomStyles = {
    placeholderText: {
        color: '#444444'
    },
    dateInput: {
        borderColor: '#252626',
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginLeft: 20,
        marginRight: 20
    },
    dateText: {
        fontSize: 17
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
        carInsurance } = state.carForm;
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

export default connect(mapStateToProps, { carUpdate })(CarForm);

