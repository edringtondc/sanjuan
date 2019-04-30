import React, {Component } from "react";
import Aux from "../../hoc/Aux/Aux"
import About from "../About/About"
import Main from "../Main/Main"

// import classes from "./Layout.css"


class Layout extends Component {
 

    render() {
        return (
            <Aux>
                <div> Navigation Bar</div>
                <Main/>
                <About/>
                <div>Schedule an appointment</div>
                <div>Featured Services</div>
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