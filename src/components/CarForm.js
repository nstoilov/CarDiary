import React, { Component } from 'react';
import { Text, View, DatePickerAndroid } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
// import { Actions } from 'react-native-router-flux';
import { carUpdate } from '../actions';
import { Card, CardSection, Input, } from './common';

class CarForm extends Component {
    async renderDatePicker() {
        const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date(),
            mode: 'spinner'
        });

        if (action === DatePickerAndroid.dismissedAction) {
            return;
        }
        
        console.log({ action, year, month, day });
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                        label="Име"
                        placeholder="Избери име"
                        value={this.props.name}
                        onChangeText={value => this.props.carUpdate({ prop: 'name', value })}
                        //es6 value:value === value
                        />
                    </CardSection>  
                    <CardSection style={styles.containerStyle}>
                        <Text style={styles.nameStyle}>Техинически преглед</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.techCheck}
                        mode="date"
                        placeholder="Избери дата"
                        format="DD-MM-YYYY"                        
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}    
                        customStyles={{
                            placeholderText: {
                                color: '#424444'
                              }
                        }}                        
                        onDateChange={date => this.props.carUpdate({ prop: 'techCheck', value: date })}                      
                    />
                    </CardSection>    
                    <CardSection style={styles.containerStyle}>
                        <Text style={styles.nameStyle}>Профилактика</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.maint}
                        mode="date"
                        placeholder="Избери дата"
                        format="DD-MM-YYYY"                        
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}         
                        customStyles={{
                            placeholderText: {
                                color: '#424444'
                              }
                        }}                   
                        onDateChange={date => this.props.carUpdate({ prop: 'maint', value: date })}                      
                    />
                    </CardSection>     
                    <CardSection style={styles.containerStyle}>
                        <Text style={styles.nameStyle}>Гражданска отговорност</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.citizenInsuranse}
                        mode="date"
                        placeholder="Избери дата"
                        format="DD-MM-YYYY"                        
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}    
                        customStyles={{
                            placeholderText: {
                                color: '#424444'
                              }
                        }}                        
                        onDateChange={date => this.props.carUpdate({ prop: 'citizenInsuranse', value: date })}                      
                    />
                    
                    </CardSection>    
                    <CardSection style={styles.containerStyle}>
                        <Text style={styles.nameStyle}>Автокаско</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.carInsurance}
                        mode="date"
                        placeholder="избери дата"
                        format="DD-MM-YYYY"                        
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}   
                        customStyles={{
                            placeholderText: {
                                color: '#424444'
                              }
                        }}                         
                        onDateChange={date => this.props.carUpdate({ prop: 'carInsurance', value: date })}                      
                    />
                    </CardSection>             
                    <CardSection style={styles.containerStyle}>
                        <Text style={styles.nameStyle}>Зимни гуми</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.winterTyres}
                        mode="date"
                        placeholder="избери дата"
                        format="DD-MM-YYYY"                        
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}    
                        customStyles={{
                            placeholderText: {
                                color: '#424444'
                              }
                        }}                        
                        onDateChange={date => this.props.carUpdate({ prop: 'winterTyres', value: date })}                      
                    />
                    </CardSection>
                    <CardSection style={styles.containerStyle}>
                        <Text style={styles.nameStyle}>Летни Гуми</Text>
                    <DatePicker
                        style={styles.dateStyle}
                        date={this.props.summerTyres}
                        mode="date"
                        placeholder="избери дата"
                        format="DD-MM-YYYY"                        
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        showIcon={false}         
                        customStyles={{
                            placeholderText: {
                                color: '#424444'
                              }
                        }}               
                        onDateChange={date => this.props.carUpdate({ prop: 'summerTyres', value: date })}                      
                    />
                    </CardSection>                   
                </Card>
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

