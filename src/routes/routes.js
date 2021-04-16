import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import EquipementList from "../components/EquipementList";
import EquipementDetail from "../components/Equipementdetail";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={EquipementList}/>
            <Route path="/equipment/:id" exact component={EquipementDetail}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
