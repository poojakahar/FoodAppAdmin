import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from  'redux'
import thunk from 'redux-thunk'

import Navigation from './src/Navigation'
import AppReducer from './src/Reducers'

class App extends Component
{
    render()
    {
      return(
          <Provider store={(createStore(AppReducer,applyMiddleware(thunk)))}>
            <Navigation/>
          </Provider>
      )
    }
}

export default App