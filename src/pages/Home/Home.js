import React from "react";
// import Layout from "../../Layout/Layout";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar.js"
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact"
// import Main from "../components/Main/Main"
import ScheduleNow from "../../components/ScheduleNow/ScheduleNow"
// import Testimonials from "../components/Testimonials/Testimonials"
import Visit from "../../components/Visit/Visit"
import Footer from "../../components/Footer/Footer"
import MainMenu from "../../components/MainMenu/MainMenu"
import classes from "./Home.module.css";

const Home = () => {
    return (
        <div id="top" className={classes.home}>
            <Toolbar/>
            <Banner title= "San Juan Chiropractic" />
            <MainMenu></MainMenu>
            <ScheduleNow/>
            <Visit/>
            <Contact/>
          
            <Footer/>

    
        </div>

    )
}

export default Home;