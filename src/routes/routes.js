import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EquipmentList from "../components/EquipmentList";
import EquipmentDetail from "../components/EquipmentDetail";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={EquipmentList}/>
            <Route path="/equipment/:id" exact component={EquipmentDetail}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
