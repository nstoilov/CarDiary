import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CarList from './components/CarList';
import CarCreate from './components/CarCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" >
                <Scene 
                onRight={() => Actions.CarForm()}
                    rightTitle="Add"
                    key="CarList" 
                    component={CarList}
                    title="CarList" 
                    initial
                />
                <Scene key="CarForm" component={CarCreate} title="Add a car" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
