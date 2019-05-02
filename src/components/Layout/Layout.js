import React, {Component } from "react";
import Aux from "../../hoc/Aux/Aux"
import About from "../About/About"
import Main from "../Main/Main"
import Toolbar from "../Navigation/Toolbar/Toolbar"
import Team from "../Team/Team"
import FeaturedServices from "../FeaturedServices/FeaturedServices"
import Testimonials from "../Testimonials/Testimonials"
import Visit from "../Visit/Visit"
import Footer from "../Footer/Footer"


// import classes from "./Layout.css"


class Layout extends Component {
 

    render() {
        return (
            <Aux>
                <Toolbar/>
                <Main/>
                <About/>
                <Team/>
                <FeaturedServices/>
                <Testimonials/>
                <div>Rates</div>
                <Visit />
                <Footer/>


            </Aux>
        )
    }

}

export default Layout;