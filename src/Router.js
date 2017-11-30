import React from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import CarList from './components/CarList';
import CarCreate from './components/CarCreate';
import CarUpdate from './components/CarUpdate';

const RouterComponent = () => {
        return (
        <Router>
            <Scene key="root" hideNavBar >                
                <Scene key="main" navigationBarStyle={styles.navigationBarStyle} titleStyle={styles.titleStyle}>
                    <Scene                    
                        onRight={() => Actions.carCreate()}
                        rightTitle={
                            <Text>
                                <Text>
                                    +
                                </Text>
                                <FontAwesome>
                                    {Icons.car}
                                </FontAwesome>
                            </Text>
                        }
                        rightButtonTextStyle={styles.rightButtonTextStyle}
                        key="carList"
                        component={CarList}
                        title="Car List"
                        initial
                    />                    
                    <Scene key="carCreate" component={CarCreate} title="Create Car" />
                    <Scene key="carUpdate" component={CarUpdate} title="Edit Car" />
                    </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    navigationBarStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '400'
    },
    rightButtonTextStyle: {        
        fontSize: 20,
        color: '#007aff',
        marginLeft: 10,       
    }
};

export default RouterComponent;
