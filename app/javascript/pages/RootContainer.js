import React from "react"

import App from './App'
import {Provider} from 'react-redux'
import createStore from '../AppRedux'

const RootContainer = props =>
    <Provider store={createStore()}>
        <App/>
    </Provider>

export default RootContainer
