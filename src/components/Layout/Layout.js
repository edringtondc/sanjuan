import React, {Component } from "react";
import Aux from "../../hoc/Aux/Aux"
import About from "../About/About"
import Main from "../Main/Main"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Team from "../Team/Team"
import ScheduleNow from "../ScheduleNow/ScheduleNow"
import Testimonials from "../Testimonials/Testimonials"
import Visit from "../Visit/Visit"
import Footer from "../Footer/Footer"
import MainMenu from "../MainMenu/MainMenu"


// import classes from "./Layout.css"


class Layout extends Component {
 

    render() {
        return (
            <Aux>
                <Toolbar/>
                <Main/>
                <About/>
                <MainMenu/>
                <ScheduleNow/>
                <Testimonials/>
                <Visit />
                <Footer/>


            </Aux>
        )
    }

}

export default Layout;