import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardDisplay from '../../Pages/Dashboard/DashboardDisplay';
import Information from '../../Pages/Infromation/Information';
import Tracking from '../../Pages/Tracking/Tracking';

const MyRouter = () => {
    return (
        <Switch>
            <Route exact path="/">
                <DashboardDisplay/>
            </Route>
            <Route exact path="/info">
                <Information/>
            </Route>
            <Route exact path="/track">
                <Tracking/>
            </Route>
            
        </Switch>
    );
};

export default MyRouter;