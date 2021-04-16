import React, {Component} from 'react';
import {Provider} from "react-redux";
import store from './store'
import "./css/style.css";
import Routes from "./routes/routes";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}

export default App;
