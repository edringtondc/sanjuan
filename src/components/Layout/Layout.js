import React, {Component } from "react";
import Aux from "../../hoc/Aux/Aux"
import About from "../About/About"
import Main from "../Main/Main"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Team from "../Team/Team"
import FeaturedServices from "../FeaturedServices/FeaturedServices"

// import classes from "./Layout.css"


class Layout extends Component {
 

    render() {
        return (
            <Aux>
                <Toolbar/>
                <Main/>
                <About/>
                <Team/>
                <div>Schedule an appointment</div>
                <FeaturedServices/>
                <div>Testimonials</div>
                <div>Rates</div>
                <div>Location</div>
                <div>Contact</div>
                <div>Footer</div>


            </Aux>
        )
    }

}

export default Layout;