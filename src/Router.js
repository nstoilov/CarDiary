import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
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
                        rightTitle="Add"
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
        bottomBorderWidth: 1
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '400'
    }
};

export default RouterComponent;
