import React from 'react';
import { Image } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
//import FontAwesome, { Icons } from 'react-native-fontawesome';
//import Emoji from 'react-native-emoji';
//     <Text><Emoji name="coffee" /></Text>
import CarList from './components/CarList';
import CarCreate from './components/CarCreate';
import CarUpdate from './components/CarUpdate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar key="root">
                <Scene
                    navBarButtonColor='#fff'
                    key="main"
                    navigationBarStyle={styles.navigationBarStyle}
                    titleStyle={styles.titleStyle}
                >
                    <Scene
                        onRight={() => Actions.carCreate()}
                        rightButtonTextStyle={styles.rightButtonTextStyle}
                        rightTitle={
                            <Image
                                style={styles.rightButtonImageStyle}
                                source={require('./images/right_button.png')}
                            />
                        }
                        key="carList"
                        component={CarList}
                        navigationBarTitleImage={require('./images/cars.png')}
                        initial
                    />

                    <Scene
                        key="carCreate"
                        component={CarCreate}
                        navigationBarTitleImage={require('./images/add.png')}
                    />
                    <Scene
                        key="carUpdate"
                        component={CarUpdate}
                        navigationBarTitleImage={require('./images/edit.png')}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    navigationBarTitleImageStyle: {
        flex: 1,
        width: 680,
        height: 120,
    //    resizeMode: 'contain'
    },
    navigationBarStyle: {
        fontFamily: null,
        backgroundColor: '#00bcd4',
        borderBottomWidth: 0
    },
    titleStyle: {
        fontFamily: null,
        color: '#fff',
        fontSize: 20
        //    fontWeight: '600'
    },
    rightButtonImageStyle: {
        flex: 1,
        width: 180,
        height: 180,
        resizeMode: 'contain'
    }
};

export default RouterComponent;
