import React, {Component} from 'react';
import Pageone from '../src/views/pageOne'
import {Provider} from "react-redux";
import store from './store'
import EquipementList from "./components/EquipementList";
import "./css/style.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                  <EquipementList/>
                </div>
            </Provider>
        );
    }
}

export default App;
