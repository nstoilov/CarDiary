import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CarList from './components/CarList';
import CarCreate from './components/CarCreate';
import CarUpdate from './components/CarUpdate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar >
                
                <Scene key="main">
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

export default RouterComponent;
