import React from 'react';

import Home  from "./pages/Home/Home";
import  Team  from "./pages/Team/Team";
import  Treatments  from "./pages/Treatments/Treatments";
import { Route, Switch, Redirect } from "react-router-dom";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import MainMenu from "./components/MainMenu/MainMenu";

// import Layout from "./Layout/Layout"
// import "./App.css"



export const Routes = () => {

    return (

      <div>
        <Toolbar/>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/" >
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Team" component={Team} />
          <Route exact path="/Treatments"  component={Treatments}/>
          <Route exact path="/Mainmenu"  component={MainMenu}/>

        </Switch>




      </div>
    );
  }





