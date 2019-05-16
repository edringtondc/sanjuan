import React, {Component } from "react";
import Aux from "../hoc/Aux/Aux"
import Contact from "../components/Contact/Contact"
import Main from "../components/Main/Main"
import Toolbar from "../components/Navigation/Toolbar/Toolbar"
import Team from "../components/Team/Team"
import ScheduleNow from "../components/ScheduleNow/ScheduleNow"
import Testimonials from "../components/Testimonials/Testimonials"
import Visit from "../components/Visit/Visit"
import Footer from "../components/Footer/Footer"
import MainMenu from "../components/MainMenu/MainMenu"


// import classes from "./Layout.css"


class Layout extends Component {
 

    render() {
        return (
            <Aux>
                <Toolbar/>

            
                <Main/>
                <MainMenu/>
                <ScheduleNow/>
                <Testimonials/>
                <Visit />
                <Contact/>
      
              
                <Footer/>


            </Aux>
        )
    }

}

export default Layout;