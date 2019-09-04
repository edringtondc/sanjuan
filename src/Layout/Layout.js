import React, {Component } from "react";
import Aux from "../hoc/Aux/Aux"
import Contact from "../components/Contact/Contact"
import Main from "../components/Main/Main"
import Toolbar from "../components/Navigation/Toolbar/Toolbar"
import ScheduleNow from "../components/ScheduleNow/ScheduleNow"
import Testimonials from "../components/Testimonials/Testimonials"
import Visit from "../components/Visit/Visit"
import Footer from "../components/Footer/Footer"
import MainMenu from "../components/MainMenu/MainMenu"



import classes from "./Layout.css"


class Layout extends Component {
 

    render() {
        return (
            <Aux className={classes.Body}>
              

            
             
         
                <ScheduleNow/>
                <MainMenu/>
                <Testimonials/>
                <Contact/>
                <Visit />
            
      
              
                <Footer/>


            </Aux>
        )
    }

}

export default Layout;