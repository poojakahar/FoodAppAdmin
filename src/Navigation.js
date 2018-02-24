import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';
import categoryDisp from './component/categroyDisp'
import categoryUpd from './component/categoryUpd'

const Navigation=StackNavigator({
    Main: {screen: categoryDisp},
    CategoryUpd: {screen:categoryUpd}
},
    {
        navigationOptions:{
            initialPage:'Main'
        }
    }
)

export default Navigation;